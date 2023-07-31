import React, { useState } from "react";
import MainSearchCard from "../components/MainSearchCard";
import MainSearchResults from "../components/MainSearchResults";
import RankGraph from "../components/RankGraph";
import ClassmateButton from "../components/ClassmateButton";
import Filters from "../components/filters";
import Image from "next/image";

export default function Search() {
	const [showGraph, setShowGraph] = useState(false);
	const [showFilters, setShowFilters] = useState(false);

	const handleFilterClick = () => {
		setShowFilters((current) => !current);
	};

	const handleShowGraphClick = () => {
		setShowGraph((current) => !current);
	};

	return (
		<div className="section-padding bg-classmate-tan-1 py-10">
			<div className="">
				<MainSearchCard />
			</div>
			<div className="h-[1000px]">
				<MainSearchResults />
			</div>
			<div
				className={`fixed bottom-0 left-0 z-20 w-full bg-blue-500 ${
					showGraph ? "z-30" : "first-letter:"
				}`}>
				<div
					className={`relative flex h-full max-h-0 justify-center transition duration-1000 ${
						showGraph ? "z-30 max-h-none" : ""
					}`}>
					<ClassmateButton
						callback={handleShowGraphClick}
						type="filled"
						size="md"
						styles="bg-classmate-gold-1 text-classmate-tan-2 shadow-md !px-5  absolute -top-20 flex justify-center items-center ">
						Graph
						<Image
							className="ml-2"
							height={10}
							width={10}
							alt=""
							src="./caret-up-light-tan.svg"
						/>
					</ClassmateButton>
					<RankGraph styles="w-full" />
				</div>
			</div>
			<div
				className={`fixed bottom-0 left-0 z-20 w-full bg-red-500 ${
					showFilters ? "z-30" : "first-letter:"
				}`}>
				<div
					className={`relative h-full max-h-0 transition duration-1000 ${
						showFilters ? "max-h-none" : ""
					}`}>
					<button
						onClick={handleFilterClick}
						type="button"
						className="absolute -top-20 right-4 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-classmate-tan-2 shadow-md xs:right-20">
						<Image height={20} width={20} alt="" src="./settings.svg" />
					</button>
					<Filters />
				</div>
			</div>
		</div>
	);
}
