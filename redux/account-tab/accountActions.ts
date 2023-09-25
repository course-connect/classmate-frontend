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


export const setSnackBar = (data) => async (dispatch) => {
    dispatch({
        type: SET_SNACKBAR,
        payload: data,
    });
    setTimeout(() => {dispatch(clearSnackBar())}, 3000)
};

export const clearSnackBar = () => async (dispatch) => {
    dispatch({
        type: CLEAR_SNACKBAR,
    });
};