import React from "react";
import YesNoRadio from "../../components/ui/Radio/YesNoRadio";

const ReviewTextBookSection = ({ professor, methods }) => {
	return <YesNoRadio name="textbookRequired" methods={methods} />;
};

export default ReviewTextBookSection;
