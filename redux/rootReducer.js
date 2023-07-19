import { combineReducers } from "redux";
import auth from "./auth/authReducers";
import search from "./search/searchReducers";

export default combineReducers({ auth, search });
