import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { getBookmarks } from "../../redux/user-profile/userProfileActions";
import BookmarksFiltered from "./BookmarksFiltered";

const BookmarkResults = () => {
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);

	useEffect(() => {
		if (!userProfile.bookmarks) dispatch(getBookmarks());
	}, []);

	return (
		<div className="flex">
			{userProfile.bookmarksLoading && <p>loading...</p>}
			{userProfile.bookmarks && !userProfile.bookmarksLoading && (
				<BookmarksFiltered />
			)}
		</div>
	);
};

export default BookmarkResults;
