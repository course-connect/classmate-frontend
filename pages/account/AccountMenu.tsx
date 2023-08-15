import React from "react";
import AccountMenuButton from "./AccountMenuButton";

const AccountMenu = () => {
	return (
		<div className="flex flex-col gap-4 rounded-lg bg-classmate-tan-2 p-5 shadow-xl">
			<div className="mb-2">
				<p className="font-classmate-bold text-2xl">My Account</p>
				<div className="mt-1 h-[2px] w-full rounded-full bg-classmate-gray-4" />
			</div>
			<AccountMenuButton
				text="Profile"
				icon="./graduation-cap.svg"
				iconAlt="a graduation cap"
				callback={() => console.log("Profile")}
			/>
			<AccountMenuButton
				text="Account"
				icon="./user-solid.svg"
				iconAlt="a persons siloutte"
				callback={() => console.log("Account")}
			/>
			<AccountMenuButton
				text="My Reviews"
				icon="./star-solid.svg"
				iconAlt="a star"
				callback={() => console.log("My Reviews")}
			/>
		</div>
	);
};

export default AccountMenu;
