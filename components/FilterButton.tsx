import React from "react";
import Image from "next/image";

interface FilterButtonProps {
	filter?: string;
	text?: string;
	icon?: string;
	iconAlt?: string;
	callback?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
	filter,
	text,
	icon,
	iconAlt,
	callback,
}) => {
	return (
		<button
			onClick={callback}
			className="font-classmate 3 flex w-full items-center justify-between rounded-md bg-classmate-gray-5 px-3 py-2 text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring">
			<div className="flex gap-4">
				{icon && <Image width={20} height={20} src={icon} alt={iconAlt} />}
				<p className="text-classmate-green-6">{text}</p>
			</div>
			<div>
				<p>{filter}</p>
			</div>
		</button>
	);
};

export default FilterButton;
