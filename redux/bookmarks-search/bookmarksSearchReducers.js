import {
	SET_BOOKMARKS_SEARCH_TYPE,
	CLEAR_BOOKMARKS_SEARCH,
	RESET_BOOKMARKS_SEARCH,
	SAVE_BOOKMARKS_SEARCH_INPUT,
} from "./bookmarksSearchTypes";

const initialState = {
	userInput: "",
	type: "professor",
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RESET_BOOKMARKS_SEARCH:
			return {
				...initialState,
			};
		case SAVE_BOOKMARKS_SEARCH_INPUT:
			return {
				...state,
				userInput: payload,
			};
		case SET_BOOKMARKS_SEARCH_TYPE:
			return {
				...state,
				type: payload,
			};
		case CLEAR_BOOKMARKS_SEARCH:
			return {
				...state,
				userInput: "",
			};
		default:
			return state;
	}
};
