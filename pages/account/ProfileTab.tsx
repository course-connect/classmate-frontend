import React, { useState, useLayoutEffect } from "react";
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
			firstName: "",
			lastName: "",
			zipcode: "",
			major: "",
			school: "",
			graduationYear: "",
		},
	});
	const { handleSubmit, setError, setValue, getValues } = methods;

	function onSubmit(values) {
		console.log(values);
	}

	return (
		<AccountSection title="Profile">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-8 flex w-full flex-col gap-4 lg:gap-6">
				<FormProvider {...methods}>
					<div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
						<BasicInput
							size="lg"
							name="firstName"
							label="First Name *"
							background="bg-classmate-tan-2"
							rules={{
								required: true,
							}}
						/>
						<BasicInput
							size="lg"
							name="lastName"
							label="Last Name *"
							background="bg-classmate-tan-2"
							rules={{
								required: true,
							}}
						/>
					</div>
					<BasicInput
						size="lg"
						name="zipcode"
						label="Zipcode *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<BasicInput
						size="lg"
						name="major"
						label="Major *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<FormSelect
						name="school"
						size="lg"
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
						name="graduationYear"
						size="lg"
						label="Graduation Year *"
						type="local-search"
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
					fullWidth={true}
					size="lg"
					styles="bg-classmate-green-2 text-classmate-tan-2 mt-5">
					Save
				</ClassmateButton>
			</form>
		</AccountSection>
	);
};

export default AccountProfileSection;
