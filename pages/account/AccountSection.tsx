import React from "react";

const AccountSection = ({ title, children }) => {
	return (
		<div className="w-full rounded-lg bg-classmate-tan-2 p-6 shadow-lg">
			<div className="mb-2">
				<p className="font-classmate-bold text-2xl">{title}</p>
				<div className="mt-1 h-[2px] w-full rounded-full bg-classmate-gray-4" />
			</div>
			{children}
		</div>
	);
};

export default AccountSection;
