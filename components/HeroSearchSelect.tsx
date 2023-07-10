import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";
import {
	formControlStyles,
	menuStyles,
} from "../styles/heroSearchSelectStyles";

export default function HeroSearchSelect({ name }) {
	const { control } = useFormContext();
	return (
		<Controller
			control={control}
			name={name}
			defaultValue="school"
			render={({ field: { onChange, value } }) => (
				<FormControl sx={formControlStyles}>
					<Select
						value={value}
						onChange={onChange}
						classes={{ icon: "text-classmate-green-4" }}
						MenuProps={menuStyles}>
						<MenuItem value={"school"} divider={true}>
							School
						</MenuItem>
						<MenuItem value={"professor"}>Professor</MenuItem>
					</Select>
				</FormControl>
			)}
		/>
	);
}
