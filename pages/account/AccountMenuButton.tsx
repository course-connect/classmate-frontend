import React from "react";
import Image from "next/image";

const AccountMenuButton = ({ text, icon, iconAlt, selected, callback }) => {
	return (
		<button
			onClick={callback}
			className={`flex w-full items-center gap-4 rounded-md bg-classmate-gray-5 px-4 py-[10px] outline-none ring-classmate-gold-1 transition-all duration-100 hover:bg-classmate-gray-6 focus:ring md:bg-transparent ${
				selected ? "md:!bg-classmate-gray-6" : ""
			}`}>
			<Image
				src={icon}
				width={0}
				height={0}
				alt={iconAlt}
				className="filter-classmate-green-7 h-[20px] w-[20px]"
			/>
			<p className="font-classmate text-classmate-green-6">{text}</p>
			<Image
				src="/caret-solid.svg"
				width={0}
				height={0}
				alt={iconAlt}
				className="filter-classmate-green-7 !ml-auto h-[12px] w-[12px] -rotate-90 md:hidden"
			/>
		</button>
	);
};

export default AccountMenuButton;
