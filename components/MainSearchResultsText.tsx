import React from "react";
import { useSelector } from "react-redux";

const MainSearchResultsText = () => {
	const mainSearch = useSelector((state) => state.mainSearch);

	function buildText(mainSearch) {
		return (
			<p className="font-classmate mb-4 px-4 text-classmate-green-7">
				<span className="font-classmate text-classmate-green-1">{`${mainSearch.results.length}`}</span>
				<span>
					{" "}
					{`result${mainSearch.results.length === 1 ? "" : "s"} for`}{" "}
				</span>
				<span className="capitalize text-classmate-green-1">{`"${mainSearch.type}s"`}</span>

				{mainSearch.filters.school.filter_text && (
					<>
						<span> at </span>
						<span className="text-classmate-green-1">{`"${mainSearch.filters.school.filter_text}"`}</span>
					</>
				)}
				{mainSearch.filters.course.filter_text && (
					<>
						<span> that teach </span>
						<span className="text-classmate-green-1">{`"${mainSearch.filters.course.filter_text}"`}</span>
					</>
				)}
			</p>
		);
	}

	return buildText(mainSearch);
};

export default MainSearchResultsText;
