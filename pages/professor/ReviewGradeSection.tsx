import React from "react";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import BasicInput from "../../components/BasicInput";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";

const ReviewCourseSection = ({ professor, methods }) => {
	return (
		<FormSelect
			name="grade"
			size="sm"
			label="Grade*"
			type="select"
			backgroundColor="bg-classmate-tan-2"
			setValue={methods.setValue}
			getValues={methods.getValues}
			rules={{
				required: true,
			}}>
			<FormSelectOptions text={"A+"} />
			<FormSelectOptions text={"A"} />
			<FormSelectOptions text={"A-"} />
			<FormSelectOptions text={"B+"} />
			<FormSelectOptions text={"B"} />
			<FormSelectOptions text={"B-"} />
			<FormSelectOptions text={"C+"} />
			<FormSelectOptions text={"C"} />
			<FormSelectOptions text={"C-"} />
			<FormSelectOptions text={"D+"} />
			<FormSelectOptions text={"D"} />
			<FormSelectOptions text={"D-"} />
			<FormSelectOptions text={"F"} />
		</FormSelect>
	);
};

export default ReviewCourseSection;
