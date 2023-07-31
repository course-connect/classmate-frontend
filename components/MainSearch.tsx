import React, { useEffect } from "react";

// Project components
import MainSearchSelect from "./MainSearchSelect";
import HeroSearchOneResults from "./HeroSearchOneResults";

// React Hook Form components
import { useForm } from "react-hook-form";

// Next.js components
import Image from "next/image";
import { useRouter } from "next/router";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
	search,
	clearMainSearch,
} from "../redux/main-search/mainSearchActions";

const MainSearch = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const mainSearch = useSelector((state) => state.mainSearch);
	const { handleSubmit, watch, register, setValue } = useForm();

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			const hasSearchInput = value.userInput !== "";
			if (name === "userInput" && hasSearchInput) {
				handleSubmit(onSubmit)();
			} else if (name === "userInput") {
				dispatch(clearMainSearch());
			}
		});
		return () => {
			dispatch(clearMainSearch());
			subscription.unsubscribe();
		};
	}, [watch]);

	const onSubmit = ({ userInput }) => {
		dispatch(search(userInput));
	};

	const handleSearchClick = () => {
		alert("does nothing");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex w-full items-center rounded-lg border-[1px] border-classmate-gray-3 bg-classmate-tan-2">
			<MainSearchSelect setValue={setValue} />
			<input
				defaultValue=""
				{...register("userInput")}
				placeholder={`Enter ${mainSearch.type}`}
				type="text"
				className="font-classmate z-10 h-[55px] w-full rounded-br-lg rounded-tr-lg bg-transparent pl-3 text-lg text-classmate-green-6 placeholder-classmate-green-6 outline-none ring-classmate-gold-1 focus:ring"
			/>
			<button
				type="submit"
				onClick={handleSearchClick}
				className="absolute right-[4px] z-20 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-classmate-tan-2 outline-none ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:ring">
				<Image src="./search.svg" width={22} height={22} alt="" />
			</button>
		</form>
	);
};

export default MainSearch;
