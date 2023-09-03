import React from "react";
import axios from "axios";

import ProfessorImage from "../ProfessorImage";
import ProfessorTags from "../ProfessorTags";
import ProfessorDescription from "../ProfessorDescription";
import ProfessorTabs from "../ProfessorTabs";

export default function Professor({ professor }) {
	console.log(professor);
	// <h1>{JSON.stringify(professor, null, 2)}</h1>
	return (
		<div className="section-padding grid-cols-8 bg-classmate-tan-2 py-6 xs:py-8 md:grid md:gap-10">
			<div className="col-start-1 col-end-4">
				<ProfessorImage professor={professor} />
				<ProfessorTags professor={professor} />
			</div>

			<div className="col-start-4 col-end-9 flex flex-col gap-8">
				<ProfessorDescription professor={professor} />
				<ProfessorTabs professor={professor} />
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
