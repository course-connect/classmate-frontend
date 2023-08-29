import axios from "axios";
import {
	CLEAR_USER_PROFILE,
	PROFILE_RETRIEVED,
	BOOKMARKS_LOADING,
	BOOKMARKS_SUCCESS,
	BOOKMARKS_FAILURE,
} from "./userProfileTypes";

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
