import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";

const FilterSearchResults = () => {
	const dispatch = useAppDispatch();
	const filterSearch = useSelector((state) => state.filterSearch);

	let searchResults;
	switch (filterSearch.type) {
		case "school":
			searchResults = filterSearch.results.map(({ data: school }, index) => (
				<div key={index}>{school.school_name}</div>
			));
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
