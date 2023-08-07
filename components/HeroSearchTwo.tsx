import React, { useEffect } from "react";

import useDebounce from "../hooks/useDebounce";

// Project components
import HeroSearchTwoSelect from "./HeroSearchTwoSelect";
import HeroSearchTwoResults from "./HeroSearchTwoResults";

// React Hook Form components
import { useForm } from "react-hook-form";

// Next.js components
import Image from "next/image";
import { useRouter } from "next/router";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
	searchTwo,
	clearSearchTwo,
	setSearchTwoType,
} from "../redux/hero-search-two/heroSearchTwoActions";

const HeroSearchTwo = ({ setShowFirstSearch }) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const heroSearchTwo = useSelector((state) => state.heroSearchTwo);
	const { handleSubmit, watch, register, setValue, getValues } = useForm();

	useEffect(() => {
		const subscription = watch((_, { name }) => {
			if (name === "userInput") {
				handleSubmit(onSubmit)();
			}
		});
		return () => {
			dispatch(clearSearchTwo());
			subscription.unsubscribe();
		};
	}, [watch]);

	useEffect(() => {
		dispatch(setSearchTwoType("course"));
	}, []);

	const onSubmit = useDebounce(({ userInput }) => {
		if (userInput) {
			dispatch(searchTwo(userInput));
		} else {
			dispatch(clearSearchTwo());
		}
	}, 300);

	const handleSearchClick = () => {
		router.push("/search");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex w-full items-center rounded-full bg-classmate-tan-2  shadow-lg">
			<HeroSearchTwoSelect setValue={setValue} />
			<input
				defaultValue=""
				{...register("userInput")}
				placeholder={`Enter ${heroSearchTwo.type}`}
				type="text"
				className="font-classmate z-10 h-[55px] w-full rounded-br-full rounded-tr-full bg-transparent pl-3 text-lg text-classmate-green-6 placeholder-classmate-green-6 outline-none ring-classmate-gold-1 focus:ring"
			/>
			<button
				type="button"
				onClick={handleSearchClick}
				className="absolute right-[4px] z-20 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-classmate-tan-2 outline-none ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:ring">
				<Image src="./search.svg" width={22} height={22} alt="" />
			</button>
			<HeroSearchTwoResults />
		</form>
	);
};

export default HeroSearchTwo;
