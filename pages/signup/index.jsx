import React, { useEffect } from "react";
import SignUpOrSignIn from "../../components/SignUpOrSignIn";
import SignUpForm from "./SignUpForm";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function SignUp() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/dashboard");
		}
	}, [isAuthenticated]);

	return (
		<SignUpOrSignIn
			heading="Sign Up"
			subheading="Sign up and be among the first to get access to Classmates professor insights"
			form={<SignUpForm />}
			variant="signup"
		/>
	);
}
