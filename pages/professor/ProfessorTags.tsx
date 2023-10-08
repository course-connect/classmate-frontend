import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Tag from "../../components/Tag";

const ProfessorTags = ({ professor }) => {
	const { width: windowWidth } = useWindowSize();
	const sortedTags = professor.data.tags
		.sort((a, b) => b.count - a.count)
		.slice(0, 5);

	return (
		windowWidth >= 768 && (
			<div className="col-start-1 col-end-4 flex flex-col gap-12">
				<div className="font-classmate flex flex-col gap-5 text-left">
					<h3 className="font-classmate-bold flex items-center gap-4 whitespace-nowrap text-2xl leading-6 text-classmate-green-1">
						Top Tags
						<div className="h-[2px] w-full rounded-full bg-classmate-gray-4" />
					</h3>
					<div className="flex flex-wrap gap-2">
						{sortedTags.map((tag, index) => (
							<Tag
								key={index}
								text={tag.description}
								score={professor.data.score}
							/>
						))}
					</div>
				</div>
				<div className="font-classmate flex flex-col gap-5 text-left">
					<h3 className="font-classmate-bold flex items-center gap-4 whitespace-nowrap text-2xl leading-6 text-classmate-green-1">
						Courses Taught
						<div className="h-[2px] w-full rounded-full bg-classmate-gray-4" />
					</h3>
					<div className="flex flex-wrap gap-2">
						{professor.data.courses.map((course, index) => (
							<Tag
								key={index}
								text={course.course_code}
								score={professor.data.score}
							/>
						))}
					</div>
				</div>
				<div className="font-classmate flex flex-col gap-5 text-left">
					<h3 className="font-classmate-bold flex items-center gap-4 whitespace-nowrap text-2xl leading-6 text-classmate-green-1">
						Departments
						<div className="h-[2px] w-full rounded-full bg-classmate-gray-4" />
					</h3>
					<div className="flex flex-wrap gap-2">
						{professor.data.department_names.map((department, index) => (
							<Tag key={index} text={department} score={professor.data.score} />
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default ProfessorTags;
