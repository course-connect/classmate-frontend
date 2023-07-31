import React from "react";
import Image from "next/image";

const FilterButton = ({ filter = "All", text, icon, iconAlt, callback }) => {
	return (
		<button
			onClick={callback}
			className="font-classmate flex items-center justify-between rounded-md border-[1px] border-classmate-gray-3 bg-classmate-tan-2 px-3 py-2 text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring">
			<div className="flex gap-4">
				<Image width={20} height={20} src={icon} alt={iconAlt} />
				<p className="text-classmate-green-6">{text}</p>
			</div>
			<div>
				<p>{filter}</p>
			</div>
		</button>
	);
};

export default FilterButton;
