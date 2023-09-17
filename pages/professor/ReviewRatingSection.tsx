import React from "react";
import Raiting from "../../components/ui/Rating/Raiting";

const ReviewRatingSection = ({ professor, methods }) => {
	const { setValue } = methods;

	const handleStarClick = (index) => {
		setValue("rating", index + 1);
	};
	return (
		<Raiting
			name={"rating"}
			icon={"/star-solid.svg"}
			iconAlt={"star"}
			callback={handleStarClick}
			rules={{ required: true }}
		/>
	);
};

export default ReviewRatingSection;
