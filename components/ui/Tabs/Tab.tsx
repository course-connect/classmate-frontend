import React from "react";

const Tab = ({ label, handleTabClick, index }) => {
	return (
		<button
			data-index={index}
			className="font-classmate px-2 py-1 text-classmate-green-7"
			onClick={(e) => handleTabClick(e)}>
			{label}
		</button>
	);
};

export default Tab;
