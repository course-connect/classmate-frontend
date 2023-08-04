import {
	MAIN_SEARCH_SUCCESS,
	MAIN_SEARCH_FAILURE,
	MAIN_SEARCH_LOADING,
	SET_MAIN_SEARCH_TYPE,
	CLEAR_MAIN_SEARCH,
	SET_MAIN_SEARCH_FILTER,
	CLEAR_MAIN_SEARCH_FILTERS,
	RESET_MAIN_SEARCH,
	RESET_MAIN_SEARCH_FILTERS,
} from "./mainSearchTypes";

const initialState = {
	loading: false,
	results: [],
	type: "professor",
	filters: {
		professor: {
			filter_value: null,
			filter_text: null,
		},
		department: {
			filter_value: null,
			filter_text: null,
		},
		school: {
			filter_value: null,
			filter_text: null,
		},
		score: {
			filter_value: null,
			filter_text: null,
		},
		difficulty: {
			filter_value: null,
			filter_text: null,
		},
		reviews: {
			filter_value: null,
			filter_text: null,
		},
		course: {
			filter_value: null,
			filter_text: null,
		},
	},
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RESET_MAIN_SEARCH:
			return initialState;
		case RESET_MAIN_SEARCH_FILTERS:
			return {
				...state,
				filters: {
					...initialState.filters,
				},
			};
		case MAIN_SEARCH_LOADING:
			return {
				...state,
				loading: true,
			};
		case MAIN_SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				results: payload,
			};
		case MAIN_SEARCH_FAILURE:
			return {
				...state,
				loading: false,
				results: [],
			};
		case SET_MAIN_SEARCH_TYPE:
			return {
				...state,
				type: payload,
				filters: initialState.filters,
			};
		case CLEAR_MAIN_SEARCH:
			return {
				...state,
				results: [],
			};
		case SET_MAIN_SEARCH_FILTER:
			return {
				...state,
				filters: {
					...payload,
				},
			};
		case CLEAR_MAIN_SEARCH_FILTERS:
			return {
				...state,
				filters: initialState.filters,
			};
		default:
			return state;
	}
};
