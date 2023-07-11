import React from "react";

export default function HomepageHeading({
	children,
	headingStyles,
	lineStyles,
}) {
	return (
		<h1
			className={`font-classmate-bold relative flex justify-center text-center text-3xl text-classmate-green-1 sm:text-4xl xl:text-5xl ${headingStyles}`}>
			{children}
			<span
				className={`absolute top-12 h-[3px] w-10 rounded-sm bg-classmate-green-7 sm:top-14 xl:top-16 ${lineStyles}`}
			/>
		</h1>
	);
}
