import React from "react";
import MainSearch from "./MainSearch";

const MainSearchCard = () => {
	return (
		<div className="rounded-xl bg-classmate-tan-2 p-4 shadow-xl">
			<MainSearch />
			<div>
				<p>Filters:</p>
			</div>
		</div>
	);
};

export default MainSearchCard;
