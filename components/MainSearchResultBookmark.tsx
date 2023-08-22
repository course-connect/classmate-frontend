import React from "react";
import Image from "next/image";
import ClassmateButton from "./ClassmateButton";

const MainSearchResultBookmark = ({ bookmarkType, itemID }) => {
	const handleBookmarkClick = () => {
		alert(`saving: { ${bookmarkType}: ${itemID} }`);
	};

	return (
		<ClassmateButton
			callback={handleBookmarkClick}
			variant="text"
			size="xs"
			styles="!p-1 h-fit min-w-[30px]">
			<Image
				src="./bookmark-outline.svg"
				height={0}
				width={0}
				alt="bookmark"
				className="filter-classmate-green-1 pointer-events-none h-fit w-[22px]"
			/>
		</ClassmateButton>
	);
};

export default MainSearchResultBookmark;
