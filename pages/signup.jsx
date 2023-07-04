import HomepageHeading from '../components/HomepageHeading';
import SignUpForm from '../components/SignUpForm';
import ClassmateButton from '../components/ClassmateButton';
import Image from 'next/image';
import googleLogo from '../public/google.png';
import appleLogo from '../public/apple.png';
import facebookLogo from '../public/facebook.png';

export default function SignUp() {
	return (
		<div className='section-padding flex justify-center bg-classmate-tan-1 py-14'>
			<div className='flex w-full flex-col items-center justify-center rounded-2xl bg-classmate-tan-2 px-10 py-12 shadow-xl xs:max-w-[420px] sm:max-w-[580px] sm:p-20'>
				<HomepageHeading>Sign Up</HomepageHeading>
				<p className='font-classmate mt-6 max-w-[280px] text-center text-classmate-green-6 sm:mt-8 sm:max-w-[340px]'>
					Sign up to get access to insights and create your prefect semester
				</p>
				<SignUpForm />
				<div className='flex w-full flex-col items-center gap-6 sm:gap-9'>
					<p className='font-classmate relative flex w-[180px] items-center justify-center text-classmate-green-6'>
						<span className='absolute left-0 h-[2px] w-6 rounded-lg bg-classmate-green-7'></span>
						Or Sign up with
						<span className='absolute right-0 h-[2px] w-6 rounded-lg bg-classmate-green-7'></span>
					</p>

					<div className='flex w-full flex-col gap-2 xs:flex-row'>
						<ClassmateButton
							variant='outlined'
							size='small-full'
							styles='border-classmate-green-7 text-classmate-green-7 !text-xs sm:h-10'>
							<Image
								src={googleLogo}
								width={0}
								height={0}
								className='mr-2 h-3 w-3 sm:h-5 sm:w-5'
								alt='google logo'
							/>
							Google
						</ClassmateButton>
						<ClassmateButton
							variant='outlined'
							size='small-full'
							styles='border-classmate-green-7 text-classmate-green-7 !text-xs sm:h-10'>
							<Image
								src={appleLogo}
								width={0}
								height={0}
								className='mr-2 h-3 w-[10px] sm:h-5 sm:w-[17px]'
								alt='apple logo'
							/>
							Apple
						</ClassmateButton>
						<ClassmateButton
							variant='outlined'
							size='small-full'
							styles='border-classmate-green-7 text-classmate-green-7 !text-xs sm:h-10'>
							<Image
								src={facebookLogo}
								width={0}
								height={0}
								className='mr-2 h-4 w-4 sm:h-5 sm:w-5'
								alt='facebook logo'
							/>
							Facebook
						</ClassmateButton>
					</div>
				</div>
			</div>
		</div>
	);
}
