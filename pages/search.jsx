import React, { useState } from "react";
import MainSearchCard from "../components/MainSearchCard";
import MainSearchResults from "../components/MainSearchResults";
import MobileSlideUpMenus from "../components/MobileSlideUpMenus";

import { useAppDispatch } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import {
	resetFilterSearch,
	setMultiFilterSearchFilters,
} from "../redux/filter-search/filterSearchActions";
import { resetMainSearch } from "../redux/main-search/mainSearchActions";

export default function Search() {
	const dispatch = useAppDispatch();
	const mainSearchFilters = useSelector((state) => state.mainSearch.filters);

	const [showGraph, toggleGraph] = useState(false);
	const [showFilters, toggleFilters] = useState(false);

	const handleShowGraphClick = () => {
		toggleGraph((current) => !current);
	};

	const handleOpenFilterMenu = () => {
		dispatch(setMultiFilterSearchFilters(mainSearchFilters));
		toggleFilters((current) => !current);
	};

	const handleCloseFilterMenu = () => {
		setTimeout(() => dispatch(resetFilterSearch()), 100);
		toggleFilters((current) => !current);
	};

	return (
		<div className="section-padding bg-classmate-tan-1 py-10">
			<div>
				<MainSearchCard handleOpenFilterMenu={handleOpenFilterMenu} />
			</div>
			<div className="mt-10 min-h-[500px]">
				<MainSearchResults />
			</div>
			<MobileSlideUpMenus
				showGraph={showGraph}
				showFilters={showFilters}
				handleShowGraphClick={handleShowGraphClick}
				handleOpenFilterMenu={handleOpenFilterMenu}
				handleCloseFilterMenu={handleCloseFilterMenu}
			/>
		</div>
	);
}
