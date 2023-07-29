import axios from "axios";
import {
	HERO_SEARCH_ONE_FAILURE,
	HERO_SEARCH_ONE_SUCCESS,
	HERO_SEARCH_ONE_LOADING,
	SET_HERO_SEARCH_ONE_TYPE,
	CLEAR_HERO_SEARCH_ONE,
	SET_HERO_SEARCH_ONE_FILTER,
	CLEAR_HERO_SEARCH_ONE_FILTERS,
	RESET_SEARCH_ONE,
} from "./heroSearchOneTypes";

// Reset to initial state
export const resetSearchOne = (userInput) => async (dispatch, getState) => {
	// Flag search as loading
	dispatch({
		type: RESET_SEARCH_ONE,
	});
};

// Search for school, professor, and course
export const searchOne = (userInput) => async (dispatch, getState) => {
	// Flag search as loading
	dispatch(searchOneLoading());
	const { type: searchType } = getState().heroSearchOne;

	try {
		// Attempt to search with credentials given
		const res = await attemptSearchOne(userInput, searchType);
		// Search attempt succeeded
		dispatch(searchOneSuccess(res.data));
	} catch (err) {
		// Search attempt failed
		dispatch(searchOneFailure(err));
	}
};

export const setSearchOneType = (searchType) => (dispatch) => {
	dispatch({
		type: SET_HERO_SEARCH_ONE_TYPE,
		payload: searchType,
	});
};

// Clear search results
export const clearSearchOne = () => (dispatch) => {
	dispatch({
		type: CLEAR_HERO_SEARCH_ONE,
	});
};

// Clear search filters
export const clearSearchOneFilters = () => (dispatch) => {
	dispatch({
		type: CLEAR_HERO_SEARCH_ONE_FILTERS,
	});
};

// Set search filters to be applied on every search
export const setSearchOneFilter = (searchFilter) => (dispatch) => {
	dispatch({
		type: SET_HERO_SEARCH_ONE_FILTER,
		payload: searchFilter,
	});
};

// Attempt to search with credentials given
const attemptSearchOne = (userInput, searchType) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
		// params: {
		// 	search,
		// 	searchType,
		// },
	};
	return axios.get(`${searchType}/search`, config);
};

// Flag search as loading
const searchOneLoading = () => (dispatch) => {
	dispatch({
		type: HERO_SEARCH_ONE_LOADING,
	});
};

// Search attempt succeeded
const searchOneSuccess = (payload) => (dispatch) => {
	dispatch({
		type: HERO_SEARCH_ONE_SUCCESS,
		payload: payload,
	});
};

// Search attempt failed
const searchOneFailure = (err) => (dispatch) => {
	dispatch({
		type: HERO_SEARCH_ONE_FAILURE,
	});
};