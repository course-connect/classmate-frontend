import {
	AUTH_SUCCESS,
	AUTH_FAILURE,
	AUTH_LOADING,
	UN_AUTH_USER,
} from "./authTypes";

const initialState = {
	authLoading: false,
	isAuthenticated: false,
	accessToken: null,
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
		default:
			return state;
	}
};
