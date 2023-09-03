import React from "react";
import ResultQualityTag from "../../components/ResultQualityTag";
import ResultScore from "../../components/ResultScore";
import Tag from "../../components/Tag";
import ClassmateDate from "../../components/ui/Date/ClassmateDate";

const Review = ({ review }) => {
	const date = new Date(review.date._seconds * 1000);

	return (
		<div className="font-classmate flex cursor-pointer flex-col gap-6 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-xl ring-classmate-gold-1 focus:ring">
			<div className="flex w-full justify-between gap-6">
				<div className="flex flex-wrap gap-4">
					<div>
						<p className="font-classmate-bold text-2xl capitalize text-classmate-green-1">{`${review.course.course_code} - ${review.course.course_name}`}</p>
						<p className="text-sm">{review.school.school_name}</p>
					</div>
					<ResultQualityTag score={review.score} />
				</div>
				<ClassmateDate seconds={review.date._seconds} />
			</div>
			<div className="flex gap-2">
				<p>
					Attendance:{" "}
					<span className="font-classmate-bold text-classmate-green-1">
						{review.attendance_mandatory ? "Mandatory" : "Not Mandatory"}
					</span>
				</p>
				<p>
					Textbook:{" "}
					<span className="font-classmate-bold text-classmate-green-1">
						{review.textbook.textbook_title}
					</span>
				</p>
			</div>
			<p>{review.review}</p>

			<div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
				<div className="flex flex-wrap gap-2">
					<ResultScore title="Score" score={review.score} />
					<ResultScore title="Difficulty" score={review.difficulty} />
					<ResultScore
						title="Take Again"
						review={true}
						score={review.would_recommend}
					/>
				</div>
				<div>
					<p className="font-classmate-italic text-classmate-green-1">
						Top Tags
					</p>
					<div className="mt-1 flex flex-wrap gap-1">
						{review.tags.map(({ description }, index) => (
							<Tag key={index} text={description} score={review.score} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
