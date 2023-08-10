import React, { useRef } from "react";
import Image from "next/image";
import HomepageHeading from "./HomepageHeading";
import folder from "../public/folder.svg";
import pie from "../public/pie.svg";
import robot from "../public/robot.svg";
import handHeart from "../public/hand-heart.svg";
import ClassmateButton from "./ClassmateButton";
import useFadeIn from "../hooks/useFadeIn";

export default function WhatWeOffer() {
	const elementRef = useRef();
	useFadeIn(elementRef);

	return (
		<section className="section-padding flex justify-center bg-classmate-tan-2 py-20 sm:pb-10 xl:py-44 xl:pb-24">
			<div
				ref={elementRef}
				className="xl:gap-18 flex flex-col items-center opacity-0 lg:flex-row lg:gap-20 3xl:gap-40">
				<div className="">
					<HomepageHeading headingStyles={"lg:justify-start"}>
						What We Offer
					</HomepageHeading>
					<p className="font-classmate mx-auto max-w-[280px] py-12 text-center text-classmate-green-7 sm:max-w-xl  lg:mx-0 lg:max-w-[450px] lg:py-10 lg:text-left">
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
						Neque porro quisquam est, qui dolorem. Neque porro quisquam est, qui
						dolorem.
					</p>
					<ClassmateButton
						variant="filled"
						size="lg"
						styles="hidden bg-classmate-gold-1 text-classmate-tan-1 lg:block hover:!bg-classmate-hover-gold-1">
						Get Started
					</ClassmateButton>
				</div>
				<div className="grid grid-cols-1 grid-rows-4 gap-6 sm:grid-cols-2 sm:grid-rows-2 lg:max-w-[585px] 3xl:max-w-none 3xl:gap-10">
					<div className="max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8">
						<Image
							src={folder}
							width={0}
							height={0}
							className="w-10"
							alt="An icon of a folder with a bookmark, representing a bookmarked or saved collection of files or documents."
						/>
						<h6 className="font-classmate-bold py-3 text-xl text-classmate-green-1">
							Save Your Courses
						</h6>
						<p className="font-classmate text-sm text-classmate-green-7 2xl:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>

					<div className="max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8">
						<Image
							src={pie}
							width={0}
							height={0}
							className="w-10"
							alt="An icon of a pie chart, visualizing data distribution and proportions."
						/>
						<h6 className="font-classmate-bold py-3 text-xl text-classmate-green-1">
							Better Insights
						</h6>
						<p className="font-classmate text-sm text-classmate-green-7 2xl:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className="max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8">
						<Image
							src={robot}
							width={0}
							height={0}
							className="w-10"
							alt="An icon of a robot, depicting a mechanical or electronic humanoid figure."
						/>
						<h6 className="font-classmate-bold py-3 text-xl text-classmate-green-1">
							AI Powered
						</h6>
						<p className="font-classmate text-sm text-classmate-green-7 2xl:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className="max-w-[280px] rounded-xl border-[1px] border-classmate-green-4 p-8">
						<Image
							src={handHeart}
							width={0}
							height={0}
							className="w-10"
							alt="An icon of a hand holding a heart, symbolizing simplicity and ease of use."
						/>
						<h6 className="font-classmate-bold py-3 text-xl text-classmate-green-1">
							Easy To Use
						</h6>
						<p className="font-classmate text-sm text-classmate-green-7 2xl:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<ClassmateButton
					variant="filled"
					size="lg"
					styles="mt-10 bg-classmate-gold-1 text-classmate-tan-1 lg:hidden">
					Get Started
				</ClassmateButton>
			</div>
		</section>
	);
}
