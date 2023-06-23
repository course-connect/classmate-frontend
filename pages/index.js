import React from 'react';

import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import JoinTodaySection from '../components/JoinTodaySection';
import WhatWeOffer from '../components/WhatWeOffer';

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<HowItWorks />
			<JoinTodaySection />
			<WhatWeOffer />
		</div>
	);
}
