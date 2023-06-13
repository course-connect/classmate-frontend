import {
	AUTH_SUCCESS,
	AUTH_FAILURE,
	AUTH_LOADING,
	UN_AUTH_USER,
} from './authTypes';

const initialState = {
	authLoading: false,
	isAuthenticated: false,
};

export default (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case AUTH_LOADING:
			return {
				...state,
				authLoading: true,
			};
		case AUTH_SUCCESS:
			return {
				...state,
				authLoading: false,
				isAuthenticated: true,
			};
		case AUTH_FAILURE:
			return {
				...state,
				authLoading: false,
				isAuthenticated: false,
			};
		case UN_AUTH_USER:
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};
