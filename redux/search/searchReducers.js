import { SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_LOADING } from "./searchTypes";

const initialState = {
	searchLoading: false,
	searchResults: [],
	searchType: "school",
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SEARCH_LOADING:
			return {
				...state,
				searchLoading: true,
				searchResults: [],
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				searchLoading: false,
				searchResults: payload.searchResults,
				searchType: payload.searchType,
			};
		case SEARCH_FAILURE:
			return {
				...state,
				searchLoading: false,
				searchResults: [],
			};
		default:
			return state;
	}
};
