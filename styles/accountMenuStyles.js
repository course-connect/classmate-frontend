export const boxStyles = {
	display: "flex",
	alignItems: "center",
	textAlign: "center",
};

export const menuStyles = {
	elevation: 0,
	sx: {
		borderRadius: "8px",
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
		"& .MuiDivider-root": {
			m: 0,
		},
		"& .MuiMenu-list": {
			p: 0,
		},
	},
};
