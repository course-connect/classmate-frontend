import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";

const makeStore = (initialState = {}) => {
	let store;
	const middleware = [thunk];
	const isClient = typeof window !== "undefined";

	if (isClient) {
		const { persistReducer } = require("redux-persist");
		const storage = require("redux-persist/lib/storage").default;

		const persistConfig = {
			key: "root",
			storage,
		};

		store = createStore(
			persistReducer(persistConfig, rootReducer),
			initialState,
			composeWithDevTools(applyMiddleware(...middleware))
		);

		store.__PERSISTOR = persistStore(store);
	} else {
		store = createStore(
			rootReducer,
			initialState,
			composeWithDevTools(applyMiddleware(...middleware))
		);
	}
	return store;
};

export const wrapper = createWrapper(makeStore);
export default makeStore;
