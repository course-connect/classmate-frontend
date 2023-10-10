import React from "react";
import Image from "next/image";
import ClassmateButton from "./ClassmateButton";
import {
	saveBookmark,
	removeBookmark,
} from "../redux/user-profile/userProfileActions";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const MainSearchResultBookmark = ({ bookmarkType, itemID }) => {
	const userProfile = useSelector((state) => state.userProfile);
	const auth = useSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const userHasBookmarked =
		auth.isAuthenticated &&
		(userProfile.userData.bookmarks.professors.includes(itemID) ||
			userProfile.userData.bookmarks.courses.includes(itemID));

	const handleBookmarkClick = () => {
		if (!auth.isAuthenticated) {
			router.push("/signin");
		} else if (!userProfile.bookmarksLoading) {
			if (userHasBookmarked) {
				dispatch(removeBookmark({ bookmarkType, itemID }));
			} else {
				dispatch(saveBookmark({ bookmarkType, itemID }));
			}
		}
	};

	return (
		<ClassmateButton
			callback={handleBookmarkClick}
			variant="text"
			size="xs"
			styles="!p-1 h-fit min-w-[30px]">
			<Image
				src={
					userHasBookmarked ? "/bookmark-solid.svg" : "/bookmark-outline.svg"
				}
				height={0}
				width={0}
				alt="bookmark"
				className={`pointer-events-none h-fit w-[22px] ${
					userHasBookmarked
						? "filter-classmate-gold-1"
						: "filter-classmate-green-1"
				}`}
			/>
		</ClassmateButton>
	);
};

export default MainSearchResultBookmark;
