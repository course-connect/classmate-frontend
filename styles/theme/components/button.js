const buttonTheme = {
	valid: {
		sizes: ["xs", "sm", "md", "lg"],
	},
	styles: {
		base: {
			initial: {
				textTransform: "capitalize",
				fontFamily: "font-classmate",
			},
		},
		sizes: {
			xs: {
				fontSize: "text-xs",
				width: "px-2",
				height: "py-1",
				borderRadius: "rounded-md",
			},
			sm: {
				fontSize: "text-xs",
				width: "px-5",
				height: "py-2",
				borderRadius: "rounded-md",
			},
			md: {
				fontSize: "text-sm",
				width: "px-8",
				height: "py-2",
			},
			lg: {
				fontSize: "text-base",
				width: "px-10",
				height: "py-3",
			},
		},
		variants: {
			filled: {
				backgroundColor: "!bg-red-500",
				borderRadius: "!rounded-sm",
			},
			text: {
				backgroundColor: "!bg-red-500",
			},
		},
	},
};

export default buttonTheme;
