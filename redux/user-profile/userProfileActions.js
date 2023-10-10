import axios from "axios";
import {
	CLEAR_USER_PROFILE,
	PROFILE_RETRIEVED,
	BOOKMARKS_LOADING,
	BOOKMARKS_SUCCESS,
	BOOKMARKS_FAILURE,
	REVIEWS_LOADING,
	REVIEWS_SUCCESS,
	REVIEWS_FAILURE,
	UPDATE_USER_PROFILE_LOADING,
	UPDATE_USER_PROFILE_SUCCESS,
	UPDATE_USER_PROFILE_FAILURE,
} from "./userProfileTypes";
import { headers } from "next/dist/client/components/headers";
import { setSnackBar } from "../account-tab/accountActions";

export const updateUserProfile = (updatedInfo) => async (dispatch) => {
	dispatch(updateUserProfileLoading());

	try {
		const res = await dispatch(attemptUpdateUserProfile(updatedInfo));
		dispatch(updateUserProfileSuccess(res.data));
		dispatch(
			setSnackBar({
				type: "success",
				text: "Profile saved!",
			})
		);
	} catch (err) {
		console.log(err);
		dispatch(
			setSnackBar({
				type: "error",
				text: "Save failed",
			})
		);
		dispatch(updateUserProfileFailure());
	}
};

const updateUserProfileLoading = () => (dispatch) => {
	dispatch({
		type: UPDATE_USER_PROFILE_LOADING,
	});
};

const attemptUpdateUserProfile = (updatedInfo) => (dispatch, getState) => {
	const body = { ...updatedInfo };
	const { accessToken } = getState().auth;

	const header = {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${accessToken}`,
		},
	};

	return axios.patch("/student/updateUserProfile", body, header);
};

const updateUserProfileSuccess = (updatedUser) => (dispatch) => {
	dispatch({
		type: UPDATE_USER_PROFILE_SUCCESS,
		payload: updatedUser,
	});
};

const updateUserProfileFailure = () => (dispatch) => {
	dispatch({
		type: UPDATE_USER_PROFILE_FAILURE,
	});
};

///////////////////////////////////////
export const clearUserProfile = () => async (dispatch) => {
	dispatch({
		type: CLEAR_USER_PROFILE,
	});
};

export const profileRetrieved = (userData) => async (dispatch) => {
	dispatch({
		type: PROFILE_RETRIEVED,
		payload: userData,
	});
};

export const saveBookmark =
	({ bookmarkType, itemID }) =>
	async (dispatch) => {
		dispatch(bookmarksLoading());

		try {
			const res = await dispatch(attemptSaveBookmark({ bookmarkType, itemID }));
			dispatch(updateUserProfileSuccess(res.data));
			dispatch(bookmarksSuccess());
			dispatch(
				setSnackBar({
					type: "success",
					text: "Bookmark saved!",
				})
			);
		} catch (err) {
			console.log(err);
			dispatch(bookmarksFailure());
		}
	};

const attemptSaveBookmark =
	({ bookmarkType, itemID }) =>
	(dispatch, getState) => {
		const { accessToken } = getState().auth;

		const header = {
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${accessToken}`,
			},
		};

		const body = {
			type: bookmarkType,
			bookmarkID: itemID,
		};

		return axios.patch("/student/addBookmark", body, header);
	};

export const removeBookmark =
	({ bookmarkType, itemID }) =>
	async (dispatch) => {
		dispatch(bookmarksLoading());

		try {
			const res = await dispatch(
				attemptRemoveBookmark({ bookmarkType, itemID })
			);
			dispatch(updateUserProfileSuccess(res.data));
			dispatch(bookmarksSuccess());
			dispatch(
				setSnackBar({
					type: "success",
					text: "Bookmark removed!",
				})
			);
		} catch (err) {
			console.log(err);
			dispatch(bookmarksFailure());
		}
	};

const attemptRemoveBookmark =
	({ bookmarkType, itemID }) =>
	(dispatch, getState) => {
		const { accessToken } = getState().auth;

		const header = {
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${accessToken}`,
			},
		};

		const body = {
			type: bookmarkType,
			bookmarkID: itemID,
		};

		return axios.patch("/student/removeBookmark", body, header);
	};

const bookmarksLoading = () => (dispatch) => {
	dispatch({
		type: BOOKMARKS_LOADING,
	});
};

const bookmarksSuccess = (bookmarks) => (dispatch) => {
	dispatch({
		type: BOOKMARKS_SUCCESS,
		payload: bookmarks,
	});
};

const bookmarksFailure = () => (dispatch) => {
	dispatch({
		type: BOOKMARKS_FAILURE,
	});
};

export const getReviews = () => async (dispatch) => {
	dispatch(reviewsLoading());

	try {
		const res = await dispatch(attemptReviewsRetrieval());
		dispatch(reviewsSuccess(res.data));
	} catch (err) {
		dispatch(reviewsFailure());
	}
};

const attemptReviewsRetrieval = () => (dispatch, getState) => {
	// const { accessToken } = getState().auth;

	// FIX THIS, use access token instead
	const userID = "CYfnxTD0QD8aL4hXmbYb";

	// const header = {
	// 	headers: {
	// 		"content-type": "application/json",
	// 		authorization: `Bearer ${accessToken}`,
	// 	},
	// };

	return axios.get(`/student/reviews/${userID}`);
};

const reviewsLoading = () => (dispatch) => {
	dispatch({
		type: REVIEWS_LOADING,
	});
};

const reviewsSuccess = (reviews) => (dispatch) => {
	dispatch({
		type: REVIEWS_SUCCESS,
		payload: reviews,
	});
};

const reviewsFailure = () => (dispatch) => {
	dispatch({
		type: REVIEWS_FAILURE,
	});
};

export const getBookmarks = () => async (dispatch) => {
	dispatch(bookmarksLoading());

	try {
		const res = await dispatch(attemptBookmarkRetrieval());
		const results = {
			courses: res[0].data,
			professors: res[1].data,
		};
		dispatch(bookmarksSuccess(results));
	} catch (err) {
		dispatch(bookmarksFailure());
	}
};

const attemptBookmarkRetrieval = () => (dispatch, getState) => {
	const { accessToken } = getState().auth;

	const header = {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${accessToken}`,
		},
	};
	const courses = axios.get("/student/bookmarks/courses", header);
	const professors = axios.get("/student/bookmarks/professors", header);
	return Promise.all([courses, professors]);
};
