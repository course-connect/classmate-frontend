import React from "react";
import Image from "next/image";
import HeroCallToAction from "./HeroCallToAction";

const icons: Record<string, string> = {
	logo: "./classmate-logo-solid.svg",
	swinging: "./swinging.svg",
	reading: "./reading.svg",
	globe: "./globe.svg",
	book: "./book.svg",
	atom: "./atom.svg",
	plane: "./plane.svg",
};

const Hero = (): JSX.Element => {
	return (
		<section className="section-padding relative flex h-[680px] w-full items-center justify-center bg-classmate-tan-1 2xl:h-[740px]">
			<Image
				src={icons.swinging}
				width={0}
				height={0}
				className="pointer-events-none absolute left-0 top-0 h-48 w-auto lg:h-64 2xl:h-80"
				alt={"An illustration of a person happily swinging on a swing"}
			/>
			<Image
				src={icons.reading}
				width={0}
				height={0}
				className="pointer-events-none absolute bottom-0 right-0 h-48 w-auto lg:h-64 2xl:h-72"
				alt="An illustration of a person engrossed in a book, reading with focused attention."
				priority
			/>
			<Image
				src={icons.globe}
				width={0}
				height={0}
				className="pointer-events-none absolute bottom-[120px] left-16 hidden h-36 w-auto sm:block md:left-24 lg:h-44 xl:left-36 2xl:left-72 2xl:h-52 3xl:left-96"
				alt="An illustration of a globe, representing the Earth."
			/>
			<Image
				src={icons.book}
				width={0}
				height={0}
				className="pointer-events-none absolute right-16 top-[120px] hidden h-20 w-auto sm:block md:right-24 lg:right-16 lg:h-28 xl:right-36 2xl:right-72 2xl:h-32 3xl:right-96"
				alt="An illustration of an open book with blank pages."
			/>
			<Image
				src={icons.atom}
				width={0}
				height={0}
				className="pointer-events-none absolute top-20 mr-[315px] hidden h-20 w-auto xl:block 2xl:h-24"
				alt="An illustration of a neutron, a subatomic particle found in the nucleus of an atom."
			/>
			<Image
				src={icons.plane}
				width={0}
				height={0}
				className="absolute bottom-[111px] ml-[315px] hidden w-fit xl:flex 2xl:bottom-[128px] 2xl:h-40"
				alt="An illustration of a paper airplane, a folded paper object resembling an airplane shape."
			/>
			<div className="z-10 flex flex-col items-center ">
				<Image
					src={icons.logo}
					width={0}
					height={0}
					className="filter-classmate-green-1 pointer-events-none h-12 w-auto sm:h-16 lg:h-20 xl:h-24"
					alt="The Classmate company logo, featuring the word 'Classmate' in a distinct design."
				/>
				<h2 className="font-classmate my-4 text-center text-2xl text-classmate-green-1 sm:my-6 sm:text-3xl">
					The easiest way to find a professor
				</h2>
				<HeroCallToAction />
			</div>
		</section>
	);
};

export default Hero;
