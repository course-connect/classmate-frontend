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
	const handleButtonClick = (e) => {
		const buttonName = e.target.id;
		if (buttonName === "remove") {
			alert("remove");
		} else {
			callback?.();
		}
	};

	return (
		<button
			id="open"
			data-filtervalue={filterValue}
			data-filtertype={filterType}
			data-filtertext={filterText}
			onClick={(e) => handleButtonClick(e)}
			className={`font-classmate flex w-full items-center justify-between rounded-md bg-classmate-gray-6 px-3 py-2 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring ${styles}`}>
			<div className="pointer-events-none flex w-full gap-4 ">
				{icon && <Image width={19} height={19} src={icon} alt={iconAlt} />}
				{children}
			</div>

			{filter && (
				<div className="flex items-center gap-2">
					<p className="pointer-events-none whitespace-nowrap text-[15px]">
						{filter}
					</p>
					{filter !== "" && (
						<div
							id="remove"
							className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-classmate-green-7">
							<Image
								width={6}
								height={6}
								src="./xmark-solid-light.svg"
								alt="x mark"
								className="pointer-events-none"
							/>
						</div>
					)}
				</div>
			)}
		</button>
	);
};

export default FilterButton;
