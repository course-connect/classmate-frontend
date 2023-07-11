const inputTheme = {
	defaultProps: {
		variant: "outlined",
		size: "lg",
	},
	styles: {
		base: {
			container: {
				borderColor: "!border-red-500",
			},
			input: {
				// borderColor: "!border-red-500",
				borderTopColor: "!border-t-amber-800",
				"&:focus": {
					borderTopColor: "!border-t-amber-800",
				},
			},
			label: {
				"&:focus": {
					borderTopColor: "!border-t-amber-800",
				},
			},
		},
	},
};

export default inputTheme;

//   interface InputVariantStylesType {
//     base: {
//       input: object;
//       inputWithIcon: object;
//       icon: object;
//       label: object;
//     };
//     sizes: {
//       md: InputSizeStylesType;
//       lg: InputSizeStylesType;
//     };
//     colors: {
//       input: object;
//       label: object;
//     };
//     error: InputStateStylesType;
//     success: InputStateStylesType;
//     shrink: InputStateStylesType;
//   }
