import Image from 'next/image';
import HomepageHeading from './HomepageHeading';
import box from '../public/box.svg';
import falling from '../public/falling.svg';
import love from '../public/love.svg';

export default function HowItWorks() {
	return (
		<section className='section-padding flex flex-col bg-classmate-tan-2 py-20 xl:py-40 '>
			<HomepageHeading>How It Works</HomepageHeading>
			<div className='my-10 flex flex-wrap justify-center xl:mt-16'>
				<div className=' my-14 flex flex-grow flex-col items-center'>
					<h6 className='font-classmate text-center text-2xl sm:text-[28px]'>
						<span className='text-classmate-gold-1'>1. </span>
						Find Your School
					</h6>
					<Image
						src={box}
						width={0}
						height={0}
						className='my-10 h-48 w-fit 3xl:h-auto 3xl:w-72'
					/>
					<p className='font-classmate max-w-[280px] text-center text-classmate-green-7'>
						Consequuntur magni dolores eos qui ratione voluptatem sequi
						nesciunt. Neque porro
					</p>
				</div>

				<div className=' my-14 flex flex-grow flex-col items-center'>
					<h6 className='font-classmate text-center text-2xl sm:text-[28px]'>
						<span className='text-classmate-gold-1'>2. </span>
						Select Your Course
					</h6>
					<Image
						src={falling}
						width={0}
						height={0}
						className='my-10 h-48 w-fit 3xl:h-auto 3xl:w-72'
					/>
					<p className='font-classmate max-w-[280px] text-center text-classmate-green-7'>
						Consequuntur magni dolores eos qui ratione voluptatem sequi
						nesciunt. Neque porro
					</p>
				</div>

				<div className=' my-14 flex flex-grow flex-col items-center'>
					<h6 className='font-classmate text-center text-2xl sm:text-[28px]'>
						<span className='text-classmate-gold-1'>3. </span>
						Compare Professors
					</h6>
					<Image
						src={love}
						width={0}
						height={0}
						className='my-10 h-48 w-fit 3xl:h-auto 3xl:w-72'
					/>
					<p className='font-classmate max-w-[280px] text-center text-classmate-green-7'>
						Consequuntur magni dolores eos qui ratione voluptatem sequi
						nesciunt. Neque porro
					</p>
				</div>
			</div>
			<button className='btn btn-outline btn-large btn-hover self-center border-classmate-green-2 text-classmate-green-2'>
				Try For Free
			</button>
		</section>
	);
}
