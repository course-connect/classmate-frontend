import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

function HeroSearchInput({ name, size, searchType }) {
	const { control } = useFormContext();
	const CssTextField = styled(TextField)({
		"& .MuiOutlinedInput-root": {
			transform: "translateX(-1px)",
			height: "44px",
			borderRadius: "8px",
			borderTopLeftRadius: "0px",
			borderBottomLeftRadius: "0px",

			"& fieldset, &:hover fieldset": {
				borderColor: "#788473",
				borderLeftColor: "transparent",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#D0A13D",
			},
		},
		"& .MuiOutlinedInput-input": {
			color: "#788473",
		},
	});

	return (
		<Controller
			control={control}
			name={name}
			size={size}
			defaultValue=""
			render={({ field: { onChange, value } }) => (
				<CssTextField
					placeholder={`Enter ${searchType} name`}
					size={size}
					onChange={onChange}
					value={value}
					fullWidth
					variant="outlined"
				/>
			)}
		/>
	);
}

export default HeroSearchInput;
