import React from "react";
import Image from "next/image";

const ReviewSection = ({ title, icon, iconAlt, required, children }) => {
	return (
		<div className="font-classmate flex flex-col flex-wrap items-center justify-center gap-6 border-b-2 border-classmate-gray-4 py-6">
			<div className="flex gap-3 self-start">
				<Image
					src={icon}
					alt={iconAlt}
					width={0}
					height={0}
					className="filter-classmate-green-7 h-[20px] w-[20px]"
				/>
				<p className="text-classmate-green-1">
					{title}
					{required && <span>*</span>}
				</p>
			</div>
			<div className="flex w-[200px] flex-col gap-4">{children}</div>
		</div>
	);
};

export default ReviewSection;
