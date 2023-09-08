import React from "react";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";

const ReviewClassFormatSection = ({ professor, methods }) => {
	return (
		<>
			<FormSelect
				name="classFormat"
				size="sm"
				label="Class Format*"
				type="select"
				backgroundColor="bg-classmate-tan-2"
				setValue={methods.setValue}
				getValues={methods.getValues}
				rules={{
					required: true,
				}}>
				<FormSelectOptions text={"In Person"} />
				<FormSelectOptions text={"Online"} />
				<FormSelectOptions text={"Hybrid"} />
			</FormSelect>
		</>
	);
};

export default ReviewClassFormatSection;
