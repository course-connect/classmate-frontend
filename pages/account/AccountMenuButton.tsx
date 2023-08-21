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
				width={20}
				height={20}
				alt="a graduation cap"
				className="h-[20px] w-[20px]"
				style={{
					filter:
						"invert(33%) sepia(12%) saturate(711%) hue-rotate(65deg) brightness(98%) contrast(91%)",
				}}
			/>
			<p className="font-classmate text-classmate-green-6">{text}</p>
			<Image
				src="./caret-down-green-7.svg"
				width={12}
				height={12}
				alt={iconAlt}
				className="!ml-auto -rotate-90 md:hidden"
			/>
		</button>
	);
};

export default AccountMenuButton;
