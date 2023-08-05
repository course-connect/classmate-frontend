import React from "react";
import ResultQualityTag from "./ResultQualityTag";
import ResultScore from "./ResultScore";
import Image from "next/image";
import Tag from "./Tag";
import MatchText from "./MatchText";

const MainSearchResult = ({ result, userInput, resultType }) => {
	let searchResult;

	switch (resultType) {
		case "school":
			searchResult = <>school</>;
			break;
		case "professor":
			searchResult = (
				<div className="font-classmate flex flex-col gap-6 rounded-xl bg-classmate-tan-2 p-8 text-classmate-green-6 shadow-xl">
					<div className="flex justify-between">
						<div className="flex flex-wrap gap-4">
							<div>
								<p className="font-classmate-bold text-2xl capitalize text-classmate-green-1">{`${result.data.title}. ${result.data.first_name} ${result.data.last_name}`}</p>
								<p className="text-sm">{result.data.school_names?.[0]}</p>
							</div>
							<ResultQualityTag score={result.data.score} />
						</div>
						<Image
							src="./bookmark.svg"
							height={0}
							width={22}
							alt="bookmark"
							className="h-fit"
						/>
					</div>
					<div className="flex gap-2">
						<p className="font-classmate-bold text-classmate-green-1">
							Match:{" "}
						</p>
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

					<div className="flex gap-3">
						<ResultScore title="Score" score={result.data.score} />
						<ResultScore title="Difficulty" score={result.data.difficulty} />
						<ResultScore
							title="Reviews"
							score={Math.floor(Math.random() * 55)}
						/>
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
			);
			break;
		default:
			searchResult = <>course</>;
	}

	return searchResult;
};

export default MainSearchResult;
