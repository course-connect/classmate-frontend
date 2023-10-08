import React from "react";
import MainSearchResult from "../../components/MainSearchResult";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// Fuzzy search
import Fuse from "fuse.js";

const BookmarksFiltered = () => {
	const userProfile = useSelector((state) => state.userProfile);
	const bookmarksSearch = useSelector((state) => state.bookmarksSearch);
	const router = useRouter();

	const getCourseSearchResults = () => {
		const options = {
			includeScore: true,
			keys: ["course_code", "course_name", "review"],
		};

		const fuse = new Fuse(userProfile.bookmarks.courses, options);

		if (bookmarksSearch.userInput) {
			return fuse.search(bookmarksSearch.userInput);
		}
		return userProfile.bookmarks.courses.map((bookmark) => ({
			item: bookmark,
		}));
	};

	const getProfessorSearchResults = () => {
		const options = {
			includeScore: true,
			keys: ["first_name", "last_name", "bio"],
		};

		const fuse = new Fuse(userProfile.bookmarks.professors, options);

		if (bookmarksSearch.userInput) {
			return fuse.search(bookmarksSearch.userInput);
		}
		return userProfile.bookmarks.professors.map((bookmark) => ({
			item: bookmark,
		}));
	};

	const handlerItemClick = (e) => {
		if (e.target.dataset.id !== "classmate-button") {
			const resultClicked = e.target.closest("#result");
			const resultType = resultClicked.dataset.resulttype;
			const resultID = resultClicked.dataset.resultid;

			if (resultType === "professor") {
				router.push(`/professor/${resultID}`);
			}
		}
	};

	return (
		<>
			{bookmarksSearch.type === "professor" ? (
				<div onClick={handlerItemClick} className="w-full">
					{getProfessorSearchResults().map((result, index) => (
						<MainSearchResult
							key={index}
							result={{
								firebaseID: userProfile.userData.bookmarks.professors[index],
								data: result.item,
							}}
							filters={null}
							userInput={bookmarksSearch.userInput}
							resultType={bookmarksSearch.type}
						/>
					))}
				</div>
			) : (
				<div onClick={handlerItemClick} className="w-full">
					{getCourseSearchResults().map((result, index) => (
						<MainSearchResult
							key={index}
							result={{
								firebaseID: userProfile.userData.bookmarks.courses[index],
								data: result.item,
							}}
							filters={null}
							userInput={bookmarksSearch.userInput}
							resultType={bookmarksSearch.type}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default BookmarksFiltered;
