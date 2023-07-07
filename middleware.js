import { NextResponse } from "next/server";

const frontEndUrl =
	process.env.NODE_ENV == "production" ? "" : "http://localhost:3000";

export default function middleware(req) {
	const { cookies, url } = req;

	const isAuthenticated = cookies.get("isAuthenticated")?.value === "true";

	// Will redirect user to signin page if they attempt to go to the private account
	// page with an invalid token
	const accountPage = url.includes("/account");
	if (accountPage && !isAuthenticated) {
		return NextResponse.redirect(frontEndUrl + "/signin");
	}

	// Will redirect user to account page if they attempt to go to the sign up or
	// sign in page when they are already signed in
	const signInOrSignUpPage = url.includes("/signin") || url.includes("/signup");
	if (signInOrSignUpPage && isAuthenticated) {
		return NextResponse.redirect(frontEndUrl + "/account");
	}
	return NextResponse.next();
}
