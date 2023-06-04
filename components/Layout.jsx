import Link from 'next/link';
import React from 'react';

import layout from '../styles/layout.module.scss';

export default function Layout({ children }) {
	return (
		<>
			<nav className={layout.navbar}>
				<button className='btn btn--blank'>
					<Link className='font-extrabold text-2xl' href='/'>
						CLASSMATE
					</Link>
				</button>
				<ul className={layout.links_wrapper}>
					<li className={layout.link}>
						<Link href='/'>HOME</Link>
					</li>
					<li className={layout.link}>
						<Link href='/search'>SEARCH</Link>
					</li>
					<li className={layout.link}>
						<Link href='/about'>ABOUT</Link>
					</li>
					<li className={layout.link}>
						<Link href='/account'>ACCOUNT</Link>
					</li>
				</ul>
				<div className='two-btn-wrapper'>
					<button className='btn btn--link btn--hover btn--outline'>
						<Link className='link' href='/signin'>
							SIGN IN
						</Link>
					</button>
					<button className='btn btn--link btn--hover btn--primary '>
						<Link className='link' href='/signup'>
							SIGN UP
						</Link>
					</button>
				</div>
			</nav>
			{children}
		</>
	);
}
