import React from "react";
import RankGraph from "../components/RankGraph";
import HomepageHeading from "./HomepageHeading";
import ClassmateButton from "../components/ClassmateButton";
import useWindowSize from "../hooks/useWindowSize";

const EasilyCompareSection = () => {
	const { width } = useWindowSize();

	return (
		<div className="section-padding flex flex-col items-center justify-center  bg-classmate-tan-2 bg-red-500 py-20  sm:bg-blue-500 xl:py-44">
			{/* sm:max-w-xl lg:max-w-none */}
			<div className=" flex w-full flex-col  gap-10 lg:flex-row">
				{width <= 1024 && (
					<HomepageHeading headingStyles={"lg:justify-start"}>
						Easily Compare
					</HomepageHeading>
				)}
				<div className="h-fit bg-orange-500 lg:w-[500px]">
					<RankGraph styles="p-0" />
				</div>
				<div className="flex w-full flex-col items-center  justify-center gap-10 bg-slate-300 lg:items-start">
					{width > 1024 && (
						<HomepageHeading headingStyles={"lg:justify-start"}>
							Easily Compare
						</HomepageHeading>
					)}
					<p className="font-classmate  text-center text-classmate-green-7   lg:text-left">
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						Neque porro quisquam est, qui dolorem. Neque porro quisquam est, qui
						dolorem.
					</p>
					<ClassmateButton
						callback={() => null}
						variant="filled"
						size="lg"
						styles="bg-classmate-gold-1 text-classmate-tan-1 lg:block hover:!bg-classmate-hover-gold-1">
						Get Started
					</ClassmateButton>
				</div>
			</div>
		</div>
	);
};

export default EasilyCompareSection;
