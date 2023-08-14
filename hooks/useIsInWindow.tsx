import React, { useEffect, useState } from "react";

function useIsInWindow(ref) {
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
			}
		}, options);

		function addObserver(current) {
			observer.observe(current);
		}

		addObserver(ref.current);

		return () => {
			observer.disconnect(); // Clean up the observer when the component unmounts
		};
	}, [isInWindow, ref]); // Add isInWindow and ref to the dependency array

	return isInWindow;
}

export default useIsInWindow;
