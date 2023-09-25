import {SET_ACCOUNT_TAB,
	SET_SNACKBAR,
	CLEAR_SNACKBAR,
} from "./accountType";

const initialState = {
	currentTab: "",
	snackBar: {
		type: "",
		text: "",
	},
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_ACCOUNT_TAB:
            return {
				...state,
                currentTab: payload
            }
		case SET_SNACKBAR:
			return {
				...state,
				snackBar: {
					type: payload.type,
					text: payload.text,
				},
			};
		case CLEAR_SNACKBAR:
			return {
				...state,
				snackBar: {
					type: "",
					text: "",
				},
			};
		default:
			return state;
	}
};
