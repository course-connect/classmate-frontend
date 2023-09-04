import React from "react";

import ResultQualityTag from "../../components/ResultQualityTag";
import MainSearchResultBookmark from "../../components/MainSearchResultBookmark";
import ResultScore from "../../components/ResultScore";
import ClassmateButton from "../../components/ClassmateButton";

const ProfessorDescription = ({ professor, handleOpenModal }) => {
	return (
		<div className="flex flex-col gap-6 xs:gap-8 md:gap-4">
			<div className="flex justify-between">
				<div className="flex flex-wrap items-center">
					<div className="font-classmate-bold mr-4 text-3xl capitalize xs:text-4xl">{`${professor.data.first_name} ${professor.data.last_name}`}</div>
					<ResultQualityTag score={professor.data.score} />
				</div>
				<MainSearchResultBookmark
					bookmarkType="professor"
					itemID={professor.firestoreID}
				/>
			</div>
			<p className="font-classmate mr-14 text-classmate-green-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut
				sapiente sunt adipisci architecto beatae sit consequatur labore
				possimus, atque mollitia numquam. Voluptates omnis debitis quos ipsa
				mollitia quia eaque!
			</p>
			<div className="flex flex-wrap gap-2">
				<ResultScore
					title="Score"
					variant="professor"
					score={professor.data.score}
				/>
				<ResultScore
					title="Difficulty"
					variant="professor"
					score={professor.data.difficulty}
				/>
				<ResultScore
					title="Reviews"
					variant="professor"
					score={professor.data.num_of_reviews}
				/>
				<ResultScore
					title="Take Again"
					variant="professor"
					score={professor.data.take_again * 100}
				/>
			</div>
			<div className="mt-2 flex flex-wrap gap-3">
				<ClassmateButton
					size="md"
					variant="outlined"
					styles="text-classmate-green-7 border-classmate-green-7"
					callback={handleOpenModal}>
					Submit Review
				</ClassmateButton>
				<ClassmateButton
					size="md"
					variant="outlined"
					styles="text-classmate-green-7 border-classmate-green-7"
					callback={() => console.log("hello")}>
					Claim Account
				</ClassmateButton>
			</div>
		</div>
	);
};

export default ProfessorDescription;
