import React, { useState } from "react";
import ClassmateButton from "./ClassmateButton";
import HeroSelectableSearch from "./HeroSelectableSearch";

const HeroCallToAction = (): JSX.Element | null => {
	const [callToActionIdx, setCallToActionIdx] = useState(0);

	const handlePrevButton = () => {
		if (callToActionIdx > 0) {
			setCallToActionIdx((currentState) => currentState - 1);
		}
	};

	const handleNextButton = () => {
		if (callToActionIdx < 2) {
			setCallToActionIdx((currentState) => currentState + 1);
		}
	};

	let buttonStyles = "";
	let searchOneStyles = "";
	let searchTwoStyles = "";

	switch (callToActionIdx) {
		case 0:
			break;
		case 1:
			buttonStyles = "-translate-x-80 opacity-0";
			searchOneStyles = "!translate-x-0 opacity-100";
			break;
		case 2:
			// code block
			break;
		default:
		// code block
	}

	return (
		<div className="flex w-full justify-center ">
			<div
				className={`transition-[transform,opacity] duration-500 ${buttonStyles} ${
					callToActionIdx === 0 ? "block" : "absolute"
				}`}>
				<ClassmateButton
					variant="filled"
					size="lg"
					callback={handleNextButton}
					styles="bg-classmate-green-4 text-classmate-tan-1 hover:!bg-classmate-hover-green-4">
					Get Started
				</ClassmateButton>
			</div>
			<div
				className={`flex w-full max-w-sm translate-x-80 justify-center opacity-0 transition-[transform,opacity] duration-500 ${searchOneStyles} ${
					callToActionIdx === 1 ? "block" : "absolute"
				}`}>
				<HeroSelectableSearch />
			</div>
		</div>
	);
};

export default HeroCallToAction;
