import React, { useEffect } from "react";

import useDebounce from "../../hooks/useDebounce";

// Project components
import BookmarksSelect from "./BookmarksSelect";

// React Hook Form components
import { useForm } from "react-hook-form";

// Next.js components
import Image from "next/image";

// Redux components
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { saveBookmarksSearchInput } from "../../redux/bookmarks-search/bookmarksSearchActions";

const BookmarksSearch = () => {
	const dispatch = useAppDispatch();
	const bookmarksSearch = useSelector((state) => state.bookmarksSearch);
	const { handleSubmit, watch, register, setValue } = useForm();

	useEffect(() => {
		const subscription = watch((_, { name }) => {
			if (name === "userInput") {
				handleSubmit(onSubmit)();
			}
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [watch]);

	useEffect(() => {
		handleSubmit(onSubmit)();
	}, []);

	const onSubmit = useDebounce(({ userInput }) => {
		dispatch(saveBookmarksSearchInput(userInput));
	}, 300);

	const handleSearchClick = () => {
		handleSubmit(onSubmit)();
	};

	return (
		<div className="w-full max-w-md rounded-2xl bg-classmate-tan-2 p-7 shadow-lg lg:max-w-2xl">
			<div>
				<p className="font-classmate-bold mb-5 text-2xl capitalize leading-5 text-classmate-green-1">
					{`${bookmarksSearch.type} Bookmarks`}
				</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="relative flex w-full items-center rounded-lg border-[1px] border-classmate-gray-3 bg-classmate-tan-2">
					<BookmarksSelect setValue={setValue} />
					<input
						defaultValue=""
						{...register("userInput")}
						placeholder={`Search bookmarks`}
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
			</div>
		</div>
	);
};

export default BookmarksSearch;
