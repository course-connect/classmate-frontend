import { combineReducers } from "redux";
import auth from "./auth/authReducers";
import search from "./search/searchReducers";
import heroSearchOne from "./hero-search-one/heroSearchOneReducers";
import heroSearchTwo from "./hero-search-two/heroSearchTwoReducers";
import mainSearch from "./main-search/mainSearchReducers";
import filterSearch from "./filter-search/filterSearchReducers";
import formSearch from "./form-search/formSearchReducers";
import account from "./account-tab/accountReducers";
import bookmarksSearch from "./bookmarks-search/bookmarksSearchReducers";
import userProfile from "./user-profile/userProfileReducers";
import professor from "./professor/professorReducers";

export default combineReducers({
	auth,
	search,
	heroSearchOne,
	heroSearchTwo,
	mainSearch,
	filterSearch,
	formSearch,
	account,
	userProfile,
	bookmarksSearch,
	professor,
});
