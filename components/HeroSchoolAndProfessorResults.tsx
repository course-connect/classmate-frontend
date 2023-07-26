import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useRouter } from "next/router";
import Image from "next/image";
import {
	setSearchFilter,
	clearSearch,
	setSearchType,
} from "../redux/search/searchActions";

const HeroSchoolAndProfessorResults = ({
	setValue,
	setSchoolFilter,
	setShowFirstSearch,
}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { searchType, searchResults, searchLoading } = useSelector(
		(state) => state.search
	);

	const handleSchoolClick = (school) => {
		const searchFilter = {
			school: school.school_id,
		};
		setValue("search", "");
		setShowFirstSearch(false);
		setSchoolFilter(school.school_name);
		dispatch(setSearchFilter(searchFilter));
		dispatch(setSearchType("course"));
		dispatch(clearSearch());
	};

	const handleProfessorClick = (professor) => {
		router.push(`/professor/${professor.user_id}`);
	};

	const results =
		searchType === "school"
			? searchResults.map((school, index: number) => {
					return (
						<button
							onClick={() => handleSchoolClick(school)}
							key={index}
							type="button"
							className={`flex w-full items-center border-b-[1px] bg-classmate-tan-2 px-5 py-5 text-left outline-none ring-classmate-gold-1 hover:bg-classmate-gray-5 focus:bg-classmate-gray-5`}>
							<Image
								height={25}
								width={25}
								src="./graduation-cap.svg"
								className="mr-5 "
								alt=""
							/>
							<div className="flex flex-col justify-center gap-1">
								<p className="font-classmate leading-none text-classmate-green-6">
									{school.school_name}
								</p>
								<p className="font-classmate w-fit text-sm leading-none text-classmate-green-7">
									{school.school_zip}
								</p>
							</div>
						</button>
					);
			  })
			: searchResults.map((professor, index: number) => {
					return (
						<button
							onClick={() => handleProfessorClick(professor)}
							key={index}
							type="button"
							className={`flex w-full items-center border-b-[1px] bg-classmate-tan-2 px-5 py-5 text-left outline-none ring-classmate-gold-1 hover:bg-classmate-gray-5 focus:bg-classmate-gray-5`}>
							<Image
								height={25}
								width={25}
								src="./glasses.svg"
								className="mr-5 "
								alt=""
							/>
							<div className="flex flex-col justify-center gap-1">
								<p className="font-classmate leading-none text-classmate-green-6">
									{`${professor.first_name} ${professor.last_name}`}
								</p>
								<p className="font-classmate w-fit text-sm leading-none text-classmate-green-7">
									{professor.school_names[0]}
								</p>
							</div>
						</button>
					);
			  });

	return (
		<div className="absolute top-16 z-10 w-full overflow-hidden rounded-xl shadow-lg">
			{results}
		</div>
	);
};

export default HeroSchoolAndProfessorResults;
