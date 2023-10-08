import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const BasicInput = ({ name, label }) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<>
					<label className="control control-checkbox flex gap-3 text-classmate-green-6">
						{label}
						<input
							name={name}
							type="checkbox"
							value={value}
							onChange={onChange}
						/>
						<div className="control_indicator"></div>
					</label>
				</>
			)}
		/>
	);
};

export default BasicInput;
