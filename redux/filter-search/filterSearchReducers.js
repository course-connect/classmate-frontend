import {
	FILTER_SEARCH_SUCCESS,
	FILTER_SEARCH_FAILURE,
	FILTER_SEARCH_LOADING,
	SET_FILTER_SEARCH_TYPE,
	CLEAR_FILTER_SEARCH,
	SET_FILTER_SEARCH_FILTER,
	CLEAR_FILTER_SEARCH_FILTERS,
	RESET_FILTER_SEARCH,
	SET_MULTI_FILTER_SEARCH_FILTER,
	REMOVE_FILTER_SEARCH_FILTER,
	RESET_FILTER_SEARCH_FILTERS,
} from "./filterSearchTypes";

const initialStateCopy = {
	loading: false,
	results: [],
	type: "school",
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

const initialState = {
	loading: false,
	results: [],
	type: "school",
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
		case RESET_FILTER_SEARCH:
			return {
				...initialStateCopy,
				filters: { ...initialState.filters },
			};
		case RESET_FILTER_SEARCH_FILTERS:
			return {
				...state,
				filters: {
					...initialStateCopy.filters,
				},
			};
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
		case REMOVE_FILTER_SEARCH_FILTER:
			return {
				...state,
				filters: {
					...state.filters,
					[payload]: {
						filter_value: null,
						filter_text: null,
					},
				},
			};
		case SET_MULTI_FILTER_SEARCH_FILTER:
			return {
				...state,
				filters: {
					...payload,
				},
			};
		case CLEAR_FILTER_SEARCH_FILTERS:
			return {
				...state,
				filters: initialStateCopy.filters,
			};
		default:
			return state;
	}
};
