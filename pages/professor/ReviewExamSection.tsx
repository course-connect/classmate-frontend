import React from "react";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";

const ReviewExamSection = ({ professor, methods }) => {
	return (
		<>
			<FormSelect
				name="examFormat"
				size="sm"
				label="Exam Format*"
				type="select"
				backgroundColor="bg-classmate-tan-2"
				setValue={methods.setValue}
				getValues={methods.getValues}
				rules={{
					required: true,
				}}>
				<FormSelectOptions text={"In Person"} />
				<FormSelectOptions text={"Online"} />
				<FormSelectOptions text={"No Exams"} />
			</FormSelect>
		</>
	);
};

export default ReviewExamSection;
