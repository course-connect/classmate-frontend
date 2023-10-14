import React from "react";

const Title = ({ children }) => {
	return (
		<div className="font-classmate-bold text-3xl text-classmate-green-1 xs:my-6 xs:mt-2 sm:text-5xl">
			{children}
		</div>
	);
};

export default Title;
