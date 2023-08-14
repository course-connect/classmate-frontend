import SignUpOrSignIn from "../../components/SignUpOrSignIn";
import SignUpForm from "../../components/SignUpForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignUp() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/account");
		}
	}, [isAuthenticated]);

	return (
		<SignUpOrSignIn
			heading="Sign Up"
			subheading="Sign up to get access to insights and create your prefect semester"
			form={<SignUpForm />}
			variant="signup"
		/>
	);
}
