import React from "react";

const SchoolScoreDisplay = ({ text, value, textWidth }) => {
	const getColor = (score) => {
		if (score > 4) {
			return "bg-classmate-green-2";
		} else if (score > 3) {
			return "bg-classmate-green-3";
		} else if (score > 2) {
			return "bg-classmate-gray-2";
		} else if (score > 1) {
			return "bg-classmate-pink-1";
		} else {
			return "bg-classmate-red-1";
		}
	};

	return (
		<div className="flex w-full flex-col xs:flex-row xs:gap-2">
			<p
				className={`text-sm capitalize xs:text-right xs:text-base ${textWidth}`}>
				{text}
			</p>
			<div className="flex w-full gap-1">
				{[...Array(5)].map((_, index) => (
					<div
						key={index}
						className={`h-6 w-full rounded-[4px] ${
							index < value ? `${getColor(value)}` : "bg-classmate-gray-5"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default SchoolScoreDisplay;
