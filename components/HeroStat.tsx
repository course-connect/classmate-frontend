import React, { useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";

const HeroStat = ({ text, number, plus = false }) => {
	return (
		<div className="flex flex-col items-center justify-center text-classmate-green-1">
			<div
				data-number={number}
				id="number"
				className="font-classmate-bold flex text-6xl">
				<AnimatedNumber n={number} />
				{`${plus ? "+" : ""}`}
			</div>
			<p className="font-classmate-italic text-2xl">{text}</p>
		</div>
	);
};

export default HeroStat;
