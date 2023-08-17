import React from "react";
import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import { useForm, FormProvider } from "react-hook-form";
import ClassmateButton from "./ClassmateButton";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/auth/authActions";

import BasicInput from "./BasicInput";
import PasswordInput from "./PasswordInput";
import FormSelect from "./ui/FormSelect";
import FormSelectOptions from "../components/ui/FormSelectOptions";

export default function SignInForm() {
	const dispatch = useDispatch();
	const { width: windowWidth } = useWindowSize();

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { handleSubmit, setError, setValue, getValues } = methods;

	function validateEmail(email) {
		const emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		return !email.match(emailRegex);
	}

	function validatePassword(password) {
		const passwordRegex = `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$`;
		return !password.match(passwordRegex);
	}

	function onSubmit({ email, password }) {
		const emailError = validateEmail(email);
		const passwordError = validatePassword(password);

		if (!emailError && !passwordError) {
			dispatch(signIn({ email, password }));
		} else {
			setError("email");
			setError("password", {
				type: "custom",
				message: "Your login or password is incorrect",
			});
		}
	}

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
						size={windowWidth >= 640 ? "medium" : "small"}
						rules={{
							required: true,
						}}
					/>
					<FormSelect
						setValue={setValue}
						getValues={getValues}
						type="database-search"
						searchType="school"
						name="test"
						label="Test"
						backgroundColor="bg-classmate-tan-2"
						rules={{
							required: true,
						}}
					/>
				</FormProvider>
			</div>
			<p className="font-classmate mt-4 text-classmate-green-6">
				<Link href="/signin" className="text-classmate-green-1 underline">
					Forgot Password?
				</Link>
			</p>
			<ClassmateButton
				type="submit"
				variant="filled"
				fullWidth="true"
				size={windowWidth >= 640 ? "lg" : "sm"}
				styles="my-6 bg-classmate-gold-1 text-classmate-tan-2 sm:my-12">
				Sign In
			</ClassmateButton>
		</form>
	);
}
