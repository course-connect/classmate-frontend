import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { getBookmarks } from "../../redux/user-profile/userProfileActions";
import BookmarksFiltered from "./BookmarksFiltered";
import MainSearchResultSkeltons from "../../components/MainSearchResultSkeltons";

const BookmarkResults = () => {
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);
	const bookmarksSearch = useSelector((state) => state.bookmarksSearch);

	useEffect(() => {
		if (!userProfile.bookmarks) dispatch(getBookmarks());
	}, []);

	return (
		<div className="flex flex-col gap-8">
			{userProfile.bookmarksLoading && (
				<MainSearchResultSkeltons resultType={bookmarksSearch.type} />
			)}
			{userProfile.bookmarks && !userProfile.bookmarksLoading && (
				<BookmarksFiltered />
			)}
		</div>
	);
};

export default BookmarkResults;
