import axios from "axios";
import {
	SEARCH_FAILURE,
	SEARCH_SUCCESS,
	SEARCH_LOADING,
	SET_SEARCH_TYPE,
} from "./searchTypes";

// Search for school, professor, and course
export const search =
	({ search, searchType }) =>
	async (dispatch) => {
		// Flag search as loading
		dispatch(searchLoading());

		try {
			// Attempt to search with credentials given
			const res = await attemptSearch({ search, searchType });
			// Search attempt succeeded
			dispatch(searchSuccess({ searchResults: res.data, searchType }));
		} catch (err) {
			// Search attempt failed
			dispatch(searchFailure(err));
		}
	};

export const setSearchType = (searchType) => (dispatch) => {
	dispatch({
		type: SET_SEARCH_TYPE,
		payload: searchType,
	});
};

// Attempt to search with credentials given
const attemptSearch = ({ search, searchType }) => {
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
const searchLoading = () => (dispatch) => {
	dispatch({
		type: SEARCH_LOADING,
	});
};

// Search attempt succeeded
const searchSuccess = (payload) => (dispatch) => {
	dispatch({
		type: SEARCH_SUCCESS,
		payload: payload,
	});
};

// Search attempt failed
const searchFailure = (err) => (dispatch) => {
	dispatch({
		type: SEARCH_FAILURE,
	});
};
