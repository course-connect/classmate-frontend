import React, { useEffect } from "react";
import ReviewsSearch from "./ReviewsSearch";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { getReviews } from "../../redux/user-profile/userProfileActions";

const ReviewsTab = () => {
	const dispatch = useAppDispatch();
	const userProfile = useSelector((state) => state.userProfile);

	useEffect(() => {
		if (!userProfile.reviews) dispatch(getReviews());
	}, []);

	return (
		<div className="w-full max-w-md rounded-2xl bg-classmate-tan-2 p-7 shadow-lg lg:max-w-2xl">
			<div>
				<p className="font-classmate-bold mb-5 text-2xl capitalize leading-5 text-classmate-green-1">
					Reviews
				</p>
				<ReviewsSearch />
			</div>
		</div>
	);
};

export default ReviewsTab;
