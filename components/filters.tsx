import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MobileSlideUp from "../components/MobileSlideUp";
import ClassmateButton from "./ClassmateButton";

import FilterSearch from "./FilterSearch";
import FilterOptions from "./FilterOptions";
import FilterSearchResults from "./FilterSearchResults";
import FilterActions from "./FilterActions";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
	setFilterSearchType,
	setFilterSearchFilter,
} from "../redux/filter-search/filterSearchActions";

const Filters = () => {
	const dispatch = useAppDispatch();
	const filterSearch = useSelector((state) => state.filterSearch);
	const mainSearchType = useSelector((state) => state.mainSearch.type);

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

		const payload = {
			filter_value: filterValue,
			filter_text: filterText,
		};

		dispatch(setFilterSearchFilter([filterType, payload]));
	};

	const filterButtons = [
		{
			text: "School",
			filter: filterSearch.filters.school.filter_text,
			allowedFor: ["professor", "course"],
			filterType: "school",
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
			filter: filterSearch.filters.professor.filter_text,
			allowedFor: ["course"],
			filterType: "professor",
			icon: "./glasses.svg",
			iconAlt: "",
			callback: handleProfessorFilterClick,
		},
		{
			text: "Course",
			filter: filterSearch.filters.course.filter_text,
			allowedFor: ["professor"],
			filterType: "course",
			icon: "./book-solid.svg",
			iconAlt: "",
			callback: handleCourseFilterClick,
		},

		{
			text: "Score",
			filter: filterSearch.filters.score.filter_text,
			allowedFor: ["professor"],
			filterType: "score",
			icon: "./star-solid.svg",
			iconAlt: "",
			callback: handleScoreFilterClick,
		},
		{
			text: "Difficulty",
			filter: filterSearch.filters.difficulty.filter_text,
			allowedFor: ["professor"],
			filterType: "difficulty",
			icon: "./weight-light-green.svg",
			iconAlt: "",
			callback: handleDifficultyFilterClick,
		},
		{
			text: "Reviews",
			filter: filterSearch.filters.reviews.filter_text,
			allowedFor: ["professor"],
			filterType: "reviews",
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

				{filterButtons
					.filter(({ allowedFor }) => allowedFor.includes(mainSearchType))
					.map((button, index) => (
						<FilterButton
							key={index}
							filter={button.filter}
							filterType={button.filterType}
							icon={button.icon}
							iconAlt={button.iconAlt}
							callback={button.callback}>
							<p className="text-classmate-green-6">{button.text}</p>
						</FilterButton>
					))}
				<FilterActions />
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
								styles="!px-2 !py-0 !text-base">
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
