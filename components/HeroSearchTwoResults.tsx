import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useRouter } from "next/router";
import Image from "next/image";
import { setMultiMainSearchFilters } from "../redux/main-search/mainSearchActions";

const HeroSearchTwoResults = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const heroSearchOne = useSelector((state) => state.heroSearchOne);
	const heroSearchTwo = useSelector((state) => state.heroSearchTwo);

	const handleCourseClick = (course) => {
		const filters = {
			school: heroSearchOne.filters.school,
			course: {
				filter_value: course.firebaseID,
				filter_text: course.data.course_name,
			},
		};
		dispatch(setMultiMainSearchFilters(filters));
		router.push(`/search`);
	};

	const handleProfessorClick = (professor) => {
		router.push(`/professor/${professor.data.user_id}`);
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
								? item.data.course_name
								: `${item.data.first_name} ${item.data.last_name}`}
						</p>
						<p className="font-classmate w-fit text-sm leading-none text-classmate-green-7">
							{heroSearchTwo.type === "course"
								? item.data.course_code
								: item.data.school_names?.[0]}
						</p>
					</div>
				</button>
			))}
		</div>
	);
};

export default HeroSearchTwoResults;
