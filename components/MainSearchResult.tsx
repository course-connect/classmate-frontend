import React from "react";
import ResultQualityTag from "./ResultQualityTag";
import ResultScore from "./ResultScore";
import Image from "next/image";
import Tag from "./Tag";
import MatchText from "./MatchText";
import ClassmateButton from "./ClassmateButton";

const MainSearchResult = ({ result, filters, userInput, resultType }) => {
	let searchResult;

	switch (resultType) {
		case "school":
			searchResult = <p>school</p>;
			break;
		case "professor":
			searchResult = (
				<div
					tabIndex={0}
					role="button"
					id="result"
					data-resulttype={resultType}
					data-resultid={result.firebaseID}
					className="font-classmate flex cursor-pointer flex-col gap-6 rounded-xl bg-classmate-tan-2 p-8 text-left text-classmate-green-6 shadow-xl ring-classmate-gold-1 focus:ring">
					<div className="flex w-full justify-between gap-6">
						<div className="flex flex-wrap gap-4">
							<div>
								<p className="font-classmate-bold text-2xl capitalize text-classmate-green-1">{`${result.data.first_name} ${result.data.last_name}`}</p>

								{typeof result.data.school_names !== "string" && (
									<p className="flex flex-col text-sm">
										{filters.school.filter_text
											? filters.school.filter_text
											: result.data.school_names?.map((school_name) => (
													<span>{school_name}</span>
											  ))}
									</p>
								)}
							</div>
							<ResultQualityTag score={result.data.score} />
						</div>
						<ClassmateButton
							callback={() => console.log("save")}
							variant="text"
							size="xs"
							styles="bg-red-500 !p-1 h-fit">
							<Image
								src="./bookmark.svg"
								height={0}
								width={22}
								alt="bookmark"
								className="pointer-events-none h-fit"
							/>
						</ClassmateButton>
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

					<div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
						<div className="flex flex-wrap gap-2">
							<ResultScore title="Score" score={result.data.score} />
							<ResultScore title="Difficulty" score={result.data.difficulty} />
							<ResultScore title="Reviews" score={result.data.num_of_reviews} />
						</div>
						<div>
							<p className="font-classmate-italic text-classmate-green-1">
								Top Tags
							</p>
							<div className="mt-1 flex flex-wrap gap-1">
								{result.data.tags.map(({ description }) => (
									<Tag text={description} score={result.data.score} />
								))}
							</div>
						</div>
					</div>
				</div>
			);
			break;
		default:
			searchResult = <p>course</p>;
	}

	return searchResult;
};

export default MainSearchResult;
