import SignUpOrSignIn from "../../components/SignUpOrSignIn";
import SignUpForm from "./SignUpForm";
import SignUpStepper from "./SignUpStepper";

export default function SignUp() {
	return (
		<SignUpStepper>
			<SignUpOrSignIn
				heading="Sign Up"
				subheading="Sign up to get access to insights and create your prefect semester"
				form={<SignUpForm />}
				variant="signup"
			/>
			<SignUpOrSignIn
				heading="Sign Up"
				subheading="Sign up to get access to insights and create your prefect semester"
				form={<SignUpForm />}
				variant="signup"
			/>
			<SignUpOrSignIn
				heading="Sign Up"
				subheading="Sign up to get access to insights and create your prefect semester"
				form={<SignUpForm />}
				variant="signup"
			/>
		</SignUpStepper>
	);
}
