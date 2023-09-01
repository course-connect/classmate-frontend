import React from "react";
import RankGraph from "../components/RankGraph";
import ClassmateButton from "../components/ClassmateButton";
import MainMobileFilters from "../components/MainMobileFilters";
import Image from "next/image";
import MobileSlideUp from "../components/MobileSlideUp";
import { useSelector } from "react-redux";

const MobileSlideUpMenus = ({
	showGraph,
	showFilters,
	handleShowGraphClick,
	handleOpenFilterMenu,
	handleCloseFilterMenu,
}) => {
	const mainSearch = useSelector((state) => state.mainSearch);
	return (
		<>
			<div className="flex justify-center ">
				{mainSearch.results.length !== 0 && mainSearch.type === "professor" && (
					<ClassmateButton
						callback={handleShowGraphClick}
						variant="filled"
						size="md"
						styles="fixed bottom-6 bg-classmate-gold-1 text-classmate-tan-2 shadow-md !px-5 flex justify-center items-center ">
						Graph
						<Image
							className="filter-classmate-tan-2 ml-2 h-[10px] w-[10px] rotate-180"
							height={0}
							width={0}
							alt="small arrow"
							src="/caret-solid.svg"
						/>
					</ClassmateButton>
				)}

				{mainSearch.type !== "school" && (
					<ClassmateButton
						variant="filled"
						size="xs"
						callback={handleOpenFilterMenu}
						type="button"
						styles="fixed bottom-6 !rounded-full right-4 flex !h-[44px] !w-[44px] items-center justify-center rounded-full bg-classmate-tan-2 shadow-md xs:right-20">
						<Image
							height={0}
							width={0}
							alt="settings"
							className="filter-classmate-green-7 h-[20px] w-[20px]"
							src="/settings-solid.svg"
						/>
					</ClassmateButton>
				)}
			</div>

			{mainSearch.type === "professor" && (
				<MobileSlideUp
					openMenu={showGraph}
					toggleSlideUp={handleShowGraphClick}>
					<RankGraph />
				</MobileSlideUp>
			)}

			<MobileSlideUp
				openMenu={showFilters}
				toggleSlideUp={handleCloseFilterMenu}>
				<MainMobileFilters />
			</MobileSlideUp>
		</>
	);
};

export default MobileSlideUpMenus;
