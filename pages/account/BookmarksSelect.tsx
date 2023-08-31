import React, { useState, useEffect } from "react";

// Project components
import DropMenu from "../../components/DropMenu";

// React Hook Form components
import { useDispatch, useSelector } from "react-redux";

// Next.js components
import Image from "next/image";

// Redux components
import {
	setBookmarksSearchType,
	clearBookmarksSearch,
} from "../../redux/bookmarks-search/bookmarksSearchActions";

const menuItems = [
	{
		icon: "./glasses-solid.svg",
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

const BookmarksSelect = ({ setValue }) => {
	const [menuOpen, toggleMenuOpen] = useState(false);

	// Redux
	const dispatch = useDispatch();
	const bookmarksSearch = useSelector((state) => state.bookmarksSearch);

	// React Hook Form

	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current); // Toggle the menu open state
	};

	const handleMenuItemClick = (
		e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>
	) => {
		const { id } = e.target as HTMLLIElement; // Destructure the id property from e.target
		if (id !== bookmarksSearch.type) {
			setValue("userInput", "");
			dispatch(clearBookmarksSearch());
			dispatch(setBookmarksSearchType(id));
		}
		handleMenuClick(); // Close the menu
	};

	let iconSrc, iconAlt, iconClassName;
	switch (bookmarksSearch.type) {
		case "professor":
			iconSrc = "./glasses-solid.svg";
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
						height={0}
						width={0}
						alt={iconAlt}
						className={`filter-classmate-green-7 h-[25px] w-[25px] ${iconClassName}`}
					/>
					<Image
						src="./caret-solid.svg"
						className={`filter-classmate-green-4 h-[10px] w-[10px] min-w-[10px] ${
							menuOpen ? "rotate-180" : ""
						}`}
						height={0}
						width={0}
						alt="small arrow"
					/>
				</div>
			</button>
			<DropMenu
				styles="right-auto left-0"
				menuItems={menuItems}
				callback={handleMenuItemClick}
				menuOpen={menuOpen}
				closeMenu={handleMenuClick}
			/>
		</div>
	);
};

export default BookmarksSelect;
