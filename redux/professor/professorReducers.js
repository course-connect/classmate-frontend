import {
	CLEAR_PROFESSOR_REVIEWS,
	PROFESSOR_REVIEWS_LOADING,
	PROFESSOR_REVIEWS_SUCCESS,
	PROFESSOR_REVIEWS_FAILURE,
} from "./professorTypes";

const initialState = {
	professorReviews: [],
	professorReviewsLoading: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CLEAR_PROFESSOR_REVIEWS:
			return {
				professorReviews: [],
				professorReviewsLoading: false,
			};
		case PROFESSOR_REVIEWS_LOADING:
			return {
				...state,
				professorReviewsLoading: true,
			};
		case PROFESSOR_REVIEWS_SUCCESS:
			return {
				...state,
				professorReviews: payload,
				professorReviewsLoading: false,
			};
		case PROFESSOR_REVIEWS_FAILURE:
			return {
				...state,
				professorReviewsLoading: false,
			};
		default:
			return state;
	}
};
