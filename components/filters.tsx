import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MobileSlideUp from "../components/MobileSlideUp";
import ClassmateButton from "./ClassmateButton";

import FilterSearch from "./FilterSearch";
import FilterSearchResults from "./FilterSearchResults";

// Next
import Image from "next/image";

// Redux components
import { useAppDispatch } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import {
	resetFilterSearch,
	setFilterSearchType,
	setFilterSearchFilter,
} from "../redux/filter-search/filterSearchActions";

import {
	setMainSearchFilter,
	resetMainSearch,
	resetMainSearchFilters,
} from "../redux/main-search/mainSearchActions";

const Filters = () => {
	const filterSearch = useSelector((state) => state.filterSearch);
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
	const [scoreFilter, setScoreFilter] = useState("");
	const [difficultyFilter, setDifficultyFilter] = useState("");
	const [reviewsFilter, setReviewsFilter] = useState("");

	const handleSchoolFilterClick = () => {
		// dispatch(clearFilterSearch());
		dispatch(setFilterSearchType("school"));
		toggleSchoolFilterSearch((current) => !current);
	};

	const handleSchoolCancel = () => {
		toggleSchoolFilterSearch((current) => !current);
	};

	const handleDepartmentFilterClick = () => {
		// dispatch(clearFilterSearch());
		dispatch(setFilterSearchType("department"));
		toggleDepartmentFilterSearch((current) => !current);
	};

	const handleDepartmentCancel = () => {
		toggleDepartmentFilterSearch((current) => !current);
	};

	const handleProfessorFilterClick = () => {
		// dispatch(clearFilterSearch());
		dispatch(setFilterSearchType("professor"));
		toggleProfessorFilterSearch((current) => !current);
	};

	const handlProfessorCancel = () => {
		toggleProfessorFilterSearch((current) => !current);
	};

	const handleCourseFilterClick = () => {
		// dispatch(clearFilterSearch());
		dispatch(setFilterSearchType("course"));
		toggleCourseFilterSearch((current) => !current);
	};

	const handleCourseCancel = () => {
		toggleCourseFilterSearch((current) => !current);
	};

	const handleScoreFilterClick = () => {
		toggleScoreFilterSearch((current) => !current);
	};

	const handleDifficultyFilterClick = () => {
		toggleDifficultyFilterSearch((current) => !current);
	};

	const handleReviewsFilterClick = () => {
		toggleReviewsFilterSearch((current) => !current);
	};

	const handleClearClick = () => {
		setScoreFilter("");
		setDifficultyFilter("");
		setReviewsFilter("");
		dispatch(resetMainSearchFilters());
		dispatch(resetFilterSearch());
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
		switch (filterType) {
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

	const handleAppleyClick = () => {
		dispatch(setMainSearchFilter(filterSearch.filters));
	};

	const filterButtons = [
		{
			text: "School",
			filter: "All",
			icon: "./graduation-cap.svg",
			iconAlt: "",
			callback: handleSchoolFilterClick,
		},
		{
			text: "Department",
			filter: "All",
			icon: "./thumbs-up-light-green.svg",
			iconAlt: "",
			callback: handleDepartmentFilterClick,
		},
		{
			text: "Professor",
			filter: "All",
			icon: "./glasses.svg",
			iconAlt: "",
			callback: handleProfessorFilterClick,
		},
		{
			text: "Course",
			filter: "All",
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
						text={button.text}
						filter={button.filter}
						icon={button.icon}
						iconAlt={button.iconAlt}
						callback={button.callback}>
						<p className="text-classmate-green-6">{button.text}</p>
					</FilterButton>
				))}
				<div className="mt-3 flex gap-2">
					<ClassmateButton
						variant="filled"
						size="md"
						fullWidth={true}
						callback={handleClearClick}
						styles="bg-classmate-gray-6 text-classmate-green-7">
						Clear
					</ClassmateButton>
					<ClassmateButton
						variant="filled"
						size="md"
						fullWidth={true}
						callback={handleAppleyClick}
						styles="bg-classmate-gold-1 text-classmate-tan-2">
						Apply
					</ClassmateButton>
				</div>
			</div>
			<MobileSlideUp
				showSlideUp={showSchoolFilterSearch}
				toggleSlideUp={toggleSchoolFilterSearch}>
				<div className="flex h-[484px] w-full flex-col gap-3 p-6">
					<div className="font-classmate flex items-center justify-between text-lg text-classmate-green-6">
						<p className="font-classmate-bold  w-full text-lg text-classmate-green-6">
							School
						</p>
						<ClassmateButton
							callback={handleSchoolCancel}
							variant="text"
							size="xs"
							styles="!px-2 !py-0 !text-lg ">
							back
						</ClassmateButton>
					</div>
					<FilterSearch showSlideUp={showSchoolFilterSearch} />
					<div
						onClick={handleAddFilterClick}
						className="flex w-full flex-col gap-3">
						<FilterSearchResults />
					</div>
				</div>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showProfessorFilterSearch}
				toggleSlideUp={toggleProfessorFilterSearch}>
				<div className="flex h-[484px] w-full flex-col gap-3 p-6">
					<div className="font-classmate flex items-center justify-between text-lg text-classmate-green-6">
						<p className="font-classmate-bold  w-full text-lg text-classmate-green-6">
							Professor
						</p>
						<ClassmateButton
							callback={handlProfessorCancel}
							variant="text"
							size="xs"
							styles="!px-2 !py-0 !text-lg">
							back
						</ClassmateButton>
					</div>
					<FilterSearch showSlideUp={showProfessorFilterSearch} />
					<div
						onClick={handleAddFilterClick}
						className="flex w-full flex-col gap-3">
						<FilterSearchResults />
					</div>
				</div>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showCourseFilterSearch}
				toggleSlideUp={toggleCourseFilterSearch}>
				<div className="flex h-[484px] w-full flex-col gap-3 p-6">
					<div className="font-classmate flex items-center justify-between text-lg text-classmate-green-6">
						<p className="font-classmate-bold  w-full text-lg text-classmate-green-6">
							Course
						</p>
						<ClassmateButton
							callback={handleCourseCancel}
							variant="text"
							size="xs"
							styles="!px-2 !py-0 !text-lg">
							back
						</ClassmateButton>
					</div>
					<FilterSearch showSlideUp={showCourseFilterSearch} />
					<div
						onClick={handleAddFilterClick}
						className="flex w-full flex-col gap-3">
						<FilterSearchResults />
					</div>
				</div>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showScoreFilterSearch}
				toggleSlideUp={toggleScoreFilterSearch}>
				<div
					className="font-classmate flex h-[484px] w-full flex-col items-start gap-2 p-6"
					onClick={handleAddFilterClick}>
					<p className="font-classmate-bold pointer-events-none mb-2 w-full text-lg text-classmate-green-6">
						Score
					</p>
					{scoreFilterButtons.map((button, index) => {
						const filterSelected =
							button.filterValue === filterSearch.filters.score;
						return (
							<FilterButton
								key={index}
								filterType="score"
								filterValue={button.filterValue}
								filterText={button.filterText}
								styles="">
								<div className="bri relative flex w-full items-center justify-between overflow-hidden ">
									<p className={`text-classmate-green-6`}>
										{button.filterText}
									</p>
									{/* Add the check mark when filter is already added */}
									{filterSelected && (
										<div className="absolute right-0 flex h-full w-8 items-center justify-center">
											<Image
												width={16}
												height={10}
												src="./check-green.svg"
												alt="check mark"
											/>
										</div>
									)}
								</div>
							</FilterButton>
						);
					})}
				</div>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showDifficultyFilterSearch}
				toggleSlideUp={toggleDifficultyFilterSearch}>
				<div
					onClick={handleAddFilterClick}
					className="font-classmate flex h-[484px] w-full flex-col items-start gap-2 p-6">
					<p className="font-classmate-bold pointer-events-none mb-2 w-full text-lg text-classmate-green-6">
						Difficulty
					</p>
					{difficultyFilterButtons.map((button, index) => {
						const filterSelected =
							button.filterValue === filterSearch.filters.difficulty;
						return (
							<FilterButton
								key={index}
								filterType="difficulty"
								filterValue={button.filterValue}
								filterText={button.filterText}>
								<div className="relative flex w-full items-center justify-between overflow-hidden">
									<p className="text-classmate-green-6">{button.filterText}</p>
									{/* Add the check mark when filter is already added */}
									{filterSelected && (
										<div className="absolute right-0 flex h-full w-8 items-center justify-center bg-classmate-gray-6">
											<Image
												width={16}
												height={10}
												src="./check-green.svg"
												alt="check mark"
											/>
										</div>
									)}
								</div>
							</FilterButton>
						);
					})}
				</div>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showReviewsFilterSearch}
				toggleSlideUp={toggleReviewsFilterSearch}>
				<div
					onClick={handleAddFilterClick}
					className="font-classmate flex h-[484px] w-full flex-col items-start gap-2 p-6">
					<p className="font-classmate-bold mb-2 w-full text-lg text-classmate-green-6">
						Number of Reviews
					</p>
					{reviewsFilterButtons.map((button, index) => {
						const filterSelected =
							button.filterValue === filterSearch.filters.reviews;
						return (
							<FilterButton
								key={index}
								filterType="reviews"
								filterValue={button.filterValue}
								filterText={button.filterText}>
								<div className="relative flex w-full items-center justify-between overflow-hidden">
									<p className="text-classmate-green-6">{button.filterText}</p>
									{/* Add the check mark when filter is already added */}
									{filterSelected && (
										<div className="absolute right-0 flex h-full w-8 items-center justify-center bg-classmate-gray-6">
											<Image
												width={16}
												height={10}
												src="./check-green.svg"
												alt="check mark"
											/>
										</div>
									)}
								</div>
							</FilterButton>
						);
					})}
				</div>
			</MobileSlideUp>
		</>
	);
};

export default Filters;
