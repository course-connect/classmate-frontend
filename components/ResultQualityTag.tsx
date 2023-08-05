import React from "react";

const ResultQualityTag = ({ score }) => {
	const getQuailty = (score) => {
		if (score > 4.5) {
			return "Very Good";
		} else if (score > 4) {
			return "Good";
		} else if (score > 3.2) {
			return "Average";
		} else if (score > 2.4) {
			return "Okay";
		} else if (score > 1.6) {
			return "Bad";
		} else {
			return "Very Bad";
		}
	};

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

	return (
		<div
			className={`font-classmate-bold h-fit w-fit rounded-md px-4 py-[6px] text-xs text-classmate-tan-2 ${getColor(
				score
			)}`}>
			{getQuailty(score)}
		</div>
	);
};

export default ResultQualityTag;
