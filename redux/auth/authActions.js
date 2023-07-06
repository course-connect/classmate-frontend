import axios from 'axios';
import {
	AUTH_FAILURE,
	AUTH_SUCCESS,
	AUTH_LOADING,
	UN_AUTH_USER,
} from './authTypes';

// Authenticate User
export const signUp =
	({ email, password }) =>
	async (dispatch) => {
		// Flag autherization as loading
		dispatch(authLoading());

		try {
			// Attempt to sign in with creditials given
			const res = await attemptSignUp({ email, password });

			// Autherization attempt succeeded
			dispatch(authSuccess(res.payload));
		} catch (res) {
			// Autherization attempt failed
			dispatch(authFailure(res.payload));
		}
	};

// Attempt to sign up with creditials given
const attemptSignUp = ({ email, password }) => {
	return new Promise((resolve, reject) => {
		resolve({ payload: 'user data' });
	});
};

// Authenticate User
export const signIn = () => async (dispatch) => {
	// Flag autherization as loading
	dispatch(authLoading());

	try {
		// Attempt to sign in with creditials given
		const res = await attemptSignIn();

		// Autherization attempt succeeded
		dispatch(authSuccess(res.payload));
	} catch (res) {
		// Autherization attempt failed
		dispatch(authFailure(res.payload));
	}
};

// Unauthenticate User
export const signOut = () => (dispatch) => {
	dispatch({ type: UN_AUTH_USER });
};

// Attempt to sign in with creditials given
const attemptSignIn = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomInt = Math.floor(Math.random() * 100) % 2;
			if (randomInt == 0) {
				resolve({ payload: 'user data' });
			} else {
				reject({ payload: 'This is an error message' });
			}
		}, 2000);
	});
};

// Flag autherization as loading
const authLoading = () => (dispatch) => {
	dispatch({
		type: AUTH_LOADING,
	});
};

// Autherization attempt succeeded
const authSuccess = (payload) => (dispatch) => {
	dispatch({
		type: AUTH_SUCCESS,
		payload: payload,
	});
};

// Autherization attempt failed
const authFailure = (payload) => (dispatch) => {
	dispatch({
		type: AUTH_FAILURE,
		payload: payload,
	});
};
