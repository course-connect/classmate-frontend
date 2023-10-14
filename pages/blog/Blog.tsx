import React from "react";
import { useRouter } from "next/router";

const Blog = ({ children, type = "blog", link = null }) => {
	const router = useRouter();

	const handleBlogClick = () => {
		router.push(link);
	};

	return type === "blog" ? (
		<div
			className={`font-classmate inline-block max-w-4xl rounded-3xl bg-classmate-tan-2 p-8 shadow-xl xs:p-10 sm:p-14`}>
			{children}
		</div>
	) : (
		<button
			onClick={handleBlogClick}
			className="font-classmate inline-block max-w-2xl rounded-3xl bg-classmate-tan-2 p-8 text-left shadow-xl ring-classmate-gold-1 focus:ring xs:p-10 sm:p-14">
			{children}
		</button>
	);
};

export default Blog;
