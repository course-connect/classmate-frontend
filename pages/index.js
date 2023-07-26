import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import JoinTodaySection from "../components/JoinTodaySection";
import WhatWeOffer from "../components/WhatWeOffer";
import RankGraph from "../components/RankGraph";

export default function Home() {
	return (
		<div className="overflow-hidden">
			<Hero />
			<HowItWorks />
			<JoinTodaySection />
			<WhatWeOffer />
			<RankGraph />
		</div>
	);
}
