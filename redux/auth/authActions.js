import axios from "axios";
import {
	AUTH_FAILURE,
	AUTH_SUCCESS,
	AUTH_LOADING,
	UN_AUTH_USER,
} from "./authTypes";

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
	const body = {
		account_info: { email, password },
	};
	const header = {
		headers: {
			"content-type": "application/json",
		},
	};
	return axios.post("/account/register", body, header);
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
const attemptSignIn = ({ email, password }) => {
	const body = {
		account_info: { email, password },
	};
	const header = {
		headers: {
			"content-type": "application/json",
		},
	};
	return axios.post("/account/login", body, header);
};

// Flag autherization as loading
const authLoading = () => (dispatch) => {
	dispatch({
		type: AUTH_LOADING,
	});
};

// Autherization attempt succeeded
const authSuccess = (payload) => (dispatch) => {
	console.log(payload);
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
