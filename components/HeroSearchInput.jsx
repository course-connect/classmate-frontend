import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { textFieldStyles } from "../styles/heroSearchInputStyles";

function HeroSearchInput({ name, size, searchType }) {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			size={size}
			defaultValue=""
			render={({ field: { onChange, value } }) => (
				<TextField
					placeholder={`Enter ${searchType} name`}
					size={size}
					onChange={onChange}
					value={value}
					fullWidth
					variant="outlined"
					sx={textFieldStyles}
				/>
			)}
		/>
	);
}

export default HeroSearchInput;
