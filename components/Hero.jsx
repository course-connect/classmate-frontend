import { useState } from "react";
import ClassmateButton from "../components/ClassmateButton";
import HeroSelectableSearch from "./HeroSelectableSearch";
import BasicInput from "../components/BasicInput";
import Image from "next/image";
import logo from "../public/logo.svg";
import swinging from "../public/swinging.svg";
import reading from "../public/reading.svg";
import globe from "../public/globe.svg";
import book from "../public/book.svg";
import atom from "../public/atom.svg";
import plane from "../public/plane.svg";

export default function Hero() {
	const [callToActionIdx, setCallToActionIdx] = useState(0);

	const handlePrevButton = () => {
		if (callToActionIdx > 0) {
			setCallToActionIdx((currentState) => (currentState -= 1));
		}
	};

	const handleNextButton = () => {
		if (callToActionIdx < 2) {
			setCallToActionIdx((currentState) => (currentState += 1));
		}
	};

	let callToAction;
	switch (callToActionIdx) {
		case 0:
			callToAction = (
				<ClassmateButton
					variant="filled"
					size="lg"
					callback={handleNextButton}
					styles="bg-classmate-green-4 text-classmate-tan-1 hover:!bg-classmate-hover-green-4">
					Get Started
				</ClassmateButton>
			);
			break;
		case 1:
			callToAction = <HeroSelectableSearch />;
			break;
		case 2:
			callToAction = <BasicInput />;
			break;
	}

	return (
		<section className="section-padding relative flex h-[680px] w-full items-center justify-center bg-classmate-tan-1 2xl:h-[740px]">
			<Image
				src={swinging}
				width={0}
				height={0}
				className="pointer-events-none absolute left-0 top-0 h-48 w-auto lg:h-64 2xl:h-80"
				alt={"An illustration of a person happily swinging on a swing"}
			/>
			<Image
				src={reading}
				width={0}
				height={0}
				className="pointer-events-none absolute bottom-0 right-0 h-48 w-auto lg:h-64 2xl:h-72"
				alt="An illustration of a person engrossed in a book, reading with focused attention."
				priority
			/>
			<Image
				src={globe}
				width={0}
				height={0}
				className="pointer-events-none absolute bottom-[120px] left-16 hidden h-36 w-auto sm:block md:left-24 lg:h-44 xl:left-36 2xl:left-72 2xl:h-52 3xl:left-96"
				alt="An illustration of a globe, representing the Earth."
			/>
			<Image
				src={book}
				width={0}
				height={0}
				className="pointer-events-none absolute right-16 top-[120px] hidden h-20 w-auto sm:block md:right-24 lg:right-16 lg:h-28 xl:right-36 2xl:right-72 2xl:h-32 3xl:right-96"
				alt="An illustration of an open book with blank pages."
			/>
			<Image
				src={atom}
				width={0}
				height={0}
				className="pointer-events-none absolute top-20 mr-[315px] hidden h-20 w-auto xl:block 2xl:h-24"
				alt="An illustration of a neutron, a subatomic particle found in the nucleus of an atom."
			/>
			<Image
				src={plane}
				width={0}
				height={0}
				className="absolute bottom-[111px] ml-[315px] hidden w-fit xl:flex 2xl:bottom-[128px] 2xl:h-40"
				alt="An illustration of a paper airplane, a folded paper object resembling an airplane shape."
			/>
			<div className="flex flex-col items-center">
				<Image
					src={logo}
					width={0}
					height={0}
					className="pointer-events-none h-12 w-auto sm:h-16 lg:h-20 xl:h-24"
					alt="The Classmate company logo, featuring the word 'Classmate' in a distinct design."
				/>
				<h2 className="font-classmate my-4 text-center text-2xl sm:my-6 sm:text-3xl">
					The easiest way to find a professor
				</h2>
				{callToAction}
			</div>
		</section>
	);
}
