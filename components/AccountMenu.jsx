import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/auth/authActions";

export default function AccountMenu() {
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		handleAction(e.target);
	};

	const handleAction = (target) => {
		switch (target.id) {
			case "profile":
				alert("profile");
				break;
			case "account":
				alert("account");
				break;
			case "reviews":
				alert("reviews");
				break;
			case "logout":
				dispatch(signOut());
				break;
			default:
		}
	};

	return (
		<>
			<Box
				sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
				className="!ml-auto">
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}>
						<Avatar alt="default account image" src="./default-img.svg" />
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						borderRadius: "8px",
						filter: "drop-shadow(2px 3px 10px rgba(0,0,0,0.2))",
						bgcolor: "#F8F4EE",
						p: 0,
						mt: 1,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"& .MuiMenuItem-root": {
							py: 1.8,
							px: 3,
							fontSize: "15px",
							color: "#4D5E4A",
						},

						"& .MuiMenuItem-root:hover": {
							bgcolor: "#F2EFE5",
						},
						"& .MuiDivider-root": {
							m: 0,
						},
						"& .MuiMenu-list": {
							p: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
				<Link href="/account" className="link">
					<MenuItem onClick={handleClose} divider={true} id="profile">
						<ListItemIcon>
							<Image
								src="./graduation-cap.svg"
								width={20}
								height={20}
								alt="Graduation cap icon linking to my profile"
							/>
						</ListItemIcon>
						Profile
					</MenuItem>
				</Link>
				<Link href="/account" className="link">
					<MenuItem onClick={handleClose} divider={true} id="account">
						<ListItemIcon>
							<Image
								src="./user-solid.svg"
								width={17}
								height={17}
								alt="User icon linking to my account"
							/>
						</ListItemIcon>
						Account
					</MenuItem>
				</Link>
				<Link href="/account" className="link">
					<MenuItem onClick={handleClose} divider={true} id="reviews">
						<ListItemIcon>
							<Image
								src="./star-solid.svg"
								width={20}
								height={20}
								alt="Star icon linking to my reviews"
							/>
						</ListItemIcon>
						My Reviews
					</MenuItem>
				</Link>
				<MenuItem onClick={(e) => handleClose(e)} divider={true} id="logout">
					<ListItemIcon>
						<Image
							src="./logout.svg"
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
}
