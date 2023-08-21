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
			<button onClick={() => dispatch(resetFilterSearch())}>test</button>
			<button onClick={() => dispatch(resetMainSearch())}>test</button>
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
									className="pointer-events-none "
									src="./caret-down.svg"
									width={12}
									height={12}
									alt=""
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
										className="pointer flex h-3 w-3 items-center justify-center rounded-full bg-classmate-tan-2">
										<Image
											className="pointer-events-none"
											src="./xmark-solid-green.svg"
											width={6}
											height={6}
											alt=""
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
								className="pointer-events-none"
								src="./plus-light.svg"
								width={10}
								height={10}
								alt=""
							/>
						</ClassmateButton>
					)}
				</div>
			)}
		</div>
	);
};

export default MainSearchCard;
