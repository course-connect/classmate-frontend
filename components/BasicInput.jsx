import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { textFieldStyles } from "../styles/basicInputStyles";

export default function BasicInput({ name, label, rules, size }) {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			size={size}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					sx={textFieldStyles}
					size={size}
					error={!!error}
					onChange={onChange}
					value={value}
					label={label}
					fullWidth
					variant="outlined"
				/>
			)}
		/>
	);
}
