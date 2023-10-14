import React from "react";
import Blog from "../Blog";

import Title from "../Title";
import Date from "../Date";
import Paragraph from "../Paragraph";
import BlogImage from "../BlogImage";
import SnippetButton from "../SnippetButton";

const Vilabot = () => {
	return (
		<Blog type="snippet" link={"/blog/vilabot"}>
			<Title>Validating structural data with Valibot</Title>
			<Date>October 11, 2023 7 min read</Date>

			<BlogImage src={"/blog.JPG"} />

			<Paragraph>
				Schema libraries have been a boon to validation in web development for
				some time, but since the widespread adoption of TypeScript, these
				libraries have evolved to handle more complex operations such as
				type-safety, data validation, and transformation. Schema libraries
				prevent developers from accidentally using the wrong type of data, which
				can lead...
			</Paragraph>
			<SnippetButton>Continue Reading...</SnippetButton>
		</Blog>
	);
};

export default Vilabot;
