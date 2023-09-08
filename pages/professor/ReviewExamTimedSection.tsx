import React from "react";
import YesNoRadio from "../../components/ui/Radio/YesNoRadio";

const ReviewExamTimedSection = ({ professor, methods, examExistsSelected }) => {
	return (
		<YesNoRadio
			name="examTimed"
			methods={methods}
			rules={{ required: examExistsSelected }}
		/>
	);
};

export default ReviewExamTimedSection;
