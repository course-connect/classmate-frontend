import {
	HERO_SEARCH_TWO_SUCCESS,
	HERO_SEARCH_TWO_FAILURE,
	HERO_SEARCH_TWO_LOADING,
	SET_HERO_SEARCH_TWO_TYPE,
	CLEAR_HERO_SEARCH_TWO,
	SET_HERO_SEARCH_TWO_FILTER,
	CLEAR_HERO_SEARCH_TWO_FILTERS,
	RESET_SEARCH_TWO,
} from "./heroSearchTwoTypes";

const initialState = {
	loading: false,
	results: [],
	type: "course",
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
		case RESET_SEARCH_TWO:
			return initialState;
		case HERO_SEARCH_TWO_LOADING:
			return {
				...state,
				loading: true,
			};
		case HERO_SEARCH_TWO_SUCCESS:
			return {
				...state,
				loading: false,
				results: payload,
			};
		case HERO_SEARCH_TWO_FAILURE:
			return {
				...state,
				loading: false,
				results: [],
			};
		case SET_HERO_SEARCH_TWO_TYPE:
			return {
				...state,
				type: payload,
				filters: initialState.filters,
			};
		case CLEAR_HERO_SEARCH_TWO:
			return {
				...state,
				results: [],
			};
		case SET_HERO_SEARCH_TWO_FILTER:
			return {
				...state,
				filters: {
					...state.filters,
					...payload,
				},
			};
		case CLEAR_HERO_SEARCH_TWO_FILTERS:
			return {
				...state,
				filters: initialState.filters,
			};
		default:
			return state;
	}
};
