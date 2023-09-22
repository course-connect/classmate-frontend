import React, { useEffect, useRef } from "react";

import useDebounce from "../hooks/useDebounce";

// Project components
import MainSearchSelect from "./MainSearchSelect";

// React Hook Form components
import { useForm } from "react-hook-form";

// Next.js components
import Image from "next/image";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import { search } from "../redux/main-search/mainSearchActions";

const MainSearch = () => {
	const dispatch = useAppDispatch();
	const mainSearch = useSelector((state) => state.mainSearch);
	const { handleSubmit, watch, register, setValue } = useForm();
	const allowSearch = useRef(true);

	useEffect(() => {
		const subscription = watch((_, { name }) => {
			if (name === "userInput" && allowSearch.current) {
				handleSubmit(onSubmit)();
			}
			if (!allowSearch.current) {
				allowSearch.current = true;
			}
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [watch]);

	useEffect(() => {
		if (!mainSearch.userInput) {
			handleSubmit(onSubmit)();
		} else {
			allowSearch.current = false;
			setValue("userInput", mainSearch.userInput);
		}
	}, []);

	const onSubmit = useDebounce(({ userInput }) => {
		dispatch(search(userInput));
	}, 300);

	const handleSearchClick = () => {
		handleSubmit(onSubmit)();
	};

	return (
		<>
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
					<Image
						src="/search-solid.svg"
						width={0}
						height={0}
						alt="check mark"
						className="filter-classmate-green-4 h-[22px] w-[22px]"
					/>
				</button>
			</form>
		</>
	);
};

export default MainSearch;
