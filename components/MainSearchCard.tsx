import React from "react";
import MainSearch from "./MainSearch";
import ClassmateButton from "./ClassmateButton";
import MainSearchCardFilters from "./MainSearchCardFilters";

import Image from "next/image";

import { useAppDispatch } from "../hooks/reduxHooks";
import {
	removeMainSearchFilter,
	search,
} from "../redux/main-search/mainSearchActions";
import { useSelector } from "react-redux";

const MainSearchCard = ({
	handleOpenFilterMenu,
	handleCloseFilterMenu,
	showFilters,
}) => {
	const dispatch = useAppDispatch();
	const mainSearch = useSelector((state) => state.mainSearch);

	const filtersApplied =
		Object.entries(mainSearch.filters).filter(([_, value]) => value.filter_text)
			.length !== 0;

	const handleRemoveClick = (e) => {
		dispatch(removeMainSearchFilter(e.target.dataset.filtertype));
		dispatch(search(mainSearch.userInput));
	};

	const formatText = (key, value) => {
		return `${key.charAt(0).toUpperCase() + key.slice(1)}: ${
			value.filter_text
		}`;
	};

	const handleAddFilterClick = () => {
		if (showFilters) {
			handleOpenFilterMenu();
		} else {
			handleCloseFilterMenu();
		}
	};

	return (
		<div className="rounded-xl bg-classmate-tan-2 p-4 shadow-xl">
			<div className="flex flex-col gap-5">
				<MainSearch />
				{/* style={{
						height: "fit-content",
						maxHeight: showFilters ? "40px" : "0px",
						transition: "all 0.4s ease",
					}}
					className={`relative flex !h-full w-full items-center overflow-hidden bg-red-500 px-1 transition ${
						showFilters ? "py-1" : ""
					}`} */}
				{showFilters && <MainSearchCardFilters />}
			</div>
			{mainSearch.type !== "school" && (
				<div className="mt-4 flex flex-wrap items-center gap-1">
					<p className="font-classmate mr-1 text-classmate-green-7">Filters:</p>
					{filtersApplied ? (
						Object.entries(mainSearch.filters)
							.filter(([_, value]) => value.filter_text)
							.map(([key, value], index) => (
								<div
									key={index}
									className="text-classmate-green font-classmate-bold flex h-fit w-fit items-center gap-2 rounded-md bg-classmate-green-4 px-[9px] py-[5px] text-xs text-classmate-tan-2">
									{formatText(key, value)}
									<button
										data-filtertype={key}
										onClick={(e) => handleRemoveClick(e)}
										className="pointer flex h-3 w-3 items-center justify-center rounded-full bg-classmate-tan-2">
										<Image
											className="pointer-events-none"
											src="./xmark-solid-green.svg"
											width={6}
											height={6}
											alt=""
										/>
									</button>
								</div>
							))
					) : (
						<ClassmateButton
							variant="filled"
							size="xs"
							styles="bg-classmate-green-4 min-w-[20px] min-h-[20px] h-[20px] !p-1 flex justify-center items-center !rounded-full"
							callback={handleAddFilterClick}>
							<Image
								className="pointer-events-none"
								src="./plus-light.svg"
								width={10}
								height={10}
								alt=""
							/>
						</ClassmateButton>
					)}
				</div>
			)}
		</div>
	);
};

export default MainSearchCard;
