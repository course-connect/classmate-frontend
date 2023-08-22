import React, { useState } from "react";

// Project components
import HeroSearchOne from "./HeroSearchOne";
import HeroSearchTwo from "./HeroSearchTwo";
import Filter from "../../components/Filter";

// Next.js components
import Image from "next/image";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import heroSearchOneInterface from "../../redux/hero-search-one/heroSearchOneInterface";
import {
	clearSearchFilters,
	setSearchType,
} from "../../redux/search/searchActions";

const HeroCallToAction = (): JSX.Element | null => {
	// Redux dispatch and state setup
	const dispatch = useAppDispatch();
	const [showFirstSearch, setShowFirstSearch] = useState(true);
	const schoolFilter = useSelector(
		(state: { heroSearchOne: heroSearchOneInterface }) =>
			state.heroSearchOne.filters.school
	);

	// Handler to remove applied filter
	const handleRemoveFilter = () => {
		setShowFirstSearch(true);
		dispatch(setSearchType("school")); // Reset search type to default
		dispatch(clearSearchFilters()); // Clear applied filters
	};

	return (
		<div className="relative flex h-[55px] w-full justify-center">
			{/* First search */}
			<div
				className={`absolute flex w-full max-w-sm justify-center opacity-100 transition-[transform,opacity] duration-500 ${
					showFirstSearch
						? ""
						: "pointer-events-none -translate-x-96 !opacity-0"
				}`}>
				<HeroSearchOne setShowFirstSearch={setShowFirstSearch} />
			</div>
			{/* Second search */}
			<div
				className={`pointer-events-none absolute flex w-full max-w-sm translate-x-96 justify-center opacity-0 transition-[transform,opacity] duration-500 ${
					showFirstSearch
						? ""
						: "!pointer-events-auto !translate-x-0 opacity-100"
				}`}>
				<HeroSearchTwo setShowFirstSearch={setShowFirstSearch} />
			</div>

			{/* Filter */}
			<Filter
				className={`font-classmate-bold pointer-events-none absolute -bottom-12 -z-10 flex translate-x-96 gap-5 rounded-md bg-classmate-green-4 px-3 py-[6px] text-xs tracking-wide text-classmate-tan-2 opacity-0 transition-[transform,opacity] duration-500 ${
					showFirstSearch
						? ""
						: "!pointer-events-auto !translate-x-0 opacity-100"
				}`}>
				{schoolFilter.filter_text}
				<button
					onClick={handleRemoveFilter}
					className="pointer flex h-4 w-4 items-center justify-center rounded-full bg-classmate-tan-2">
					<Image
						src="./xmark-solid.svg"
						width={0}
						height={0}
						alt="x-mark"
						className="filter-classmate-green-4 h-[8px] w-[8px]"
					/>
				</button>
			</Filter>
		</div>
	);
};

export default HeroCallToAction;
