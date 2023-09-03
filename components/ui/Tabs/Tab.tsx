import React from "react";

const Tab = ({ label, handleTabClick, value, index }) => {
	const tabSelected = value === index;
	return (
		<button
			data-index={index}
			className={`font-classmate relative z-10 rounded-tl-xl rounded-tr-xl px-4 py-2 text-lg text-classmate-green-7 outline-none ${
				tabSelected
					? "bg-classmate-tan-1 !bg-opacity-50 !text-classmate-green-6"
					: ""
			}`}
			onClick={(e) => handleTabClick(e)}>
			{label}
			{tabSelected && (
				<span
					className={`absolute bottom-0 left-0 h-[2px] w-full bg-classmate-green-6 transition-all duration-1000 ease-in-out`}
				/>
			)}
		</button>
	);
};

export default Tab;
