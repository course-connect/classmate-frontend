import React from "react";

const Tabs = ({ children, handleTabClick, value }) => {
	const addProps = (children) => {
		return React.Children.map(children, (child, index) => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, {
					key: index,
					handleTabClick,
					value,
				});
			} else {
				return child;
			}
		});
	};

	return (
		<div className="relative  w-full">
			<div className="flex">{addProps(children)}</div>
			<span className="absolute bottom-0 h-[2px] w-full bg-classmate-gray-4" />
		</div>
	);
};

export default Tabs;
