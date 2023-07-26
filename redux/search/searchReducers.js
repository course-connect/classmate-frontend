import {
	SEARCH_SUCCESS,
	SEARCH_FAILURE,
	SEARCH_LOADING,
	SET_SEARCH_TYPE,
	CLEAR_SEARCH,
	SET_SEARCH_FILTER,
	CLEAR_SEARCH_FILTERS,
} from "./searchTypes";

const initialState = {
	searchLoading: false,
	searchResults: [],
	searchType: "school",
	searchFilters: {},
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SEARCH_LOADING:
			return {
				...state,
				searchLoading: true,
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				searchLoading: false,
				searchResults: payload,
			};
		case SEARCH_FAILURE:
			return {
				...state,
				searchLoading: false,
				searchResults: [],
			};
		case SET_SEARCH_TYPE:
			return {
				...state,
				searchType: payload,
				searchFilters: {},
			};
		case CLEAR_SEARCH:
			return {
				...state,
				searchResults: [],
			};
		case SET_SEARCH_FILTER:
			return {
				...state,
				searchFilters: {
					...payload,
				},
			};
		case CLEAR_SEARCH_FILTERS:
			console.log("clearing");
			return {
				...state,
				searchFilters: {},
			};
		default:
			return state;
	}
};
