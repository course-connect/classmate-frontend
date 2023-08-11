import React from "react";
import { useSelector } from "react-redux";

import MainSearchCardFilter from "./MainSearchCardFilter";

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
				.map((data, index) => (
					<MainSearchCardFilter key={index} data={data} />
				))}
		</div>
	);
};

export default MainSearchCardFilters;
