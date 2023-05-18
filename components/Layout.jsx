import Link from 'next/link';
import React from 'react';

import button from '../styles/button.module.scss';
import layout from '../styles/layout.module.scss';

export default function Layout({ children }) {
	return (
		<>
			<nav className={layout.navbar}>
				<button className={`${button.btn} ${button.btn_blank}`}>
					<Link className={layout.logo} href='/'>
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
				<div className={button.two_button_wrapper}>
					<button
						className={`${button.btn} ${button.btn_link} ${button.btn_outline}`}>
						<Link className={button.link} href='/signin'>
							SIGN IN
						</Link>
					</button>
					<button
						className={`${button.btn} ${button.btn_link} ${button.btn_primary}`}>
						<Link className={button.link} href='/signup'>
							SIGN UP
						</Link>
					</button>
				</div>
			</nav>
			{children}
		</>
	);
}
