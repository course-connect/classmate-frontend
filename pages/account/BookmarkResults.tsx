import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { getBookmarks } from "../../redux/user-profile/userProfileActions";
import { useRouter } from "next/router";

import MainSearchResult from "../../components/MainSearchResult";

const BookmarkResults = () => {
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);
	const bookmarksSearch = useSelector((state) => state.bookmarksSearch);
	const router = useRouter();

	const handlerItemClick = (e) => {
		if (e.target.id !== "classmate-button") {
			const resultClicked = e.target.closest("#result");
			const resultType = resultClicked.dataset.resulttype;
			const resultID = resultClicked.dataset.resultid;

			if (resultType === "professor") {
				router.push(`/professor/${resultID}`);
			}
		}
	};

	useEffect(() => {
		if (!userProfile.bookmarks) dispatch(getBookmarks());
	}, []);

	return (
		<div className="flex">
			{userProfile.bookmarksLoading && <p>loading...</p>}
			{userProfile.bookmarks && !userProfile.bookmarksLoading && (
				<>
					{bookmarksSearch.type === "professor" ? (
						<div onClick={handlerItemClick} className="w-full">
							{userProfile.bookmarks.professors.map((result, index) => (
								<MainSearchResult
									key={index}
									result={{
										firebaseID:
											userProfile.userData.bookmarks.professors[index],
										data: result,
									}}
									filters={null}
									userInput={bookmarksSearch.userInput}
									resultType={bookmarksSearch.type}
								/>
							))}
						</div>
					) : (
						<div onClick={handlerItemClick} className="w-full">
							{userProfile.bookmarks.courses.map((result, index) => (
								<MainSearchResult
									key={index}
									result={{
										firebaseID: userProfile.userData.bookmarks.courses[index],
										data: result,
									}}
									filters={null}
									userInput={bookmarksSearch.userInput}
									resultType={bookmarksSearch.type}
								/>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default BookmarkResults;
