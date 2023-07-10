export const formControlStyles = {
	transform: "translateX(1px)",
	minWidth: 115,
	"& .MuiInputBase-input": {
		p: 1.75,
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
};

export const menuStyles = {
	PaperProps: {
		elevation: 0,
		sx: {
			borderRadius: "6px",
			filter: "drop-shadow(2px 3px 10px rgba(0,0,0,0.2))",
			bgcolor: "#F8F4EE",
			p: 0,
			mt: 1,
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
			"& .MuiMenu-list": {
				p: 0,
			},
		},
	},
};
