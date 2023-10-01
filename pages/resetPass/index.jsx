import SignUpOrInCard from "../../components/SignUpOrInCard";
import ResetPassForm from "./ResetPassForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ResetPass() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.push("/dashboard");
		}
	}, [isAuthenticated]);

	return (
		<SignUpOrInCard
			heading="New Password"
			subheading="Enter your new password"
			form={<ResetPassForm />}
		/>
	);
}
