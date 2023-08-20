import React, { useEffect, useState } from "react";

function useApplyClassWhenInView(
	elementToObserveRef,
	elementToApplyClassRef,
	classes
) {
	const [isInWindow, setIsInWindow] = useState(false);

	useEffect(() => {
		const options = {
			root: null,
			threshold: 0.5,
			rootMargin: "0px",
		};

		const observer = new IntersectionObserver((current) => {
			if (current[0].isIntersecting && !isInWindow) {
				setIsInWindow(true);
				elementToApplyClassRef.current.classList.add(classes);
			}
		}, options);

		function addObserver(current) {
			observer.observe(current);
		}
		addObserver(elementToObserveRef.current);

		return () => {
			observer.disconnect(); // Clean up the observer when the component unmounts
		};
	}, [isInWindow, elementToObserveRef]);

	return isInWindow;
}

export default useApplyClassWhenInView;
