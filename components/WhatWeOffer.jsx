import React from 'react';
import Image from 'next/image';
import HomepageHeading from './HomepageHeading';
import folder from '../public/folder.svg';

export default function WhatWeOffer() {
	return (
		<section className='section-padding flex justify-center bg-classmate-tan-2 py-20 xl:py-44'>
			<div className='xl:gap-18 flex flex-col items-center lg:flex-row lg:gap-20 3xl:gap-40'>
				<div className=''>
					<HomepageHeading headingClasses={'lg:justify-start'}>
						What We Offer
					</HomepageHeading>
					<p className='font-classmate mx-auto max-w-[280px] py-12 text-center text-classmate-green-7 sm:max-w-xl  lg:mx-0 lg:max-w-[450px] lg:py-10 lg:text-left'>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						Neque porro quisquam est, qui dolorem. Neque porro quisquam est, qui
						dolorem.
					</p>
					<button className='btn btn-large btn-hover hidden bg-classmate-gold-1 text-center text-classmate-tan-1 lg:block'>
						Get Started
					</button>
				</div>
				<div className='grid grid-cols-1 grid-rows-4 gap-6 sm:grid-cols-2 sm:grid-rows-2 lg:max-w-[585px] 3xl:max-w-none 3xl:gap-10'>
					<div className='max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8'>
						<Image src={folder} width={0} height={0} className='w-10' />
						<h6 className='font-classmate-bold py-3 text-xl text-classmate-green-1'>
							Save Your Courses
						</h6>
						<p className='font-classmate text-sm text-classmate-green-7 2xl:text-base'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className='max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8'>
						<Image src={folder} width={0} height={0} className='w-10' />
						<h6 className='font-classmate-bold py-3 text-xl text-classmate-green-1'>
							Save Your Courses
						</h6>
						<p className='font-classmate text-sm text-classmate-green-7 2xl:text-base'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className='max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8'>
						<Image src={folder} width={0} height={0} className='w-10' />
						<h6 className='font-classmate-bold py-3 text-xl text-classmate-green-1'>
							Save Your Courses
						</h6>
						<p className='font-classmate text-sm text-classmate-green-7 2xl:text-base'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className='max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8'>
						<Image src={folder} width={0} height={0} className='w-10' />
						<h6 className='font-classmate-bold py-3 text-xl text-classmate-green-1'>
							Save Your Courses
						</h6>
						<p className='font-classmate text-sm text-classmate-green-7 2xl:text-base'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<button className='btn btn-large btn-hover mt-10 bg-classmate-gold-1 text-center text-classmate-tan-1 lg:hidden'>
					Get Started
				</button>
			</div>
		</section>
	);
}
