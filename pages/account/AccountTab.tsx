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

const AccountTab = () => {
	const dispatch = useAppDispatch();
	const userData = useSelector((state) => state.userProfile.userData);
	const [allowSave, setAllowSave] = useState(false);
	const saveTimeout = useRef(false);

	const defaultValues = {
		accountType: userData.account_type,
		email: userData.email,
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
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
		if (allowSave && !saveTimeout.current) {
			dispatch(
				setSnackBar({
					type: "success",
					text: "Profile saved!",
				})
			);

			saveTimeout.current = true;
			console.log(values);

			setTimeout(() => {
				saveTimeout.current = false;
			}, 3000);
		}
	}

	return (
		<AccountSection title="Account">
			<form
				onChange={handleFormChange}
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
					styles="text-classmate-tan-2 mt-5 bg-classmate-green-2">
					Save
				</ClassmateButton>
			</form>
		</AccountSection>
	);
};

export default AccountTab;
