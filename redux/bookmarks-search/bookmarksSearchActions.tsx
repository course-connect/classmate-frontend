import {
	SET_BOOKMARKS_SEARCH_TYPE,
	CLEAR_BOOKMARKS_SEARCH,
	RESET_BOOKMARKS_SEARCH,
	SAVE_BOOKMARKS_SEARCH_INPUT,
} from "./bookmarksSearchTypes";

// Reset to initial state
export const resetBookmarksSearch = () => async (dispatch) => {
	dispatch({
		type: RESET_BOOKMARKS_SEARCH,
	});
};

export const saveBookmarksSearchInput = (userInput) => async (dispatch) => {
	dispatch({
		type: SAVE_BOOKMARKS_SEARCH_INPUT,
		payload: userInput,
	});
};

export const setBookmarksSearchType = (searchType) => (dispatch) => {
	dispatch({
		type: SET_BOOKMARKS_SEARCH_TYPE,
		payload: searchType,
	});
};

// Clear search results
export const clearBookmarksSearch = () => (dispatch) => {
	dispatch({
		type: CLEAR_BOOKMARKS_SEARCH,
	});
};
