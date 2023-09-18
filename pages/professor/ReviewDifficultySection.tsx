import React from "react";
import Raiting from "../../components/ui/Rating/Raiting";

const ReviewDifficultySection = ({ professor, methods }) => {
	const { setValue } = methods;

	const handleDifficultyClick = (index) => {
		setValue("difficulty", index + 1);
	};

	const textOptions = [
		"Very Easy",
		"Easy",
		"Average",
		"Difficult",
		"Very Difficult",
	];

	return (
		<Raiting
			name={"difficulty"}
			icon={"/weight-solid.svg"}
			iconAlt={"weight"}
			callback={handleDifficultyClick}
			rules={{ required: true }}
			textOptions={textOptions}
		/>
	);
};

export default ReviewDifficultySection;
