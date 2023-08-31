import React from "react";

const Tab = ({ label, handleTabClick, value, index }) => {
	return (
		<button
			data-index={index}
			className={`font-classmate relative z-10 px-4 py-2 text-lg text-classmate-green-7 ${
				value === index ? "!text-classmate-gold-1" : ""
			}`}
			onClick={(e) => handleTabClick(e)}>
			{label}
			{value === index && (
				<span
					className={`absolute bottom-0 left-0 h-[2px] w-full bg-classmate-gold-1 transition-all duration-1000 ease-in-out`}
				/>
			)}
		</button>
	);
};

export default Tab;
