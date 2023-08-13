import React, { useEffect } from "react";

import useDebounce from "../hooks/useDebounce";

// React Hook Form components
import { useForm } from "react-hook-form";

// Next.js components
import Image from "next/image";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
	search,
	clearFilterSearch,
} from "../redux/filter-search/filterSearchActions";

const FilterSearch = ({ openMenu }) => {
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

	useEffect(() => {
		setTimeout(() => setValue("userInput", ""), 100);
	}, [openMenu]);

	const onSubmit = useDebounce(({ userInput }) => {
		dispatch(search(userInput));
	}, 300);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex overflow-hidden rounded-md border-[1px] border-classmate-gray-3">
				<Image
					src="./search.svg"
					width={20}
					height={20}
					alt=""
					className="mx-3"
				/>
				<input
					defaultValue=""
					{...register("userInput")}
					placeholder={`Enter ${filterSearch.type}`}
					type="text"
					className={`font-classmate z-10 h-10 w-full bg-transparent text-classmate-green-6 placeholder-classmate-green-6 outline-none`}
				/>
			</div>
		</form>
	);
};

export default FilterSearch;
