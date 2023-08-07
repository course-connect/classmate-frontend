import React from "react";

const ResultScore = ({ title, score }) => {
	const getColor = (score) => {
		if (score >= 4.5) {
			return "bg-classmate-green-2";
		} else if (score >= 4) {
			return "bg-classmate-green-3";
		} else if (score >= 3.2) {
			return "bg-classmate-green-4";
		} else if (score >= 2.4) {
			return "bg-classmate-gray-1";
		} else if (score >= 1.6) {
			return "bg-classmate-pink-1";
		} else {
			return "bg-classmate-red-1";
		}
	};

	const getDifficultyColor = (score) => {
		if (score <= 0.8) {
			return "bg-classmate-green-2";
		} else if (score <= 1.6) {
			return "bg-classmate-green-3";
		} else if (score <= 2.4) {
			return "bg-classmate-green-4";
		} else if (score <= 3.2) {
			return "bg-classmate-gray-1";
		} else if (score <= 4) {
			return "bg-classmate-pink-1";
		} else {
			return "bg-classmate-red-1";
		}
	};

	const getReviewsColor = (score) => {
		if (score >= 40) {
			return "bg-classmate-green-2";
		} else if (score >= 30) {
			return "bg-classmate-green-3";
		} else if (score >= 20) {
			return "bg-classmate-green-4";
		} else if (score >= 10) {
			return "bg-classmate-gray-1";
		} else if (score >= 5) {
			return "bg-classmate-pink-1";
		} else {
			return "bg-classmate-red-1";
		}
	};

	let color;
	switch (title) {
		case "Score":
			color = getColor(score);
			break;
		case "Difficulty":
			color = getDifficultyColor(score);
			break;
		case "Reviews":
			color = getReviewsColor(score);
			break;
	}

	return (
		<div>
			<p className="font-classmate-italic text-classmate-green-1 ">{title}</p>
			<div
				className={`font-classmate-bold-italic flex h-[50px] w-[70px] items-center justify-center rounded-lg text-xl  text-classmate-tan-2 xs:h-[60px] xs:w-[80px] xs:text-2xl  ${color}`}>
				<p className="-translate-y-[2px] leading-5">
					{title !== "Reviews" ? score.toFixed(1) : score}
				</p>
			</div>
		</div>
	);
};

export default ResultScore;
