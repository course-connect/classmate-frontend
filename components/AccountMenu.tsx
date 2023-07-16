import React, { useState } from "react";
import ToolTip from "./ToolTip";

// Next.js components
import Image from "next/image";
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
				<div
					tabIndex={1}
					onClick={handleMenuClick}
					style={{ transition: "all 200ms", transitionDelay: "100ms" }}
					className="flex cursor-pointer items-center justify-center rounded-full bg-transparent p-1 transition delay-100 duration-200 hover:bg-classmate-tan-1">
					<div className="font-classmate-bold text-classmate-green-1r flex h-10 w-10 select-none items-center justify-center rounded-full bg-classmate-tan-1 text-lg">
						A
					</div>
				</div>
			</ToolTip>

			{/* Menu container */}
			<ul
				className={` absolute right-0 z-20 mt-1 origin-top-right  overflow-hidden rounded-lg bg-classmate-tan-2  drop-shadow-xl transition ${
					menuOpen
						? "pointer-events-auto scale-100 opacity-100"
						: "pointer-events-none scale-75 opacity-0"
				}`}>
				{/* Render menu items */}
				{menuItems.map(({ icon, label, width, height, alt, id, href }) => (
					<li
						tabIndex={1}
						key={label}
						onClick={(e) => handleMenuItemClick(e, href)}
						id={id}
						className=" flex cursor-pointer whitespace-nowrap border-b-[1px] border-classmate-gray-5 px-5 py-4 transition delay-0 duration-75 hover:bg-classmate-gray-5">
						<div className="pointer-events-none mr-4 flex w-5 items-center justify-center">
							<Image src={icon} width={width} height={height} alt={alt} />
						</div>
						<p className="font-classmate pointer-events-none text-classmate-green-6">
							{label}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AccountMenu;
