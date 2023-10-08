import React from "react";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import BasicInput from "../../components/BasicInput";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";

const ReviewCourseSection = ({ professor, methods, newCourseSelected }) => {
	return (
		<>
			{newCourseSelected ? (
				<>
					<BasicInput
						name="newCourseCode"
						label="Course Code*"
						background="bg-classmate-tan-2"
						rules={{
							required: newCourseSelected,
						}}
					/>
					<BasicInput
						name="newCourseName"
						label="Course Name*"
						background="bg-classmate-tan-2"
						rules={{
							required: newCourseSelected,
						}}
					/>
				</>
			) : (
				<FormSelect
					name="course"
					size="sm"
					label="Course*"
					type="local-search"
					backgroundColor="bg-classmate-tan-2"
					setValue={methods.setValue}
					getValues={methods.getValues}
					rules={{
						required: !newCourseSelected,
					}}>
					{professor.data.courses.map(({ course_code, course_name }, index) => (
						<FormSelectOptions
							key={index}
							text={`${course_code} - ${course_name}`}
						/>
					))}
				</FormSelect>
			)}
			<Checkbox name="newCourseSelected" label="Add new course" />
		</>
	);
};

export default ReviewCourseSection;
