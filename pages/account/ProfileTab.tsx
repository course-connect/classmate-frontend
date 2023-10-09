import React, { useState, useRef } from "react";
import AccountSection from "./AccountSection";
import { useForm, FormProvider } from "react-hook-form";
import BasicInput from "../../components/BasicInput";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";
import ClassmateButton from "../../components/ClassmateButton";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { setSnackBar } from "../../redux/account-tab/accountActions";
import { updateUserProfile } from "../../redux/user-profile/userProfileActions";
import Spinner from "../../components/ui/Spinner/Spinner";

import majors from "../../assests/data/majors";

const AccountProfileSection = () => {
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);
	const [allowSave, setAllowSave] = useState(false);
	const saveTimeout = useRef(false);

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

	const defaultValues = {
		firstName: userProfile.userData?.first_name,
		lastName: userProfile.userData?.last_name,
		zipcode: userProfile.userData?.zipcode,
		major: userProfile.userData?.major,
		school: userProfile.userData?.school?.school_name || "",
		school_id: userProfile.userData?.school?.school_id || "",
		graduationYear: userProfile.userData?.graduation_year,
	};

	const methods = useForm({
		defaultValues,
	});
	const { handleSubmit, setError, setValue, getValues } = methods;

	function handleFormChange() {
		const formChanged =
			JSON.stringify(defaultValues) !== JSON.stringify(getValues());
		if (formChanged) {
			setAllowSave(true);
		} else if (allowSave && !formChanged) {
			setAllowSave(false);
		}
	}

	function onSubmit(values) {
		if (
			allowSave &&
			!saveTimeout.current &&
			!userProfile.userProfileUpdateLoading
		) {
			dispatch(
				updateUserProfile({
					first_name: values.firstName,
					last_name: values.lastName,
					zipcode: values.zipcode,
					school: { school_name: values.school, school_id: values.school_id },
					major: values.major,
					graduation_year: values.graduationYear,
				})
			);

			saveTimeout.current = true;

			setTimeout(() => {
				saveTimeout.current = false;
			}, 3000);
		}
	}

	return (
		<AccountSection title="Profile">
			<form
				onChange={handleFormChange}
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
					<FormSelect
						name="major"
						size="lg"
						label="Major *"
						type="local-search"
						backgroundColor="bg-classmate-tan-2"
						setValue={methods.setValue}
						getValues={methods.getValues}
						rules={{
							required: true,
						}}>
						{majors.map((major, index) => (
							<FormSelectOptions key={index} text={major} />
						))}
					</FormSelect>
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
						{years.map((year, index) => (
							<FormSelectOptions key={index} text={year} />
						))}
					</FormSelect>
				</FormProvider>
				<ClassmateButton
					type="submit"
					variant="filled"
					fullWidth={true}
					size="lg"
					styles="text-classmate-tan-2 mt-5 bg-classmate-green-2">
					{userProfile.userProfileUpdateLoading ? <Spinner /> : "Save"}
				</ClassmateButton>
			</form>
		</AccountSection>
	);
};

export default AccountProfileSection;
