import SignUpOrSignIn from "../../components/SignUpOrSignIn";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SignUpStepper from "./SignUpStepper";

export default function SignUp() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/account");
		}
	}, [isAuthenticated]);

	return (
		<SignUpStepper>
			<SignUpOrSignIn
				heading="Sign Up"
				subheading="Sign up to get access to insights and create your prefect semester"
				form={<SignUpForm />}
				variant="signup"
			/>
			<h1>Step 2</h1>
			<h1>Step 3</h1>
		</SignUpStepper>
	);
}
