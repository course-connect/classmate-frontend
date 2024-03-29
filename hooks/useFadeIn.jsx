import React, { useEffect, useState } from "react";

function useFadeIn(ref) {
	const [hasFadedIn, setHasFaddedIn] = useState(false);

	useEffect(() => {
		const fadeInOptions = {
			root: null,
			threshold: 0.3,
			rootMargin: "0px",
		};
		const fadeInObserver = new IntersectionObserver((current) => {
			const alreadyFadedIn =
				current[0].target.classList.contains("section-fade-in");
			if (current[0].isIntersecting && !alreadyFadedIn) {
				current[0].target.classList.add("section-fade-in");
			}
		}, fadeInOptions);

		function addObserver(current) {
			fadeInObserver.observe(current);
		}
		addObserver(ref.current);

		return () => {
			fadeInObserver.disconnect(); // Clean up the observer when the component unmounts
		};
	}, [hasFadedIn, ref]);

	return hasFadedIn;
}

export default useFadeIn;
