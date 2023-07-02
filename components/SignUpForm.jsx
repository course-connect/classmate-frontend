import React from 'react';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';

import BasicInput from './BasicInput';
import PasswordInput from './PasswordInput';

export default function SignUpForm() {
	const methods = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const { handleSubmit, setError } = methods;

	function validateEmail(email) {
		const emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!email.match(emailRegex)) {
			setError('email', {
				type: 'custom',
				message: 'invalid email address',
			});
			return true;
		}
		return false;
	}

	function validatePassword(password) {
		const oneUpper = '(?=.*?[A-Z])';
		const oneLower = '(?=.*?[a-z])';
		const oneDigit = '(?=.*?[0-9])';
		const oneSpecial = '(?=.*?[#?!@$%^&*-])';
		const minChar = '.{8,}';
		const maxChar = '.{,64}';

		let errorMessage = '';
		if (!password.match(oneUpper)) {
			errorMessage = 'must contain one uppercase character';
		} else if (!password.match(oneLower)) {
			errorMessage = 'must contain one lowercase character';
		} else if (!password.match(oneDigit)) {
			errorMessage = 'must contain one digit';
		} else if (!password.match(oneSpecial)) {
			errorMessage = 'must contain one special character';
		} else if (!password.match(minChar)) {
			errorMessage = 'must contain more than 8 characters';
		} else if (!password.match(maxChar)) {
			errorMessage = 'must contain less than 64 characters';
		}

		if (errorMessage) {
			console.log('errorMessage');
			setError('password');
			setError('confirmPassword', {
				type: 'custom',
				message: errorMessage,
			});
			return true;
		}
		return false;
	}

	function validateConfirmPassword(password, confirmPassword) {
		if (password !== confirmPassword) {
			setError('confirmPassword', {
				type: 'custom',
				message: 'does not match',
			});
			setError('password');
			return true;
		}
		return false;
	}

	function onSubmit({ email, password, confirmPassword }) {
		const emailError = validateEmail(email);
		const passwordError = validatePassword(password);
		const confirmPasswordError = validateConfirmPassword(
			password,
			confirmPassword
		);

		if (!emailError && !passwordError && !confirmPasswordError) {
			alert('success');
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-8 w-full'>
			<div className='flex w-full flex-col items-center justify-center gap-3'>
				<FormProvider {...methods}>
					<BasicInput
						name='email'
						label='Email'
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						name='password'
						label='Password'
						rules={{
							required: true,
						}}
					/>
					<PasswordInput
						name='confirmPassword'
						label='Confirm Password'
						rules={{
							required: true,
						}}
					/>
				</FormProvider>
			</div>
			<p className='font-classmate mt-4 text-classmate-green-6'>
				Have an account?&nbsp;
				<Link href='/signin' className='text-classmate-green-1 underline'>
					Sign In
				</Link>
			</p>
			<button className='btn btn-large my-6 w-full bg-classmate-gold-1'>
				Sign Up
			</button>
		</form>
	);
}
