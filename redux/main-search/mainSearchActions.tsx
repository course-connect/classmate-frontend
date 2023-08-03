import axios from "axios";
import {
	MAIN_SEARCH_FAILURE,
	MAIN_SEARCH_SUCCESS,
	MAIN_SEARCH_LOADING,
	SET_MAIN_SEARCH_TYPE,
	CLEAR_MAIN_SEARCH,
	SET_MAIN_SEARCH_FILTER,
	CLEAR_MAIN_SEARCH_FILTERS,
	RESET_MAIN_SEARCH,
	RESET_MAIN_SEARCH_FILTERS,
} from "./mainSearchTypes";

// Reset to initial state
export const resetMainSearch = () => async (dispatch) => {
	dispatch({
		type: RESET_MAIN_SEARCH,
	});
};

export const resetMainSearchFilters = () => async (dispatch) => {
	dispatch({
		type: RESET_MAIN_SEARCH_FILTERS,
	});
};

// Search for school, professor, and course
export const search = (userInput) => async (dispatch, getState) => {
	// Flag search as loading
	dispatch(mainSearchLoading());
	const { type: searchType, filters } = getState().mainSearch;

	try {
		// Attempt to search with credentials given
		const res = await attemptMainSearch(userInput, searchType, filters);
		// Search attempt succeeded
		dispatch(mainSearchSuccess(res.data));
	} catch (err) {
		// Search attempt failed
		dispatch(mainSearchFailure(err));
	}
};

export const setMainSearchType = (searchType) => (dispatch) => {
	dispatch({
		type: SET_MAIN_SEARCH_TYPE,
		payload: searchType,
	});
};

// Clear search results
export const clearMainSearch = () => (dispatch) => {
	dispatch({
		type: CLEAR_MAIN_SEARCH,
	});
};

// Clear search filters
export const clearMainSearchFilters = () => (dispatch) => {
	dispatch({
		type: CLEAR_MAIN_SEARCH_FILTERS,
	});
};

// Set search filters to be applied on every search
export const setMainSearchFilter = (searchFilter) => (dispatch) => {
	dispatch({
		type: SET_MAIN_SEARCH_FILTER,
		payload: searchFilter,
	});
};

// Attempt to search with credentials given
const attemptMainSearch = (userInput, searchType, filters) => {
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
const mainSearchLoading = () => (dispatch) => {
	dispatch({
		type: MAIN_SEARCH_LOADING,
	});
};

// Search attempt succeeded
const mainSearchSuccess = (payload) => (dispatch) => {
	dispatch({
		type: MAIN_SEARCH_SUCCESS,
		payload: payload,
	});
};

// Search attempt failed
const mainSearchFailure = (err) => (dispatch) => {
	dispatch({
		type: MAIN_SEARCH_FAILURE,
	});
};
