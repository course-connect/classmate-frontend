import React from "react";
import { useSelector } from "react-redux";
import FilterButton from "./FilterButton";

const FilterSearchResults = () => {
	const filterSearch = useSelector((state) => state.filterSearch);

	let searchResults;
	switch (filterSearch.type) {
		case "school":
			searchResults = filterSearch.results.map(
				({ firebaseID, data: school }, index) => (
					<FilterButton
						key={index}
						text={school.school_name}
						icon="./graduation-cap.svg"
						iconAlt="Graduration Cap"
						filterValue={firebaseID}
						filterType={"school"}
						styles="whitespace-nowrap text-sm h-[40px]"
					/>
				)
			);
			break;
		case "professor":
			searchResults = filterSearch.results.map(({ data: professor }, index) => (
				<div
					key={index}>{`${professor.first_name} ${professor.last_name}`}</div>
			));
			break;
		default:
			searchResults = filterSearch.results.map(({ data: course }, index) => (
				<div key={index}>{`${course.course_name} ${course.course_code}`}</div>
			));
			break;
	}

	return <>{searchResults}</>;
};

export default FilterSearchResults;
