import { AUTH_SUCCESS, AUTH_FAIL } from '../types';

const initialState = {
	isAuthenticated: false,
};

export default (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case AUTH_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
			};
		case AUTH_FAIL:
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};
