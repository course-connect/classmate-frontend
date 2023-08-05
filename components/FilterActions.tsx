import React from "react";
import ClassmateButton from "./ClassmateButton";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { resetFilterSearch } from "../redux/filter-search/filterSearchActions";
import {
	search,
	setMainSearchFilter,
	resetMainSearchFilters,
} from "../redux/main-search/mainSearchActions";

const FilterActions = () => {
	const dispatch = useAppDispatch();
	const filterSearch = useSelector((state) => state.filterSearch);
	const mainSearch = useSelector((state) => state.mainSearch);

	const handleClearClick = () => {
		dispatch(resetMainSearchFilters());
		dispatch(resetFilterSearch());
	};

	const handleAppleyClick = () => {
		dispatch(setMainSearchFilter(filterSearch.filters));
		dispatch(search(mainSearch.userInput));
	};

	return (
		<div className="mt-3 flex gap-2">
			<ClassmateButton
				variant="filled"
				size="md"
				fullWidth={true}
				callback={handleClearClick}
				styles="bg-classmate-gray-6 text-classmate-green-7">
				Clear
			</ClassmateButton>
			<ClassmateButton
				variant="filled"
				size="md"
				fullWidth={true}
				callback={handleAppleyClick}
				styles="bg-classmate-gold-1 text-classmate-tan-2">
				Apply
			</ClassmateButton>
		</div>
	);
};

export default FilterActions;
