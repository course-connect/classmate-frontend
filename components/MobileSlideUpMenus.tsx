import React, { useState } from "react";
import RankGraph from "../components/RankGraph";
import ClassmateButton from "../components/ClassmateButton";
import Filters from "../components/Filters";
import Image from "next/image";
import MobileSlideUp from "../components/MobileSlideUp";

const MobileSlideUpMenus = () => {
	const [showGraph, toggleGraph] = useState(false);
	const [showFilters, toggleFilters] = useState(false);

	const handleShowGraphClick = () => {
		console.log("toggle graph");
		toggleGraph((current) => !current);
	};

	const handleFilterClick = () => {
		console.log("toggle filters");
		toggleFilters((current) => !current);
	};

	return (
		<>
			<div className="flex justify-center">
				<ClassmateButton
					callback={handleShowGraphClick}
					variant="filled"
					size="md"
					styles="fixed bottom-10 bg-classmate-gold-1 text-classmate-tan-2 shadow-md !px-5  flex justify-center items-center ">
					Graph
					<Image
						className="ml-2"
						height={10}
						width={10}
						alt=""
						src="./caret-up-light-tan.svg"
					/>
				</ClassmateButton>
				<button
					onClick={handleFilterClick}
					type="button"
					className="fixed bottom-10 right-4 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-classmate-tan-2 shadow-md xs:right-20">
					<Image height={20} width={20} alt="" src="./settings.svg" />
				</button>
			</div>

			<MobileSlideUp
				showSlideUp={showGraph}
				toggleSlideUp={handleShowGraphClick}>
				<RankGraph styles="w-full" />
			</MobileSlideUp>
			<MobileSlideUp
				showSlideUp={showFilters}
				toggleSlideUp={handleFilterClick}>
				<Filters />
			</MobileSlideUp>
		</>
	);
};

export default MobileSlideUpMenus;
