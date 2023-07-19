import React from "react";
import { useSelector } from "react-redux";
import HeroSearchResult from "./HeroSearchResult";

const HeroSearchResults = () => {
	const { searchType, searchResults, searchLoading } = useSelector(
		(state) => state.search
	);

	const schoolResults = searchResults.map(({ school_name }) => {
		return <HeroSearchResult>{school_name}</HeroSearchResult>;
	});

	const professorResults = searchResults.map(({ first_name, last_name }) => {
		return <HeroSearchResult>{first_name + last_name}</HeroSearchResult>;
	});

	return (
		<div className="absolute top-16 w-full overflow-hidden rounded-xl">
			{searchType === "school" ? schoolResults : professorResults}
		</div>
	);
};

export default HeroSearchResults;
