import React from 'react';

export default function Hero() {
	return (
		<div className='flex h-[680px] w-full items-center justify-center bg-classmate-tan-1 lg:h-[650px]'>
			<div className='flex flex-col items-center'>
				<h1>Classmate</h1>
				<h2 className='font-classmate my-5 px-8 text-center text-2xl sm:text-3xl'>
					The easiest way to find a professor
				</h2>
				<button className='btn btn--large btn--hover bg-classmate-green-4 text-center text-classmate-tan-1'>
					Get Started
				</button>
			</div>
		</div>
	);
}
