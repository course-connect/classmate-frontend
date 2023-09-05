import React from "react";
import ResultQualityTag from "../../components/ResultQualityTag";
import ResultScore from "../../components/ResultScore";
import Tag from "../../components/Tag";
import ClassmateDate from "../../components/ui/Date/ClassmateDate";

const Review = ({ review }) => {
	const date = new Date(review.date._seconds * 1000);

	return (
		<div className="font-classmate flex flex-col gap-6 rounded-xl bg-classmate-tan-1 p-8 text-left text-classmate-green-6 shadow-xl ring-classmate-gold-1 focus:ring">
			<div className="flex w-full flex-col justify-between gap-4 sm:flex-row-reverse">
				<div
					className="pt-1
				">
					<ClassmateDate seconds={review.date._seconds} />
				</div>
				<div className="flex flex-wrap gap-2">
					<div className="flex flex-col gap-1">
						<p className="font-classmate-bold text-[22px] capitalize leading-6 text-classmate-green-1 sm:text-2xl">{`${review.course.course_code} - ${review.course.course_name}`}</p>
						<p className="text-sm">{review.school.school_name}</p>
					</div>
					<ResultQualityTag score={review.score} />
				</div>
			</div>
			<div className="flex flex-wrap">
				<p className="mr-6">
					Attendance:{" "}
					<span className="font-classmate-bold text-classmate-green-1">
						{review.attendance_mandatory ? "Mandatory" : "Not Mandatory"}
					</span>
				</p>
				<p className="mr-6">
					Textbook:{" "}
					<span className="font-classmate-bold text-classmate-green-1">
						{review.textbook.textbook_title}
					</span>
				</p>
			</div>
			<p>{review.review}</p>

			<div className="flex flex-wrap gap-6 sm:gap-6">
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
