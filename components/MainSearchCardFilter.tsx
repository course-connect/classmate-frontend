import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const MainSearchCardFilter = ({ data, handleAddFilterClick }) => {
	const filterSearch = useSelector((state) => state.filterSearch);
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
					<div className="pointer-events-none flex justify-center items-center w-full gap-3">
						<Image width={16} height={16} src={data.icon} alt={data.iconAlt} className="w-[16px] h-[16px]" />
						{data.text}
						<Image width={8} height={8} className={`w-[8px] h-[8px] transition ${dropDownOpen ? "rotate-180" : ""}`} src="/caret-down-green-6.svg" alt="arrow indicating if the dropdown menu is open" />
					</div>
				</button>

				<div className={`transition left-0 origin-top-left top-10 flex flex-col absolute z-30 bg-classmate-tan-2 shadow-md p-4 gap-2 rounded-lg ${dropDownOpen
					? "pointer-events-auto scale-100 opacity-100"
					: "pointer-events-none scale-75 opacity-0"
					}`}>
					{data.filterOptions.map((option, index) => {
						const filterSelected =
							option.filterValue === filterSearch.filters[data.filterType].filter_value;
						return <button key={index} data-filtertype={data.filterType} data-filtervalue={option.filterValue} data-filtertext={option.filterText} onClick={handleAddFilterClick} className="flex relative focus:ring ring-classmate-gold-1 whitespace-nowrap min-w-[180px] bg-classmate-gray-5 font-classmate py-1 px-2 rounded-[4px] text-left text-classmate-green-7" >
							{option.filterText}
							{filterSelected && (
								<div className="absolute right-0 top-0 flex h-full w-8 items-center justify-center">
									<Image
										width={14}
										height={10}
										src="./check-green.svg"
										alt="check mark"
									/>
								</div>
							)}
						</button>
					})}
				</div>

			</div>
		</>
	);
};

export default MainSearchCardFilter;
