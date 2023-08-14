import Hero from "../components/Hero";
import HowItWorksSection from "./home/HowItWorksSection";
import JoinTodaySection from "./home/JoinTodaySection";
import WhatWeOfferSection from "./home/WhatWeOfferSection";
import EasilyCompareSection from "../components/EasilyCompareSection";
import StatsSection from "./home/StatsSection";

export default function Home() {
	return (
		<div className="overflow-hidden">
			<Hero />
			<HowItWorksSection />
			<JoinTodaySection />
			<WhatWeOfferSection />
			<EasilyCompareSection />
			<StatsSection />
		</div>
	);
}
