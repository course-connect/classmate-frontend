import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MobileSlideUp from "../components/MobileSlideUp";
import ClassmateButton from "./ClassmateButton";

import FilterSearch from "./FilterSearch";
import FilterSearchResults from "./FilterSearchResults";

// Redux components
import { useAppDispatch } from "../hooks/reduxHooks";
import {
	clearFilterSearch,
	resetFilterSearch,
	setFilterSearchType,
	setFilterSearchFilter,
} from "../redux/filter-search/filterSearchActions";

const Filters = () => {
	const dispatch = useAppDispatch();

	const [showSchoolFilterSearch, toggleSchoolFilterSearch] = useState(false);
	const [showProfessorFilterSearch, toggleProfessorFilterSearch] =
		useState(false);
	const [showCourseFilterSearch, toggleCourseFilterSearch] = useState(false);
	const [showScoreFilterSearch, toggleScoreFilterSearch] = useState(false);
	const [showDifficultyFilterSearch, toggleDifficultyFilterSearch] =
		useState(false);
	const [showReviewsFilterSearch, toggleReviewsFilterSearch] = useState(false);

	const handleSchoolFilterClick = () => {
		dispatch(clearFilterSearch());
		dispatch(setFilterSearchType("school"));
		toggleSchoolFilterSearch((current) => !current);
	};

	const handleProfessorFilterClick = () => {
		dispatch(clearFilterSearch());
		dispatch(setFilterSearchType("professor"));
		toggleProfessorFilterSearch((current) => !current);
	};

	const handleCourseFilterClick = () => {
		dispatch(clearFilterSearch());
		dispatch(setFilterSearchType("course"));
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

	const handleResetClick = () => {
		dispatch(resetFilterSearch());
	};

	const handleAddFilterClick = (e) => {
		const filterType = e.target.dataset.filtertype;
		const filterValue = e.target.dataset.filtervalue;
		console.log(filterType, filterValue);
		dispatch(setFilterSearchFilter([filterType, filterValue]));
	};

	return (
		<>
			<div className="flex w-full flex-col gap-2 p-6">
				<div className="font-classmate mb-2 flex items-center justify-between text-lg text-classmate-green-6">
					<p className="font-classmate-bold  w-full text-lg text-classmate-green-6">
						Filters
					</p>
					<ClassmateButton
						callback={handleResetClick}
						variant="text"
						size="xs"
						styles="!px-2 !py-0 !text-lg">
						reset
					</ClassmateButton>
				</div>

				<FilterButton
					text="School"
					filter="All"
					icon="./graduation-cap.svg"
					iconAlt=""
					callback={handleSchoolFilterClick}
				/>
				<FilterButton
					text="Professor"
					filter="All"
					icon="./glasses.svg"
					iconAlt=""
					callback={handleProfessorFilterClick}
				/>
				<FilterButton
					text="Course"
					filter="All"
					icon="./book-solid.svg"
					iconAlt=""
					callback={handleCourseFilterClick}
				/>
				<FilterButton
					text="Score"
					filter="All"
					icon="./star-solid.svg"
					iconAlt=""
					callback={handleScoreFilterClick}
				/>
				<FilterButton
					text="Difficulty"
					filter="All"
					icon="./weight-light-green.svg"
					iconAlt=""
					callback={handleDifficultyFilterClick}
				/>
				<FilterButton
					text="Reviews"
					filter="All"
					icon="./thumbs-up-light-green.svg"
					iconAlt=""
					callback={handleReviewsFilterClick}
				/>
			</div>
			<MobileSlideUp
				showSlideUp={showSchoolFilterSearch}
				toggleSlideUp={toggleSchoolFilterSearch}>
				<div className="flex h-[384px] w-full flex-col gap-3 p-6">
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
				<div className="flex h-[384px] w-full flex-col gap-3 p-6">
					<FilterSearch showSlideUp={showSchoolFilterSearch} />
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
				<div className="flex h-[384px] w-full flex-col gap-3 p-6">
					<FilterSearch showSlideUp={showSchoolFilterSearch} />
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
					className="font-classmate flex w-full flex-col items-start gap-2 p-6"
					onClick={handleAddFilterClick}>
					<p className="font-classmate-bold mb-2 w-full text-lg text-classmate-green-6">
						Score
					</p>
					<FilterButton
						filterType="score"
						filterValue={"4.5"}
						text="4.5 or above"
					/>
					<FilterButton
						filterType="score"
						filterValue={"4"}
						text="4 or above"
					/>
					<FilterButton
						filterType="score"
						filterValue={"3"}
						text="3 or above"
					/>
					<FilterButton
						filterType="score"
						filterValue={"2"}
						text="2 or above"
					/>
					<FilterButton
						filterType="score"
						filterValue={"1"}
						text="1 or above"
					/>
					<FilterButton filterType="score" filterValue={"-1"} text="none" />
				</div>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showDifficultyFilterSearch}
				toggleSlideUp={toggleDifficultyFilterSearch}>
				<div
					onClick={handleAddFilterClick}
					className="font-classmate flex w-full flex-col items-start gap-2 p-6">
					<p className="font-classmate-bold mb-2 w-full text-lg text-classmate-green-6">
						Difficulty
					</p>
					<FilterButton
						filterType="difficulty"
						filterValue={"1"}
						text="1 or below"
					/>
					<FilterButton
						filterType="difficulty"
						filterValue={"2"}
						text="2 or below"
					/>
					<FilterButton
						filterType="difficulty"
						filterValue={"3"}
						text="3 or below"
					/>
					<FilterButton
						filterType="difficulty"
						filterValue={"4"}
						text="4 or below"
					/>
					<FilterButton
						filterType="difficulty"
						filterValue={"4.5"}
						text="4.5 or below"
					/>
					<FilterButton
						filterType="difficulty"
						filterValue={"-1"}
						text="none"
					/>
				</div>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showReviewsFilterSearch}
				toggleSlideUp={toggleReviewsFilterSearch}>
				<div
					onClick={handleAddFilterClick}
					className="font-classmate flex w-full flex-col items-start gap-2 p-6">
					<p className="font-classmate-bold mb-2 w-full text-lg text-classmate-green-6">
						Number of Reviews
					</p>
					<FilterButton
						filterType="reviews"
						filterValue={"45"}
						text="45 or above"
					/>
					<FilterButton
						filterType="reviews"
						filterValue={"35"}
						text="35 or above"
					/>
					<FilterButton
						filterType="reviews"
						filterValue={"25"}
						text="25 or above"
					/>
					<FilterButton
						filterType="reviews"
						filterValue={"15"}
						text="15 or above"
					/>
					<FilterButton
						filterType="reviews"
						filterValue={"5"}
						text="5 or above"
					/>
					<FilterButton filterType="reviews" filterValue={"-1"} text="none" />
				</div>
			</MobileSlideUp>
		</>
	);
};

export default Filters;
