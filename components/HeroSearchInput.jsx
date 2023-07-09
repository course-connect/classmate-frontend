import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

function HeroSearchInput({ name, size }) {
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
			render={({ field: { onChange, value } }) => (
				<CssTextField
					placeholder="Search"
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

{
	/* <OutlinedInput
autoFocus={true}
placeholder="Search"
size={size}
onChange={onChange}
value={value}
fullWidth
sx={{
	minWidth: 100,
	"& .MuiInputBase-input": {
		p: 1.32,
	},
	"& .MuiOutlinedInput-input": {
		color: "#788473",
	},
	"& fieldset": {
		borderColor: "transparent",
		borderRadius: "0px",
	},
}}
/> */
}
