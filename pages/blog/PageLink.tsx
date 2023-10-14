import React from "react";

const PageLink = ({ linkRef, children }) => {
	const handleButtonClick = () => {
		if (linkRef.current) {
			linkRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<button
			className="inline-block cursor-pointer text-left text-classmate-gold-1"
			onClick={handleButtonClick}>
			{children}
		</button>
	);
};

export default PageLink;
