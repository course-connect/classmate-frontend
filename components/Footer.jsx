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
				<ul className='font-classmate flex flex-col gap-5 text-sm text-classmate-green-5'>
					<Link className='link' href='/'>
						<li>Home</li>
					</Link>
					<Link className='link' href='/search'>
						<li>Search</li>
					</Link>
					<Link className='link' href='/account'>
						<li>Account</li>
					</Link>
				</ul>
				<div className='h-[2px] w-full rounded-lg bg-classmate-green-5' />
				<div className='flex items-center justify-center gap-4'>
					<Image
						src='./footer-instagram-logo.svg'
						width={0}
						height={0}
						alt='large navbar classmate logo'
						className='h-11 w-auto'
					/>
					<Image
						src='./footer-linkedin-logo.svg'
						width={0}
						height={0}
						alt='large navbar classmate logo'
						className='h-11 w-auto'
					/>
					<Image
						src='./footer-twitter-logo.svg'
						width={0}
						height={0}
						alt='large navbar classmate logo'
						className='h-11 w-auto'
					/>
				</div>
				<p className='font-classmate text-center text-xs tracking-wide text-classmate-green-5'>
					© Classmate, Inc. 2023. We love our users!
				</p>
			</div>
		</footer>
	);
}
