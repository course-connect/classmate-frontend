import React, { useState, SyntheticEvent } from "react";
import ToolTip from "./ToolTip";

// Next.js components
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Redux components
import { useAppDispatch } from "../hooks/reduxHooks";
import { signOut } from "../redux/auth/authActions";

// @mui material components
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// @mui styles overide
import { boxStyles, menuStyles } from "../styles/accountMenuStyles";

// Paths to SVG icons
const icons = {
	defaultUserImage: "./default-img.svg",
	graduationCap: "./graduation-cap.svg",
	user: "./user-solid.svg",
	star: "./star-solid.svg",
	logout: "./logout.svg",
};

const AccountMenu = () => {
	// This code block defines and utilizes state variables and functions for handling
	// a menu anchor element, dispatching actions, and managing the open state of the menu.
	const dispatch = useAppDispatch();
	const [menuOpen, toggleMenuOpen] = useState(false);
	const router = useRouter();

	// Set the menu anchor to the DOM element that was clicked
	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current);
	};

	const handleMenuItemClick = (e) => {
		handleMenuClick();
		const actions = {
			profile: () => {
				router.push("/account");
				console.log("profile");
			},
			account: () => {
				router.push("/account");
				console.log("account");
			},
			reviews: () => {
				router.push("/account");
				console.log("reviews");
			},
			logout: () => dispatch(signOut()),
		};
		actions[e.target.id]();
	};

	const menuItems = [
		{
			icon: "graduationCap",
			label: "Profile",
			id: "profile",
			width: 20,
			height: 20,
			href: "/account",
			alt: "Graduation cap icon linking to my profile",
		},
		{
			icon: "user",
			label: "Account",
			id: "account",
			width: 17,
			height: 17,
			href: "/account",
			alt: "User icon linking to my account",
		},
		{
			icon: "star",
			label: "My Reviews",
			id: "reviews",
			width: 20,
			height: 20,
			href: "/account",
			alt: "Star icon linking to my reviews",
		},
		{
			icon: "logout",
			label: "Logout",
			id: "logout",
			width: 20,
			height: 20,
			href: "/account",
			alt: "logout button",
		},
	];

	const getMenuItems = () =>
		menuItems.map(({ icon, label, width, height, href, alt, id }) => (
			<div
				key={label}
				onClick={(e) => handleMenuItemClick(e)}
				id={id}
				className=" flex cursor-pointer whitespace-nowrap border-b-[1px] border-classmate-gray-5 px-5 py-4 transition delay-0 duration-75 hover:bg-classmate-gray-5">
				<div className="pointer-events-none mr-4 flex w-5 items-center justify-center">
					<Image src={icons[icon]} width={width} height={height} alt={alt} />
				</div>
				<p className="font-classmate pointer-events-none text-classmate-green-6">
					{label}
				</p>
			</div>
		));

	return (
		<div className="relative">
			<ToolTip hideOn={menuOpen} spacing={10}>
				<div
					onClick={handleMenuClick}
					style={{ transition: "all 200ms", transitionDelay: "100ms" }}
					className="flex cursor-pointer items-center justify-center rounded-full bg-transparent p-1 hover:bg-classmate-tan-1">
					<div className="font-classmate-bold text-classmate-green-1r flex h-10 w-10 select-none items-center justify-center rounded-full bg-classmate-tan-1 text-lg">
						A
					</div>
				</div>
			</ToolTip>

			<div
				className={` absolute right-0 z-20 mt-1 origin-top-right  overflow-hidden rounded-lg bg-classmate-tan-2  drop-shadow-xl transition ${
					menuOpen
						? "pointer-events-auto scale-100 opacity-100"
						: "pointer-events-none scale-75 opacity-0"
				}`}>
				{getMenuItems()}
			</div>
		</div>
	);
};

export default AccountMenu;
