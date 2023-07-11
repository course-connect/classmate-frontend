import { useEffect } from "react";
import Cookie from "js-cookie";
import { useSelector } from "react-redux";
import { AuthState } from "../redux/auth/authInterface";

const CookieHandler = () => {
	const auth = useSelector((state: { auth: AuthState }) => state.auth);

	useEffect(() => {
		Cookie.set("accessToken", auth.accessToken);
		Cookie.set("isAuthenticated", auth.isAuthenticated.toString());
	}, [auth]);
};

export default CookieHandler;
