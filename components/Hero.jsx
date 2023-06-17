import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import swinging from '../public/swinging.svg';
import reading from '../public/reading.svg';

export default function Hero() {
	return (
		<div className='relative flex h-[680px] w-full items-center justify-center bg-classmate-tan-1 px-8 '>
			<Image
				src={swinging}
				width={0}
				height={0}
				className='absolute left-0 top-0 h-48 w-auto lg:h-64'
			/>
			<Image
				src={reading}
				width={0}
				height={0}
				className='absolute bottom-0 right-0 h-48 w-auto lg:h-64'
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
		</div>
	);
}
