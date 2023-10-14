import React from "react";
import Image from "next/image";

const BlogImage = ({ src }) => {
	return (
		<div className="py-3">
			<Image
				src={src}
				width={1000}
				height={1000}
				alt="blog image"
				className="w-full"
			/>
		</div>
	);
};

export default BlogImage;
