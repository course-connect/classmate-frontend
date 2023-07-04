import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className='section-padding bg-classmate-green-1 py-14'>
			<div className='flex flex-col gap-12'>
				<Image
					src='./footer-logo.svg'
					width={0}
					height={0}
					alt='large navbar classmate logo'
					className='h-6 w-auto'
				/>
				<ul className='font-classmate flex flex-col items-center justify-center gap-5 text-sm sm:flex-row sm:gap-14'>
					<Link className='link text-classmate-green-5' href='/'>
						<li>Home</li>
					</Link>
					<Link className='link text-classmate-green-5' href='/search'>
						<li>Search</li>
					</Link>
					<Link className='link text-classmate-green-5' href='/account'>
						<li>Account</li>
					</Link>
					<Link className='link text-classmate-green-5' href='/signin'>
						<li>Sign In</li>
					</Link>
					<Link className='link text-classmate-green-5' href='/signup'>
						<li>Sign Up</li>
					</Link>
				</ul>
				<div className='h-[2px] w-full rounded-lg bg-classmate-green-5' />
				<div className='flex items-center justify-center gap-4'>
					<Link
						href='https://stackoverflow.com/'
						target='_blank'
						passHref={true}>
						<Image
							src='./footer-instagram-logo.svg'
							width={0}
							height={0}
							alt='instagram logo'
							className='h-11 w-auto'
						/>
					</Link>
					<Link
						href='https://stackoverflow.com/'
						target='_blank'
						passHref={true}>
						<Image
							src='./footer-linkedin-logo.svg'
							width={0}
							height={0}
							alt='linkedin logo'
							className='h-11 w-auto'
						/>
					</Link>
					<Link
						href='https://stackoverflow.com/'
						target='_blank'
						passHref={true}>
						<Image
							src='./footer-twitter-logo.svg'
							width={0}
							height={0}
							alt='twitter logo'
							className='h-11 w-auto'
						/>
					</Link>
				</div>
				<p className='font-classmate text-center text-xs tracking-wide text-classmate-green-5'>
					© Classmate, Inc. 2023. We love our users!
				</p>
			</div>
		</footer>
	);
}
