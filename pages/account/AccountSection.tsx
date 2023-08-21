import React from "react";

const AccountSection = ({ title, children }) => {
	return (
		<div className="w-full max-w-md rounded-2xl bg-classmate-tan-2 p-7  shadow-lg xs:p-10 lg:max-w-xl lg:p-16">
			<div className="mb-2">
				<p className="font-classmate-bold text-2xl text-classmate-green-1 lg:text-3xl">
					{title}
				</p>
				<div className="mt-1 h-[2px] w-full rounded-full bg-classmate-gray-4" />
			</div>
			{children}
		</div>
	);
};

export default AccountSection;
