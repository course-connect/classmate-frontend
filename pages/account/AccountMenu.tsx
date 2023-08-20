import React from "react";
import AccountMenuButton from "./AccountMenuButton";

const AccountMenu = ({ setAccountTab }) => {
	return (
		<div className="flex min-h-[550px] w-full max-w-sm flex-col gap-3 rounded-lg bg-classmate-tan-2 p-6 shadow-xl sm:rounded-xl sm:p-8 md:min-w-[250px]  md:max-w-[250px] md:rounded-none md:p-6">
			<div className="mb-2">
				<p className="font-classmate-bold text-2xl">My Account</p>
				<div className="mt-1 h-[2px] w-full rounded-full bg-classmate-gray-4" />
			</div>
			<AccountMenuButton
				text="Profile"
				icon="./graduation-cap.svg"
				iconAlt="a graduation cap"
				callback={() => setAccountTab("profile")}
			/>
			<AccountMenuButton
				text="Account"
				icon="./user-solid.svg"
				iconAlt="a persons siloutte"
				callback={() => setAccountTab("account")}
			/>
			<AccountMenuButton
				text="My Reviews"
				icon="./star-solid.svg"
				iconAlt="a star"
				callback={() => setAccountTab("reviews")}
			/>
		</div>
	);
};

export default AccountMenu;
