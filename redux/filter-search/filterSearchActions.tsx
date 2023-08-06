import axios from "axios";
import {
	FILTER_SEARCH_FAILURE,
	FILTER_SEARCH_SUCCESS,
	FILTER_SEARCH_LOADING,
	SET_FILTER_SEARCH_TYPE,
	CLEAR_FILTER_SEARCH,
	SET_FILTER_SEARCH_FILTER,
	CLEAR_FILTER_SEARCH_FILTERS,
	RESET_FILTER_SEARCH,
	SET_MULTI_FILTER_SEARCH_FILTER,
	REMOVE_FILTER_SEARCH_FILTER,
} from "./filterSearchTypes";

// Reset to initial state
export const resetFilterSearch = (userInput) => async (dispatch, getState) => {
	// Flag search as loading
	dispatch({
		type: RESET_FILTER_SEARCH,
	});
};

// Search for school, professor, and course
export const search = (userInput) => async (dispatch, getState) => {
	// Flag search as loading
	dispatch(filterSearchLoading());
	const { type: searchType } = getState().filterSearch;
	const filters = {
		professor: null,
		department: null,
		school: null,
		score: null,
		difficulty: null,
		reviews: null,
		course: null,
	};

	try {
		// Attempt to search with credentials given
		const res = await attemptFilterSearch(userInput, searchType, filters);
		// Search attempt succeeded
		dispatch(filterSearchSuccess(res.data));
	} catch (err) {
		// Search attempt failed
		dispatch(filterSearchFailure(err));
	}
};

export const setFilterSearchType = (searchType) => (dispatch) => {
	dispatch({
		type: SET_FILTER_SEARCH_TYPE,
		payload: searchType,
	});
};

// Clear search results
export const clearFilterSearch = () => (dispatch) => {
	dispatch({
		type: CLEAR_FILTER_SEARCH,
	});
};

// Clear search filters
export const clearFilterSearchFilters = () => (dispatch) => {
	dispatch({
		type: CLEAR_FILTER_SEARCH_FILTERS,
	});
};

// Set search filters to be applied on every search
export const setFilterSearchFilter = (searchFilter) => (dispatch) => {
	dispatch({
		type: SET_FILTER_SEARCH_FILTER,
		payload: searchFilter,
	});
};

export const removeFilterSearchFilter = (searchFilter) => (dispatch) => {
	dispatch({
		type: REMOVE_FILTER_SEARCH_FILTER,
		payload: searchFilter,
	});
};

export const setMultiFilterSearchFilters = (searchFilters) => (dispatch) => {
	dispatch({
		type: SET_MULTI_FILTER_SEARCH_FILTER,
		payload: searchFilters,
	});
};

// Attempt to search with credentials given
const attemptFilterSearch = (userInput, searchType, filters) => {
	const data = {
		query: userInput,
		filters,
	};

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	return axios.post(`${searchType}/search`, data, config);
};

// Flag search as loading
const filterSearchLoading = () => (dispatch) => {
	dispatch({
		type: FILTER_SEARCH_LOADING,
	});
};

// Search attempt succeeded
const filterSearchSuccess = (payload) => (dispatch) => {
	dispatch({
		type: FILTER_SEARCH_SUCCESS,
		payload: payload,
	});
};

// Search attempt failed
const filterSearchFailure = (err) => (dispatch) => {
	dispatch({
		type: FILTER_SEARCH_FAILURE,
	});
};
