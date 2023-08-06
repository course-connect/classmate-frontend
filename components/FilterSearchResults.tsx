import React from "react";
import { useSelector } from "react-redux";
import FilterButton from "./FilterButton";
import Image from "next/image";

const FilterSearchResults = () => {
	const filterSearch = useSelector((state) => state.filterSearch);
	const hasSearchResults = filterSearch.results.length !== 0;

	let searchResults;
	switch (filterSearch.type) {
		case "school":
			searchResults = hasSearchResults ? (
				filterSearch.results.map(({ firebaseID, data: school }, index) => {
					const filterAlreadyAdded =
						firebaseID === filterSearch.filters.school.filter_value;
					return (
						<FilterButton
							key={index}
							icon="./graduation-cap.svg"
							iconAlt="Graduation Cap"
							filterText={school.school_name}
							filterValue={firebaseID}
							filterType={"school"}
							styles="whitespace-nowrap text-sm h-[40px] overflow-hidden">
							<div className="relative flex w-full items-center justify-between overflow-hidden ">
								<p className="text-classmate-green-6">{school.school_name}</p>
								{filterAlreadyAdded && (
									<div className="absolute right-0 flex h-full w-8 items-center justify-center bg-classmate-gray-6">
										<Image
											width={16}
											height={10}
											src="./check-green.svg"
											alt="check mark"
										/>
									</div>
								)}
							</div>
						</FilterButton>
					);
				})
			) : (
				<p className="font-classmate pointer-events-none text-classmate-green-7">
					No Results
				</p>
			);
			break;
		case "professor":
			searchResults = hasSearchResults ? (
				filterSearch.results.map(({ firebaseID, data: professor }, index) => {
					const filterAlreadyAdded =
						firebaseID === filterSearch.filters.professor.filter_value;
					return (
						<FilterButton
							key={index}
							text={`${professor.first_name} ${professor.last_name}`}
							icon="./glasses.svg"
							iconAlt="Glasses"
							filterText={`${professor.first_name} ${professor.last_name}`}
							filterValue={firebaseID}
							filterType={"professor"}
							styles="whitespace-nowrap text-sm h-[40px] overflow-hidden">
							<div className="relative flex w-full items-center justify-between overflow-hidden ">
								<p className="text-classmate-green-6">{`${professor.first_name} ${professor.last_name}`}</p>
								{/* Add the check mark when filter is already added */}
								{filterAlreadyAdded && (
									<div className="absolute right-0 flex h-full w-8 items-center justify-center bg-classmate-gray-6">
										<Image
											width={16}
											height={10}
											src="./check-green.svg"
											alt="check mark"
										/>
									</div>
								)}
							</div>
						</FilterButton>
					);
				})
			) : (
				<p className="font-classmate pointer-events-none text-classmate-green-7">
					No Results
				</p>
			);
			break;
		default:
			searchResults = hasSearchResults ? (
				filterSearch.results.map(({ firebaseID, data: course }, index) => {
					const filterAlreadyAdded =
						firebaseID === filterSearch.filters.course.filter_value;
					return (
						<FilterButton
							key={index}
							icon="./book-solid.svg"
							iconAlt="Book"
							filterText={course.course_name}
							filterValue={firebaseID}
							filterType={"course"}
							styles="whitespace-nowrap text-sm h-[40px] overflow-hidden">
							<div className="relative flex w-full items-center justify-between overflow-hidden">
								<p className="text-classmate-green-6">{course.course_name}</p>
								{/* Add the check mark when filter is already added */}
								{filterAlreadyAdded && (
									<div className="absolute right-0 flex h-full w-8 items-center justify-center bg-classmate-gray-6">
										<Image
											width={16}
											height={10}
											src="./check-green.svg"
											alt="check mark"
										/>
									</div>
								)}
							</div>
						</FilterButton>
					);
				})
			) : (
				<p className="font-classmate pointer-events-none text-classmate-green-7">
					No Results
				</p>
			);
			break;
	}

	return <>{searchResults}</>;
};

export default FilterSearchResults;
