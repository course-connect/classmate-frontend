import React from "react";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import BasicInput from "../../components/BasicInput";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";

const ReviewSchoolSection = ({ professor, methods, newSchoolSelected }) => {
	return (
		<>
			{newSchoolSelected ? (
				<BasicInput
					name="newSchoolName"
					label="School Name*"
					background="bg-classmate-tan-2"
					rules={{
						required: newSchoolSelected,
					}}
				/>
			) : (
				<FormSelect
					name="school"
					size="sm"
					label="School*"
					type="local-search"
					backgroundColor="bg-classmate-tan-2"
					setValue={methods.setValue}
					getValues={methods.getValues}
					rules={{
						required: !newSchoolSelected,
					}}>
					{professor.data.schools.map(({ school_name }, index) => (
						<FormSelectOptions key={index} text={school_name} />
					))}
				</FormSelect>
			)}
			<Checkbox name="newSchoolSelected" label="Add new school" />
		</>
	);
};

export default ReviewSchoolSection;
