import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

export default function RankGraph() {
	const { width } = useWindowSize();

	return (
		<div className='bg-slate-500 p-8'>
			<div className='mb-10'>
				<p className='font-classmate-bold text-2xl'>Professor rank</p>
			</div>
			<div className='flex'>
				<div className='relative flex w-full '>
					<div className='z-10  w-full -translate-y-[26px]'>
						<div className='relative h-16 w-full'>
							<p className='font-classmate absolute bottom-[40px] text-xs'>
								Benjamin Mitchell
							</p>
							<div className='absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2'>
								<span className='font-classmate absolute -right-4'>5</span>
							</div>
						</div>
						<div className='relative h-16 w-full'>
							<p className='font-classmate absolute bottom-[40px] text-xs'>
								Benjamin Mitchell
							</p>
							<div className='absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2'>
								<span className='font-classmate absolute -right-4'>5</span>
							</div>
						</div>
						<div className='relative h-16 w-full'>
							<p className='font-classmate absolute bottom-[40px] text-xs'>
								Benjamin Mitchell
							</p>
							<div className='absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2'>
								<span className='font-classmate absolute -right-4'>5</span>
							</div>
						</div>
						<div className='relative h-16 w-full'>
							<p className='font-classmate absolute bottom-[40px] text-xs'>
								Benjamin Mitchell
							</p>
							<div className='absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2'>
								<span className='font-classmate absolute -right-4'>5</span>
							</div>
						</div>
						<div className='relative h-16 w-full'>
							<p className='font-classmate absolute bottom-[40px] text-xs'>
								Benjamin Mitchell
							</p>
							<div className='absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2'>
								<span className='font-classmate absolute -right-4'>5</span>
							</div>
						</div>
						<div className='relative h-16 w-full'>
							<p className='font-classmate absolute bottom-[40px] text-xs'>
								Benjamin Mitchell
							</p>
							<div className='absolute bottom-0 flex h-3/5 w-full items-center rounded-md bg-classmate-green-2'>
								<span className='font-classmate absolute -right-4'>5</span>
							</div>
						</div>
					</div>

					<div className='absolute grid h-full  w-full grid-flow-col grid-cols-5  text-sm'>
						<div className='relative h-full'>
							<div className='absolute left-0 h-full w-[3px] rounded-full bg-classmate-gray-3' />
							<p className='font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6'>
								0
							</p>
						</div>
						<div className='relative h-full'>
							<div className='absolute left-0 h-full w-[3px] rounded-full bg-classmate-gray-3' />
							<p className='font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6'>
								1
							</p>
						</div>
						<div className='relative h-full'>
							<div className='absolute left-0 h-full w-[3px] rounded-full bg-classmate-gray-3' />
							<p className='font-classmate absolute bottom-0 left-2 leading-3 text-classmate-green-6'>
								2
							</p>
						</div>
						<div className='relative h-full'>
							<div className='absolute left-0 h-full w-[3px] rounded-full bg-classmate-gray-3' />
							<p className='font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6'>
								3
							</p>
						</div>
						<div className='relative h-full'>
							<div className='absolute left-0 h-full w-[3px] rounded-full bg-classmate-gray-3' />
							<p className='font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6'>
								4
							</p>
						</div>
					</div>
				</div>
				<div className='relative block w-[18px] -translate-x-1  items-stretch text-sm'>
					<div className='absolute left-0 h-full w-[3px] rounded-full bg-classmate-gray-3' />
					<p className='font-classmate absolute bottom-1 left-2 leading-3 text-classmate-green-6'>
						5
					</p>
				</div>
			</div>
		</div>
	);
}
