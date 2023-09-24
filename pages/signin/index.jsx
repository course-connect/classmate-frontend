import SignUpOrInCard from "../../components/SignUpOrInCard";
import SignInForm from "../../components/SignInForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function signin() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/account");
		}
	}, [isAuthenticated]);

	return (
		<SignUpOrInCard
			heading="Welcome"
			subheading="Sign in to manage your courses and create the prefect semester"
			form={<SignInForm />}
			variant="signin"
		/>
	);
}
