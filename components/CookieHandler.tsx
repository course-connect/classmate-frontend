import { useEffect } from "react";
import Cookie from "js-cookie";
import { useSelector } from "react-redux";
import { AuthState } from "../redux/auth/authInterface";

const CookieHandler = () => {
	// Retrieve the authentication state from the Redux store
	const auth = useSelector((state: { auth: AuthState }) => state.auth);

	useEffect(() => {
		Cookie.set("isAuthenticated", auth.isAuthenticated.toString());
	}, [auth.isAuthenticated]);

	useEffect(() => {
		Cookie.set("accessToken", auth.accessToken);
	}, [auth.accessToken]);

	useEffect(() => {
		const isAuthenticated = auth.isAuthenticated;
		const completedFirstStep =
			auth.userData.hasOwnProperty("first_name") &&
			auth.userData.hasOwnProperty("last_name") &&
			auth.userData.hasOwnProperty("zipcode");

		const completedSecondStep =
			auth.userData.school && auth.userData.school.length !== 0;
		auth.userData.hasOwnProperty("major") &&
			auth.userData.hasOwnProperty("graduation_year");

		if (isAuthenticated && completedFirstStep && completedSecondStep) {
			Cookie.set("completedRegistration", true);
		} else {
			Cookie.set("completedRegistration", false);
		}
	}, [auth.userData]);
};

export default CookieHandler;
