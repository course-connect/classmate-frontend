import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import HeroSearchSelect from "./HeroSearchSelect";
import HeroSearchInput from "./HeroSearchInput";

const HeroSelectableSearch = () => {
	const [searchType, setSearchType] = useState("school");
	const methods = useForm();
	const { handleSubmit, watch, getValues, setValue } = methods;

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

	const onSubmit = (values) => {
		console.log("submitting", values);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative flex  w-full max-w-sm items-center">
			<div className="absolute left-[114px] h-7 w-[1px] rounded-xl bg-classmate-green-7" />
			<FormProvider {...methods}>
				<HeroSearchSelect name="searchType" />
				<HeroSearchInput name="search" size="small" searchType={searchType} />
			</FormProvider>
		</form>
	);
};

export default HeroSelectableSearch;
