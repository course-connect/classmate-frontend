import {
	HERO_SEARCH_ONE_SUCCESS,
	HERO_SEARCH_ONE_FAILURE,
	HERO_SEARCH_ONE_LOADING,
	SET_HERO_SEARCH_ONE_TYPE,
	CLEAR_HERO_SEARCH_ONE,
	SET_HERO_SEARCH_ONE_FILTER,
	CLEAR_HERO_SEARCH_ONE_FILTERS,
	RESET_SEARCH_ONE,
} from "./heroSearchOneTypes";

const initialState = {
	loading: false,
	results: [],
	type: "school",
	filters: {},
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RESET_SEARCH_ONE:
			return initialState;
		case HERO_SEARCH_ONE_LOADING:
			return {
				...state,
				loading: true,
			};
		case HERO_SEARCH_ONE_SUCCESS:
			return {
				...state,
				loading: false,
				results: payload,
			};
		case HERO_SEARCH_ONE_FAILURE:
			return {
				...state,
				loading: false,
				results: [],
			};
		case SET_HERO_SEARCH_ONE_TYPE:
			return {
				...state,
				type: payload,
				filters: {},
			};
		case CLEAR_HERO_SEARCH_ONE:
			return {
				...state,
				results: [],
			};
		case SET_HERO_SEARCH_ONE_FILTER:
			return {
				...state,
				filters: {
					...payload,
				},
			};
		case CLEAR_HERO_SEARCH_ONE_FILTERS:
			return {
				...state,
				filters: {},
			};
		default:
			return state;
	}
};
