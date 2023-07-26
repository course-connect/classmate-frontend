import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import HeroSchoolAndProfessorSelect from "./HeroSchoolAndProfessorSelect";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
	search,
	clearSearch,
	setSearchType,
} from "../redux/search/searchActions";
import HeroSchoolAndProfessorResults from "./HeroSchoolAndProfessorResults";

const HeroSchoolAndProfessorSearch = ({
	setSchoolFilter,
	setShowFirstSearch,
}) => {
	const dispatch = useAppDispatch();
	const searchType = useSelector((state) => state.search.searchType);
	const methods = useForm({
		defaultValues: {
			searchType: searchType,
			search: "",
		},
	});
	const { handleSubmit, watch, register, setValue } = methods;

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			const hasSearchInput = value.search !== "";
			if (name === "search" && hasSearchInput) {
				handleSubmit(onSubmit)();
			} else if (name === "search") {
				dispatch(clearSearch());
			}
		});
		return () => {
			dispatch(clearSearch());
			subscription.unsubscribe();
		};
	}, [watch]);

	useEffect(() => {
		dispatch(setSearchType("school"));
	}, []);

	const onSubmit = (value: { search: string; searchType: string }) => {
		dispatch(search(value));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex w-full items-center rounded-full bg-classmate-tan-2  shadow-lg">
			<HeroSchoolAndProfessorSelect methods={methods} />
			<input
				{...register("search")}
				placeholder={`Enter ${
					searchType === "school" || searchType === "course"
						? "school"
						: "professor"
				}`}
				type="text"
				className="font-classmate z-10 h-[55px] w-full rounded-br-full rounded-tr-full bg-transparent pl-3 text-lg text-classmate-green-6 placeholder-classmate-green-6 outline-none ring-classmate-gold-1 focus:ring"
			/>
			<button
				type="submit"
				className="absolute right-[4px] z-20 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-classmate-tan-2 outline-none ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:ring">
				<Image src="./search.svg" width={22} height={22} alt="" />
			</button>
			<HeroSchoolAndProfessorResults
				setValue={setValue}
				setSchoolFilter={setSchoolFilter}
				setShowFirstSearch={setShowFirstSearch}
			/>
		</form>
	);
};

export default HeroSchoolAndProfessorSearch;
