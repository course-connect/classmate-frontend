import React from "react";
import AccountMenuButton from "./AccountMenuButton";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setAccountTab } from "../../redux/account-tab/accountActions";
import { useSelector } from "react-redux";

const AccountMenu = () => {
	const dispatch = useAppDispatch();
	const selectedAccountTab = useSelector((state) => state.account.currentTab);

	return (
		<div
			className={`flex min-h-[550px] w-full max-w-sm flex-col gap-3 rounded-lg bg-classmate-tan-2 p-6 shadow-xl sm:rounded-xl sm:p-8 md:flex  md:min-w-[250px] md:max-w-[250px] md:rounded-none md:p-6 ${
				selectedAccountTab !== "" ? "hidden" : ""
			}`}>
			<div className="mb-2">
				<p className="font-classmate-bold text-2xl">My Account</p>
				<div className="mt-1 h-[2px] w-full rounded-full bg-classmate-gray-4" />
			</div>
			<AccountMenuButton
				text="Profile"
				icon="./graduation-cap-solid.svg"
				iconAlt="a graduation cap"
				selected={selectedAccountTab === "profile"}
				callback={() => dispatch(setAccountTab("profile"))}
			/>
			<AccountMenuButton
				text="Account"
				icon="./user-solid.svg"
				iconAlt="a persons siloutte"
				selected={selectedAccountTab === "account"}
				callback={() => dispatch(setAccountTab("account"))}
			/>
			<AccountMenuButton
				text="My Reviews"
				icon="./star-solid.svg"
				iconAlt="a star"
				selected={selectedAccountTab === "reviews"}
				callback={() => dispatch(setAccountTab("reviews"))}
			/>
			<AccountMenuButton
				text="My Bookmarks"
				icon="./bookmark-solid.svg"
				iconAlt="bookmark"
				selected={selectedAccountTab === "bookmarks"}
				callback={() => dispatch(setAccountTab("bookmarks"))}
			/>
		</div>
	);
};

export default AccountMenu;
