import React, { useState } from "react";
import AccountSection from "./AccountSection";
import { useForm, FormProvider } from "react-hook-form";
import BasicInput from "../../components/BasicInput";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";
import ClassmateButton from "../../components/ClassmateButton";

const AccountProfileSection = () => {
	function generateYearArray() {
		const currentYear = new Date().getFullYear();
		const futureYear = currentYear + 10;
		const yearArray = [];

		for (let year = currentYear; year <= futureYear; year++) {
			yearArray.push(year);
		}

		return yearArray;
	}

	const [years, setYears] = useState(generateYearArray());

	const methods = useForm({
		defaultValues: {
			email: "",
		},
	});
	const { handleSubmit, setError, setValue, getValues } = methods;

	function onSubmit(values) {
		console.log(values);
	}

	console.log(generateYearArray());

	return (
		<AccountSection title="Profile">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-8 flex w-full flex-col gap-4 sm:mt-12">
				<FormProvider {...methods}>
					<BasicInput
						size="sm"
						name="email"
						label="Email *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<BasicInput
						size="sm"
						name="firstName"
						label="First Name *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<BasicInput
						size="sm"
						name="lastName"
						label="Last Name *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<BasicInput
						size="sm"
						name="zipcode"
						label="Zipcode *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<BasicInput
						size="sm"
						name="major"
						label="Major *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<FormSelect
						name="school"
						size="sm"
						label="School *"
						type="database-search"
						backgroundColor="bg-classmate-tan-2"
						searchType="school"
						setValue={setValue}
						getValues={getValues}
						rules={{
							required: true,
						}}
					/>
					<FormSelect
						name="graduation-year"
						size="sm"
						label="Graduation Year *"
						type="select"
						backgroundColor="bg-classmate-tan-2"
						setValue={setValue}
						getValues={getValues}
						rules={{
							required: true,
						}}>
						{years.map((year) => (
							<FormSelectOptions text={year} />
						))}
					</FormSelect>
				</FormProvider>
				<ClassmateButton
					type="submit"
					variant="filled"
					fullWidth="true"
					size="lg"
					styles="bg-classmate-green-2 text-classmate-tan-2 mt-5">
					Save
				</ClassmateButton>
			</form>
		</AccountSection>
	);
};

export default AccountProfileSection;
