import {
	AUTH_SUCCESS,
	AUTH_FAILURE,
	AUTH_LOADING,
	UN_AUTH_USER,
	SET_AUTH_ERROR,
	REMOVE_AUTH_ERROR,
} from "./authTypes";

const initialState = {
	authLoading: false,
	isAuthenticated: false,
	accessToken: null,
	error: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case AUTH_LOADING:
			return {
				...state,
				authLoading: true,
				isAuthenticated: false,
				accessToken: null,
			};
		case AUTH_SUCCESS:
			return {
				...state,
				authLoading: false,
				isAuthenticated: true,
				accessToken: payload.accessToken,
			};
		case AUTH_FAILURE:
			return {
				...state,
				authLoading: false,
				isAuthenticated: false,
				accessToken: null,
			};
		case UN_AUTH_USER:
			return {
				...state,
				isAuthenticated: false,
				accessToken: null,
			};
		case SET_AUTH_ERROR:
			return {
				...state,
				error: true,
			};
		case REMOVE_AUTH_ERROR:
			return {
				...state,
				error: false,
			};
		default:
			return state;
	}
};
