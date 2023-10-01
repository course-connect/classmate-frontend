import axios from "axios";
import {
	setTokenInLocalStorage,
	getTokenInLocalStorage,
	removeTokenInLocalStorage,
} from "./authHelpers";
import {
	profileRetrieved,
	clearUserProfile,
} from "../user-profile/userProfileActions";
import {
	AUTH_FAILURE,
	AUTH_SUCCESS,
	AUTH_LOADING,
	UN_AUTH_USER,
	SET_AUTH_ERROR,
	REMOVE_AUTH_ERROR,
	RESET_REQUEST_LOADING,
	RESET_REQUEST_SUCCESS,
	RESET_REQUEST_FAILURE,
	RESET_PASSWORD_LOADING,
	RESET_PASSWORD_SUCCESS,
	RESET_PASSWORD_FAILURE,
	CLEAR_RESET_PASSWORD_SUCCESS,
} from "./authTypes";

// Authenticate User
export const signUp =
	({ email, password, confirmPassword }) =>
	async (dispatch) => {
		// Flag autherization as loading
		dispatch(authLoading());

		try {
			// Attempt to sign in with creditials given
			const res = await attemptSignUp({ email, password, confirmPassword });

			// Autherization attempt succeeded
			dispatch(authSuccess(res.data));
		} catch (err) {
			// Autherization attempt failed
			dispatch(authFailure(err));
		}
	};

// Attempt to sign up with creditials given
const attemptSignUp = ({ email, password, confirmPassword }) => {
	const body = {
		account_info: { email, password, confirmPassword },
		student_info: {},
	};
	const header = {
		headers: {
			"content-type": "application/json",
		},
	};
	return axios.post("/user/register", body, header);
};

// Attempt to authenticate with the token stored in local storage
export const authWithTokenInLocalStorage = () => async (dispatch) => {
	// Flag autherization as loading
	dispatch(authLoading());

	const accessToken = getTokenInLocalStorage();
	if (accessToken) {
		dispatch(authSuccess({ accessToken }));
	} else {
		dispatch(authFailure());
	}
};

// Authenticate User
export const signIn =
	({ email, password }) =>
	async (dispatch) => {
		// Flag autherization as loading
		dispatch(authLoading());

		try {
			// Attempt to sign in with creditials given
			const res = await attemptSignIn({ email, password });
			console.log(res.data);
			if (res.data.error) {
				dispatch(setAuthError());
				throw new Error("Error logging in");
			} else {
				// Autherization attempt succeeded
				dispatch(removeAuthError());
				dispatch(authSuccess(res.data));
				dispatch(profileRetrieved(res.data.account));
			}
		} catch (err) {
			// Autherization attempt failed
			dispatch(authFailure(err));
		}
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
	return axios.post("/user/login", body, header);
};

// Unauthenticate User
export const signOut = () => (dispatch) => {
	removeTokenInLocalStorage();
	dispatch({ type: UN_AUTH_USER });
	dispatch(clearUserProfile());
};

export const requestResetPassword = (email) => async (dispatch) => {
	dispatch(resetRequestLoading());

	try {
		// Attempt to sign in with creditials given
		await attemptResetRequest(email);

		dispatch(removeAuthError());
		dispatch(resetRequestSuccess());
	} catch (err) {
		// Autherization attempt failed
		dispatch(resetRequestFailure());
	}
};

const attemptResetRequest = (email) => {
	const body = {
		email,
	};
	const header = {
		headers: {
			"content-type": "application/json",
		},
	};
	return axios.post("/user/resetRequest", body, header);
};

const resetRequestLoading = () => (dispatch) => {
	dispatch({
		type: RESET_REQUEST_LOADING,
	});
};

const resetRequestSuccess = () => (dispatch) => {
	dispatch({
		type: RESET_REQUEST_SUCCESS,
	});
};

const resetRequestFailure = () => (dispatch) => {
	dispatch({
		type: RESET_REQUEST_FAILURE,
	});
};

export const resetPassword =
	({ newPassword, token, id }) =>
	async (dispatch) => {
		dispatch(resetPasswordLoading());

		try {
			// Attempt to sign in with creditials given
			await attemptResetPassword({ newPassword, token, id });

			dispatch(removeAuthError());
			dispatch(resetPasswordSuccess());
		} catch (err) {
			// Autherization attempt failed
			dispatch(resetPasswordFailure());
		}
	};

const attemptResetPassword = ({ newPassword, token, id }) => {
	const body = {
		newPass: newPassword,
		token: token,
		userId: id,
	};
	console.log(body);
	const header = {
		headers: {
			"content-type": "application/json",
		},
	};
	return axios.patch("/user/resetPassword", body, header);
};

const resetPasswordLoading = () => (dispatch) => {
	dispatch({
		type: RESET_PASSWORD_LOADING,
	});
};

const resetPasswordSuccess = () => (dispatch) => {
	dispatch({
		type: RESET_PASSWORD_SUCCESS,
	});
	setTimeout(() => {
		dispatch({
			type: CLEAR_RESET_PASSWORD_SUCCESS,
		});
	}, 3000);
};

const resetPasswordFailure = () => (dispatch) => {
	dispatch({
		type: RESET_PASSWORD_FAILURE,
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
	setTokenInLocalStorage(payload.accessToken);
	dispatch({
		type: AUTH_SUCCESS,
		payload: payload,
	});
};

// Autherization attempt failed
const authFailure = (err) => (dispatch) => {
	dispatch({
		type: AUTH_FAILURE,
	});
};

// Set auth Error
export const setAuthError = () => (dispatch) => {
	dispatch({
		type: SET_AUTH_ERROR,
	});
};

// Remove auth Error
export const removeAuthError = () => (dispatch) => {
	dispatch({
		type: REMOVE_AUTH_ERROR,
	});
};
