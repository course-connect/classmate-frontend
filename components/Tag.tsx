import React from "react";

const Tag = ({ text, score }) => {
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
			className={`font-classmate-bold h-fit w-fit whitespace-nowrap rounded-md px-[12px] py-[7px] text-[11px] tracking-wide text-classmate-tan-2 ${getColor(
				score
			)}`}>
			{text}
		</div>
	);
};

export default Tag;
