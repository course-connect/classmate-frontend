import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AuthState } from "../redux/auth/authInterface";

const Footer = () => {
	const { isAuthenticated } = useSelector(
		(state: { auth: AuthState }) => state.auth
	);

	const menuItems = [
		{ text: "Home", link: "/" },
		{ text: "Search", link: "/search" },
		...(isAuthenticated
			? [{ text: "Account", link: "/account" }]
			: [
					{ text: "Sign In", link: "/signin" },
					{ text: "Sign Up", link: "/signup" },
			  ]),
	];

	const socialMediaLinks = [
		{
			href: "https://webdevlex.com/",
			imgSrc: "./footer-instagram-logo.svg",
			alt: "instagram logo",
		},
		{
			href: "https://webdevlex.com/",
			imgSrc: "./footer-linkedin-logo.svg",
			alt: "linkedin logo",
		},
		{
			href: "https://webdevlex.com/",
			imgSrc: "./footer-twitter-logo.svg",
			alt: "twitter logo",
		},
	];

	return (
		<footer className="section-padding bg-classmate-green-1 py-14">
			<div className="flex flex-col gap-12">
				<Image
					src="./footer-logo.svg"
					width={0}
					height={0}
					alt="large navbar classmate logo"
					className="h-6 w-auto"
				/>
				<ul className="font-classmate flex flex-col items-center justify-center gap-5 text-sm sm:flex-row sm:gap-14">
					{menuItems.map((item) => (
						<Link
							key={item.link}
							href={item.link}
							className="link text-classmate-green-5">
							<li>{item.text}</li>
						</Link>
					))}
				</ul>
				<div className="h-[2px] w-full rounded-lg bg-classmate-green-5" />
				<div className="flex items-center justify-center gap-4">
					{socialMediaLinks.map((link, index) => (
						<Link key={index} href={link.href} target="_blank" passHref={true}>
							<Image
								src={link.imgSrc}
								width={0}
								height={0}
								alt={link.alt}
								className="h-11 w-auto"
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
