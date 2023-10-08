import React, { useEffect, useState } from "react";

// Project hooks
import useWindowSize from "../hooks/useWindowSize";

// Project components
import ToolTip from "./ToolTip";
import DropMenu, { MenuItem } from "./DropMenu";

// Next.js components
import { useRouter } from "next/router";

// Redux components
import { useAppDispatch } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { signOut } from "../redux/auth/authActions";
import { setAccountTab } from "../redux/account-tab/accountActions";

const defaultMenuItems: MenuItem[] = [
	{
		icon: "/graduation-cap-solid.svg",
		label: "Profile",
		id: "profile",
		width: 20,
		height: 20,
		href: "/account",
		alt: "Graduation cap icon linking to my profile",
	},
	{
		icon: "/user-solid.svg",
		label: "Account",
		id: "account",
		width: 17,
		height: 17,
		href: "/account",
		alt: "User icon linking to my account",
	},
	{
		icon: "/star-solid.svg",
		label: "My Reviews",
		id: "reviews",
		width: 20,
		height: 20,
		href: "/account",
		alt: "Star icon linking to my reviews",
	},
	{
		icon: "/bookmark-solid.svg",
		label: "My Bookmarks",
		id: "bookmarks",
		width: 20,
		height: 20,
		href: "/account",
		alt: "Bookmark",
	},
	{
		icon: "/signout-solid.svg",
		label: "Sign Out",
		id: "sign-out",
		width: 20,
		height: 20,
		href: "/signin",
		alt: "Sign out icon to sign out of your account",
	},
];

const additionalMenuItems: MenuItem[] = [
	{
		icon: "/home-solid.svg",
		label: "Home",
		id: "home",
		width: 20,
		height: 20,
		href: "/",
		alt: "Home icon to go to the homepage",
	},
	{
		icon: "/search-solid.svg",
		label: "Search",
		id: "search",
		width: 20,
		height: 20,
		href: "/search",
		alt: "Search icon to go to the search page",
	},
];

const registrationNotCompletedMenuItems: MenuItem[] = [
	{
		icon: "/graduation-cap-solid.svg",
		label: "Profile",
		id: "profile",
		width: 20,
		height: 20,
		href: "/account",
		alt: "Graduation cap icon linking to my profile",
	},
	{
		icon: "/signout-solid.svg",
		label: "Sign Out",
		id: "sign-out",
		width: 20,
		height: 20,
		href: "/signin",
		alt: "Sign out icon to sign out of your account",
	},
];

const AccountMenu = () => {
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);

	const [menuOpen, toggleMenuOpen] = useState(false);
	const router = useRouter();
	const { width: screenWidth } = useWindowSize();
	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

	useEffect(() => {
		const completedFirstStep =
			userProfile.userData?.hasOwnProperty("first_name") &&
			userProfile.userData?.hasOwnProperty("last_name") &&
			userProfile.userData?.hasOwnProperty("zipcode");

		const completedSecondStep =
			userProfile.userData?.hasOwnProperty("school") &&
			userProfile.userData?.hasOwnProperty("major") &&
			userProfile.userData?.hasOwnProperty("graduation_year");

		if (screenWidth !== undefined) {
			if (!completedFirstStep || !completedSecondStep) {
				if (screenWidth < 768 && menuItems.length < 4) {
					setMenuItems([
						...additionalMenuItems,
						...registrationNotCompletedMenuItems,
					]);
				} else if (
					screenWidth >= 768 &&
					(menuItems.length === 4 || menuItems.length === 0)
				) {
					setMenuItems([...registrationNotCompletedMenuItems]);
				}
			} else {
				if (screenWidth < 768 && menuItems.length < 6) {
					setMenuItems([...additionalMenuItems, ...defaultMenuItems]);
				} else if (
					screenWidth >= 768 &&
					(menuItems.length === 6 || menuItems.length === 0)
				) {
					setMenuItems([...defaultMenuItems]);
				}
			}
		}
	}, [screenWidth, menuItems.length]);

	const handleMenuClick = () => {
		toggleMenuOpen((current) => !current); // Toggle the menu open state
	};

	const handleMenuItemClick = (
		e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
		href: string
	) => {
		const { id } = e.target as HTMLLIElement; // Destructure the id property from e.target

		if (id === "sign-out") {
			dispatch(signOut()); // Dispatch sign out action if the "Sign Out" item is clicked
		} else if (
			id === "profile" ||
			id === "account" ||
			id === "reviews" ||
			id === "bookmarks"
		) {
			dispatch(setAccountTab(id));
		}
		router.push(href); // Navigate to the specified href
		handleMenuClick(); // Close the menu
	};

	// Check if current path should have a light or dark navbar
	const pathname = router.asPath.split("/")[1];
	const pagesWithDarkNavbar = ["professor"];
	const bgColor = pagesWithDarkNavbar.includes(pathname)
		? "bg-classmate-tan-2"
		: "bg-classmate-tan-1";

	return (
		<div className="relative !ml-auto">
			{/* ToolTip component */}
			<ToolTip hideOn={menuOpen} spacing={10}>
				<button
					type="button"
					onClick={handleMenuClick}
					style={{ transition: "all 200ms", transitionDelay: "100ms" }}
					className="flex cursor-pointer items-center justify-center rounded-full bg-transparent p-1 outline-none ring-classmate-gold-1 transition delay-100 duration-200 hover:bg-classmate-tan-1 focus:ring">
					<div
						className={`font-classmate-bold text-classmate-green-1r flex h-10 w-10 select-none items-center justify-center rounded-full text-lg ${bgColor}`}>
						A
					</div>
				</button>
			</ToolTip>
			{/* DropMenu component */}
			<DropMenu
				menuItems={menuItems}
				callback={handleMenuItemClick}
				menuOpen={menuOpen}
				closeMenu={handleMenuClick}
			/>
		</div>
	);
};

export default AccountMenu;
