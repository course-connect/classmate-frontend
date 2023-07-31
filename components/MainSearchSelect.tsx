import React, { useState, useEffect } from "react";

// Project components
import DropMenu from "./DropMenu";

// React Hook Form components
import { useDispatch, useSelector } from "react-redux";

// Next.js components
import Image from "next/image";

// Redux components
import {
	setMainSearchType,
	clearMainSearch,
} from "../redux/main-search/mainSearchActions";

const menuItems = [
	{
		icon: "./graduation-cap.svg",
		label: "School",
		id: "school",
		width: 20,
		height: 20,
		alt: "",
	},
	{
		icon: "./glasses.svg",
		label: "Professor",
		id: "professor",
		width: 20,
		height: 20,
		alt: "",
	},
	{
		icon: "./book-solid.svg",
		label: "Course",
		id: "course",
		width: 20,
		height: 20,
		alt: "",
	},
];

const MainSearchSelect = ({ setValue }) => {
	const [menuOpen, toggleMenuOpen] = useState(false);

	// Redux
	const dispatch = useDispatch();
	const mainSearch = useSelector((state) => state.mainSearch);

	// React Hook Form

	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current); // Toggle the menu open state
	};

	const handleMenuItemClick = (
		e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>
	) => {
		const { id } = e.target as HTMLLIElement; // Destructure the id property from e.target
		if (id !== mainSearch.type) {
			dispatch(setMainSearchType(id));
			setValue("userInput", "");
		}
		handleMenuClick(); // Close the menu
	};

	let iconSrc, iconAlt, iconClassName;
	switch (mainSearch.type) {
		case "school":
			iconSrc = "./graduation-cap.svg";
			iconAlt = "Graduation Cap";
			iconClassName = "min-w-[25px]";
			break;
		case "professor":
			iconSrc = "./glasses.svg";
			iconAlt = "Glasses";
			iconClassName = "min-w-[25px]";
			break;

		default:
			iconSrc = "./book-solid.svg";
			iconAlt = "Book";
			iconClassName = "max-h-[23px] min-w-[25px]";
			break;
	}

	return (
		<div className="relative h-[55px] ">
			<button
				type="button"
				className="flex h-full cursor-pointer items-center justify-center rounded-bl-lg rounded-tl-lg pl-6 pr-4 outline-none ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:ring"
				onClick={handleMenuClick}>
				<div className="pointer-events-none flex select-none items-center justify-center gap-2">
					<Image
						src={iconSrc}
						height={25}
						width={25}
						alt={iconAlt}
						className={iconClassName}
					/>
					<Image
						src="./caret-down.svg"
						className={`min-w-[10px] ${menuOpen ? "rotate-180" : ""}`}
						height={10}
						width={10}
						alt=""
					/>
				</div>
			</button>
			<DropMenu
				styles="right-auto left-0 sm:right-0 sm:left-auto"
				menuItems={menuItems}
				callback={handleMenuItemClick}
				menuOpen={menuOpen}
			/>
		</div>
	);
};

export default MainSearchSelect;
