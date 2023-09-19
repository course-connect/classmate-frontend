import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ReviewTextAreaSection = ({ professor, methods }) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={"review"}
			rules={{ required: true }}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div className="flex w-full flex-col gap-2">
					<textarea
						name="review"
						onChange={onChange}
						value={value}
						cols={10}
						rows={10}
						className={`w-full resize-none rounded-lg border-[1px] border-classmate-gray-3 bg-transparent p-2 text-classmate-green-6 outline-none ring-classmate-gold-1 focus:ring ${
							!!error
								? `!border-classmate-error-red !placeholder-classmate-error-red focus:!ring-classmate-error-red`
								: "focus:!outline-classmate-gold-1"
						}`}
						maxLength={1000}
					/>
					<p className="self-end text-sm text-classmate-green-7">
						{value.length}/1000
					</p>
				</div>
			)}
		/>
	);
};

export default ReviewTextAreaSection;
