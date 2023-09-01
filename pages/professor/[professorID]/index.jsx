import React from "react";
import axios from "axios";
import Image from "next/image";
import ResultQualityTag from "../../../components/ResultQualityTag";
import MainSearchResultBookmark from "../../../components/MainSearchResultBookmark";
import ResultScore from "../../../components/ResultScore";
import ClassmateButton from "../../../components/ClassmateButton";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Professor({ professor }) {
	const { width: windowWidth } = useWindowSize();
	// <h1>{JSON.stringify(professor, null, 2)}</h1>
	return (
		<div className="section-padding grid-cols-8 gap-10 bg-classmate-tan-2 py-6 xs:py-8 md:grid">
			<div className="col-start-1 col-end-4 mb-6 flex aspect-square w-full items-center justify-center rounded-3xl bg-classmate-tan-1 xs:mb-8">
				<Image
					src="/male-avatar-1.svg"
					width={0}
					height={0}
					className="h-auto w-3/5"
				/>
			</div>

			<div className="col-start-4 col-end-9 flex flex-col gap-6 xs:gap-8">
				<div className="flex justify-between">
					<div className="flex flex-col gap-1">
						<div className="font-classmate-bold text-3xl capitalize xs:text-4xl">{`${professor.data.first_name} ${professor.data.last_name}`}</div>
						<ResultQualityTag score={professor.data.score} />
					</div>
					<MainSearchResultBookmark
						bookmarkType="professor"
						itemID={professor.firebaseID}
					/>
				</div>
				<p className="font-classmate text-classmate-green-7">
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
				<div className="flex flex-wrap gap-3">
					<ClassmateButton
						size="md"
						variant="outlined"
						styles="text-classmate-green-7 border-classmate-green-7"
						callback={() => console.log("hello")}>
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
		</div>
	);
}

export async function getStaticPaths() {
	let staticPaths = { paths: [], fallback: true };

	try {
		const res = await axios.get("/professor/");
		res.data.professors.forEach((professorID) =>
			staticPaths.paths.push({ params: { professorID } })
		);
	} catch (err) {
		throw new Error(err);
	}

	return staticPaths;
}

export async function getStaticProps(context) {
	const profesorID = context.params.professorID;
	const headers = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	let res;
	try {
		res = await axios.get(`/professor/${profesorID}`, headers);
	} catch (err) {
		throw new Error(err);
	}

	return {
		props: {
			professor: {
				firestoreID: context.params.professorID,
				data: res.data,
			},
		},
	};
}
