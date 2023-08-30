import React from "react";

const Tabs = ({ children, handleTabClick, value }) => {
	const addProps = (children) => {
		return children.map((child) => {
			return React.cloneElement(child, {
				handleTabClick,
			});
		});
	};

	switch (value) {
		case 0:
			console.log("slide for 0");
			break;
		case 1:
			console.log("slide for 1");
			break;
		case 2:
			console.log("slide for 2");
			break;
	}

	return (
		<div className="relative  w-full">
			<div className="flex">{addProps(children)}</div>
			<span className="absolute bottom-0 h-[2px] w-full bg-classmate-green-7" />
			<span className="absolute bottom-0 h-[2px] w-16 bg-red-500" />
		</div>
	);
};

export default Tabs;
