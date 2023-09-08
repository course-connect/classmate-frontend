import React from "react";
import YesNoRadio from "../../components/ui/Radio/YesNoRadio";
import BasicInput from "../../components/BasicInput";

const ReviewTextBookPriceSection = ({
	professor,
	methods,
	paidForTextbookSelected,
}) => {
	return (
		<>
			<YesNoRadio name="textbookFree" methods={methods} />
			{!paidForTextbookSelected && paidForTextbookSelected !== null && (
				<>
					<BasicInput
						name="textbookPrice"
						label="Textbook Price"
						background="bg-classmate-tan-2"
					/>
				</>
			)}
		</>
	);
};

export default ReviewTextBookPriceSection;
