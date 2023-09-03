import React, { useEffect } from "react";
import ReviewsSearch from "./ReviewsSearch";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { getReviews } from "../../redux/user-profile/userProfileActions";
import Review from "../professor/Review";

const ReviewsTab = () => {
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
					<ReviewsSearch />
				</div>
			</div>
			<div className="w-full  rounded-2xl bg-classmate-tan-2 p-7 shadow-lg ">
				Reviews
			</div>
		</div>
	);
};

export default ReviewsTab;
