import {
	AUTH_SUCCESS,
	AUTH_FAILURE,
	AUTH_LOADING,
	UN_AUTH_USER,
} from "./authTypes";

const initialState = {
	authLoading: false,
	isAuthenticated: false,
	accessToken: NULL,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case AUTH_LOADING:
			return {
				...state,
				authLoading: true,
				isAuthenticated: false,
				accessToken: NULL,
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
				accessToken: NULL,
			};
		case UN_AUTH_USER:
			return {
				...state,
				isAuthenticated: false,
				accessToken: NULL,
			};
		default:
			return state;
	}
};
