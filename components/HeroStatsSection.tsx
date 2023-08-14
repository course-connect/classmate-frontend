import React, { useRef } from "react";
import HeroStat from "./HeroStat";
import ClassmateButton from "./ClassmateButton";
import useIsInWindow from "../hooks/useIsInWindow";

const HeroStatsSection = () => {
	const elementRef = useRef();
	const isInWindow = useIsInWindow(elementRef);
	console.log(isInWindow);

	return (
		<div ref={elementRef} className="section-padding  bg-classmate-tan-1 py-16">
			<div
				className={`!opacity-0 !transition-opacity !duration-1000 ${
					isInWindow ? "!opacity-100" : ""
				}`}>
				{isInWindow ? (
					<div className={`flex w-full justify-around `}>
						<HeroStat text="Schools" number={152} />
						<HeroStat text="Professors" number={400} plus={true} />
						<HeroStat text="Courses" number={1200} plus={true} />
						<HeroStat text="Ratings" number={5000} plus={true} />
						<ClassmateButton
							size="md"
							variant="filled"
							styles="h-fit bg-classmate-green-2 text-classmate-tan-2 transition-all duration-800  hover:brightness-125">
							Join Today
						</ClassmateButton>
					</div>
				) : (
					<div className="h-[165px] w-full"></div>
				)}
			</div>
		</div>
	);
};

export default HeroStatsSection;
