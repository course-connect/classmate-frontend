import React, { useState } from "react";
import ClassmateButton from "./ClassmateButton";
import HeroSelectableSearch from "./HeroSelectableSearch";
import ToolTip from "./ToolTip";

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

	let callToAction: JSX.Element | null;
	switch (callToActionIdx) {
		case 0:
			callToAction = (
				<ClassmateButton
					variant="filled"
					size="lg"
					callback={handleNextButton}
					styles="bg-classmate-green-4 text-classmate-tan-1 hover:!bg-classmate-hover-green-4">
					Get Started
				</ClassmateButton>
			);
			break;
		case 1:
			callToAction = <HeroSelectableSearch />;
			break;
		case 2:
			callToAction = null;
			break;
		default:
			callToAction = null;
	}

	return callToAction;
};

export default HeroCallToAction;
