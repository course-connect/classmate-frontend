import Hero from "./home/Hero";
import HowItWorksSection from "./home/HowItWorksSection";
import JoinTodaySection from "./home/JoinTodaySection";
import WhatWeOfferSection from "./home/WhatWeOfferSection";
import EasilyCompareSection from "./home/EasilyCompareSection";
import StatsSection from "./home/StatsSection";
import OurGoalSection from "./home/OurGoalSection";

export default function Home() {
	return (
		<div className="overflow-hidden">
			<Hero />
			<HowItWorksSection />
			<JoinTodaySection />
			<WhatWeOfferSection />
			<EasilyCompareSection />
			<StatsSection />
			<OurGoalSection />
		</div>
	);
}
