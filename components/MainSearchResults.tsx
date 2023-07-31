import React from "react";
import { useSelector } from "react-redux";

const MainSearchResults = () => {
	const mainSearch = useSelector((state) => state.mainSearch);

	let searchResult;

	switch (mainSearch.type) {
		case "school":
			searchResult = <div>school</div>;
			break;
		case "professor":
			searchResult = <div>professor</div>;
			break;
		default:
			searchResult = <div>course</div>;
	}
	return <div>{mainSearch.results.map((result) => searchResult)}</div>;
};

export default MainSearchResults;
