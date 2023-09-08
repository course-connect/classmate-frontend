import React from "react";
import YesNoRadio from "../../components/ui/Radio/YesNoRadio";

const ReviewAttendanceSection = ({ professor, methods }) => {
	return (
		<YesNoRadio
			name="attendanceMandatory"
			methods={methods}
			rules={{ required: true }}
		/>
	);
};

export default ReviewAttendanceSection;
