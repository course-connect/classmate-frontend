import React from "react";
import YesNoRadio from "../../components/ui/Radio/YesNoRadio";
import BasicInput from "../../components/BasicInput";

const ReviewTextBookSection = ({ professor, methods, textbookRequired }) => {
	return (
		<>
			<YesNoRadio name="textbookRequired" methods={methods} />
			{textbookRequired && (
				<>
					<BasicInput
						name="textbookTitle"
						label="Textbook Title"
						background="bg-classmate-tan-2"
					/>
					<BasicInput
						name="textbookAuthor"
						label="Textbook Author"
						background="bg-classmate-tan-2"
					/>
				</>
			)}
		</>
	);
};

export default ReviewTextBookSection;
