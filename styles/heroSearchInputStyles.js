export const textFieldStyles = {
	"& .MuiOutlinedInput-root": {
		transform: "translateX(-1px)",
		height: "51px",
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
};
