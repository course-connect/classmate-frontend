import React from "react";
import ClassmateButton from "./ClassmateButton";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import {
	resetFilterSearch,
	resetFilterSearchFilters,
} from "../redux/filter-search/filterSearchActions";
import {
	search,
	resetMainSearchFilters,
} from "../redux/main-search/mainSearchActions";

const FilterActions = () => {
	const dispatch = useAppDispatch();
	const mainSearch = useSelector((state) => state.mainSearch);

	const handleClearClick = () => {
		dispatch(resetMainSearchFilters());
		dispatch(resetFilterSearch());
		dispatch(search(mainSearch.userInput));
	};

	return (
		<div className="mt-3">
			<ClassmateButton
				variant="filled"
				size="md"
				fullWidth={true}
				callback={handleClearClick}
				styles="bg-classmate-gray-6 text-classmate-green-7">
				Clear
			</ClassmateButton>
		</div>
	);
};

export default FilterActions;
