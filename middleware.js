import { NextResponse } from "next/server";

const frontEndUrl =
	process.env.NODE_ENV == "production" ? "" : "http://localhost:3000";

export default function middleware(req) {
	const { cookies, url } = req;

	const isAuthenticated = cookies.get("isAuthenticated")?.value === "true";
	const completedRegistration =
		cookies.get("completedRegistration")?.value === "true";
	const requestingAccountPage = url.includes("/account");
	const requestingSignInOrSignUpPage =
		url.includes("/signin") || url.includes("/signup");

	// Will redirect user to account page if they attempt to go to the sign up or
	// sign in page when they are already signed in
	if (
		requestingSignInOrSignUpPage &&
		isAuthenticated &&
		completedRegistration
	) {
		return NextResponse.redirect(frontEndUrl + "/account");
	}

	if (requestingAccountPage && isAuthenticated && !completedRegistration) {
		console.log("going to signup");
		return NextResponse.redirect(frontEndUrl + "/signup");
	}

	// Will redirect user to signin page if they attempt to go to the private account
	// page with an invalid token
	if (requestingAccountPage && !isAuthenticated) {
		return NextResponse.redirect(frontEndUrl + "/signin");
	}

	return NextResponse.next();
}
