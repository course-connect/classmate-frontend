import React from "react";
import { useSelector } from "react-redux";
import FilterButton from "./FilterButton";

const FilterSearchResults = () => {
	const filterSearch = useSelector((state) => state.filterSearch);
	const hasSearchResults = filterSearch.results.length !== 0;

	let searchResults;
	switch (filterSearch.type) {
		case "school":
			searchResults = hasSearchResults ? (
				filterSearch.results.map(({ firebaseID, data: school }, index) => (
					<FilterButton
						key={index}
						text={school.school_name}
						icon="./graduation-cap.svg"
						iconAlt="Graduration Cap"
						filterValue={firebaseID}
						filterType={"school"}
						styles="whitespace-nowrap text-sm h-[40px] overflow-hidden"
					/>
				))
			) : (
				<p className="font-classmate pointer-events-none text-classmate-green-7">
					No Results
				</p>
			);
			break;
		case "professor":
			searchResults = hasSearchResults ? (
				filterSearch.results.map(({ firebaseID, data: professor }, index) => (
					<FilterButton
						key={index}
						text={`${professor.first_name} ${professor.last_name}`}
						icon="./glasses.svg"
						iconAlt="Glasses"
						filterValue={firebaseID}
						filterType={"professor"}
						styles="whitespace-nowrap text-sm h-[40px] overflow-hidden"
					/>
				))
			) : (
				<p className="font-classmate pointer-events-none text-classmate-green-7">
					No Results
				</p>
			);
			break;
		default:
			searchResults = hasSearchResults ? (
				filterSearch.results.map(({ firebaseID, data: course }, index) => (
					<FilterButton
						key={index}
						text={`${course.course_name}`}
						icon="./book-solid.svg"
						iconAlt="Book"
						filterValue={firebaseID}
						filterType={"course"}
						styles="whitespace-nowrap text-sm h-[40px] overflow-hidden"
					/>
				))
			) : (
				<p className="font-classmate pointer-events-none text-classmate-green-7">
					No Results
				</p>
			);
			break;
	}

	return <>{searchResults}</>;
};

export default FilterSearchResults;
