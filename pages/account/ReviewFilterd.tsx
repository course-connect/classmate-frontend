import React, { useEffect } from "react";
import Review from "../../components/Review";

// Fuzzy search
import Fuse from "fuse.js";

const ReviewFilterd = ({ reviews, reviewSearch }) => {
	const getLocalSearchResults = () => {
		const options = {
			includeScore: true,
			keys: ["course.course_code", "course.course_name", "review"],
		};

		const fuse = new Fuse(reviews, options);

		if (reviewSearch) {
			return fuse.search(reviewSearch);
		}
		return reviews.map((review) => ({
			item: review,
		}));
	};

	useEffect(() => {
		console.log(getLocalSearchResults());
	}, [reviewSearch]);

	return getLocalSearchResults().map((review) => (
		<Review review={review.item} backgroundColor="bg-classmate-tan-2" />
	));
};

export default ReviewFilterd;
