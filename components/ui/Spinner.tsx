import React from "react";

const Spinner = () => {
	return (
		<div
			className="h-5 w-5 rounded-full border-[3px] border-classmate-green-7 border-b-transparent"
			style={{ animation: "rotation 1s linear infinite" }}
		/>
	);
};

export default Spinner;
