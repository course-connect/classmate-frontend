import React from "react";

const CustomTabPanel = ({ children, value, index }) => {
	return value === index && <div>{children}</div>;
};

export default CustomTabPanel;
