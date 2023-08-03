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
	filterText?: string;
	styles?: string;
	children: any;
}

const FilterButton: React.FC<FilterButtonProps> = ({
	filter,
	icon,
	iconAlt,
	callback,
	filterValue,
	filterType,
	filterText,
	styles,
	children,
}) => {
	return (
		<button
			data-filtervalue={filterValue}
			data-filtertype={filterType}
			data-filtertext={filterText}
			onClick={callback}
			className={`font-classmate flex w-full items-center justify-between rounded-md bg-classmate-gray-6 px-3 py-2 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring ${styles}`}>
			<div className="pointer-events-none flex w-full gap-4">
				{icon && <Image width={19} height={19} src={icon} alt={iconAlt} />}
				{children}
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
