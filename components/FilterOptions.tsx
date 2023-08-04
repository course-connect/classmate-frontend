import React from "react";
import FilterButton from "./FilterButton";
import Image from "next/image";
import { useSelector } from "react-redux";

const FilterOptions = ({ filterOptions, callback, title, filterType }) => {
	const filterSearch = useSelector((state) => state.filterSearch);

	return (
		<div
			className="font-classmate flex h-[484px] w-full flex-col items-start gap-2 p-6"
			onClick={callback}>
			<p className="font-classmate-bold pointer-events-none mb-2 w-full text-lg text-classmate-green-6">
				{title}
			</p>
			{filterOptions.map((button, index) => {
				const filterSelected =
					button.filterValue === filterSearch.filters[filterType].filter_value;
				return (
					<FilterButton
						key={index}
						filterType={filterType}
						filterValue={button.filterValue}
						filterText={button.filterText}
						styles="">
						<div className="bri relative flex w-full items-center justify-between overflow-hidden ">
							<p className={`text-classmate-green-6`}>{button.filterText}</p>
							{/* Add the check mark when filter is already added */}
							{filterSelected && (
								<div className="absolute right-0 flex h-full w-8 items-center justify-center">
									<Image
										width={16}
										height={10}
										src="./check-green.svg"
										alt="check mark"
									/>
								</div>
							)}
						</div>
					</FilterButton>
				);
			})}
		</div>
	);
};

export default FilterOptions;
