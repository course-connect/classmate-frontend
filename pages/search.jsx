import React from "react";
import MainSearchCard from "../components/MainSearchCard";
import MainSearchResults from "../components/MainSearchResults";
import MobileSlideUpMenus from "../components/MobileSlideUpMenus";

export default function Search() {
	return (
		<div className="section-padding bg-classmate-tan-1 py-10">
			<div className="">
				<MainSearchCard />
			</div>
			<div className="h-[1000px]">
				<MainSearchResults />
			</div>
			<MobileSlideUpMenus />
		</div>
	);
}
