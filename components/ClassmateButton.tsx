import React, { FC, ReactNode } from "react";

type ClassmateButtonProps = {
	variant: "filled" | "outlined" | "text";
	fullWidth: boolean;
	children: ReactNode;
	styles?: string;
	size: "xs" | "sm" | "md" | "lg";
	callback: () => void;
	type: "button" | "submit" | "reset";
};

const variantStylesMap = {
	filled: "",
	outlined: "border-[1px]",
	text: "rounded-md",
};

const sizeStylesMap = {
	xs: "text-xs px-2 py-1 rounded-md font-classmate",
	sm: "text-sm px-6 py-2 rounded-md font-classmate-bold",
	md: "text-sm px-8 py-3 rounded-lg font-classmate-bold",
	lg: "text-base px-10 py-3 rounded-lg font-classmate-bold",
};

const baseStyles =
	"whitespace-nowrap transition-colors ease-in-out duration-200";

const ClassmateButton: FC<ClassmateButtonProps> = ({
	type = "button",
	fullWidth = false,
	variant,
	size,
	styles,
	callback,
	children,
}) => {
	const variantStyles = variantStylesMap[variant] || "";
	const sizeStyles = sizeStylesMap[size] || "";

	return (
		<button
			type={type}
			onClick={callback}
			className={`${baseStyles} ${variantStyles} ${sizeStyles} ${styles} ${
				fullWidth && "w-full"
			}`}>
			{children}
		</button>
	);
};

export default ClassmateButton;