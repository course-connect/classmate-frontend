import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useRouter } from "next/router";
import Image from "next/image";
import { setSearchOneFilter } from "../redux/hero-search-one/heroSearchOneActions";

const HeroSchoolAndProfessorResults = ({ setValue, setShowFirstSearch }) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const heroSearchOne = useSelector((state) => state.heroSearchOne);

	const handleSchoolClick = (school) => {
		const searchFilter = {
			school: {
				filter_value: school.firebaseID,
				filter_text: school.data.school_name,
			},
		};
		dispatch(setSearchOneFilter(searchFilter));
		setShowFirstSearch(false);
		setTimeout(() => setValue("userInput", ""), 1000);
	};

	const handleProfessorClick = (professor) => {
		router.push(`/professor/${professor.data.user_id}`);
	};

	return (
		<div className="absolute top-16 z-10 w-full overflow-hidden rounded-xl shadow-lg">
			{heroSearchOne.results.map((item, index) => (
				<button
					onClick={
						heroSearchOne.type === "school"
							? () => handleSchoolClick(item)
							: () => handleProfessorClick(item)
					}
					key={index}
					type="button"
					className={`flex w-full items-center border-b-[1px] bg-classmate-tan-2 px-5 py-5 text-left outline-none ring-classmate-gold-1 hover:bg-classmate-gray-5 focus:bg-classmate-gray-5`}>
					<Image
						height={25}
						width={25}
						src={
							heroSearchOne.type === "school"
								? "./graduation-cap.svg"
								: "./glasses.svg"
						}
						className="mr-5"
						alt=""
					/>
					<div className="flex flex-col justify-center gap-1">
						<p className="font-classmate leading-none text-classmate-green-6">
							{heroSearchOne.type === "school"
								? item.data.school_name
								: `${item.data.first_name} ${item.data.last_name}`}
						</p>
						<p className="font-classmate w-fit text-sm leading-none text-classmate-green-7">
							{heroSearchOne.type === "school"
								? item.data.school_zip
								: item.data.school_names?.[0]}
						</p>
					</div>
				</button>
			))}
		</div>
	);
};

export default HeroSchoolAndProfessorResults;
