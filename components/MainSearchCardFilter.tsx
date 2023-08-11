import React, { useState } from "react";
import Image from "next/image";

const MainSearchCardFilter = ({ data }) => {
	const [dropDownOpen, setDropDownOpen] = useState(false);

	const openFilterMenu = () => {
		setDropDownOpen(true);
	};

	const closeFilterMenu = () => {
		setDropDownOpen(false);
	};

	return (
		<>
			{dropDownOpen && (
				<div
					onClick={closeFilterMenu}
					className="fixed left-0 top-0 z-20 h-screen w-screen"
				/>
			)}
			<div className="relative">
				<button
					onClick={openFilterMenu}
					className="font-classmate flex w-fit items-center justify-between rounded-md bg-classmate-gray-6 px-3 py-1 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring">
					<div className="pointer-events-none flex w-full gap-4 ">
						<Image width={16} height={16} src={data.icon} alt={data.iconAlt} />
						{data.text}
					</div>
				</button>
				{dropDownOpen && (
					<div className="absolute z-30 h-10 w-10 bg-red-500"></div>
				)}
			</div>
		</>
	);
};

export default MainSearchCardFilter;
