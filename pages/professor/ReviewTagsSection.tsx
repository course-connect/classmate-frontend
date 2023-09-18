import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ReviewTagsSection = ({ professor, methods }) => {
	const { control } = useFormContext();
	const { getValues, setValue } = methods;

	const professorTags = [
		"Knowledgeable",
		"Passionate",
		"Experienced",
		"Engaging",
		"Inspiring",
		"Approachable",
		"Dedicated",
		"Helpful",
		"Patient",
		"Innovative",
		"Respected",
		"Effective Communicator",
		"Mentor",
		"Expert in their field",
		"Adaptable",
		"Supportive",
		"Encouraging",
		"Organized",
		"Critical Thinker",
		"Influential",
	];

	const handleTagClick = (selectedTag, existingTags, selected) => {
		if (selected) {
			const updatedTags = existingTags.filter((item) => item !== selectedTag);
			setValue("tags", updatedTags);
		} else if (existingTags.length < 5) {
			setValue("tags", [selectedTag, ...existingTags]);
		}
	};

	return (
		<Controller
			control={control}
			name={"tags"}
			rules={{ required: true }}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div className="flex flex-col items-center gap-4">
					<div className="flex flex-wrap gap-1">
						{professorTags.map((tag, index) => {
							const selected = value.includes(tag);
							return (
								<button
									type="button"
									onClick={() => handleTagClick(tag, value, selected)}
									className={`h-fit w-fit whitespace-nowrap rounded-md px-[12px] py-[7px] text-[12px] tracking-wide text-classmate-tan-2 ring-classmate-gold-1 focus:ring ${
										selected ? "bg-classmate-green-2" : "bg-classmate-gray-3"
									}`}>
									{tag}
								</button>
							);
						})}
					</div>
				</div>
			)}
		/>
	);
};

export default ReviewTagsSection;
