import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../hooks/useWindowSize";
import { useForm, FormProvider } from "react-hook-form";
import ClassmateButton from "../../components/ClassmateButton";
import PasswordInput from "../../components/PasswordInput";
import BasicInput from "../../components/BasicInput";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	removeAuthError,
	setAuthError,
	requestResetPassword,
} from "../../redux/auth/authActions";

export default function ResetPasswordForm() {
	const router = useRouter();
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { width: windowWidth } = useWindowSize();
	const [errorMessage, setErrorMessage] = useState("");

	const token = router.query.token;
	const id = router.query.id;

	const methods = useForm({
		defaultValues: {
			newPassword: "",
			confirmNewPassword: "",
		},
	});
	const { handleSubmit, setError } = methods;

	function validatePassword(newPassword) {
		const oneUpper = "(?=.*?[A-Z])";
		const oneLower = "(?=.*?[a-z])";
		const oneDigit = "(?=.*?[0-9])";
		const oneSpecial = "(?=.*?[#?!@$%^&*-])";
		const minChar = ".{8,}";
		const maxChar = ".{8,64}";

		let errorMessage = "";
		if (!newPassword.match(minChar)) {
			errorMessage = "password must contain at least 8 characters";
		} else if (!newPassword.match(maxChar)) {
			errorMessage = "password must contain at most 64 characters";
		} else if (!newPassword.match(oneUpper)) {
			errorMessage = "password must contain one uppercase character";
		} else if (!newPassword.match(oneLower)) {
			errorMessage = "password must contain one lowercase character";
		} else if (!newPassword.match(oneDigit)) {
			errorMessage = "password must contain one digit";
		} else if (!newPassword.match(oneSpecial)) {
			errorMessage = "password must contain one special character";
		}

		if (errorMessage) {
			setError("newPassword");
			setError("confirmNewPassword");
			setErrorMessage(errorMessage);
			return true;
		}
		return false;
	}

	function validateConfirmPassword(newPassword, confirmNewPassword) {
		if (newPassword !== confirmNewPassword) {
			setError("newPassword");
			setError("confirmNewPassword");
			setErrorMessage("passwords do not match");
			return true;
		}
		return false;
	}

	function onSubmit({ newPassword, confirmNewPassword }) {
		const passwordError = validatePassword(newPassword);
		const confirmPasswordError = validateConfirmPassword(
			newPassword,
			confirmNewPassword
		);

		if (!passwordError && !confirmPasswordError) {
			console.log("succcess");
			dispatch(removeAuthError());
			// dispatch(signUp({ newPassword, token, id }));
		} else {
			dispatch(setAuthError());
		}
	}

	useEffect(() => {
		const handleBeforeUnload = (e) => {
			e.preventDefault();
			dispatch(removeAuthError());
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full sm:mt-12">
			<div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
				<FormProvider {...methods}>
					<PasswordInput
						name="newPassword"
						label="New Password"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						name="confirmNewPassword"
						label="Confirm New Password"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
				</FormProvider>
			</div>
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
						{errorMessage}
					</span>
				</div>
			)}
			<ClassmateButton
				type="submit"
				variant="filled"
				fullWidth={true}
				size={windowWidth >= 640 ? "lg" : "sm"}
				styles="my-6 bg-classmate-gold-1 text-classmate-tan-2 sm:my-12">
				Reset Password
			</ClassmateButton>
		</form>
	);
}
