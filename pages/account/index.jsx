import React from "react";

import AccountMenu from "./AccountMenu";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Account = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/signin");
		}
	}, [isAuthenticated]);

	return (
		<div className="section-padding relative bg-classmate-tan-1 py-6">
			<AccountMenu />
		</div>
	);
};

export default Account;
