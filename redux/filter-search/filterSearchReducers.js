import {
	FILTER_SEARCH_SUCCESS,
	FILTER_SEARCH_FAILURE,
	FILTER_SEARCH_LOADING,
	SET_FILTER_SEARCH_TYPE,
	CLEAR_FILTER_SEARCH,
	SET_FILTER_SEARCH_FILTER,
	CLEAR_FILTER_SEARCH_FILTERS,
	RESET_FILTER_SEARCH,
} from "./filterSearchTypes";

const initialState = {
	loading: false,
	results: [],
	type: "school",
	filters: {
		professor: null,
		department: null,
		school: null,
		score: null,
		difficulty: null,
		reviews: null,
		course: null,
	},
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RESET_FILTER_SEARCH:
			return initialState;
		case FILTER_SEARCH_LOADING:
			return {
				...state,
				loading: true,
			};
		case FILTER_SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				results: payload,
			};
		case FILTER_SEARCH_FAILURE:
			return {
				...state,
				loading: false,
				results: [],
			};
		case SET_FILTER_SEARCH_TYPE:
			return {
				...state,
				type: payload,
				filters: initialState.filters,
			};
		case CLEAR_FILTER_SEARCH:
			return {
				...state,
				results: [],
			};
		case SET_FILTER_SEARCH_FILTER:
			return {
				...state,
				filters: {
					...payload,
				},
			};
		case CLEAR_FILTER_SEARCH_FILTERS:
			return {
				...state,
				filters: initialState.filters,
			};
		default:
			return state;
	}
};
