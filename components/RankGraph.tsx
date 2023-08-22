import React, { useEffect, useLayoutEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

import { useSelector } from "react-redux";

const dummyResults = [
	{
		data: {
			first_name: "Benjamin",
			last_name: " Mitchell",
			score: "5",
		},
	},
	{
		data: {
			first_name: "Olivia",
			last_name: " Reynolds",
			score: "4.2",
		},
	},
	{
		data: {
			first_name: "Alexander",
			last_name: "Ramirez",
			score: "3.1",
		},
	},
	{
		data: {
			first_name: "Sophia",
			last_name: "Morgan",
			score: "3.3",
		},
	},
	{
		data: {
			first_name: "Christopher",
			last_name: "Anderson",
			score: "2.1",
		},
	},
	{
		data: {
			first_name: "Emily",
			last_name: "Thompson",
			score: "1.5",
		},
	},
];

const getColor = (score) => {
	if (score > 4.5) {
		return "bg-classmate-green-2";
	} else if (score > 4) {
		return "bg-classmate-green-3";
	} else if (score > 3.2) {
		return "bg-classmate-green-4";
	} else if (score > 2.4) {
		return "bg-classmate-gray-1";
	} else if (score > 1.6) {
		return "bg-classmate-pink-1";
	} else {
		return "bg-classmate-red-1";
	}
};

export default function RankGraph({ styles, titleStyles, isHomepage }) {
	const { width } = useWindowSize();
	const [graphWidth, setGraphWidth] = useState(0);
	const [transitionEffect, setTransitionEffect] = useState("width 1s ease");
	const [showLargeGraph, setShowLargeGraph] = useState(false);

	const results = useSelector((state) => state.mainSearch.results);
	let resultsToDisplay = [];
	if (results.length > 0) {
		resultsToDisplay = results;
	} else if (isHomepage) {
		resultsToDisplay = dummyResults;
	}

	useLayoutEffect(() => {
		// Graph Width
		let textWrapper = document.querySelector("#large-graph-text");
		let textWidth = textWrapper?.clientWidth;

		// Graph Width
		let graphWrapper = document.querySelector("#graph-wrapper");
		let graphWidth = graphWrapper.clientWidth;
		setGraphWidth(graphWidth);

		if (!showLargeGraph && graphWidth > 550) {
			setShowLargeGraph(true);
		} else if (showLargeGraph && graphWidth <= 550 - graphWidth) {
			setShowLargeGraph(false);
		}
	}, [width]);

	useEffect(() => {
		setTimeout(() => setTransitionEffect(""), 1000);
	}, []);

	const handleGraphItemClick = (e) => {
		const itemId = e.target.id;
		if (itemId) {
			const targetElement = document.querySelector(
				`[data-resultid='${itemId}']`
			);
			window.scrollTo({
				top: targetElement.offsetTop - 40,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className={`w-full p-8 ${styles}`}>
			<div className={`${showLargeGraph ? "mb-8" : "mb-12"}`}>
				<p
					className={`font-classmate-bold-italic ${titleStyles} text-2xl sm:text-3xl lg:text-4xl ${titleStyles}`}>
					Professor rank
				</p>
			</div>
			<div className="flex">
				{showLargeGraph && (
					<div
						id="large-graph-text"
						className={`mr-2 flex max-w-[75px] flex-col gap-3${
							showLargeGraph ? "" : "-translate-y-[26px]"
						}`}>
						{resultsToDisplay.map((professor, index) => {
							return (
								<div
									key={index}
									className="font-classmate text-right text-sm text-classmate-green-6">
									<p>{professor.data.first_name}</p>
									<p>{professor.data.last_name}</p>
								</div>
							);
						})}
					</div>
				)}
				<div
					id="graph-wrapper"
					style={{
						height: showLargeGraph
							? 50 * resultsToDisplay.length + 26
							: 64 * resultsToDisplay.length,
					}}
					className="relative flex w-full flex-col">
					<div
						className={`absolute z-10  ${
							showLargeGraph ? "flex flex-col gap-3 " : "-translate-y-[26px]"
						}`}>
						{resultsToDisplay.map((professor, index) => (
							<div
								onClick={handleGraphItemClick}
								key={index}
								className={`relative h-16 transition-transform duration-1000 ${
									showLargeGraph ? "!h-10" : ""
								}`}
								style={{
									width: graphWidth
										? (professor.data.score / 5) * graphWidth
										: graphWidth,
									transition: transitionEffect,
								}}>
								{!showLargeGraph && (
									<p className="font-classmate absolute bottom-[40px] whitespace-nowrap text-xs capitalize text-classmate-green-6">
										{`${professor.data.first_name} ${professor.data.last_name}`}
									</p>
								)}
								<button
									tabIndex={isHomepage ? -1 : 0}
									id={professor.firebaseID}
									className={`absolute bottom-0 flex h-3/5 w-full items-center rounded-md border-none outline-none ring-classmate-gold-1 focus:ring ${getColor(
										professor.data.score
									)} ${showLargeGraph ? "h-full" : ""} ${
										isHomepage ? "pointer-events-none" : ""
									}`}>
									<span className="font-classmate absolute -right-2 w-0 text-classmate-green-6">
										{professor.data.score}
									</span>
								</button>
							</div>
						))}
					</div>

					<div className="absolute grid h-full w-full grid-flow-col grid-cols-5 text-sm">
						{[...Array(5)].map((_, index) => (
							<div key={index} className="relative h-full">
								<div
									className={`absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5 ${
										index > 0 ? "-left-1" : ""
									}`}
								/>
								<p
									className={`font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6 ${
										index === 3 || index === 4 ? "-translate-y-[2px]" : ""
									}`}>
									{index}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="relative block min-w-[16px] items-stretch text-sm">
					<div className="absolute -left-[2px]  h-full w-[2px] rounded-full bg-classmate-gray-5" />
					<p className="font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6">
						5
					</p>
				</div>
			</div>
		</div>
	);
}
