import React, { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

export default function RankGraph() {
	const { width } = useWindowSize();

	return (
		<div className='p-6'>
			<div>
				<p>Professor Rank</p>
			</div>
			<div className='grid-col-5 grid h-56 grid-flow-col'>
				<div className='relative h-full bg-red-500'>
					<div className='absolute left-0 h-full w-1 rounded-full bg-slate-700' />
					<p className='font-classmate absolute bottom-0 left-1 leading-3'>0</p>
				</div>
				<div className='h-full border-l-4 border-indigo-500  bg-green-500'></div>
				<div className='h-full border-l-4 border-indigo-500 bg-blue-500'></div>
				<div className='h-full border-l-4 border-indigo-500 bg-yellow-500'></div>
				<div className='h-full border-l-4 border-indigo-500 bg-purple-500'></div>
			</div>
		</div>
	);
}
