import React, { useState, useEffect } from "react";

// Project components
import DropMenu from "./DropMenu";

// React Hook Form components
import { useDispatch, useSelector } from "react-redux";

// Next.js components
import Image from "next/image";

// Redux components
import {
	setSearchTwoType,
	clearSearchTwo,
} from "../redux/hero-search-two/heroSearchTwoActions";

const menuItems = [
	{
		icon: "./book-solid.svg",
		label: "Course",
		id: "course",
		width: 17,
		height: 17,
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
];

const HeroSearchTwoSelect = ({ setValue }) => {
	const [menuOpen, toggleMenuOpen] = useState(false);

	// Redux
	const dispatch = useDispatch();
	const heroSearchTwo = useSelector((state) => state.heroSearchTwo);

	// React Hook Form

	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current); // Toggle the menu open state
	};

	const handleMenuItemClick = (
		e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>
	) => {
		const { id } = e.target as HTMLLIElement; // Destructure the id property from e.target
		if (id !== heroSearchTwo.type) {
			dispatch(setSearchTwoType(id));
			setValue("userInput", "");
		}
		handleMenuClick(); // Close the menu
	};

	return (
		<div className="relative h-[55px] ">
			<button
				type="button"
				className="flex h-full cursor-pointer items-center justify-center rounded-bl-full rounded-tl-full pl-6 pr-4 outline-none  ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:rounded-tr-md focus:ring"
				onClick={handleMenuClick}>
				<div className="pointer-events-none flex select-none items-center justify-center gap-2">
					{heroSearchTwo.type === "course" ? (
						<Image
							src="./book-solid.svg"
							height={23}
							width={23}
							alt=""
							className="max-h-[23px] min-w-[25px]"
						/>
					) : (
						<Image
							src="./glasses.svg"
							height={25}
							width={25}
							alt=""
							className="min-w-[25px]"
						/>
					)}
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

export default HeroSearchTwoSelect;
