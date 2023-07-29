import axios from "axios";
import {
	HERO_SEARCH_TWO_FAILURE,
	HERO_SEARCH_TWO_SUCCESS,
	HERO_SEARCH_TWO_LOADING,
	SET_HERO_SEARCH_TWO_TYPE,
	CLEAR_HERO_SEARCH_TWO,
	SET_HERO_SEARCH_TWO_FILTER,
	CLEAR_HERO_SEARCH_TWO_FILTERS,
	RESET_SEARCH_TWO,
} from "./heroSearchTwoTypes";

// Reset to initial state
export const resetSearchTwo = (userInput) => async (dispatch, getState) => {
	// Flag search as loading
	dispatch({
		type: RESET_SEARCH_TWO,
	});
};

// Search for school, professor, and course
export const searchTwo = (userInput) => async (dispatch, getState) => {
	// Flag search as loading
	dispatch(searchTwoLoading());
	const { type: searchType } = getState().heroSearchTwo;

	try {
		// Attempt to search with credentials given
		const res = await attemptSearchTwo(userInput, searchType);
		// Search attempt succeeded
		dispatch(searchTwoSuccess(res.data));
	} catch (err) {
		// Search attempt failed
		dispatch(searchTwoFailure(err));
	}
};

export const setSearchTwoType = (searchType) => (dispatch) => {
	dispatch({
		type: SET_HERO_SEARCH_TWO_TYPE,
		payload: searchType,
	});
};

// Clear search results
export const clearSearchTwo = () => (dispatch) => {
	dispatch({
		type: CLEAR_HERO_SEARCH_TWO,
	});
};

// Clear search filters
export const clearSearchTwoFilters = () => (dispatch) => {
	dispatch({
		type: CLEAR_HERO_SEARCH_TWO_FILTERS,
	});
};

// Set search filters to be applied on every search
export const setSearchTwoFilter = (searchFilter) => (dispatch) => {
	dispatch({
		type: SET_HERO_SEARCH_TWO_FILTER,
		payload: searchFilter,
	});
};

// Attempt to search with credentials given
const attemptSearchTwo = (userInput, searchType) => {
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
const searchTwoLoading = () => (dispatch) => {
	dispatch({
		type: HERO_SEARCH_TWO_LOADING,
	});
};

// Search attempt succeeded
const searchTwoSuccess = (payload) => (dispatch) => {
	dispatch({
		type: HERO_SEARCH_TWO_SUCCESS,
		payload: payload,
	});
};

// Search attempt failed
const searchTwoFailure = (err) => (dispatch) => {
	dispatch({
		type: HERO_SEARCH_TWO_FAILURE,
	});
};