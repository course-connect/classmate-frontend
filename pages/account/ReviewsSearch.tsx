import React, { useEffect } from "react";

import useDebounce from "../../hooks/useDebounce";

// React Hook Form components
import { useForm } from "react-hook-form";

// Next.js components
import Image from "next/image";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
	search,
	clearFilterSearch,
} from "../../redux/filter-search/filterSearchActions";

const ReviewsSearch = () => {
	const dispatch = useAppDispatch();
	const filterSearch = useSelector((state) => state.filterSearch);
	const { handleSubmit, watch, register, setValue } = useForm();

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			const hasSearchInput = value.userInput !== "";
			if (name === "userInput" && hasSearchInput) {
				handleSubmit(onSubmit)();
			} else if (name === "userInput") {
				dispatch(clearFilterSearch());
			}
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [watch]);

	const onSubmit = useDebounce(({ userInput }) => {
		console.log(userInput);
	}, 300);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex items-center overflow-hidden rounded-md border-[1px] border-classmate-gray-3">
				<Image
					src="/search-solid.svg"
					width={0}
					height={0}
					alt=""
					className="filter-classmate-green-4 mx-4 h-[20px] w-[20px]"
				/>
				<input
					defaultValue=""
					{...register("userInput")}
					placeholder={`Enter ${filterSearch.type}`}
					type="text"
					className={`font-classmate z-10 h-[55px] w-full bg-transparent text-lg text-classmate-green-6 placeholder-classmate-green-6 outline-none`}
				/>
			</div>
		</form>
	);
};

export default ReviewsSearch;
