import React from "react";

const Paragraph = ({ children }) => {
	return (
		<p className="my-6 text-lg text-classmate-green-7 xs:my-10 xs:text-xl">
			{children}
		</p>
	);
};

export default Paragraph;
