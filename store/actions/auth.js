import axios from 'axios';
import { AUTH_FAIL, AUTH_SUCCESS } from '../types';

// Authenticate User
export const signIn = () => (dispatch) => {
	console.log('hello');
	dispatch({
		type: AUTH_SUCCESS,
	});
};

// Unauthenticate User
export const signOut = () => (dispatch) => {
	dispatch({
		type: AUTH_FAIL,
	});
};
