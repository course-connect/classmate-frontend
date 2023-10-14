import React, { useRef } from "react";
import Blog from "../Blog";

import Title from "../Title";
import Heading1 from "../Heading1";
import Heading2 from "../Heading2";
import Heading3 from "../Heading3";

import Date from "../Date";
import Paragraph from "../Paragraph";
import Bold from "../Bold";
import Italic from "../Italic";
import Block from "../Block";
import Underline from "../Underline";
import PageLink from "../PageLink";

import Divider from "../Divider";
import BlogImage from "../BlogImage";

import BulletList from "../BulletList";
import Bullet from "../Bullet";

const Vilabot = () => {
	const ref1 = useRef();
	const ref2 = useRef();
	const ref3 = useRef();

	return (
		<Blog>
			<Title>Validating structural data with Valibot</Title>
			<Date>October 11, 2023 7 min read</Date>

			<BlogImage src={"/blog.JPG"} />

			<Paragraph>
				Schema libraries have been a boon to validation in web development for
				some time, but since the widespread adoption of TypeScript, these
				libraries have evolved to handle more complex operations such as
				type-safety, data validation, and transformation. Schema libraries
				prevent developers from accidentally using the wrong type of data, which
				can lead to bugs and errors, help ensure that data is correct and meets
				the requirements of the application, and convert data from one format to
				another.
			</Paragraph>

			<Paragraph>
				In this article, we’ll introduce Valibot, one of the newest validation
				libraries on the block. We’ll also investigate how it works and we’ll
				see how it compares with existing validation libraries such as Zod and
				Yup.
			</Paragraph>

			<Paragraph>
				<Italic>Jump ahead:</Italic>
			</Paragraph>

			<BulletList>
				<Bullet level={1}>
					<PageLink linkRef={ref1}>Prerequisites</PageLink>
				</Bullet>
				<Bullet level={1}>
					<PageLink linkRef={ref2}>What is Valibot?</PageLink>
				</Bullet>
				<Bullet level={1}>
					<PageLink linkRef={ref3}>
						Comparing Valibot’s bundle size to Zod and Yup
					</PageLink>
				</Bullet>
				<Bullet level={1}>
					<PageLink>Use cases</PageLink>
				</Bullet>
				<Bullet level={2}>
					<PageLink>Form validation</PageLink>
				</Bullet>
				<Bullet level={2}>
					<PageLink>Server requests</PageLink>
				</Bullet>
			</BulletList>

			<div ref={ref1}>
				<Heading1>Prerequisites</Heading1>
			</div>
			<Paragraph>
				To follow this tutorial, you should have the following:
			</Paragraph>
			<BulletList>
				<Bullet level={1}>A working knowledge of TypeScript</Bullet>
				<Bullet level={1}>Node.js installed on your machine</Bullet>
				<Bullet level={1}>An IDE, preferably VS Code</Bullet>
			</BulletList>

			<div ref={ref2}>
				<Heading1>What is Valibot?</Heading1>
			</div>
			<Paragraph>
				Valibot is an open source, TypeScript-first schema library that
				validates unknown data. It is comparable to other schema validation
				libraries such as Zod and Yup, but is 98% smaller in size. Valibot is
				modular and type-safe and enables bundle size minimization through code
				splitting, tree shaking, and compression.
			</Paragraph>
			<Paragraph>
				Valibot has a minimal, readable, and well-designed API that is fully
				tested with 100 percent code coverage. Here’s a basic example of how to
				validate a string using Valibot:
			</Paragraph>
			<BlogImage src={"/blog1.JPG"} />
			<Paragraph>
				Valibot’s core function is to create and validate schemas. In this
				respect, it is the same as other schema validation libraries; it differs
				in terms of how it defines and executes schemas.
			</Paragraph>

			<Paragraph>
				Valibot’s schemas could be a string of any data type or a complex nested
				object. This is comparable to how types are defined in Typescript, but
				unlike Typescript, they are executed at runtime to ensure type safety
				for unknown data.
			</Paragraph>

			<Paragraph>
				Valibot also employs TypeScript inference to automatically generate
				TypeScript types that correspond to the defined schema. In other words,
				Valibot validates your schema at runtime and also provides TypeScript
				types that reflect the expected structure of the validated data.
			</Paragraph>
			<Paragraph>
				For example, we can define a Valibot schema for a <Block>user</Block>{" "}
				<Block>object</Block>, like so:
			</Paragraph>
			<BlogImage src={"/blog2.JPG"} />
			<Paragraph>
				In this case, the TypeScript type <Block>userData</Block> is
				automatically inferred from the defined Valibot schema using the Output{" "}
				<Block>{`Output<typeof user>`}</Block> type. This means that the{" "}
				<Block>userData</Block> type will have properties <Block>id</Block>,{" "}
				<Block>name</Block>, and
				<Block>email</Block>, with the correct type inferred from the schema.
				This feature helps maintain consistency between runtime data validation
				and type safety in your code.
			</Paragraph>

			<div ref={ref3}>
				<Heading1>Comparing Valibot’s bundle size to Zod and Yup</Heading1>
			</div>
			<Paragraph>
				Given Valibot’s design, it shouldn’t come as a surprise that its bundle
				size is significantly smaller than the competition. However, it is
				important to note that schema validation libraries are not always large
				in size.
			</Paragraph>
			<Paragraph>
				For example, Zod’s bundle size is just 57kB minified and 13.2kB when
				minified and compressed with gzip:
			</Paragraph>
			<BlogImage src={"/blog2.JPG"} />
			<Paragraph>
				While Yup’s bundle size is only 40kB minified and 12.2kB when minified
				and compressed with gzip:
			</Paragraph>
			<BlogImage src={"/blog1.JPG"} />
			<Paragraph>
				So it should go without saying that Zod and Yup are highly unlikely to
				cause overhead in your application. However, if you are a stickler for
				bundle sizes and would not mind a further reduction in size, Valibot is
				the better choice, as it is half the size of Zod and Yup:
			</Paragraph>
			<BlogImage src={"/blog1.JPG"} />
			<Paragraph>
				5.3kB is a very small bundle size, but it’s still larger than the 1kB
				size noted in several places throughout the Valibot docs:
			</Paragraph>
			<BlogImage src={"/blog2.JPG"} />
			<Paragraph>
				So where is this difference in bundle size coming from? Well, because
				Valibot is tree-shakable, only the code that is needed is included in
				the final bundle. This can result in a 98% reduction in bundle size
				compared to Zod and Yup.
			</Paragraph>
			<Paragraph>
				Going back to our earlier example, Valibot’s bundle size will be exactly
				513 bytes, as the <Block>string</Block> function will be the only
				Valibot code added to your codebase during the build step:
			</Paragraph>
		</Blog>
	);
};

export default Vilabot;
