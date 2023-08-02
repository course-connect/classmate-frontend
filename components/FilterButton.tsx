import React from "react";
import Image from "next/image";

interface FilterButtonProps {
	filter?: string;
	text?: string;
	icon?: string;
	iconAlt?: string;
	callback?: () => void;
	filterValue?: string;
	filterType?: string;
	styles?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
	filter,
	text,
	icon,
	iconAlt,
	callback,
	filterValue,
	filterType,
	styles,
}) => {
	return (
		<button
			data-filtervalue={filterValue}
			data-filtertype={filterType}
			onClick={callback}
			className={`font-classmate flex w-full items-center justify-between rounded-md bg-classmate-gray-5 px-3 py-2 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring ${styles}`}>
			<div className="pointer-events-none flex gap-4 ">
				{icon && <Image width={20} height={20} src={icon} alt={iconAlt} />}
				<p className="text-classmate-green-6">{text}</p>
			</div>
			{filter && (
				<div className="pointer-events-none">
					<p>{filter}</p>
				</div>
			)}
		</button>
	);
};

export default FilterButton;