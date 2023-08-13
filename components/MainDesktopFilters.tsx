import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MobileSlideUp from "./MobileSlideUp";
import ClassmateButton from "./ClassmateButton";

import MainSearchCardFilter from "./MainSearchCardFilter";
import FilterSearch from "./FilterSearch";
import FilterOptions from "./FilterOptions";
import FilterSearchResults from "./FilterSearchResults";
import FilterActions from "./FilterActions";

import useWindowSize from "../hooks/useWindowSize";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
	setFilterSearchFilter,
	setFilterSearchType,
} from "../redux/filter-search/filterSearchActions";
import {
	search,
	setMainSearchFilter,
} from "../redux/main-search/mainSearchActions";

const Filters = () => {
	const dispatch = useAppDispatch();
	const filterSearch = useSelector((state) => state.filterSearch);
	const mainSearch = useSelector((state) => state.mainSearch);
	const { width: windowWidth } = useWindowSize();

	// Show slide up menu state
	const [showSchoolFilterSearch, toggleSchoolFilterSearch] = useState(false);
	const [showProfessorFilterSearch, toggleProfessorFilterSearch] =
		useState(false);
	const [showDepartmentFilterSearch, toggleDepartmentFilterSearch] =
		useState(false);
	const [showCourseFilterSearch, toggleCourseFilterSearch] = useState(false);
	const [showScoreFilterSearch, toggleScoreFilterSearch] = useState(false);
	const [showDifficultyFilterSearch, toggleDifficultyFilterSearch] =
		useState(false);
	const [showReviewsFilterSearch, toggleReviewsFilterSearch] = useState(false);

	// // School Handlers
	const handleSchoolFilterClick = () => {
		dispatch(setFilterSearchType("school"));
		toggleSchoolFilterSearch((current) => !current);
	};

	// Professor Handlers
	const handleProfessorFilterClick = () => {
		dispatch(setFilterSearchType("professor"));
		toggleProfessorFilterSearch((current) => !current);
	};

	// Course Handlers
	const handleCourseFilterClick = () => {
		dispatch(setFilterSearchType("course"));
		toggleCourseFilterSearch((current) => !current);
	};

	// Score Handlers
	const handleScoreFilterClick = () => {
		toggleScoreFilterSearch((current) => !current);
	};

	// Difficulty Handlers
	const handleDifficultyFilterClick = () => {
		toggleDifficultyFilterSearch((current) => !current);
	};

	// Review Handlers
	const handleReviewsFilterClick = () => {
		toggleReviewsFilterSearch((current) => !current);
	};

	const handleAddFilterClick = (e) => {
		const filterType = e.target.dataset.filtertype;
		const filterValue = e.target.dataset.filtervalue;
		const filterText = e.target.dataset.filtertext;
		const payload = {
			filter_value: filterValue,
			filter_text: filterText,
		};

		dispatch(setFilterSearchFilter([filterType, payload]));
		filterSearch.filters[filterType] = payload;
		dispatch(setMainSearchFilter(filterSearch.filters));
		dispatch(search(mainSearch.userInput));
	};

	const scoreFilterButtons = [
		{ filterValue: "4.5", filterText: "4.5 or above" },
		{ filterValue: "4", filterText: "4 or above" },
		{ filterValue: "3", filterText: "3 or above" },
		{ filterValue: "2", filterText: "2 or above" },
		{ filterValue: "1", filterText: "1 or above" },
	];

	const difficultyFilterButtons = [
		{ filterValue: "1", filterText: "1 or below" },
		{ filterValue: "2", filterText: "2 or below" },
		{ filterValue: "3", filterText: "3 or below" },
		{ filterValue: "4", filterText: "4 or below" },
		{ filterValue: "4.5", filterText: "4.5 or below" },
	];

	const reviewsFilterButtons = [
		{ filterValue: "45", filterText: "45 or above" },
		{ filterValue: "35", filterText: "35 or above" },
		{ filterValue: "25", filterText: "25 or above" },
		{ filterValue: "15", filterText: "15 or above" },
		{ filterValue: "5", filterText: "5 or above" },
	];

	const filterButtons = [
		{
			text: "School",
			filter: filterSearch.filters.school.filter_text,
			allowedFor: ["professor", "course"],
			filterType: "school",
			icon: "./graduation-cap.svg",
			iconAlt: "",
			callback: handleSchoolFilterClick,
			selectable: false,
		},
		{
			text: "Professor",
			filter: filterSearch.filters.professor.filter_text,
			allowedFor: ["course"],
			filterType: "professor",
			icon: "./glasses.svg",
			iconAlt: "",
			callback: handleProfessorFilterClick,
			selectable: false,
		},
		{
			text: "Course",
			filter: filterSearch.filters.course.filter_text,
			allowedFor: ["professor"],
			filterType: "course",
			icon: "./book-solid.svg",
			iconAlt: "",
			callback: handleCourseFilterClick,
			selectable: false,
		},

		{
			text: "Score",
			filter: filterSearch.filters.score.filter_text,
			allowedFor: ["professor"],
			filterType: "score",
			icon: "./star-solid.svg",
			iconAlt: "",
			callback: handleScoreFilterClick,
			showSlideUp: showScoreFilterSearch,
			toggleSlideUp: toggleScoreFilterSearch,
			filterOptions: scoreFilterButtons,
			title: "Score",
			selectable: true,
		},
		{
			text: "Difficulty",
			filter: filterSearch.filters.difficulty.filter_text,
			allowedFor: ["professor"],
			filterType: "difficulty",
			icon: "./weight-light-green.svg",
			iconAlt: "",
			callback: handleDifficultyFilterClick,
			showSlideUp: showDifficultyFilterSearch,
			toggleSlideUp: toggleDifficultyFilterSearch,
			filterOptions: difficultyFilterButtons,
			title: "Difficulty",
			selectable: true,
		},
		{
			text: "Reviews",
			filter: filterSearch.filters.reviews.filter_text,
			allowedFor: ["professor"],
			filterType: "reviews",
			icon: "./thumbs-up-light-green.svg",
			iconAlt: "",
			callback: handleReviewsFilterClick,
			showSlideUp: showReviewsFilterSearch,
			toggleSlideUp: toggleReviewsFilterSearch,
			filterOptions: reviewsFilterButtons,
			title: "Reviews",
			selectable: true,
		},
	];

	return (
		<div className="flex flex-wrap gap-2">
			{filterButtons
				.filter(({ allowedFor }) => allowedFor.includes(mainSearch.type))
				.map((data, index) => (
					<MainSearchCardFilter
						key={index}
						data={data}
						handleAddFilterClick={handleAddFilterClick}
					/>
				))}
		</div>
	);
};

export default Filters;
