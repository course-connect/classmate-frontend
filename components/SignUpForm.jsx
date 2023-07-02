import React from 'react';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';

import BasicInput from './BasicInput';

export default function SignUpForm() {
	const methods = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const { handleSubmit, setError } = methods;

	function validatePassword(password) {
		const oneUpperRegex = '(?=.*?[A-Z])';
		if (!password.match(oneUpperRegex)) {
			setError('password', {
				type: 'custom',
				message: 'one uppercase required',
			});
		}
	}

	function validateConfirmPassword(password, confirmPassword) {
		if (password !== confirmPassword) {
			setError('confirmPassword', {
				type: 'custom',
				message: 'does not match',
			});
			setError('password');
		}
	}

	function onSubmit({ email, password, confirmPassword }) {
		validatePassword(password);
		validateConfirmPassword(password, confirmPassword);

		// rules={{
		//     required: true,
		//     minLength: {
		//         value: 8,
		//         message: 'must be at least 8 characters',
		//     },
		//     maxLength: {
		//         value: 64,
		//         message: 'must be at most 64 characters',
		//     },
		// }}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='my-6 flex flex-col items-center justify-center gap-3 bg-white p-8'>
			<FormProvider {...methods}>
				<BasicInput
					name='email'
					label='Email'
					rules={{
						required: true,
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'invalid email address',
						},
					}}
				/>
				<BasicInput
					name='password'
					label='Password'
					rules={{
						required: true,
					}}
				/>
				<BasicInput
					name='confirmPassword'
					label='Confirm Password'
					rules={{
						required: true,
					}}
				/>
			</FormProvider>
			<p>
				Have an account?<Link href='/signin'>Sign In</Link>
			</p>
			<button type='submit'>test</button>
		</form>
	);
}
