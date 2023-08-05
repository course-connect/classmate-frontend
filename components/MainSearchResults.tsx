import React from "react";
import { useSelector } from "react-redux";
import MainSearchResult from "./MainSearchResult";

const MainSearchResults = () => {
	const mainSearch = useSelector((state) => state.mainSearch);

	return (
		<div className="flex flex-col gap-10">
			{mainSearch.results.map((result, index) => (
				<MainSearchResult
					key={index}
					result={result}
					userInput={mainSearch.userInput}
					resultType={mainSearch.type}
				/>
			))}
		</div>
	);
};

export default MainSearchResults;
