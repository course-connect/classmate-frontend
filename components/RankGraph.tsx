import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

import { useSelector } from "react-redux";

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

export default function RankGraph({ styles, dummyResults }) {
	const { width } = useWindowSize();
	const [graphWidth, setGraphWidth] = useState(0);
	const [transitionEffect, setTransitionEffect] = useState("width 1s ease");
	const results = useSelector((state) => state.mainSearch.results);

	const resultsToDisplay = dummyResults ? dummyResults : results;

	useEffect(() => {
		let graphWrapper = document.querySelector("#graph-wrapper");
		let graphWidth = graphWrapper.clientWidth;
		setGraphWidth(graphWidth);
	}, [width]);

	useEffect(() => {
		setTimeout(() => setTransitionEffect(""), 1000);
	}, []);

	return (
		<div className={`p-8 ${styles}`}>
			<div className="mb-14">
				<p className="font-classmate-bold-italic text-2xl sm:text-3xl lg:text-4xl">
					Professor rank
				</p>
			</div>
			<div className="flex">
				{width > 550 && (
					<div className="mr-2 flex w-[75px] -translate-y-[26px] flex-col gap-3">
						{results.map((professor, index) => {
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
						height:
							width > 550
								? 50 * resultsToDisplay.length
								: 64 * resultsToDisplay.length,
					}}
					className="relative flex w-full flex-col">
					<div
						className={`absolute z-10 -translate-y-[26px] ${
							width > 550 ? "flex flex-col gap-3" : ""
						}`}>
						{resultsToDisplay.map((professor, index) => (
							<div
								key={index}
								className={`relative h-16 transition-transform duration-1000 ${
									width > 550 ? "!h-10" : ""
								}`}
								style={{
									width: graphWidth
										? (professor.data.score / 5) * graphWidth
										: graphWidth,
									transition: transitionEffect,
								}}>
								{width <= 550 && (
									<p className="font-classmate absolute bottom-[40px] whitespace-nowrap text-xs capitalize text-classmate-green-6">
										{`${professor.data.first_name} ${professor.data.last_name}`}
									</p>
								)}
								<div
									className={`absolute bottom-0 flex h-3/5 w-full items-center rounded-md ${getColor(
										professor.data.score
									)} ${width > 550 ? "h-full" : ""}`}>
									<span className="font-classmate absolute -right-2 w-0 text-classmate-green-6">
										{professor.data.score}
									</span>
								</div>
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
