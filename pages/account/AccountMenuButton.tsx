import React from "react";
import Image from "next/image";

const AccountMenuButton = ({ text, icon, iconAlt, callback }) => {
	return (
		<button
			onClick={callback}
			className="flex w-full items-center gap-4 rounded-md bg-classmate-gray-5 px-4 py-[10px] outline-none ring-classmate-gold-1 focus:ring">
			<Image
				src={icon}
				width={20}
				height={20}
				alt="a graduation cap"
				className="h-[20px] w-[20px]"
			/>
			<p className="font-classmate text-classmate-green-6">{text}</p>
			<Image
				src="./caret-down-green-7.svg"
				width={12}
				height={12}
				alt={iconAlt}
				className="!ml-auto -rotate-90"
			/>
		</button>
	);
};

export default AccountMenuButton;
