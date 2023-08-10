import React from "react";
import FilterButton from "./FilterButton";
import { useSelector } from "react-redux";
import Image from "next/image";

const filterButtons = [
	{
		text: "School",
		filter: "",
		allowedFor: ["professor", "course"],
		filterType: "school",
		icon: "./graduation-cap.svg",
		iconAlt: "",
		callback: () => console.log(":hello"),
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
		filter: "",
		allowedFor: ["course"],
		filterType: "professor",
		icon: "./glasses.svg",
		iconAlt: "",
		callback: () => console.log(":hello"),
	},
	{
		text: "Course",
		filter: "",
		allowedFor: ["professor"],
		filterType: "course",
		icon: "./book-solid.svg",
		iconAlt: "",
		callback: () => console.log(":hello"),
	},

	{
		text: "Score",
		filter: "",
		allowedFor: ["professor"],
		filterType: "score",
		icon: "./star-solid.svg",
		iconAlt: "",
		callback: () => console.log(":hello"),
	},
	{
		text: "Difficulty",
		filter: "",
		allowedFor: ["professor"],
		filterType: "difficulty",
		icon: "./weight-light-green.svg",
		iconAlt: "",
		callback: () => console.log(":hello"),
	},
	{
		text: "Reviews",
		filter: "",
		allowedFor: ["professor"],
		filterType: "reviews",
		icon: "./thumbs-up-light-green.svg",
		iconAlt: "",
		callback: () => console.log(":hello"),
	},
];

const MainSearchCardFilters = () => {
	const mainSearchType = useSelector((state) => state.mainSearch.type);

	return (
		<div className="flex flex-wrap gap-2">
			{filterButtons
				.filter(({ allowedFor }) => allowedFor.includes(mainSearchType))
				.map((button, index) => (
					<button
						key={index}
						className="font-classmate flex w-fit items-center justify-between rounded-md bg-classmate-gray-6 px-3 py-1 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring">
						<div className="pointer-events-none flex w-full gap-4 ">
							<Image
								width={16}
								height={16}
								src={button.icon}
								alt={button.iconAlt}
							/>
							{button.text}
						</div>
					</button>
				))}
		</div>
	);
};

export default MainSearchCardFilters;
