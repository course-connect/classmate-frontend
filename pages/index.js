import React from 'react';

import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import JoinTodaySection from '../components/JoinTodaySection';

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<HowItWorks />
			<JoinTodaySection />
		</div>
	);
}
