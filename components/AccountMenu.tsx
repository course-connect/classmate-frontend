import React, { useState, SyntheticEvent } from "react";

// Next.js components
import Link from "next/link";
import Image from "next/image";

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
	const [anchorEl, setAnchorEl] = useState(null);
	const dispatch = useAppDispatch();
	const open = Boolean(anchorEl);

	// Set the menu anchor to the DOM element that was clicked
	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	// Set the menu anchor to null and perform the action
	const handleClose = (e) => {
		setAnchorEl(null);
		console.log(e.target.id);
		handleAction(e.target.id);
	};

	const handleAction = (id: string) => {
		const actions = {
			profile: () => console.log("profile"),
			account: () => console.log("account"),
			reviews: () => console.log("reviews"),
			logout: () => dispatch(signOut()),
		};

		actions[id]?.();
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
	];

	const getMenuItems = () =>
		menuItems.map(({ icon, label, width, height, href, alt, id }) => (
			<Link href={href} className="link" key={label}>
				<MenuItem onClick={handleClose} divider={true} id={id}>
					<ListItemIcon>
						<Image src={icons[icon]} width={width} height={height} alt={alt} />
					</ListItemIcon>
					{label}
				</MenuItem>
			</Link>
		));

	return (
		<>
			<Box sx={boxStyles} className="!ml-auto">
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}>
						<Avatar alt="default account image" src={icons.defaultUserImage} />
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				PaperProps={menuStyles}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
				{getMenuItems()}
				<MenuItem onClick={(e) => handleClose(e)} divider={true} id="logout">
					<ListItemIcon>
						<Image
							src={icons.logout}
							width={18}
							height={18}
							alt="Logout icon - click to log out of my account."
						/>
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export default AccountMenu;
