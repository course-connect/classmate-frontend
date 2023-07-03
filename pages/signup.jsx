import HomepageHeading from '../components/HomepageHeading';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
	return (
		<div className='section-padding bg-classmate-tan-1 py-16'>
			<div className='flex flex-col items-center justify-center rounded-2xl bg-classmate-tan-2  p-10'>
				<HomepageHeading>Sign Up</HomepageHeading>
				<p className='font-classmate mt-6 max-w-[280px] text-center text-classmate-green-6'>
					Sign up to get access to insights and create your prefect semester
				</p>
				<SignUpForm />
				<div>
					<p className=' font-classmate relative flex w-[180px] items-center justify-center text-classmate-green-6'>
						<span className='absolute left-0 h-[2px] w-6 rounded-lg bg-classmate-green-7'></span>
						Or Sign up with
						<span className='absolute right-0 h-[2px] w-6 rounded-lg bg-classmate-green-7'></span>
					</p>

					<div>
						<button>Google</button>
						<button>Apple</button>
						<button>Facebook</button>
					</div>
				</div>
			</div>
		</div>
	);
}
