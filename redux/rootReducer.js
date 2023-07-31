import { combineReducers } from "redux";
import auth from "./auth/authReducers";
import search from "./search/searchReducers";
import heroSearchOne from "./hero-search-one/heroSearchOneReducers";
import heroSearchTwo from "./hero-search-two/heroSearchTwoReducers";
import mainSearch from "./main-search/mainSearchReducers";

export default combineReducers({
	auth,
	search,
	heroSearchOne,
	heroSearchTwo,
	mainSearch,
});
