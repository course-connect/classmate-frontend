import React, { useEffect, useState } from "react";
import Tabs from "../../components/ui/Tabs/Tabs";
import Tab from "../../components/ui/Tabs/Tab";
import CustomTabPanel from "../../components/ui/Tabs/CustomTabPanel";
import useWindowSize from "../../hooks/useWindowSize";
import Tag from "../../components/Tag";
import {
	getProfessorReviews,
	clearProfessorReviews,
} from "../../redux/professor/professorActions";
import { useAppDispatch } from "../../hooks/reduxHooks";
import ReviewSkeleton from "./ReviewSkeleton";
import { useSelector } from "react-redux";
import Review from "./Review";

const ProfessorTabs = ({ professor }) => {
	const professorData = useSelector((state) => state.professor);
	const dispatch = useAppDispatch();
	const { width: windowWidth } = useWindowSize();
	const [value, setValue] = useState(0);
	const sortedTags = professor.data.tags
		.sort((a, b) => b.count - a.count)
		.slice(0, 5);

	const handleTabClick = (e) => {
		if (
			e.target.textContent === "Reviews" &&
			professorData.professorReviews.length === 0
		) {
			dispatch(getProfessorReviews(professor.firestoreID));
		}
		setValue(Number(e.target.dataset.index));
	};

	useEffect(() => {
		if (windowWidth >= 768 && value === 2) {
			setValue(0);
		}
	}, [windowWidth]);

	useEffect(() => {
		return () => {
			dispatch(clearProfessorReviews());
		};
	}, []);

	return (
		<div className="flex flex-col gap-6 lg:gap-8">
			<Tabs handleTabClick={handleTabClick} value={value}>
				<Tab label={"Overview"} index={0} />
				<Tab label={"Reviews"} index={1} />
				{windowWidth < 768 && <Tab label={"Tags"} index={2} />}
			</Tabs>
			<CustomTabPanel value={value} index={0}>
				<div className="flex flex-col gap-6 lg:gap-8">
					<div className="font-classmate flex flex-col gap-3 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-lg">
						<h3 className="font-classmate-bold text-2xl leading-6">
							Strengths
						</h3>
						<ul className="flex list-disc flex-col gap-2 pl-4">
							{professor.data.summary.strengths.map((strength) => (
								<li className="font-classmate">{strength}</li>
							))}
						</ul>
					</div>
					<div className="font-classmate flex flex-col gap-3 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-lg">
						<h3 className="font-classmate-bold text-2xl leading-6">
							Weaknesses
						</h3>
						<ul className="flex list-disc flex-col gap-2 pl-4">
							{professor.data.summary.weaknesses.map((strength) => (
								<li className="font-classmate">{strength}</li>
							))}
						</ul>
					</div>
				</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				{professorData.professorReviewsLoading ? (
					<ReviewSkeleton />
				) : (
					<div>
						{professorData.professorReviews.map((review) => (
							<Review review={review} />
						))}
					</div>
				)}
			</CustomTabPanel>
			{windowWidth < 768 && (
				<CustomTabPanel value={value} index={2}>
					<div className="flex flex-col gap-6">
						<div className="font-classmate flex flex-col gap-3 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-lg">
							<h3 className="font-classmate-bold text-2xl leading-6">
								Top Tags
							</h3>
							<div className="flex flex-wrap gap-2">
								{sortedTags.map((tag) => (
									<Tag text={tag.description} score={professor.data.score} />
								))}
							</div>
						</div>
						<div className="font-classmate flex flex-col gap-3 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-lg">
							<h3 className="font-classmate-bold text-2xl leading-6">
								Courses Taught
							</h3>
							<div className="flex flex-wrap gap-2">
								{professor.data.courses.map((course) => (
									<Tag text={course.course_code} score={professor.data.score} />
								))}
							</div>
						</div>
						<div className="font-classmate flex flex-col gap-3 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-lg">
							<h3 className="font-classmate-bold text-2xl leading-6">
								Departments
							</h3>
							<div className="flex flex-wrap gap-2">
								{professor.data.department_names.map((department) => (
									<Tag text={department} score={professor.data.score} />
								))}
							</div>
						</div>
					</div>
				</CustomTabPanel>
			)}
		</div>
	);
};

export default ProfessorTabs;
