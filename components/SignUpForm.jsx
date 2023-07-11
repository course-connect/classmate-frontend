import React from "react";
import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import { useForm, FormProvider } from "react-hook-form";
import ClassmateButton from "../components/ClassmateButton";
import { signUp } from "../redux/auth/authActions";
import { useDispatch } from "react-redux";

import BasicInput from "./BasicInput";
import PasswordInput from "./PasswordInput";

export default function SignUpForm() {
	const dispatch = useDispatch();
	const { width: windowWidth } = useWindowSize();

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	const { handleSubmit, setError } = methods;

	function validateEmail(email) {
		const emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!email.match(emailRegex)) {
			setError("email", {
				type: "custom",
				message: "invalid email address",
			});
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
		if (!password.match(oneUpper)) {
			errorMessage = "must contain one uppercase character";
		} else if (!password.match(oneLower)) {
			errorMessage = "must contain one lowercase character";
		} else if (!password.match(oneDigit)) {
			errorMessage = "must contain one digit";
		} else if (!password.match(oneSpecial)) {
			errorMessage = "must contain one special character";
		} else if (!password.match(minChar)) {
			errorMessage = "must contain more than 8 characters";
		} else if (!password.match(maxChar)) {
			errorMessage = "must contain less than 64 characters";
		}

		if (errorMessage) {
			console.log("errorMessage");
			setError("password");
			setError("confirmPassword", {
				type: "custom",
				message: errorMessage,
			});
			return true;
		}
		return false;
	}

	function validateConfirmPassword(password, confirmPassword) {
		if (password !== confirmPassword) {
			setError("confirmPassword", {
				type: "custom",
				message: "does not match",
			});
			setError("password");
			return true;
		}
		return false;
	}

	function onSubmit({ email, password, confirmPassword }) {
		const emailError = validateEmail(email);
		const passwordError = validatePassword(password);
		const confirmPasswordError = validateConfirmPassword(
			password,
			confirmPassword
		);

		if (!emailError && !passwordError && !confirmPasswordError) {
			dispatch(signUp({ email, password }));
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full sm:mt-12">
			<div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
				<FormProvider {...methods}>
					<BasicInput
						name="email"
						label="Email"
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						name="password"
						label="Password"
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						name="confirmPassword"
						label="Confirm Password"
						size={windowWidth >= 640 ? "medium" : "small"}
						rules={{
							required: true,
						}}
					/>
				</FormProvider>
			</div>
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
				size={windowWidth >= 640 ? "lg" : "sm"}
				styles="my-6 bg-classmate-gold-1 text-classmate-tan-2 sm:my-12">
				Sign Up
			</ClassmateButton>
		</form>
	);
}
