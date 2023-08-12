import React, { useState } from "react";
import Image from "next/image";

const MainSearchCardFilter = ({ data, handleAddFilterClick }) => {
	const [dropDownOpen, setDropDownOpen] = useState(false);

	const openFilterMenu = () => {
		setDropDownOpen(true);
	};

	const closeFilterMenu = () => {
		setDropDownOpen(false);
	};

	return (
		<>
			{dropDownOpen && (
				<div
					onClick={closeFilterMenu}
					className="fixed left-0 top-0 z-20 h-screen w-screen"
				/>
			)}
			<div className="relative">
				<button
					onClick={openFilterMenu}
					className="font-classmate flex w-fit items-center justify-between rounded-md bg-classmate-gray-6 px-3 py-1 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring">
					<div className="pointer-events-none flex w-full gap-4 ">
						<Image width={16} height={16} src={data.icon} alt={data.iconAlt} />
						{data.text}
					</div>
				</button>
				{dropDownOpen && (
					<div className="top-10 flex flex-col absolute z-30 bg-classmate-tan-2 shadow-xl p-4 gap-2 rounded-lg border-[1px] border-classmate-gray-4">
						{data.filterOptions.map((option, index) => <button key={index} data-filtertype={data.filterType} data-filtervalue={option.filterValue} data-filtertext={option.filterText} onClick={handleAddFilterClick} className="focus:ring ring-classmate-gold-1 whitespace-nowrap min-w-[180px] bg-classmate-gray-5 font-classmate py-1 px-2 rounded-md text-left text-classmate-green-7" >{option.filterText}</button>)}
					</div>
				)}
			</div>
		</>
	);
};

export default MainSearchCardFilter;
