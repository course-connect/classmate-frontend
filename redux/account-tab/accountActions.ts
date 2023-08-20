import {SET_ACCOUNT_TAB} from "./accountType";

export const setAccountTab = (tabName) => (dispatch) => {
    dispatch({
        type: SET_ACCOUNT_TAB,
        payload: tabName
    })
	};
