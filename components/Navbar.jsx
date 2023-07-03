import Link from 'next/link';
import Image from 'next/image';
import useWindowSize from '../hooks/useWindowSize';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ClassmateButton from '../components/ClassmateButton';

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { width } = useWindowSize();

	// Get url path
	const router = useRouter();
	const pathname = router.asPath.split('/')[1];

	// Check if current path should have a light or dark navbar
	const pagesWithDarkNavbar = [];
	const bgColor = pagesWithDarkNavbar.includes(pathname)
		? 'bg-classmate-tan-1'
		: 'bg-classmate-tan-2';

	const toggleMobileMenu = () => {
		setMobileMenuOpen((currentState) => !currentState);
	};

	return (
		<nav
			className={`section-padding flex h-16 items-center justify-between space-x-5 ${bgColor} py-4 md:h-20 md:justify-normal`}>
			<ClassmateButton styles='text-classmate-green-6 p-1'>
				<Link className='text-2xl font-extrabold' href='/'>
					{width > 640 ? (
						<Image
							src='./logo.svg'
							width={0}
							height={0}
							alt='large navbar classmate logo'
							className='h-6 w-auto'
						/>
					) : (
						<Image
							src='./logo-small.svg'
							width={0}
							height={0}
							alt='small navbar classmate logo'
							className='h-6 w-auto'
						/>
					)}
				</Link>
			</ClassmateButton>

			<ul
				className={`font-classmate absolute left-0 top-0 z-10 !m-0 flex h-full w-full grow list-none flex-col items-center justify-center gap-4 bg-classmate-tan-2  text-xl text-classmate-green-6 transition-opacity duration-500 ease-in-out  md:static md:!ml-10 md:w-fit md:grow-0 md:flex-row md:gap-6  md:text-sm lg:!ml-20 lg:gap-16 ${
					mobileMenuOpen || width > 768
						? 'pointer-events-auto opacity-100'
						: 'pointer-events-none opacity-0'
				}`}>
				<ClassmateButton
					styles='absolute right-7 top-5 md:hidden'
					callback={toggleMobileMenu}>
					<Image
						src='./xmark-solid.svg'
						width={25}
						height={25}
						alt='An X icon representing a close button for a menu or window.'
					/>
				</ClassmateButton>

				<li>
					<Link href='/'>
						<ClassmateButton
							styles='text-lg md:text-sm text-classmate-green-6 px-1'
							callback={toggleMobileMenu}>
							Home
						</ClassmateButton>
					</Link>
				</li>
				<li>
					<Link href='/search'>
						<ClassmateButton
							styles='text-lg md:text-sm text-classmate-green-6 px-1'
							callback={toggleMobileMenu}>
							Search
						</ClassmateButton>
					</Link>
				</li>
				<li>
					<Link href='/account'>
						<ClassmateButton
							styles='text-lg md:text-sm text-classmate-green-6 px-1'
							callback={toggleMobileMenu}>
							Account
						</ClassmateButton>
					</Link>
				</li>
				<li className='md:hidden '>
					<Link href='/signin'>
						<ClassmateButton
							styles='text-lg md:text-sm text-classmate-green-6 px-1'
							callback={toggleMobileMenu}>
							Sign In
						</ClassmateButton>
					</Link>
				</li>
				<li className='md:hidden '>
					<Link href='/signup'>
						<ClassmateButton
							styles='text-lg md:text-sm text-classmate-green-6 px-1'
							callback={toggleMobileMenu}>
							Sign Up
						</ClassmateButton>
					</Link>
				</li>
			</ul>

			<ClassmateButton styles='md:hidden' callback={toggleMobileMenu}>
				<Image
					src='./hamburger.svg'
					width={25}
					height={25}
					alt='An icon depicting three horizontal lines, commonly known as a hamburger icon, representing a menu opener.'
				/>
			</ClassmateButton>

			<div className='!ml-auto hidden gap-2 md:flex'>
				<ClassmateButton
					styles='border-classmate-green-2 text-classmate-green-2'
					variant='outlined'
					size='small'>
					<Link className='link text-classmate-green-2' href='/signin'>
						Sign In
					</Link>
				</ClassmateButton>
				<ClassmateButton
					styles='border-classmate-green-2 bg-classmate-green-2'
					variant='contained'
					size='small'>
					<Link className='link text-classmate-tan-2' href='/signup'>
						Sign Up
					</Link>
				</ClassmateButton>
			</div>
		</nav>
	);
}
