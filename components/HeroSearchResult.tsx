import React from "react";

const HeroSearchResult = ({ children }) => {
	return (
		<button
			type="button"
			className={`w-full bg-blue-500 px-5 py-5 text-left outline-none ring-classmate-gold-1 hover:bg-red-300 focus:ring`}>
			{children}
		</button>
	);
};

export default HeroSearchResult;
