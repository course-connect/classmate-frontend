import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const RankGraphSelect = ({ handleAddFilterClick, label }) => {
	const filterSearch = useSelector((state) => state.filterSearch);
	const [dropDownOpen, setDropDownOpen] = useState(false);

	const scoreFilterButtons = [
		{ filterValue: "5", filterText: "Top 5" },
		{ filterValue: "10", filterText: "Top 10" },
		{ filterValue: "15", filterText: "Top 15" },
		{ filterValue: "20", filterText: "Top 20" },
		{ filterValue: "25", filterText: "Top 25" },
	];

	const [showScoreFilterSearch, toggleScoreFilterSearch] = useState(false);
	// Score Handlers
	const handleScoreFilterClick = () => {
		toggleScoreFilterSearch((current) => !current);
	};

	const data = {
		text: `Top ${label}`,
		filter: filterSearch.filters.score.filter_text,
		allowedFor: ["professor"],
		filterType: "score",
		icon: "/star-solid.svg",
		iconAlt: "",
		callback: handleScoreFilterClick,
		showSlideUp: showScoreFilterSearch,
		toggleSlideUp: toggleScoreFilterSearch,
		filterOptions: scoreFilterButtons,
		title: "Score",
		selectable: true,
	};

	const openFilterMenu = () => {
		if (!data.selectable) {
			data.callback();
		}
		setDropDownOpen(true);
	};

	const closeFilterMenu = () => {
		setDropDownOpen(false);
	};

	return (
		<>
			{dropDownOpen && (
				<div
					onClick={closeFilterMenu}
					className="fixed left-0 top-0 z-20 h-screen w-screen"
				/>
			)}
			<div className="relative">
				<button
					onClick={openFilterMenu}
					className="font-classmate flex w-fit items-center justify-between rounded-md bg-classmate-gray-6 px-3 py-1 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring">
					<div className="pointer-events-none flex w-full items-center justify-center gap-3 whitespace-nowrap">
						{data.text}
						<Image
							width={0}
							height={0}
							className={`filter-classmate-green-7 h-[8px] w-[8px] transition ${
								dropDownOpen ? "rotate-180" : ""
							}`}
							src="/caret-solid.svg"
							alt="arrow indicating if the dropdown menu is open"
						/>
					</div>
				</button>

				<div
					className={`absolute right-0 top-10 z-30 flex origin-top-left flex-col gap-2 rounded-lg bg-classmate-tan-2 p-4 shadow-md transition ${
						dropDownOpen
							? "pointer-events-auto scale-100 opacity-100"
							: "pointer-events-none scale-75 opacity-0"
					}`}>
					{data.filterOptions.map((option, index) => {
						const filterSelected =
							option.filterValue ===
							filterSearch.filters[data.filterType].filter_value;
						return (
							<button
								key={index}
								data-filtertype={data.filterType}
								data-filtervalue={option.filterValue}
								data-filtertext={option.filterText}
								onClick={(e) => {
									closeFilterMenu();
									handleAddFilterClick(e);
								}}
								className="font-classmate relative flex min-w-[100px] whitespace-nowrap rounded-[4px] bg-classmate-gray-5 px-2 py-1 text-left text-classmate-green-7 ring-classmate-gold-1 focus:ring">
								{option.filterText}
								{filterSelected && (
									<div className="absolute right-0 top-0 flex h-full w-8 items-center justify-center">
										<Image
											width={0}
											height={0}
											src="/check-solid.svg"
											alt="check mark"
											className="filter-classmate-green-4 h-[14px] w-[14px]"
										/>
									</div>
								)}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default RankGraphSelect;
