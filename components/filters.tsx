import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MobileSlideUp from "../components/MobileSlideUp";

const Filters = () => {
	const [showSchoolFilterSearch, toggleSchoolFilterSearch] = useState(false);
	const [showProfessorFilterSearch, toggleProfessorFilterSearch] =
		useState(false);
	const [showCourseFilterSearch, toggleCourseFilterSearch] = useState(false);
	const [showScoreFilterSearch, toggleScoreFilterSearch] = useState(false);
	const [showDifficultyFilterSearch, toggleDifficultyFilterSearch] =
		useState(false);
	const [showReviewsFilterSearch, toggleReviewsFilterSearch] = useState(false);

	const handleSchoolFilterClick = () => {
		toggleSchoolFilterSearch((current) => !current);
	};

	const handleProfessorFilterClick = () => {
		toggleProfessorFilterSearch((current) => !current);
	};

	const handleCourseFilterClick = () => {
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

	return (
		<>
			<div className="flex w-full flex-col gap-2 p-6">
				<FilterButton
					text="School"
					icon="./graduation-cap.svg"
					iconAlt=""
					callback={handleSchoolFilterClick}
				/>
				<FilterButton
					text="Professor"
					icon="./glasses.svg"
					iconAlt=""
					callback={handleProfessorFilterClick}
				/>
				<FilterButton
					text="Course"
					icon="./book-solid.svg"
					iconAlt=""
					callback={handleCourseFilterClick}
				/>
				<FilterButton
					text="Score"
					icon="./star-solid.svg"
					iconAlt=""
					callback={handleScoreFilterClick}
				/>
				<FilterButton
					text="Difficulty"
					icon="./weight-light-green.svg"
					iconAlt=""
					callback={handleDifficultyFilterClick}
				/>
				<FilterButton
					text="Reviews"
					icon="./thumbs-up-light-green.svg"
					iconAlt=""
					callback={handleReviewsFilterClick}
				/>
			</div>
			<MobileSlideUp
				showSlideUp={showSchoolFilterSearch}
				toggleSlideUp={toggleSchoolFilterSearch}>
				<p className="h-[500px]">Search School</p>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showProfessorFilterSearch}
				toggleSlideUp={toggleProfessorFilterSearch}>
				<p className="h-[500px]">Search Professor</p>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showCourseFilterSearch}
				toggleSlideUp={toggleCourseFilterSearch}>
				<p className="h-[500px]">Search Course</p>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showScoreFilterSearch}
				toggleSlideUp={toggleScoreFilterSearch}>
				<p className="h-[500px]">Search Score</p>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showDifficultyFilterSearch}
				toggleSlideUp={toggleDifficultyFilterSearch}>
				<p className="h-[500px]">Search Difficulty</p>
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showReviewsFilterSearch}
				toggleSlideUp={toggleReviewsFilterSearch}>
				<p className="h-[500px]">Search Reviews</p>
			</MobileSlideUp>
		</>
	);
};

export default Filters;
