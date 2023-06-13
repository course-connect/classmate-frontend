import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import useWindowSize from '../hooks/useWindowSize';

export default function Layout({ children }) {
	const { width, height } = useWindowSize();

	return (
		<>
			{/* px-60 justify-center */}
			<nav className='flex h-16 items-center justify-between space-x-5 bg-classmate-tan-2 px-6 py-4'>
				<button className='btn btn--blank'>
					<Link className='text-2xl font-extrabold' href='/'>
						{width > 640 ? (
							<Image
								src='./logo.svg'
								width={0}
								height={0}
								className='h-6 w-auto'
							/>
						) : (
							<Image
								src='./logo-small.svg'
								width={0}
								height={0}
								className='h-6 w-auto'
							/>
						)}
					</Link>
				</button>
				<ul className='absolute left-0  top-0 m-0 w-full grow list-none bg-black p-0 text-classmate-green-6'>
					<li className='font-classmate-georgia ml- text-xs'>
						<Link href='/search'>Search</Link>
					</li>
					<li className='font-classmate-georgia ml- text-xs'>
						<Link href='/account'>Account</Link>
					</li>
				</ul>
				<button className=''>
					<Image src='./hamburger.svg' width={25} height={25} />
				</button>

				{/* <div className='two-btn-wrapper  ml-auto'>
					<button className='btn btn--link btn--hover btn--outline text-classmate-green-2 border-classmate-green-2'>
						<Link className='link' href='/signin'>
							Sign In
						</Link>
					</button>
					<button className='btn btn--link btn--hover btn--primary text-classmate-tan-1'>
						<Link className='link' href='/signup'>
							Sign Up
						</Link>
					</button>
				</div> */}
			</nav>
			{children}
		</>
	);
}
