import SignUpOrSignIn from "../../components/SignUpOrSignIn";
import SignUpForm from "./SignUpForm";
import SignUpStepper from "./SignUpStepper";

export default function SignUp() {
	return (
		<SignUpOrSignIn
			heading="Sign Up"
			subheading="Sign up and be among the first to get access to Classmates professor insights"
			form={<SignUpForm />}
			variant="signup"
		/>
	);
}
