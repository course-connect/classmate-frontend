import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

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

const results = [
	{
		name: "Benjamin Mitchell",
		score: 5,
	},
	{
		name: "Olivia Reynolds",
		score: 4.2,
	},
	{
		name: "Alexander Ramirez",
		score: 3.1,
	},
	{
		name: "Sophia Morgan",
		score: 3.3,
	},
	{
		name: "Christopher Anderson",
		score: 2.1,
	},
	{
		name: "Emily Thompson",
		score: 1.5,
	},
];

export default function RankGraph({ styles }) {
	const { width } = useWindowSize();
	const [graphWidth, setGraphWidth] = useState(0);
	const [transitionEffect, setTransitionEffect] = useState("width 1s ease");

	useEffect(() => {
		let graphWrapper = document.querySelector("#graph-wrapper");
		let graphWidth = graphWrapper.clientWidth;
		setGraphWidth(graphWidth);
	}, [width]);

	useEffect(() => {
		setTimeout(() => setTransitionEffect(""), 1000);
	}, []);

	return (
		<div className={`p-8 ${styles} bg-red-500`}>
			<div className="mb-14">
				<p className="font-classmate-bold-italic text-2xl sm:text-3xl lg:text-4xl">
					Professor rank
				</p>
			</div>
			<div className="flex">
				{width > 550 && (
					<div className="mr-2 flex w-[75px] flex-col gap-3 bg-slate-400">
						{results.map((professor, index) => {
							const professorName = professor.name
								.trimStart()
								.trimEnd()
								.split(" ");
							return (
								<div
									key={index}
									className="font-classmate text-right text-sm text-classmate-green-6">
									<p>{professorName[0]}</p>
									<p key={index}>{professorName[1]}</p>
								</div>
							);
						})}
					</div>
				)}
				<div id="graph-wrapper" className="relative flex w-full bg-slate-400">
					<div
						className={`z-10 w-full -translate-y-[26px] ${
							width > 550 ? "flex translate-y-[0px] flex-col gap-3 " : ""
						}`}>
						{results.map((professor, index) => {
							const resultColor = getColor(professor.score);
							return (
								<div
									key={index}
									className={`relative h-16 transition-transform duration-1000 ${
										width > 550 ? "!h-10" : ""
									}`}
									style={{
										// width: graphWidth ? (professor.score / 5) * graphWidth : 0,
										transition: transitionEffect,
									}}>
									{width <= 550 && (
										<p className="font-classmate absolute bottom-[40px] whitespace-nowrap text-xs text-classmate-green-6">
											{professor.name}
										</p>
									)}
									<div
										className={`absolute bottom-0 flex h-3/5 w-full items-center rounded-md ${resultColor} ${
											width > 550 ? "h-full" : ""
										}`}>
										<span className="font-classmate absolute -right-2 w-0 text-classmate-green-6">
											{professor.score}
										</span>
									</div>
								</div>
							);
						})}
					</div>

					<div className="absolute grid h-full w-full grid-flow-col grid-cols-5 text-sm">
						{[...Array(5)].map((_, index) => (
							<div key={index} className="relative h-full">
								<div
									className={`absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5 ${
										index > 0 ? "-left-1" : ""
									}`}
								/>
								<p className="font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6">
									{index}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="relative block w-[18px] items-stretch text-sm">
					<div className="absolute -left-1  h-full w-[2px] rounded-full bg-classmate-gray-5" />
					<p className="font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6">
						5
					</p>
				</div>
			</div>
		</div>
	);
}

// import React from "react";
// import useWindowSize from "../hooks/useWindowSize";

// export default function RankGraph() {
// 	const { width } = useWindowSize();

// 	return (
// 		<div className="bg-slate-500 p-8">
// 			<div className="mb-10">
// 				<p className="font-classmate-bold text-2xl">Professor rank</p>
// 			</div>
// 			<div className="flex">
// 				<div className="relative flex w-full ">
// 					<div className="z-10  w-full -translate-y-[26px]">
// 						<div className="relative h-16 w-full">
// 							<p className="font-classmate absolute bottom-[40px] text-xs">
// 								Benjamin Mitchell
// 							</p>
// 							<div className="absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2">
// 								<span className="font-classmate absolute -right-4">5</span>
// 							</div>
// 						</div>
// 						<div className="relative h-16 w-full">
// 							<p className="font-classmate absolute bottom-[40px] text-xs">
// 								Benjamin Mitchell
// 							</p>
// 							<div className="absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2">
// 								<span className="font-classmate absolute -right-4">5</span>
// 							</div>
// 						</div>
// 						<div className="relative h-16 w-full">
// 							<p className="font-classmate absolute bottom-[40px] text-xs">
// 								Benjamin Mitchell
// 							</p>
// 							<div className="absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2">
// 								<span className="font-classmate absolute -right-4">5</span>
// 							</div>
// 						</div>
// 						<div className="relative h-16 w-full">
// 							<p className="font-classmate absolute bottom-[40px] text-xs">
// 								Benjamin Mitchell
// 							</p>
// 							<div className="absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2">
// 								<span className="font-classmate absolute -right-4">5</span>
// 							</div>
// 						</div>
// 						<div className="relative h-16 w-full">
// 							<p className="font-classmate absolute bottom-[40px] text-xs">
// 								Benjamin Mitchell
// 							</p>
// 							<div className="absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2">
// 								<span className="font-classmate absolute -right-4">5</span>
// 							</div>
// 						</div>
// 						<div className="relative h-16 w-full">
// 							<p className="font-classmate absolute bottom-[40px] text-xs">
// 								Benjamin Mitchell
// 							</p>
// 							<div className="absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2">
// 								<span className="font-classmate absolute -right-4">5</span>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="absolute grid h-full  w-full grid-flow-col grid-cols-5  text-sm">
// 						<div className="relative h-full">
// 							<div className="absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5" />
// 							<p className="font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6">
// 								0
// 							</p>
// 						</div>
// 						<div className="relative h-full">
// 							<div className="absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5" />
// 							<p className="font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6">
// 								1
// 							</p>
// 						</div>
// 						<div className="relative h-full">
// 							<div className="absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5" />
// 							<p className="font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6">
// 								2
// 							</p>
// 						</div>
// 						<div className="relative h-full">
// 							<div className="absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5" />
// 							<p className="font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6">
// 								3
// 							</p>
// 						</div>
// 						<div className="relative h-full">
// 							<div className="absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5" />
// 							<p className="font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6">
// 								4
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="relative block w-[18px] -translate-x-1  items-stretch text-sm">
// 					<div className="absolute left-0 h-full w-[2px] rounded-full bg-classmate-gray-5" />
// 					<p className="font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6">
// 						5
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
