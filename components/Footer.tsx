import React from "react";

// Next.js components
import Link from "next/link";
import Image from "next/image";

// Redux components
import { useSelector } from "react-redux";
import { AuthState } from "../redux/auth/authInterface";
import ClassmateButton from "./ClassmateButton";

interface SocialMediaLink {
	href: string;
	imgSrc: string;
	alt: string;
}

interface MenuItem {
	text: string;
	link: string;
}

const socialMediaLinks: SocialMediaLink[] = [
	{
		href: "https://webdevlex.com/",
		imgSrc: "/instagram-solid.svg",
		alt: "Instagram",
	},
	{
		href: "https://webdevlex.com/",
		imgSrc: "/linkedin-solid.svg",
		alt: "LinkedIn",
	},
	{
		href: "https://webdevlex.com/",
		imgSrc: "/twitter-solid.svg",
		alt: "Twitter",
	},
];

const Footer: React.FC = () => {
	const { isAuthenticated } = useSelector(
		(state: { auth: AuthState }) => state.auth
	);

	const menuItems: MenuItem[] = [
		{ text: "Home", link: "/" },
		{ text: "Search", link: "/search" },
		...(isAuthenticated
			? [{ text: "Account", link: "/account" }]
			: [
					{ text: "Sign In", link: "/signin" },
					{ text: "Sign Up", link: "/signup" },
			  ]),
	];

	return (
		<footer className="section-padding bg-classmate-green-1 py-14">
			<div className="flex flex-col gap-12">
				<Image
					src="/classmate-logo-solid.svg"
					width={0}
					height={0}
					alt="large navbar classmate logo"
					className="filter-classmate-green-5 h-6 w-auto"
				/>
				<ul className="font-classmate flex flex-col items-center justify-center gap-5 text-sm sm:flex-row sm:gap-14">
					{menuItems.map((item) => (
						<ClassmateButton
							size="xs"
							variant="text"
							key={item.link}
							href={item.link}
							styles="text-classmate-green-5  hover:bg-classmate-green-2 !text-sm">
							{item.text}
						</ClassmateButton>
					))}
				</ul>
				<div className="h-[2px] w-full rounded-lg bg-classmate-green-5" />
				<div className="flex items-center justify-center gap-4">
					{socialMediaLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							target="_blank"
							passHref={true}
							className="rounded-full outline-none ring-classmate-gold-1 focus:ring">
							<Image
								src={link.imgSrc}
								width={0}
								height={0}
								alt={link.alt}
								className="filter-classmate-green-5 h-11 w-auto"
							/>
						</Link>
					))}
				</div>
				<p className="font-classmate text-center text-xs tracking-wide text-classmate-green-5">
					© Classmate, Inc. 2023. We love our users!
				</p>
			</div>
		</footer>
	);
};

export default Footer;
