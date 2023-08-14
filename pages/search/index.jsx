import React, { useEffect, useState } from "react";
import MainSearchCard from "../../components/MainSearchCard";
import MainSearchResults from "../../components/MainSearchResults";
import MobileSlideUpMenus from "../../components/MobileSlideUpMenus";
import useWindowSize from "../../hooks/useWindowSize";
import RankGraph from "../../components/RankGraph";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { resetMainSearch } from "../../redux/main-search/mainSearchActions";

export default function Search() {
	const { width } = useWindowSize();

	const dispatch = useAppDispatch();
	const mainSearch = useSelector((state) => state.mainSearch);

	const [showGraph, toggleGraph] = useState(false);
	const [showFilters, toggleFilters] = useState(false);

	useEffect(() => {
		return () => {
			dispatch(resetMainSearch());
		};
	}, []);

	const handleShowGraphClick = () => {
		toggleGraph((current) => !current);
	};

	const handleOpenFilterMenu = () => {
		// dispatch(setMultiFilterSearchFilters(mainSearch.filters));
		toggleFilters((current) => !current);
	};

	const handleCloseFilterMenu = () => {
		// setTimeout(() => dispatch(resetFilterSearch()), 100);
		toggleFilters((current) => !current);
	};

	return (
		<div
			className={`section-padding flex w-full justify-center gap-10 bg-classmate-tan-1 py-10 ${
				width >= 768 ? "" : "flex-col items-center"
			}`}>
			<div className="w-full max-w-3xl">
				<div className="w-full">
					<MainSearchCard
						handleOpenFilterMenu={handleOpenFilterMenu}
						handleCloseFilterMenu={handleCloseFilterMenu}
						showFilters={showFilters}
					/>
				</div>
				<div className="mt-10 min-h-[500px] w-full">
					<MainSearchResults />
				</div>
			</div>

			{width < 768 ? (
				<MobileSlideUpMenus
					showGraph={showGraph}
					showFilters={showFilters}
					handleShowGraphClick={handleShowGraphClick}
					handleOpenFilterMenu={handleOpenFilterMenu}
					handleCloseFilterMenu={handleCloseFilterMenu}
				/>
			) : (
				mainSearch.type === "professor" && (
					<div className="sticky top-10 h-full w-full max-w-sm rounded-xl bg-classmate-tan-2 shadow-xl">
						<RankGraph titleStyles={"!text-2xl"} />
					</div>
				)
			)}
		</div>
	);
}
