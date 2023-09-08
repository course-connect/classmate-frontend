import React from "react";
import YesNoRadio from "../../components/ui/Radio/YesNoRadio";

const ReviewRecommendSection = ({ professor, methods }) => {
	return (
		<YesNoRadio
			name="wouldRecommend"
			methods={methods}
			rules={{ required: true }}
		/>
	);
};

export default ReviewRecommendSection;
