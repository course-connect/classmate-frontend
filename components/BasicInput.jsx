import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function BasicInput({ name, label, rules }) {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<input
					onChange={onChange}
					value={value}
					placeholder={label}
					className={`font-classmate w-full rounded-md border-[1px] border-classmate-gray-2 bg-transparent px-4 py-3 text-classmate-green-7 placeholder-classmate-green-7  ${
						!!error
							? `!border-classmate-error-red !placeholder-classmate-error-red focus:!outline-classmate-error-red`
							: "focus:!outline-classmate-gold-1"
					}`}
				/>
			)}
		/>
	);
}
