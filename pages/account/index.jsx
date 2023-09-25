import React, { useState } from "react";

import AccountTab from "./AccountTab";
import AccountMenu from "./AccountMenu";
import ProfileTab from "./ProfileTab";
import ReviewsTab from "./ReviewsTab";
import BookmarksTab from "./BookmarksTab";
import SnackBar from "../../components/ui/SnackBar/SnackBar";

import ClassmateButton from "../../components/ClassmateButton";
import Image from "next/image";

import useWindowSize from "../../hooks/useWindowSize";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setAccountTab } from "../../redux/account-tab/accountActions";

const Account = () => {
	const dispatch = useAppDispatch();
	const account = useSelector((state) => state.account);
	const { width: windowWidth } = useWindowSize();

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const router = useRouter();

	useEffect(() => {
		return () => {
			dispatch(setAccountTab(""));
		};
	}, []);

	useEffect(() => {
		if (windowWidth >= 768 && account.currentTab === "") {
			dispatch(setAccountTab("profile"));
		}
	}, [windowWidth]);

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/signin");
		}
	}, [isAuthenticated]);

	const handleBackClick = () => {
		dispatch(setAccountTab(""));
	};

	return (
		<div className="section-padding relative flex justify-center bg-classmate-tan-1 py-10 md:min-h-[742px] md:justify-normal md:p-0 lg:min-h-[912px]">
			<div className="absolute top-0 hidden h-[1px] w-full bg-classmate-gray-4 md:block" />
			<AccountMenu />
			{account.currentTab !== "" && (
				<div className=" md:section-padding flex w-full flex-col items-center gap-4  md:py-10  lg:py-20 lg:pb-28">
					{windowWidth < 768 && (
						<ClassmateButton
							callback={handleBackClick}
							variant="filled"
							size="sm"
							styles="bg-classmate-tan-2 flex justify-center items-center gap-2 !px-3 text-classmate-green-1 !mr-auto">
							<Image
								src="/caret-solid.svg"
								width={0}
								height={0}
								alt="small arrow"
								className="filter-classmate-green-7 !ml-auto h-[12px] w-[12px] rotate-90"
							/>
							Back
						</ClassmateButton>
					)}
					{account.snackBar.text && <SnackBar />}
					{account.currentTab === "profile" && <ProfileTab />}
					{account.currentTab === "account" && <AccountTab />}
					{account.currentTab === "reviews" && <ReviewsTab />}
					{account.currentTab === "bookmarks" && <BookmarksTab />}
					{/* {account.currentTab === "profile" && <AccountProfileSection />} */}
				</div>
			)}
		</div>
	);
};

export default Account;
