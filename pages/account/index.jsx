import React, { useState } from "react";

import AccountMenu from "./AccountMenu";

import AccountProfileSection from "./AccountProfileSection";
import ClassmateButton from "../../components/ClassmateButton";
import Image from "next/image";

import useWindowSize from "../../hooks/useWindowSize";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Account = () => {
	const [accountTab, setAccountTab] = useState("");

	const { width: windowWidth } = useWindowSize();

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/signin");
		}
	}, [isAuthenticated]);

	const handleBackClick = () => {
		setAccountTab("");
	};

	return (
		<div className="section-padding relative flex justify-center bg-classmate-tan-1 py-6 md:justify-normal md:p-0">
			<div className="absolute top-0 hidden h-[1px] w-full bg-classmate-gray-4 md:block" />
			{(accountTab === "" || windowWidth >= 768) && (
				<AccountMenu setAccountTab={setAccountTab} />
			)}
			{accountTab !== "" && (
				<div className="md:section-padding flex w-full max-w-sm flex-col items-center gap-4 md:py-10">
					{windowWidth < 768 && (
						<ClassmateButton
							callback={handleBackClick}
							variant="filled"
							size="sm"
							styles="bg-classmate-tan-2 flex justify-center items-center gap-2 !px-3 text-classmate-green-1 !mr-auto">
							<Image
								src="./caret-down-green-7.svg"
								width={12}
								height={12}
								alt={""}
								className="!ml-auto rotate-90"
							/>
							Back
						</ClassmateButton>
					)}

					{accountTab === "profile" && <AccountProfileSection />}
				</div>
			)}
		</div>
	);
};

export default Account;
