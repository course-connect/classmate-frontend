import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MobileSlideUp from "../components/MobileSlideUp";
import ClassmateButton from "./ClassmateButton";

import FilterSearch from "./FilterSearch";
import FilterOptions from "./FilterOptions";
import FilterSearchResults from "./FilterSearchResults";

// Redux components
import { useAppDispatch } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import {
	setFilterSearchType,
	setFilterSearchFilter,
} from "../redux/filter-search/filterSearchActions";

import FilterActions from "./FilterActions";

const Filters = () => {
	const dispatch = useAppDispatch();

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

	// Filter value state
	const [schoolFilter, setSchoolFilter] = useState("");
	const [professorFilter, setProfessorFilter] = useState("");
	const [courseFilter, setCourseFilter] = useState("");
	const [scoreFilter, setScoreFilter] = useState("");
	const [difficultyFilter, setDifficultyFilter] = useState("");
	const [reviewsFilter, setReviewsFilter] = useState("");
	const resetHandlers = [
		setSchoolFilter,
		setProfessorFilter,
		setCourseFilter,
		setScoreFilter,
		setDifficultyFilter,
		setReviewsFilter,
	];

	// School Handlers
	const handleSchoolFilterClick = () => {
		dispatch(setFilterSearchType("school"));
		toggleSchoolFilterSearch((current) => !current);
	};

	const handleSchoolCancel = () => {
		toggleSchoolFilterSearch((current) => !current);
	};

	// const handleDepartmentFilterClick = () => {
	// 	dispatch(setFilterSearchType("department"));
	// 	toggleDepartmentFilterSearch((current) => !current);
	// };

	// const handleDepartmentCancel = () => {
	// 	toggleDepartmentFilterSearch((current) => !current);
	// };

	// Professor Handlers
	const handleProfessorFilterClick = () => {
		dispatch(setFilterSearchType("professor"));
		toggleProfessorFilterSearch((current) => !current);
	};

	const handleProfessorCancel = () => {
		toggleProfessorFilterSearch((current) => !current);
	};

	// Course Handlers
	const handleCourseFilterClick = () => {
		dispatch(setFilterSearchType("course"));
		toggleCourseFilterSearch((current) => !current);
	};

	const handleCourseCancel = () => {
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
		setFilterDisplay(filterType, filterText);
		dispatch(setFilterSearchFilter([filterType, filterValue]));
	};

	const setFilterDisplay = (filterType, filterText) => {
		filterText = filterText === "none" ? "" : filterText;
		console.log(filterText);
		switch (filterType) {
			case "school":
				setSchoolFilter(filterText);
				break;
			case "professor":
				setProfessorFilter(filterText);
				break;
			case "course":
				setCourseFilter(filterText);
				break;
			case "score":
				setScoreFilter(filterText);
				break;
			case "difficulty":
				setDifficultyFilter(filterText);
				break;
			case "reviews":
				setReviewsFilter(filterText);
				break;
			default:
		}
	};

	const filterButtons = [
		{
			text: "School",
			filter: schoolFilter,
			icon: "./graduation-cap.svg",
			iconAlt: "",
			callback: handleSchoolFilterClick,
		},
		// {
		// 	text: "Department",
		// 	filter: "All",
		// 	icon: "./thumbs-up-light-green.svg",
		// 	iconAlt: "",
		// 	callback: handleDepartmentFilterClick,
		// },
		{
			text: "Professor",
			filter: professorFilter,
			icon: "./glasses.svg",
			iconAlt: "",
			callback: handleProfessorFilterClick,
		},
		{
			text: "Course",
			filter: courseFilter,
			icon: "./book-solid.svg",
			iconAlt: "",
			callback: handleCourseFilterClick,
		},

		{
			text: "Score",
			filter: scoreFilter,
			icon: "./star-solid.svg",
			iconAlt: "",
			callback: handleScoreFilterClick,
		},
		{
			text: "Difficulty",
			filter: difficultyFilter,
			icon: "./weight-light-green.svg",
			iconAlt: "",
			callback: handleDifficultyFilterClick,
		},
		{
			text: "Reviews",
			filter: reviewsFilter,
			icon: "./thumbs-up-light-green.svg",
			iconAlt: "",
			callback: handleReviewsFilterClick,
		},
	];

	const searchableFilters = [
		{
			name: "School",
			showSlideUp: showSchoolFilterSearch,
			toggleSlideUp: toggleSchoolFilterSearch,
			handleCancel: handleSchoolCancel,
		},
		{
			name: "Professor",
			showSlideUp: showProfessorFilterSearch,
			toggleSlideUp: toggleProfessorFilterSearch,
			handleCancel: handleProfessorCancel,
		},
		{
			name: "Course",
			showSlideUp: showCourseFilterSearch,
			toggleSlideUp: toggleCourseFilterSearch,
			handleCancel: handleCourseCancel,
		},
	];

	const scoreFilterButtons = [
		{ filterValue: "4.5", filterText: "4.5 or above" },
		{ filterValue: "4", filterText: "4 or above" },
		{ filterValue: "3", filterText: "3 or above" },
		{ filterValue: "2", filterText: "2 or above" },
		{ filterValue: "1", filterText: "1 or above" },
		{ filterValue: "-1", filterText: "none" },
	];

	const difficultyFilterButtons = [
		{ filterValue: "1", filterText: "1 or below" },
		{ filterValue: "2", filterText: "2 or below" },
		{ filterValue: "3", filterText: "3 or below" },
		{ filterValue: "4", filterText: "4 or below" },
		{ filterValue: "4.5", filterText: "4.5 or below" },
		{ filterValue: "-1", filterText: "none" },
	];

	const reviewsFilterButtons = [
		{ filterValue: "45", filterText: "45 or above" },
		{ filterValue: "35", filterText: "35 or above" },
		{ filterValue: "25", filterText: "25 or above" },
		{ filterValue: "15", filterText: "15 or above" },
		{ filterValue: "5", filterText: "5 or above" },
		{ filterValue: "-1", filterText: "none" },
	];

	const selectableFilters = [
		{
			showSlideUp: showScoreFilterSearch,
			toggleSlideUp: toggleScoreFilterSearch,
			filterOptions: scoreFilterButtons,
			title: "Score",
			filterType: "score",
		},
		{
			showSlideUp: showDifficultyFilterSearch,
			toggleSlideUp: toggleDifficultyFilterSearch,
			filterOptions: difficultyFilterButtons,
			title: "Difficulty",
			filterType: "difficulty",
		},
		{
			showSlideUp: showReviewsFilterSearch,
			toggleSlideUp: toggleReviewsFilterSearch,
			filterOptions: reviewsFilterButtons,
			title: "Reviews",
			filterType: "reviews",
		},
	];

	return (
		<>
			<div className="flex w-full flex-col gap-2 p-6">
				<div className="font-classmate mb-2 flex items-center justify-between text-lg text-classmate-green-6">
					<p className="font-classmate-bold  w-full text-lg text-classmate-green-6">
						Filters
					</p>
				</div>

				{filterButtons.map((button, index) => (
					<FilterButton
						key={index}
						filter={button.filter}
						icon={button.icon}
						iconAlt={button.iconAlt}
						callback={button.callback}>
						<p className="text-classmate-green-6">{button.text}</p>
					</FilterButton>
				))}
				<FilterActions resetHandlers={resetHandlers} />
			</div>
			{searchableFilters.map((category, index) => (
				<MobileSlideUp
					key={index}
					showSlideUp={category.showSlideUp}
					toggleSlideUp={category.toggleSlideUp}>
					<div className="flex h-[484px] w-full flex-col gap-3 p-6">
						<div className="font-classmate flex items-center justify-between text-lg text-classmate-green-6">
							<p className="font-classmate-bold w-full text-lg text-classmate-green-6">
								{category.name}
							</p>
							<ClassmateButton
								callback={category.handleCancel}
								variant="text"
								size="xs"
								styles="!px-2 !py-0 !text-lg">
								back
							</ClassmateButton>
						</div>
						<FilterSearch showSlideUp={category.showSlideUp} />
						<div
							onClick={handleAddFilterClick}
							className="flex w-full flex-col gap-3">
							<FilterSearchResults />
						</div>
					</div>
				</MobileSlideUp>
			))}
			{selectableFilters.map((filterData, index) => (
				<MobileSlideUp
					key={index}
					showSlideUp={filterData.showSlideUp}
					toggleSlideUp={filterData.toggleSlideUp}>
					<FilterOptions
						filterOptions={filterData.filterOptions}
						callback={handleAddFilterClick}
						title={filterData.title}
						filterType={filterData.filterType}
					/>
				</MobileSlideUp>
			))}
		</>
	);
};

export default Filters;
