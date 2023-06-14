import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import useWindowSize from '../hooks/useWindowSize';

export default function Layout({ children }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { width } = useWindowSize();

	const toggleMobileMenu = () => {
		setMobileMenuOpen((currentState) => !currentState);
	};

	return (
		<>
			{/* px-60 justify-center */}
			<nav className='flex h-16 items-center justify-between space-x-5 bg-classmate-tan-2 px-6 py-4 md:justify-normal md:px-10 xl:px-20 2xl:px-60'>
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

				<ul
					className={`font-classmate-georgia absolute left-0 top-0 !m-0 flex h-full w-full grow list-none flex-col items-center justify-center gap-4  bg-classmate-tan-2 text-xl text-classmate-green-6 transition-opacity duration-500 ease-in-out md:static md:!ml-6 md:w-fit md:grow-0 md:flex-row md:gap-6  md:text-sm lg:gap-16 ${
						mobileMenuOpen || width > 768
							? 'pointer-events-auto opacity-100'
							: 'pointer-events-none opacity-0'
					}`}>
					<button onClick={toggleMobileMenu}>
						<Image
							src='./xmark-solid.svg'
							width={25}
							height={25}
							className='absolute right-7 top-5  md:hidden'
						/>
					</button>

					<li>
						<Link href='/'>
							<button onClick={toggleMobileMenu}>Home</button>
						</Link>
					</li>
					<li>
						<Link href='/search'>
							<button onClick={toggleMobileMenu}>Search</button>
						</Link>
					</li>
					<li>
						<Link href='/account'>
							<button onClick={toggleMobileMenu}>Account</button>
						</Link>
					</li>
				</ul>
				<button className='md:hidden' onClick={toggleMobileMenu}>
					<Image src='./hamburger.svg' width={25} height={25} />
				</button>

				<div className='!ml-auto hidden gap-2 md:flex'>
					<button className='btn btn--link btn--hover btn--outline border-classmate-green-2 text-classmate-green-2'>
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
