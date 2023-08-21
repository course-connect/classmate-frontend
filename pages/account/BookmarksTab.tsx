import React, { useEffect } from "react";

import useDebounce from "../../hooks/useDebounce";

// React Hook Form components
import { useForm } from "react-hook-form";

// Next.js components
import Image from "next/image";

const BookmarksTab = () => {
	const { handleSubmit, watch, register } = useForm();

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			const hasSearchInput = value.userInput !== "";
			if (name === "userInput" && hasSearchInput) {
				handleSubmit(onSubmit)();
			} else if (name === "userInput") {
				console.log("clear");
			}
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [watch]);

	const onSubmit = useDebounce(({ userInput }) => {
		console.log(userInput);
		// dispatch(search(userInput));
	}, 300);

	return (
		<div className="w-full max-w-md rounded-2xl bg-classmate-tan-2 p-7 shadow-lg lg:max-w-2xl">
			<div>
				<p className="font-classmate-bold mb-5 text-2xl leading-5 text-classmate-green-1">
					My Bookmarks
				</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex overflow-hidden rounded-md border-[1px] border-classmate-gray-3">
						<Image
							src="./search.svg"
							width={20}
							height={20}
							alt=""
							className="mx-4"
						/>
						<input
							defaultValue=""
							{...register("userInput")}
							placeholder={`Search`}
							type="text"
							className={`font-classmate z-10 w-full bg-transparent py-3 text-classmate-green-6 placeholder-classmate-green-6 outline-none`}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BookmarksTab;
