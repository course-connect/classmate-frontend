import React from "react";
import MainSearch from "./MainSearch";
import ClassmateButton from "./ClassmateButton";
import MainDesktopFilters from "./MainDesktopFilters";

import useWindowSize from "../hooks/useWindowSize";

import Image from "next/image";

import { useAppDispatch } from "../hooks/reduxHooks";
import {
	removeMainSearchFilter,
	search,
	resetMainSearch,
} from "../redux/main-search/mainSearchActions";
import {
	removeFilterSearchFilter,
	resetFilterSearch,
} from "../redux/filter-search/filterSearchActions";
import { useSelector } from "react-redux";

const MainSearchCard = ({
	handleOpenFilterMenu,
	handleCloseFilterMenu,
	showFilters,
}) => {
	const dispatch = useAppDispatch();
	const mainSearch = useSelector((state) => state.mainSearch);
	const { width: windowWidth } = useWindowSize();

	const filtersApplied =
		Object.entries(mainSearch.filters).filter(([_, value]) => value.filter_text)
			.length !== 0;

	const handleRemoveClick = (e) => {
		dispatch(removeMainSearchFilter(e.target.dataset.filtertype));
		dispatch(removeFilterSearchFilter(e.target.dataset.filtertype));
		dispatch(search(mainSearch.userInput));
	};

	const formatText = (key, value) => {
		return `${key.charAt(0).toUpperCase() + key.slice(1)}: ${
			value.filter_text
		}`;
	};

	const handleAddFilterClick = () => {
		if (showFilters) {
			handleOpenFilterMenu();
		} else {
			handleCloseFilterMenu();
		}
	};

	return (
		<div className="rounded-xl bg-classmate-tan-2 p-4 shadow-xl">
			<div className="flex flex-col gap-5">
				<div className="flex gap-2">
					<MainSearch />
					{((windowWidth >= 450 && windowWidth < 768) ||
						windowWidth >= 1024) && (
						<button
							onClick={handleAddFilterClick}
							className="flex w-fit items-center gap-3 rounded-lg border-[1px] border-classmate-gray-3 bg-classmate-tan-2 px-4 outline-none ring-classmate-gold-1 focus:ring">
							<span className="font-classmate whitespace-nowrap text-classmate-green-7">
								{showFilters ? "Hide Filters" : "Add Filter"}
							</span>
							<div
								className={`flex h-3 w-3 items-center transition ${
									showFilters ? "rotate-180" : ""
								}`}>
								<Image
									className="filter-classmate-green-4 pointer-events-none h-[12px] w-[12px] "
									src="/caret-solid.svg"
									width={0}
									height={0}
									alt="small arrow"
								/>
							</div>
						</button>
					)}
				</div>
				{showFilters && windowWidth >= 768 && <MainDesktopFilters />}
			</div>
			{mainSearch.type !== "school" && (
				<div className="mt-4 flex flex-wrap items-center gap-1">
					<p className="font-classmate mr-1 text-classmate-green-7">Filters:</p>
					{filtersApplied ? (
						Object.entries(mainSearch.filters)
							.filter(([_, value]) => value.filter_text)
							.map(([key, value], index) => (
								<div
									key={index}
									className="font-classmate-bold bg-classmate-green-40 flex h-fit w-fit items-center gap-2 rounded-md bg-classmate-green-4 px-[9px] py-[5px] text-xs text-classmate-tan-2">
									{formatText(key, value)}
									<button
										data-filtertype={key}
										onClick={(e) => handleRemoveClick(e)}
										className="flex h-3 min-h-[12px] w-3 min-w-[12px]  items-center justify-center rounded-full bg-classmate-tan-2">
										<Image
											className="filter-classmate-green-4 pointer-events-none h-[6px] w-[6px]"
											src="/xmark-solid.svg"
											width={0}
											height={0}
											alt="x mark"
										/>
									</button>
								</div>
							))
					) : (
						<ClassmateButton
							variant="filled"
							size="xs"
							styles="bg-classmate-green-4 min-w-[20px] min-h-[20px] h-[20px] !p-1 flex justify-center items-center !rounded-full"
							callback={handleAddFilterClick}>
							<Image
								className="filter-classmate-tan-2 classmate- pointer-events-none h-[10px] w-[10px]"
								src="/plus-solid.svg"
								width={0}
								height={0}
								alt="plus"
							/>
						</ClassmateButton>
					)}
				</div>
			)}
		</div>
	);
};

export default MainSearchCard;
