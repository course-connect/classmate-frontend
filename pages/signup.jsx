import SignUpOrSignIn from '../components/SignUpOrSignIn';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
	return (
		<SignUpOrSignIn
			heading='Sign Up'
			subheading='Sign up to get access to insights and create your prefect semester'
			form={<SignUpForm />}
			variant='signup'
		/>
	);
}
