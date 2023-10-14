import React from "react";

const Block = ({ children }) => {
	return (
		<span className="rounded-md bg-classmate-gray-6 px-[6px] py-[2px] leading-none text-classmate-gold-1">
			{children}
		</span>
	);
};

export default Block;
