import React, { useEffect, useState } from "react";
import ReviewsSearch from "./ReviewsSearch";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { getReviews } from "../../redux/user-profile/userProfileActions";

import ReviewFilterd from "./ReviewFilterd";
import ReviewSkeleton from "../professor/ReviewSkeleton";

const ReviewsTab = () => {
	const [reviewSearch, setReviewSearch] = useState("");
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);

	useEffect(() => {
		if (!userProfile.reviews) dispatch(getReviews());
	}, []);

	return (
		<div className="flex w-full max-w-md flex-col items-center justify-center gap-8 lg:max-w-2xl">
			<div className="w-full  rounded-2xl bg-classmate-tan-2 p-7 shadow-lg ">
				<div>
					<p className="font-classmate-bold mb-5 text-2xl capitalize leading-5 text-classmate-green-1">
						Reviews
					</p>
					<ReviewsSearch setReviewSearch={setReviewSearch} />
				</div>
			</div>
			{userProfile.reviewsLoading && (
				<ReviewSkeleton backgroundColor="bg-classmate-tan-2" />
			)}
			{!userProfile.reviewsLoading && userProfile.reviews && (
				<ReviewFilterd
					reviews={userProfile.reviews}
					reviewSearch={reviewSearch}
				/>
			)}
		</div>
	);
};

export default ReviewsTab;
