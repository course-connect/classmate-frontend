import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import HeroSelect from "./HeroSelect";
import Image from "next/image";

const HeroSelectableSearch = () => {
	const [searchType, setSearchType] = useState("school");
	const methods = useForm({
		defaultValues: {
			searchType: "school",
			search: "",
		},
	});
	const { handleSubmit, watch, getValues, register } = methods;

	useEffect(() => {
		const subscription = watch(() => {
			const { searchType } = getValues();
			setSearchType((currentValue) => {
				const searchTypeChanged = currentValue !== searchType;
				if (!searchTypeChanged) {
					handleSubmit(onSubmit)();
				}
				return searchType;
			});
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = (value) => {
		console.log("submitting", value);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex w-full max-w-sm items-center rounded-full bg-classmate-tan-2 shadow-lg">
			<HeroSelect methods={methods} />
			<input
				{...register("search")}
				placeholder={`Enter ${searchType}`}
				type="text"
				className="font-classmate z-10 h-[50px] w-full rounded-br-full rounded-tr-full  bg-transparent pl-3 text-lg text-classmate-green-6 placeholder-classmate-green-6 outline-none ring-classmate-gold-1 focus:ring"
			/>
			<button
				type="submit"
				className="absolute right-[4px] z-20 flex h-[44px] w-[44px] items-center justify-center rounded-full outline-none ring-classmate-gold-1 transition-colors hover:bg-classmate-gray-5 focus:ring">
				<Image src="./search.svg" width={22} height={22} alt="" />
			</button>
		</form>
	);
};

export default HeroSelectableSearch;
