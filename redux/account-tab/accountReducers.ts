import {SET_ACCOUNT_TAB} from "./accountType";

const initialState = {
	currentTab: "",
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_ACCOUNT_TAB:
            return {
                currentTab: payload
            }
		default:
			return state;
	}
};
