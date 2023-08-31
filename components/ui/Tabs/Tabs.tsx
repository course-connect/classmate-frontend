import React from "react";

const Tabs = ({ children, handleTabClick, value }) => {
	const addProps = (children) => {
		return children.map((child, index) =>
			React.cloneElement(child, {
				key: index,
				handleTabClick,
				value,
			})
		);
	};

	return (
		<div className="relative  w-full">
			<div className="flex">{addProps(children)}</div>
			<span className="absolute bottom-0 h-[2px] w-full bg-classmate-green-7" />
		</div>
	);
};

export default Tabs;
