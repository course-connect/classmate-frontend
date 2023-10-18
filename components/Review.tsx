import React, { useState, useRef, useEffect } from "react";
import ResultQualityTag from "./ResultQualityTag";
import ResultScore from "./ResultScore";
import Tag from "./Tag";
import ClassmateDate from "./ui/Date/ClassmateDate";
import useWindowSize from "../hooks/useWindowSize";

const Review = ({ review, backgroundColor = "bg-classmate-tan-1" }) => {
	const [resultWideEnough, setResultWideEnough] = useState(false);
	const [wideEnoughForScores, setWideEnoughForScores] = useState(false);
	const [wideEnoughForProfessorTitle, setWideEnoughForProfessorTitle] =
		useState(false);
	const resultRef = useRef();
	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		const resultWidth = resultRef.current.offsetWidth;
		if (resultWidth >= 650 && !resultWideEnough) {
			setResultWideEnough(true);
		} else if (resultWidth < 650 && resultWideEnough) {
			setResultWideEnough(false);
		}

		if (resultWidth >= 450 && !wideEnoughForProfessorTitle) {
			setWideEnoughForProfessorTitle(true);
		} else if (resultWidth < 450 && wideEnoughForProfessorTitle) {
			setWideEnoughForProfessorTitle(false);
		}

		if (resultWidth >= 350 && !wideEnoughForScores) {
			setWideEnoughForScores(true);
		} else if (resultWidth < 350 && wideEnoughForScores) {
			setWideEnoughForScores(false);
		}
	}, [windowWidth]);

	return (
		<div
			ref={resultRef}
			className={`font-classmate flex flex-col gap-6 rounded-xl p-8 text-left text-classmate-green-6 shadow-xl ring-classmate-gold-1 focus:ring ${backgroundColor}`}>
			<div className="flex w-full flex-col justify-between gap-4 sm:flex-row-reverse">
				<div className="pt-1">
					<ClassmateDate seconds={review.date._seconds} />
				</div>
				<div className="flex flex-wrap gap-2">
					<div className="flex flex-col gap-1">
						<p className="font-classmate-bold text-[22px] capitalize !leading-7 text-classmate-green-1 sm:text-2xl">{`${review.course.course_code} - ${review.course.course_name}`}</p>
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
					<ResultScore
						title="Score"
						score={review.score}
						height={wideEnoughForScores ? "h-[65px]" : "h-[50px] "}
						width={wideEnoughForScores ? "w-[85px]" : "w-[70px]"}
						fontSize={wideEnoughForScores ? "text-[28px]" : ""}
					/>
					<ResultScore
						title="Difficulty"
						score={review.difficulty}
						height={wideEnoughForScores ? "h-[65px]" : "h-[50px] "}
						width={wideEnoughForScores ? "w-[85px]" : "w-[70px]"}
						fontSize={wideEnoughForScores ? "text-[28px]" : ""}
					/>
					<ResultScore
						title="Take Again"
						review={true}
						score={review.would_recommend}
						height={wideEnoughForScores ? "h-[65px]" : "h-[50px] "}
						width={wideEnoughForScores ? "w-[85px]" : "w-[70px]"}
						fontSize={wideEnoughForScores ? "text-[28px]" : ""}
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
