import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import useWindowSize from "../../hooks/useWindowSize";
import { useForm, FormProvider } from "react-hook-form";
import ClassmateButton from "../../components/ClassmateButton";
import {
	signUp,
	removeAuthError,
	setAuthError,
} from "../../redux/auth/authActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import BasicInput from "../../components/BasicInput";
import PasswordInput from "../../components/PasswordInput";

export default function SignUpForm() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { width: windowWidth } = useWindowSize();
	const [errorMessage, setErrorMessage] = useState("");

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	const {
		handleSubmit,
		setError,
		formState: { errors },
	} = methods;

	function validateEmail(email) {
		const emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!email.match(emailRegex)) {
			setError("email");
			setErrorMessage("invalid email address");
			return true;
		}
		return false;
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
			setError("password");
			setError("confirmPassword");
			setErrorMessage(errorMessage);
			return true;
		}
		return false;
	}

	function validateConfirmPassword(password, confirmPassword) {
		if (password !== confirmPassword) {
			setError("password");
			setError("confirmPassword");
			setErrorMessage("passwords do not match");
			return true;
		}
		return false;
	}

	function onSubmit({ email, password, confirmPassword }) {
		const passwordError = validatePassword(password);
		const confirmPasswordError = validateConfirmPassword(
			password,
			confirmPassword
		);
		const emailError = validateEmail(email);

		if (!emailError && !passwordError && !confirmPasswordError) {
			dispatch(signUp({ email, password, confirmPassword }));
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
					<BasicInput
						name="email"
						label="Email"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						name="password"
						label="Password"
						background="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						name="confirmPassword"
						label="Confirm Password"
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
						src="./circle-exclamation-solid.svg"
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
			<p className="font-classmate mt-4 text-classmate-green-6">
				Have an account?&nbsp;
				<Link href="/signin" className="text-classmate-green-1 underline">
					Sign In
				</Link>
			</p>
			<ClassmateButton
				type="submit"
				variant="filled"
				fullWidth={true}
				size={windowWidth >= 640 ? "lg" : "md"}
				styles="my-6 bg-classmate-gold-1 text-classmate-tan-2 sm:my-12">
				Sign Up
			</ClassmateButton>
		</form>
	);
}
