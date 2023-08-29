import {
	CLEAR_USER_PROFILE,
	PROFILE_RETRIEVED,
	BOOKMARKS_LOADING,
	BOOKMARKS_SUCCESS,
	BOOKMARKS_FAILURE,
} from "./userProfileTypes";

const initialState = {
	userData: null,
	bookmarks: null,
	bookmarksLoading: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CLEAR_USER_PROFILE:
			return {
				...initialState,
			};
		case PROFILE_RETRIEVED:
			return {
				...state,
				userData: payload,
			};
		case BOOKMARKS_LOADING:
			return {
				...state,
				bookmarksLoading: true,
			};
		case BOOKMARKS_SUCCESS:
			return {
				...state,
				bookmarks: payload,
				bookmarksLoading: false,
			};
		case BOOKMARKS_FAILURE:
			return {
				...state,
				bookmarksLoading: false,
			};
		default:
			return state;
	}
};
