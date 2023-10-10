import {SET_ACCOUNT_TAB,
	SET_SNACKBAR,
	CLEAR_SNACKBAR,
} from "./accountType";

export const setAccountTab = (tabName) => (dispatch) => {
    dispatch({
        type: SET_ACCOUNT_TAB,
        payload: tabName
    })
	};


let snackBarTimeoutId = null; // Variable to store the timeout ID

export const setSnackBar = (data) => async (dispatch) => {
    // Dispatch the action to set the snackbar
    dispatch({
        type: SET_SNACKBAR,
        payload: data,
    });

    // Clear the previous timeout, if it exists
    if (snackBarTimeoutId !== null) {
        clearTimeout(snackBarTimeoutId);
    }

    // Set a new timeout for clearing the snackbar
    snackBarTimeoutId = setTimeout(() => {
        dispatch(clearSnackBar());
        snackBarTimeoutId = null; // Reset the timeout ID after clearing
    }, 3000);
};


export const clearSnackBar = () => async (dispatch) => {
    dispatch({
        type: CLEAR_SNACKBAR,
    });
};