import React from "react";
import FilterButton from "./FilterButton";
import Image from "next/image";
import { useSelector } from "react-redux";
import ClassmateButton from "./ClassmateButton";

const FilterOptions = ({
	filterOptions,
	callback,
	title,
	filterType,
	toggleSlideUp,
}) => {
	const filterSearch = useSelector((state) => state.filterSearch);

	return (
		<div
			className="font-classmate flex h-[484px] w-full flex-col items-start gap-2 p-6"
			onClick={callback}>
			<div className="font-classmate mb-2 flex w-full items-center justify-between text-lg text-classmate-green-6">
				<p className="font-classmate-bold w-full text-lg text-classmate-green-6">
					{title}
				</p>
				<ClassmateButton
					callback={() => toggleSlideUp()}
					variant="text"
					size="xs"
					styles="!px-2 !py-0 !text-base">
					back
				</ClassmateButton>
			</div>
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
						<div className="relative flex w-full items-center justify-between overflow-hidden ">
							<p className={`text-classmate-green-6`}>{button.filterText}</p>

							{/* Add the check mark when filter is already added */}
							{filterSelected && (
								<div className="absolute right-0 flex h-full w-8 items-center justify-center">
									<Image
										width={16}
										height={10}
										src="/check-solid.svg"
										alt="check mark"
										className="filter-classmate-green-4 h-[10px] w-[16px]"
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
