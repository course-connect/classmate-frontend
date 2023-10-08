import { useEffect } from "react";
import Cookie from "js-cookie";
import { useSelector } from "react-redux";
import { AuthState } from "../redux/auth/authInterface";

const CookieHandler = () => {
	// Retrieve the authentication state from the Redux store
	const auth = useSelector((state: { auth: AuthState }) => state.auth);
	const userProfile = useSelector((state) => state.userProfile);

	useEffect(() => {
		Cookie.set("isAuthenticated", auth.isAuthenticated.toString());
	}, [auth.isAuthenticated]);

	useEffect(() => {
		Cookie.set("accessToken", auth.accessToken);
	}, [auth.accessToken]);

	useEffect(() => {
		const isAuthenticated = auth.isAuthenticated;
		const completedFirstStep =
			userProfile.userData?.hasOwnProperty("first_name") &&
			userProfile.userData?.hasOwnProperty("last_name") &&
			userProfile.userData?.hasOwnProperty("zipcode");

		const completedSecondStep =
			userProfile.userData?.hasOwnProperty("school") &&
			userProfile.userData?.hasOwnProperty("major") &&
			userProfile.userData?.hasOwnProperty("graduation_year");

		if (isAuthenticated && completedFirstStep && completedSecondStep) {
			Cookie.set("completedRegistration", true);
		} else {
			Cookie.set("completedRegistration", false);
		}
	}, [userProfile.userData]);
};

export default CookieHandler;
