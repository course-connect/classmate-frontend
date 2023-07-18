import React, { useState } from "react";
import ToolTip from "./ToolTip";

import DropMenu from "./DropMenu";

// Next.js components
import { useRouter } from "next/router";

// Redux components
import { useAppDispatch } from "../hooks/reduxHooks";
import { signOut } from "../redux/auth/authActions";

const AccountMenu = () => {
	const dispatch = useAppDispatch();
	const [menuOpen, toggleMenuOpen] = useState(false);
	const router = useRouter();

	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current); // Toggle the menu open state
	};

	const handleMenuItemClick = (e, href: string) => {
		handleMenuClick(); // Close the menu
		if (e.target.id === "sign-out") dispatch(signOut()); // Dispatch sign out action if the "Sign Out" item is clicked
		router.push(href); // Navigate to the specified href
		console.log(href);
	};

	const menuItems = [
		{
			icon: "./graduation-cap.svg",
			label: "Profile",
			id: "profile",
			width: 20,
			height: 20,
			href: "/account",
			alt: "Graduation cap icon linking to my profile",
		},
		{
			icon: "./user-solid.svg",
			label: "Account",
			id: "account",
			width: 17,
			height: 17,
			href: "/account",
			alt: "User icon linking to my account",
		},
		{
			icon: "./star-solid.svg",
			label: "My Reviews",
			id: "reviews",
			width: 20,
			height: 20,
			href: "/account",
			alt: "Star icon linking to my reviews",
		},
		{
			icon: "./logout.svg",
			label: "Sign Out",
			id: "sign-out",
			width: 20,
			height: 20,
			href: "/signin",
			alt: "Sign out icon to sign out of your account",
		},
	];

	return (
		<div className="relative">
			{/* ToolTip component */}
			<ToolTip hideOn={menuOpen} spacing={10}>
				<button
					type="button"
					onClick={handleMenuClick}
					style={{ transition: "all 200ms", transitionDelay: "100ms" }}
					className="flex cursor-pointer items-center justify-center rounded-full bg-transparent p-1 outline-none ring-classmate-gold-1 transition delay-100 duration-200 hover:bg-classmate-tan-1 focus:ring">
					<div className="font-classmate-bold text-classmate-green-1r flex h-10 w-10 select-none items-center justify-center rounded-full bg-classmate-tan-1 text-lg">
						A
					</div>
				</button>
			</ToolTip>
			<DropMenu
				handleMenuClick={handleMenuClick}
				menuItems={menuItems}
				callback={handleMenuItemClick}
				menuOpen={menuOpen}
			/>
		</div>
	);
};

export default AccountMenu;
