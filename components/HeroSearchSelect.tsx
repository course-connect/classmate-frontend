import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function HeroSearchSelect() {
	const [searchType, setSearchType] = useState("school");

	const handleChange = (event: SelectChangeEvent) => {
		setSearchType(event.target.value);
	};

	return (
		<FormControl
			sx={{
				transform: "translateX(1px)",
				minWidth: 110,
				"& .MuiInputBase-input": {
					p: 1.32,
				},
				"& .MuiInputBase-root": {
					borderRadius: "8px",
					borderTopRightRadius: "0px",
					borderBottomRightRadius: "0px",

					"& fieldset, &:hover fieldset, &.Mui-error fieldset": {
						borderColor: "#788473",
						borderRightColor: "transparent",
					},
					"&.Mui-focused fieldset": {
						borderColor: "#D0A13D",
					},
				},
				"& .MuiOutlinedInput-input": {
					color: "#788473",
				},
			}}>
			<Select
				value={searchType}
				onChange={handleChange}
				classes={{ icon: "text-classmate-green-4" }}
				MenuProps={{
					PaperProps: {
						elevation: 0,
						sx: {
							borderRadius: "6px",
							filter: "drop-shadow(2px 3px 10px rgba(0,0,0,0.2))",
							bgcolor: "#F8F4EE",
							p: 0,
							mt: 1,
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							"& .MuiMenuItem-root": {
								py: 1.8,
								px: 3,
								fontSize: "15px",
								color: "#4D5E4A",
							},

							"& .MuiMenuItem-root:hover": {
								bgcolor: "#F2EFE5",
							},
							"& .MuiMenuItem-root.Mui-selected": {
								bgcolor: "#F2EFE5",
							},
							"& .MuiMenuItem-root.Mui-selected:hover": {
								bgcolor: "#F2EFE5",
							},
							"& .MuiDivider-root": {
								m: 0,
							},
							"& .MuiMenu-list": {
								p: 0,
							},
						},
					},
				}}>
				<MenuItem value={"school"} divider={true}>
					School
				</MenuItem>
				<MenuItem value={"professor"}>Professor</MenuItem>
			</Select>
		</FormControl>
	);
}
