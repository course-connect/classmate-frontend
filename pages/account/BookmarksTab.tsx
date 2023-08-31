import React, { useState, useEffect } from "react";

import BookmarksSearch from "./BookmarksSearch";
import BookmarkResults from "./BookmarkResults";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { getBookmarks } from "../../redux/user-profile/userProfileActions";

const BookmarksTab = () => {
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);

	useEffect(() => {
		if (!userProfile.bookmarks) dispatch(getBookmarks());
	}, []);

	return (
		<div className="w-full max-w-md lg:max-w-2xl">
			<BookmarksSearch />
			<BookmarkResults />
		</div>
	);
};

export default BookmarksTab;
