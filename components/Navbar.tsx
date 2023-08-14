import React, { useEffect, useState, useRef } from "react";

// Project components
import ClassmateButton from "./ClassmateButton";
import AccountMenu from "./AccountMenu";

// Project hooks
import useWindowSize from "../hooks/useWindowSize";
import useLockScroll from "../hooks/useLockScroll";

// Next.js components
import Image from "next/image";
import { useRouter } from "next/router";

// Redux components
import { useSelector } from "react-redux";

export default function Navbar() {
	const [blockScroll, allowScroll] = useLockScroll();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const { width } = useWindowSize();
	const OnMobileDevice = useRef(width < 768);
	const [addMobileTransitions, setAddMobileTransitions] = useState(width < 768);

	// Get url path
	const router = useRouter();
	const pathname = router.asPath.split("/")[1];

	// Check if current path should have a light or dark navbar
	const pagesWithDarkNavbar = [];
	const bgColor = pagesWithDarkNavbar.includes(pathname)
		? "bg-classmate-tan-1"
		: "bg-classmate-tan-2";

	useEffect(() => {
		if (mobileMenuOpen && width >= 768) {
			setMobileMenuOpen((current) => !current);
		}
		// Handle flash when shrinking screen
		if (width < 768 && !OnMobileDevice.current) {
			OnMobileDevice.current = true;
			setTimeout(() => {
				setAddMobileTransitions(true);
			}, 500);
		} else if (width >= 768 && OnMobileDevice.current) {
			OnMobileDevice.current = false;
			setAddMobileTransitions(false);
		}
	}, [width]);

	const toggleMobileMenu = () => {
		if (OnMobileDevice.current) {
			if (!mobileMenuOpen) {
				blockScroll();
			} else {
				allowScroll();
			}
		}
		setMobileMenuOpen((currentState) => !currentState);
	};

	return (
		<nav
			className={`section-padding flex h-16 items-center justify-between space-x-5 py-4 md:h-20 md:justify-normal ${bgColor}`}>
			<ClassmateButton
				styles="rounded-md p-2 text-2xl font-extrabold text-classmate-green-6 transition hover:!bg-classmate-hover-tan-2"
				href="/">
				{width >= 640 ? (
					<Image
						src="./logo.svg"
						width={0}
						height={0}
						alt="large navbar classmate logo"
						className="h-6 w-auto min-w-[143px]"
					/>
				) : (
					<Image
						src="./logo-small.svg"
						width={0}
						height={0}
						alt="small navbar classmate logo"
						className="h-6 w-auto"
					/>
				)}
			</ClassmateButton>

			{/*   */}
			<ul
				className={`font-classmate absolute left-0 top-0 z-40 !m-0 flex h-full w-full grow list-none flex-col items-center justify-center gap-4 bg-classmate-tan-2 text-xl  text-classmate-green-6 md:static  md:z-0 md:!ml-10 md:w-fit md:grow-0 md:flex-row md:gap-6  md:text-sm lg:!ml-12 lg:gap-8 ${
					mobileMenuOpen || width >= 768
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				} ${
					addMobileTransitions
						? "transition-opacity duration-500 ease-in-out"
						: ""
				}`}>
				<ClassmateButton
					styles="absolute right-7 top-5 md:hidden"
					callback={toggleMobileMenu}>
					<Image
						src="./xmark-solid.svg"
						width={25}
						height={25}
						alt="An X icon representing a close button for a menu or window."
					/>
				</ClassmateButton>

				<li>
					<ClassmateButton
						href="/"
						variant="text"
						size="xs"
						styles="px-1 !text-lg text-classmate-green-6 hover:!bg-classmate-hover-tan-2 md:!text-sm"
						callback={toggleMobileMenu}>
						Home
					</ClassmateButton>
				</li>
				<li>
					<ClassmateButton
						href="/search"
						variant="text"
						size="xs"
						styles="!text-lg md:!text-sm text-classmate-green-6 px-1 hover:!bg-classmate-hover-tan-2"
						callback={toggleMobileMenu}>
						Search
					</ClassmateButton>
				</li>
				<li className="md:hidden ">
					<ClassmateButton
						href="/signin"
						variant="text"
						styles="text-lg md:text-sm text-classmate-green-6 px-1"
						callback={toggleMobileMenu}>
						Sign In
					</ClassmateButton>
				</li>
				<li className="md:hidden ">
					<ClassmateButton
						href="/signin"
						variant="text"
						styles="text-lg md:text-sm text-classmate-green-6 px-1"
						callback={toggleMobileMenu}>
						Sign Up
					</ClassmateButton>
				</li>
			</ul>

			<div className="flex w-full gap-4">
				{isAuthenticated ? (
					<AccountMenu />
				) : (
					<>
						<div className="!ml-auto hidden gap-2 md:flex">
							<ClassmateButton
								href="/signin"
								styles="border-classmate-green-2 text-classmate-green-2 hover:!bg-classmate-hover-tan-2"
								variant="outlined"
								size="sm">
								Sign In
							</ClassmateButton>

							<ClassmateButton
								href="/signup"
								styles="bg-classmate-green-2 text-classmate-tan-2 hover:!bg-classmate-hover-green-2"
								variant="filled"
								size="sm">
								Sign Up
							</ClassmateButton>
						</div>
						<ClassmateButton
							styles="md:hidden !p-2 !ml-auto"
							variant="text"
							size="xs"
							callback={toggleMobileMenu}>
							<Image
								src="./hamburger.svg"
								width={25}
								height={25}
								alt="An icon depicting three horizontal lines, commonly known as a hamburger icon, representing a menu opener."
							/>
						</ClassmateButton>
					</>
				)}
			</div>
		</nav>
	);
}
