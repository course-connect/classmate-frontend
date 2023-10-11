import React, { useEffect, useRef, useState } from "react";
import ResultQualityTag from "./ResultQualityTag";
import ResultScore from "./ResultScore";
import Tag from "./Tag";
import MatchText from "./MatchText";
import SchoolScoreDisplay from "./SchoolScoreDisplay";
import MainSearchResultBookmark from "./MainSearchResultBookmark";
import useWindowSize from "../hooks/useWindowSize";
import Image from "next/image";

const MainSearchResult = ({ result, filters, userInput, resultType }) => {
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

	let searchResult;

	switch (resultType) {
		case "school":
			const scores = Object.entries(result.data.score).filter(
				([key, value]) => key != "overall"
			);

			const leftScores = scores.slice(0, 5);
			const rightScores = scores.slice(5, 10);
			searchResult = (
				<div
					ref={resultRef}
					tabIndex={0}
					role="button"
					id="result"
					data-resulttype={resultType}
					data-resultid={result.firebaseID}
					className="font-classmate flex cursor-pointer flex-col gap-6 rounded-xl bg-classmate-tan-2 p-8 text-left text-classmate-green-6 shadow-xl ring-classmate-gold-1 focus:ring">
					<div className="flex justify-between gap-4">
						<div className="flex w-full flex-col gap-4">
							<div className="flex gap-6">
								<div>
									<p className="font-classmate-bold text-2xl capitalize text-classmate-green-1">
										{result.data.school_name}
									</p>

									<p className="flex flex-col text-sm">{result.data.zipcode}</p>
								</div>
								<ResultQualityTag score={result.data.score.overall} />
							</div>
							<div className="flex w-full flex-col gap-2 sm:flex-row">
								<div className="flex w-full flex-col gap-2">
									{leftScores.map(([key, value], index) => {
										return (
											key !== "overall" && (
												<SchoolScoreDisplay
													key={index}
													textWidth={"xs:min-w-[98px] sm:min-w-[76px]"}
													text={key}
													value={value}
												/>
											)
										);
									})}
								</div>
								<div className="flex w-full flex-col gap-2">
									{rightScores.map(([key, value], index) => {
										return (
											key !== "overall" && (
												<SchoolScoreDisplay
													key={index}
													textWidth={"xs:min-w-[98px]"}
													text={key}
													value={value}
												/>
											)
										);
									})}
								</div>
							</div>
						</div>
						<MainSearchResultBookmark
							bookmarkType="school"
							itemID={result.firebaseID}
						/>
					</div>
				</div>
			);
			break;
		case "professor":
			searchResult = (
				<div
					ref={resultRef}
					tabIndex={0}
					role="button"
					id="result"
					data-resulttype={resultType}
					data-resultid={result.firebaseID}
					className="font-classmate flex cursor-pointer flex-col gap-6 rounded-xl bg-classmate-tan-2 p-8 text-left text-classmate-green-6 shadow-xl ring-classmate-gold-1 focus:ring">
					<div className="flex w-full justify-between gap-6">
						<div
							className={`flex flex-col ${
								wideEnoughForProfessorTitle ? "!flex-row gap-4" : ""
							}`}>
							<div className="mb-2 flex aspect-square h-[112px] max-h-[112px] min-h-[112px] w-[112px] min-w-[112px] max-w-[112px] items-center justify-center rounded-xl bg-classmate-tan-1">
								<Image
									src="/male-avatar-1.svg"
									width={0}
									height={0}
									className="h-auto w-3/5"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<div>
									<p className="font-classmate-bold text-2xl capitalize text-classmate-green-1">{`${result.data.first_name} ${result.data.last_name}`}</p>

									{result.data.schools && (
										<p className="flex flex-col text-sm">
											<span>{result.data.schools[0]?.school_name}</span>
											{result.data.schools.length > 0 && (
												<span>and other schools</span>
											)}
										</p>
									)}
								</div>
								<ResultQualityTag score={result.data.score} />
							</div>
						</div>
						<MainSearchResultBookmark
							bookmarkType="professor"
							itemID={result.firebaseID}
						/>
					</div>
					<div className="flex gap-2">
						<p className="font-classmate-bold text-classmate-green-1">Match:</p>
						<MatchText
							resultType={resultType}
							result={result}
							userInput={userInput}
						/>
					</div>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						quasi molestiae quis aspernatur, libero id ad ea. Corporis adipisci
						tenetur inventore harum minima sit odio!
					</p>

					<div
						className={`flex flex-wrap gap-6 sm:flex-row sm:gap-6 ${
							resultWideEnough ? "flex-nowrap !gap-4" : ""
						}`}>
						<div
							className={`flex flex-wrap gap-2 ${
								resultWideEnough ? "flex-nowrap" : ""
							}`}>
							<ResultScore
								title="Score"
								score={result.data.score}
								height={wideEnoughForScores ? "h-[65px]" : "h-[50px] "}
								width={wideEnoughForScores ? "w-[85px]" : "w-[70px]"}
								fontSize={wideEnoughForScores ? "text-[28px]" : ""}
							/>
							<ResultScore
								title="Difficulty"
								score={result.data.difficulty}
								height={wideEnoughForScores ? "h-[65px]" : "h-[50px] "}
								width={wideEnoughForScores ? "w-[85px]" : "w-[70px]"}
								fontSize={wideEnoughForScores ? "text-[28px]" : ""}
							/>
							<ResultScore
								title="Reviews"
								score={result.data.num_of_reviews}
								height={wideEnoughForScores ? "h-[65px]" : "h-[50px] "}
								width={wideEnoughForScores ? "w-[85px]" : "w-[70px]"}
								fontSize={wideEnoughForScores ? "text-[28px]" : ""}
							/>
						</div>
						<div>
							<p className="font-classmate-italic text-classmate-green-1">
								Top Tags
							</p>
							<div className="flex flex-wrap gap-1">
								{result.data.tags.map(({ description }, index) => (
									<Tag
										key={index}
										text={description}
										score={result.data.score}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			);
			break;
		case "course":
			searchResult = (
				<div
					ref={resultRef}
					id="result"
					data-resulttype={resultType}
					data-resultid={result.firebaseID}
					className="font-classmate flex flex-col gap-6 rounded-xl bg-classmate-tan-2 p-8 text-left text-classmate-green-6 shadow-xl">
					<div className="flex justify-between gap-12">
						<div className="flex flex-col gap-1">
							<div className="font-classmate-bold  h-fit w-fit whitespace-nowrap rounded-md bg-classmate-gold-1 px-4 py-[6px] text-xs text-classmate-tan-2">
								{result.data.course_code}
							</div>
							<p className="font-classmate-bold mt-1 break-all text-2xl capitalize text-classmate-green-1 xs:break-normal">{`${result.data.course_name}`}</p>
							<p className="text-sm">{result.data.school_name}</p>
						</div>
						<MainSearchResultBookmark
							bookmarkType="course"
							itemID={result.firebaseID}
						/>
					</div>
				</div>
			);
			break;
	}

	return searchResult;
};

export default MainSearchResult;
