import React, { useEffect } from "react";

// Project components
import HeroSearchOneSelect from "./HeroSearchOneSelect";
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
	searchOne,
	clearSearchOne,
} from "../redux/hero-search-one/heroSearchOneActions";

const HeroSearchOne = ({ setSchoolFilter, setShowFirstSearch }) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const heroSearchOne = useSelector((state) => state.heroSearchOne);
	const { handleSubmit, watch, register, setValue, getValues } = useForm();

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			const hasSearchInput = value.userInput !== "";
			if (name === "userInput" && hasSearchInput) {
				handleSubmit(onSubmit)();
			} else if (name === "userInput") {
				dispatch(clearSearchOne());
			}
		});
		return () => {
			dispatch(clearSearchOne());
			subscription.unsubscribe();
		};
	}, [watch]);

	const onSubmit = ({ userInput }) => {
		dispatch(searchOne(userInput));
	};

	const handleSearchClick = () => {
		router.push("/search");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex w-full items-center rounded-full bg-classmate-tan-2  shadow-lg">
			<HeroSearchOneSelect setValue={setValue} />
			<input
				defaultValue=""
				{...register("userInput")}
				placeholder={`Enter ${heroSearchOne.type}`}
				type="text"
				className="font-classmate z-10 h-[55px] w-full rounded-br-full rounded-tr-full bg-transparent pl-3 text-lg text-classmate-green-6 placeholder-classmate-green-6 outline-none ring-classmate-gold-1 focus:ring"
			/>
			<button
				type="button"
				onClick={handleSearchClick}
				className="absolute right-[4px] z-20 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-classmate-tan-2 outline-none ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:ring">
				<Image src="./search.svg" width={22} height={22} alt="" />
			</button>
			<HeroSearchOneResults
				setValue={setValue}
				setSchoolFilter={setSchoolFilter}
				setShowFirstSearch={setShowFirstSearch}
			/>
		</form>
	);
};

export default HeroSearchOne;