import React, { useState } from "react";
import HeroSchoolAndProfessorSearch from "./HeroSchoolAndProfessorSearch";
import HeroCourseAndProfessorSearch from "./HeroCourseAndProfessorSearch";
import { useAppDispatch } from "../hooks/reduxHooks";
import Filter from "./Filter";
import Image from "next/image";
import {
	clearSearchFilters,
	setSearchType,
} from "../redux/search/searchActions";

const HeroCallToAction = (): JSX.Element | null => {
	const dispatch = useAppDispatch();
	const [schoolFilter, setSchoolFilter] = useState("");
	const [showFirstSearch, setShowFirstSearch] = useState(true);

	const handleRemoveFilter = () => {
		setShowFirstSearch(true);
		dispatch(setSearchType("school"));
		dispatch(clearSearchFilters());
	};

	return (
		<div className="relative flex h-[55px] w-full justify-center">
			<div
				className={`absolute flex w-full max-w-sm justify-center opacity-100 transition-[transform,opacity] duration-500 ${
					showFirstSearch
						? ""
						: "pointer-events-none -translate-x-96 !opacity-0"
				}`}>
				<HeroSchoolAndProfessorSearch
					setSchoolFilter={setSchoolFilter}
					setShowFirstSearch={setShowFirstSearch}
				/>
			</div>
			<div
				className={`pointer-events-none absolute flex w-full max-w-sm translate-x-96 justify-center opacity-0 transition-[transform,opacity] duration-500 ${
					showFirstSearch
						? ""
						: "!pointer-events-auto !translate-x-0 opacity-100"
				}`}>
				<HeroCourseAndProfessorSearch
					setSchoolFilter={setSchoolFilter}
					setShowFirstSearch={setShowFirstSearch}
				/>
			</div>

			<Filter
				className={`font-classmate-bold pointer-events-none absolute -bottom-12 -z-10 flex translate-x-96 gap-5 rounded-md bg-classmate-green-4 px-3 py-[6px] text-xs tracking-wide text-classmate-tan-2 opacity-0 transition-[transform,opacity] duration-500 ${
					showFirstSearch
						? ""
						: "!pointer-events-auto !translate-x-0 opacity-100"
				}`}>
				{schoolFilter}
				<button
					onClick={handleRemoveFilter}
					className="pointer flex h-4 w-4 items-center justify-center rounded-full bg-classmate-tan-2">
					<Image src="./xmark-solid-green.svg" width={8} height={8} alt="" />
				</button>
			</Filter>
		</div>
	);
};

export default HeroCallToAction;
