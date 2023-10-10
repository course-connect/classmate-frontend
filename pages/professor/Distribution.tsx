import React from "react";
import DistributionRow from "./DistributionRow";

const Distribution = ({ professor }) => {
	const reviewDistribution = professor.data.review_distribution;
	const maxReviewCount = Math.max(...Object.values(reviewDistribution)) + 1;

	const fives = professor.data.review_distribution.five;
	const fours = professor.data.review_distribution.four;
	const threes = professor.data.review_distribution.three;
	const twos = professor.data.review_distribution.two;
	const ones = professor.data.review_distribution.one;

	const getReviewPercent = (nums) => {
		return `${(nums / maxReviewCount).toFixed(2) * 100}%`;
	};

	console.log(getReviewPercent(ones));

	return (
		<div className="font-classmate flex flex-col gap-2 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-xl focus:ring sm:gap-4">
			<p className="font-classmate-bold mb-2 text-[22px] capitalize !leading-7 text-classmate-green-1 sm:text-2xl">
				Review Distribution
			</p>
			<DistributionRow
				ratingText={"Very Good"}
				ratingNumber={5}
				percentage={getReviewPercent(fives)}
				count={fives}
				backgroundColor={"bg-classmate-green-2"}
			/>
			<DistributionRow
				ratingText={"Good"}
				ratingNumber={4}
				percentage={getReviewPercent(fours)}
				count={fours}
				backgroundColor={"bg-classmate-green-3"}
			/>
			<DistributionRow
				ratingText={"Average"}
				ratingNumber={3}
				percentage={getReviewPercent(threes)}
				count={6}
				backgroundColor={"bg-classmate-gray-2"}
			/>
			<DistributionRow
				ratingText={"Bad"}
				ratingNumber={2}
				percentage={getReviewPercent(twos)}
				count={twos}
				backgroundColor={"bg-classmate-pink-1"}
			/>
			<DistributionRow
				ratingText={"Very Bad"}
				ratingNumber={1}
				percentage={getReviewPercent(ones)}
				count={ones}
				backgroundColor={"bg-classmate-red-1"}
			/>
		</div>
	);
};

export default Distribution;
