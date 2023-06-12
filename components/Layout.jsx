import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Layout({ children }) {
	return (
		<>
			<nav className='flex justify-center bg-classmate-tan-1 items-center py-4 px-60'>
				<button className='btn btn--blank'>
					<Link className='font-extrabold text-2xl' href='/'>
						<Image src='./logo.svg' width={120} height={18} />
					</Link>
				</button>
				<ul className='flex gap-14 mx-20 text-classmate-green-6'>
					<li className='font-classmate-georgia text-xs'>
						<Link href='/'>Home</Link>
					</li>
					<li className='font-classmate-georgia text-xs'>
						<Link href='/search'>Search</Link>
					</li>
					<li className='font-classmate-georgia text-xs'>
						<Link href='/about'>About</Link>
					</li>
					<li className='font-classmate-georgia text-xs'>
						<Link href='/account'>Account</Link>
					</li>
				</ul>
				<div className='two-btn-wrapper  ml-auto'>
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
				</div>
			</nav>
			{children}
		</>
	);
}
