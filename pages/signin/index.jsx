import SignUpOrSignIn from "../../components/SignUpOrSignIn";
import SignInForm from "../../components/SignInForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function signin() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/dashboard");
		}
	}, [isAuthenticated]);

	return (
		<SignUpOrSignIn
			heading="Welcome!"
			subheading="Sign in to get early access to insights that help you craft the perfect semester"
			form={<SignInForm />}
			variant="signin"
		/>
	);
}
