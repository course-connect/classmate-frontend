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
		<div className="flex w-full max-w-md flex-col gap-8 lg:max-w-2xl">
			<BookmarksSearch />
			<BookmarkResults />
		</div>
	);
};

export default BookmarksTab;
