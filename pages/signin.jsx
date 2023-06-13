import React from 'react';
import { signIn, signOut } from '../redux/auth/authActions';
import { useDispatch } from 'react-redux';

export default function SignIn() {
	const dispatch = useDispatch();
	return (
		<div className='px-5'>
			<button onClick={() => dispatch(signIn())}>Sign In</button>
			<button onClick={() => dispatch(signOut())}>Sign Out</button>
		</div>
	);
}
