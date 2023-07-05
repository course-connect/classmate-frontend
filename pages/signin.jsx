import SignUpOrSignIn from '../components/SignUpOrSignIn';
import SignInForm from '..//components/SignInForm';

import React from 'react';

export default function signin() {
	return (
		<SignUpOrSignIn
			heading='Welcome Back'
			subheading='Sign in to manage your courses and create the prefect semester'
			form={<SignInForm />}
			variant='signin'
		/>
	);
}

// import { signIn, signOut } from '../redux/auth/authActions';
// import { useDispatch } from 'react-redux';

// export default function SignIn() {
// 	const dispatch = useDispatch();
// 	return (
// 		<div className='px-5'>
// 			<button onClick={() => dispatch(signIn())}>Sign In</button>
// 			<button onClick={() => dispatch(signOut())}>Sign Out</button>
// 		</div>
// 	);
// }
