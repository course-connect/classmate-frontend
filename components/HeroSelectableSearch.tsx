import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import HeroSearchSelect from "./HeroSearchSelect";
import HeroSearchInput from "./HeroSearchInput";
import Box from "@mui/material/Box";

const HeroSelectableSearch = () => {
	const methods = useForm();
	const { handleSubmit, setError } = methods;

	return (
		<div className="relative flex w-96 items-center">
			<div className="absolute left-[109px] h-7 w-[2px] rounded-xl bg-classmate-green-7" />
			<FormProvider {...methods}>
				<HeroSearchSelect />
				<HeroSearchInput name="search" size="small" />
			</FormProvider>
		</div>
	);
};

export default HeroSelectableSearch;
