import React from "react";

// Next.js components
import Image from "next/image";
import { useRouter } from "next/router";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import heroSearchOneInterface from "../../redux/hero-search-one/heroSearchOneInterface";
import { setSearchOneFilter } from "../../redux/hero-search-one/heroSearchOneActions";

// Props interface for HeroSchoolAndProfessorResults component
interface HeroSchoolAndProfessorResultsProps {
	setValue: (name: string, value: string) => void;
	setShowFirstSearch: (value: React.SetStateAction<boolean>) => void;
}

const HeroSearchOneResults: React.FC<HeroSchoolAndProfessorResultsProps> = ({
	setValue,
	setShowFirstSearch,
}) => {
	// Initialize necessary hooks and variables
	const router = useRouter();
	const dispatch = useAppDispatch();
	const heroSearchOne = useSelector(
		(state: { heroSearchOne: heroSearchOneInterface }) => state.heroSearchOne
	);

	// Handle click event when a school is selected
	const handleSchoolClick = (school: any) => {
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

	// Handle click event when a professor is selected
	const handleProfessorClick = (professor: any) => {
		router.push(`/professor/${professor.data.user_id}`);
	};

	// Render component with search results
	return (
		<div className="absolute top-16 z-10 w-full overflow-hidden rounded-xl shadow-lg">
			{heroSearchOne.results.map((item: any, index: number) => (
				<button
					onClick={
						heroSearchOne.type === "school"
							? () => handleSchoolClick(item)
							: () => handleProfessorClick(item)
					}
					key={index}
					type="button"
					className="flex w-full items-center border-b-[1px] bg-classmate-tan-2 px-5 py-5 text-left outline-none ring-classmate-gold-1 hover:bg-classmate-gray-5 focus:bg-classmate-gray-5">
					<Image
						height={25}
						width={25}
						src={
							heroSearchOne.type === "school"
								? "./graduation-cap-solid.svg"
								: "./glasses-solid.svg"
						}
						className="filter-classmate-green-7 mr-5 h-[25px] w-[25px]"
						alt="visiual depiction of a graduation cap or glasses that represents what you are searching for"
					/>
					<div className="flex flex-col justify-center gap-1">
						<p className="font-classmate leading-none text-classmate-green-6">
							{heroSearchOne.type === "school"
								? item.data.school_name
								: `${item.data.first_name} ${item.data.last_name}`}
						</p>
						<p className="font-classmate w-fit text-sm leading-none text-classmate-green-7">
							{heroSearchOne.type === "school"
								? item.data.zipcode
								: item.data.school_names?.[0]}
						</p>
					</div>
				</button>
			))}
		</div>
	);
};

export default HeroSearchOneResults;
