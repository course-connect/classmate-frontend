import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useRouter } from "next/router";
import Image from "next/image";
import { setSearchTwoFilter } from "../redux/hero-search-two/heroSearchTwoActions";

const HeroSchoolAndProfessorResults = ({
	setValue,
	setSchoolFilter,
	setShowFirstSearch,
}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const heroSearchTwo = useSelector((state) => state.heroSearchTwo);

	const handleCourseClick = (course) => {
		const searchFilter = {
			course: course.course_id,
		};
		dispatch(setSearchTwoFilter(searchFilter));
		router.push(`/search`);
	};

	const handleProfessorClick = (professor) => {
		router.push(`/professor/${professor.user_id}`);
	};

	return (
		<div className="absolute top-16 z-10 w-full overflow-hidden rounded-xl shadow-lg">
			{heroSearchTwo.results.map((item, index) => (
				<button
					onClick={
						heroSearchTwo.type === "course"
							? () => handleCourseClick(item)
							: () => handleProfessorClick(item)
					}
					key={index}
					type="button"
					className={`flex w-full items-center border-b-[1px] bg-classmate-tan-2 px-5 py-5 text-left outline-none ring-classmate-gold-1 hover:bg-classmate-gray-5 focus:bg-classmate-gray-5`}>
					<Image
						height={20}
						width={20}
						src={
							heroSearchTwo.type === "course"
								? "./book-solid.svg"
								: "./glasses.svg"
						}
						className="mr-5"
						alt=""
					/>
					<div className="flex flex-col justify-center gap-1">
						<p className="font-classmate leading-none text-classmate-green-6">
							{heroSearchTwo.type === "course"
								? item.course_name
								: `${item.first_name} ${item.last_name}`}
						</p>
						<p className="font-classmate w-fit text-sm leading-none text-classmate-green-7">
							{heroSearchTwo.type === "course"
								? item.course_code
								: item.school_names?.[0]}
						</p>
					</div>
				</button>
			))}
		</div>
	);
};

export default HeroSchoolAndProfessorResults;
