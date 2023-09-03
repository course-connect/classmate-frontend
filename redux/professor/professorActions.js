import axios from "axios";
import {
	CLEAR_PROFESSOR_REVIEWS,
	PROFESSOR_REVIEWS_LOADING,
	PROFESSOR_REVIEWS_SUCCESS,
	PROFESSOR_REVIEWS_FAILURE,
} from "./professorTypes";

export const clearProfessorReviews = () => async (dispatch) => {
	dispatch({
		type: CLEAR_PROFESSOR_REVIEWS,
	});
};

export const getProfessorReviews = (professorID) => async (dispatch) => {
	dispatch(professorReviewsLoading());

	try {
		const res = await dispatch(attemptGetProfessorReviews(professorID));
		dispatch(professorReviewsSuccess(res.data));
	} catch (err) {
		dispatch(professorReviewsFailure());
	}
};

const attemptGetProfessorReviews = (professorID) => () => {
	const header = {
		headers: {
			"content-type": "application/json",
		},
	};
	return axios.get(`professor/reviews/${professorID}`, header);
};

const professorReviewsLoading = () => (dispatch) => {
	dispatch({
		type: PROFESSOR_REVIEWS_LOADING,
	});
};

const professorReviewsSuccess = (bookmarks) => (dispatch) => {
	dispatch({
		type: PROFESSOR_REVIEWS_SUCCESS,
		payload: bookmarks,
	});
};

const professorReviewsFailure = () => (dispatch) => {
	dispatch({
		type: PROFESSOR_REVIEWS_FAILURE,
	});
};
