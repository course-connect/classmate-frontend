import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Account() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/signin");
		}
	}, [isAuthenticated]);

	return (
		<div className="mx-64">
			<h1>Account</h1>
		</div>
	);
}
