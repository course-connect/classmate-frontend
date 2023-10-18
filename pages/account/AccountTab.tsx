import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import AccountSection from "./AccountSection";
import { useForm, FormProvider } from "react-hook-form";
import BasicInput from "../../components/BasicInput";
import PasswordInput from "../../components/PasswordInput";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";
import ClassmateButton from "../../components/ClassmateButton";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { updateUserPassword } from "../../redux/user-profile/userProfileActions";
import { setAuthError, removeAuthError } from "../../redux/auth/authActions";

const AccountTab = () => {
	const dispatch = useAppDispatch();
	const auth = useSelector((state) => state.auth);
	const userData = useSelector((state) => state.userProfile.userData);
	const [allowSave, setAllowSave] = useState(false);
	const saveTimeout = useRef(false);

	const defaultValues = {
		accountType: userData?.account_type,
		email: userData?.email,
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

	function validatePassword(password) {
		const oneUpper = "(?=.*?[A-Z])";
		const oneLower = "(?=.*?[a-z])";
		const oneDigit = "(?=.*?[0-9])";
		const oneSpecial = "(?=.*?[#?!@$%^&*-])";
		const minChar = ".{8,}";
		const maxChar = ".{8,64}";

		let errorMessage = "";
		if (!password.match(minChar)) {
			errorMessage = "password must contain at least 8 characters";
		} else if (!password.match(maxChar)) {
			errorMessage = "password must contain at most 64 characters";
		} else if (!password.match(oneUpper)) {
			errorMessage = "password must contain one uppercase character";
		} else if (!password.match(oneLower)) {
			errorMessage = "password must contain one lowercase character";
		} else if (!password.match(oneDigit)) {
			errorMessage = "password must contain one digit";
		} else if (!password.match(oneSpecial)) {
			errorMessage = "password must contain one special character";
		}

		if (errorMessage) {
			setError("newPassword");
			setError("confirmPassword");
			dispatch(setAuthError(errorMessage));
			// setErrorMessage(errorMessage);
			return true;
		}
		return false;
	}

	function validateConfirmPassword(password, confirmPassword) {
		if (password !== confirmPassword) {
			setError("newPassword");
			setError("confirmPassword");
			dispatch(setAuthError("passwords do not match"));
			// setErrorMessage("passwords do not match");
			return true;
		}
		return false;
	}

	function validateOldPassword(oldPassword) {
		if (!oldPassword) {
			setError("oldPassword");
			dispatch(setAuthError("missing fields"));
			return true;
		}
		return false;
	}

	function onSubmit({ oldPassword, newPassword, confirmPassword }) {
		removeAuthError();
		if (allowSave && !saveTimeout.current) {
			const passwordError = validatePassword(newPassword);
			const confirmPasswordError = validateConfirmPassword(
				newPassword,
				confirmPassword
			);
			const oldPasswordError = validateOldPassword(oldPassword);

			if (!oldPasswordError && !passwordError && !confirmPasswordError) {
				const passwordInputs = {
					oldPass: oldPassword,
					newPass: newPassword,
					confirmPass: confirmPassword,
				};
				dispatch(updateUserPassword(passwordInputs));
			}
			saveTimeout.current = true;

			setTimeout(() => {
				saveTimeout.current = false;
			}, 3000);
		}
	}

	useEffect(() => {
		const handleBeforeUnload = (e) => {
			e.preventDefault();
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			dispatch(removeAuthError());
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	return (
		<AccountSection title="Account">
			<form
				onChange={handleFormChange}
				onSubmit={handleSubmit(onSubmit)}
				className="mt-8 flex w-full flex-col gap-4 lg:gap-6">
				<FormProvider {...methods}>
					<FormSelect
						disabled={true}
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
						disabled={true}
						rules={{
							required: true,
						}}
					/>

					<PasswordInput
						size="lg"
						name="oldPassword"
						label="Old Password"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						size="lg"
						name="newPassword"
						label="New Password"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						size="lg"
						name="confirmPassword"
						label="Confirm Password"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					{auth.error && (
						<div className="mt-2 flex items-center gap-2">
							<Image
								src="/circle-exclamation-solid.svg"
								width={0}
								height={0}
								alt="exclamation mark"
								className="filter-classmate-red-error h-[12px] w-[12px]"
							/>
							<span className="font-classmate text-sm text-classmate-error-red">
								{auth.errorMessage}
							</span>
						</div>
					)}
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
