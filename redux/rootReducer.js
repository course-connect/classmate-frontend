import { combineReducers } from "redux";
import auth from "./auth/authReducers";
import search from "./search/searchReducers";
import heroSearchOne from "./hero-search-one/heroSearchOneReducers";

export default combineReducers({ auth, search, heroSearchOne });
