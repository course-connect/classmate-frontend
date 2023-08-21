import React, { useState, useLayoutEffect } from "react";
import AccountSection from "./AccountSection";
import { useForm, FormProvider } from "react-hook-form";
import BasicInput from "../../components/BasicInput";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";
import ClassmateButton from "../../components/ClassmateButton";

const AccountTab = () => {
	const methods = useForm({
		defaultValues: {
			accountType: "",
			email: "",
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	});
	const { handleSubmit, setError, setValue, getValues } = methods;

	function onSubmit(values) {
		console.log(values);
	}

	return (
		<AccountSection title="Account">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-8 flex w-full flex-col gap-4 lg:gap-6">
				<FormProvider {...methods}>
					<FormSelect
						name="accountType"
						size="lg"
						label="Account Type *"
						type="select"
						backgroundColor="bg-classmate-tan-2"
						setValue={setValue}
						getValues={getValues}
						rules={{
							required: true,
						}}>
						<FormSelectOptions text="Student" />
						<FormSelectOptions text="Professor" />
					</FormSelect>
					<BasicInput
						size="lg"
						name="email"
						label="Email *"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>

					<BasicInput
						size="lg"
						name="oldPassword"
						label="Old Password"
						background="bg-classmate-tan-2"
					/>
					<BasicInput
						size="lg"
						name="newPassword"
						label="New Password"
						background="bg-classmate-tan-2"
					/>

					<BasicInput
						size="lg"
						name="confirmPassword"
						label="Confirm Password"
						background="bg-classmate-tan-2"
					/>
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

export default AccountTab;
