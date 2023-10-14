import React from "react";

const BulletList = ({ children }) => {
	return (
		<ul className="my-6 text-lg text-classmate-green-7 xs:my-10 xs:text-xl">
			{children}
		</ul>
	);
};

export default BulletList;
