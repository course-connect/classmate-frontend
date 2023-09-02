import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const ProfessorTags = () => {
	const { width: windowWidth } = useWindowSize();

	return (
		windowWidth >= 768 && <div className="col-start-1 col-end-4"> tags</div>
	);
};

export default ProfessorTags;
