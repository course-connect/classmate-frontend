import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import swinging from '../public/swinging.svg';
import reading from '../public/reading.svg';
import globe from '../public/globe.svg';
import book from '../public/book.svg';
import atom from '../public/atom.svg';
import plane from '../public/plane.svg';

export default function Hero() {
	return (
		<section className='section-padding relative flex h-[680px] w-full items-center justify-center bg-classmate-tan-1 2xl:h-[740px]'>
			<Image
				src={swinging}
				width={0}
				height={0}
				className='absolute left-0 top-0 h-48 w-auto lg:h-64 2xl:h-80'
			/>
			<Image
				src={reading}
				width={0}
				height={0}
				className='absolute bottom-0 right-0 h-48 w-auto lg:h-64 2xl:h-72'
			/>
			<Image
				src={globe}
				width={0}
				height={0}
				className='absolute bottom-[120px] left-16 hidden h-36 w-auto sm:block md:left-24 lg:h-44 xl:left-36 2xl:left-72 2xl:h-52 3xl:left-96'
			/>
			<Image
				src={book}
				width={0}
				height={0}
				className=' absolute right-16 top-[120px] hidden h-20 w-auto sm:block md:right-24 lg:right-16 lg:h-28 xl:right-36 2xl:right-72 2xl:h-32 3xl:right-96'
			/>
			<Image
				src={atom}
				width={0}
				height={0}
				className='absolute top-20 hidden h-20 w-auto -translate-x-36 xl:block 2xl:h-24'
			/>
			<Image
				src={plane}
				width={0}
				height={0}
				className=' absolute bottom-[111px] hidden translate-x-36 xl:block 2xl:bottom-[128px] 2xl:w-44 2xl:translate-x-40'
			/>
			<div className='flex flex-col items-center'>
				<Image
					src={logo}
					width={0}
					height={0}
					className='h-12 w-auto sm:h-16 lg:h-20'
				/>
				<h2 className='font-classmate my-4 text-center text-2xl sm:my-6 sm:text-3xl'>
					The easiest way to find a professor
				</h2>
				<button className='btn btn--large btn--hover bg-classmate-green-4 text-center text-classmate-tan-1'>
					Get Started
				</button>
			</div>
		</section>
	);
}
