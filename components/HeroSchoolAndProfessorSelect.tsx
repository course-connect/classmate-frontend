import React, { useState, useEffect } from "react";
import DropMenu from "./DropMenu";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setSearchType } from "../redux/search/searchActions";

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
];

const HeroSchoolAndProfessorSelect = ({ methods }) => {
	const dispatch = useDispatch();
	const { getValues, setValue } = methods;
	const searchType = useSelector((state) => state.search.searchType);
	const [menuOpen, toggleMenuOpen] = useState(false);

	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current); // Toggle the menu open state
	};

	useEffect(() => {
		setValue("searchType", "school");
	}, []);

	const handleMenuItemClick = (
		e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>
	) => {
		const { id } = e.target as HTMLLIElement; // Destructure the id property from e.target
		setValue("searchType", id);
		if (id !== searchType) {
			setValue("search", "");
			dispatch(setSearchType(id));
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
					{searchType === "school" || searchType === "course" ? (
						<Image
							src="./graduation-cap.svg"
							height={25}
							width={25}
							alt=""
							className="min-w-[25px]"
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
				handleMenuClick={handleMenuClick}
			/>
		</div>
	);
};

export default HeroSchoolAndProfessorSelect;
