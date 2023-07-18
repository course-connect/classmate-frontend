import React, { useState } from "react";
import DropMenu from "./DropMenu";
import Image from "next/image";

const HeroSelect = ({ methods }) => {
	const { getValues, setValue } = methods;
	const { searchType } = getValues();
	const [menuOpen, toggleMenuOpen] = useState(false);

	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current); // Toggle the menu open state
	};

	const handleMenuItemClick = (e) => {
		setValue("searchType", e.target.id);
		if (e.target.id !== searchType) setValue("search", "");
		handleMenuClick(); // Close the menu
	};

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

	return (
		<div className="relative h-[50px] ">
			<button
				type="button"
				className="flex h-full cursor-pointer items-center justify-center rounded-bl-full rounded-tl-full pl-6 pr-4 outline-none  ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:rounded-tr-md focus:ring"
				onClick={handleMenuClick}>
				<div className="pointer-events-none flex select-none items-center justify-center gap-2">
					{searchType === "school" ? (
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
				handleMenuClick={handleMenuClick}
				menuOpen={menuOpen}
			/>
		</div>
	);
};

export default HeroSelect;