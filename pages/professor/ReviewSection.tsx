import React from "react";
import Image from "next/image";

const ReviewSection = ({
	title,
	icon,
	iconAlt,
	required,
	children,
	subtext = "",
	fullWidth = false,
}) => {
	return (
		<div className="font-classmate flex flex-col flex-wrap items-center justify-center gap-6 border-b-2 border-classmate-gray-4 py-6 sm:gap-8 sm:pb-12">
			<div className="flex flex-col gap-1 self-start">
				<div className="flex items-center gap-3">
					<Image
						src={icon}
						alt={iconAlt}
						width={0}
						height={0}
						className="filter-classmate-green-7 h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"
					/>
					<p className="text-lg text-classmate-green-1 sm:text-xl">
						{title}
						{required && <span>*</span>}
					</p>
				</div>
				{subtext && <p className="text-classmate-green-6">{subtext}</p>}
			</div>
			<div
				className={`flex w-[200px] flex-col items-center justify-center gap-4 sm:w-[300px] ${
					fullWidth ? "!w-full" : " "
				}`}>
				{children}
			</div>
		</div>
	);
};

export default ReviewSection;
