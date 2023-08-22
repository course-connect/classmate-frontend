import React from "react";
import axios from "axios";

export default function Professor({ professor }) {
	return <h1>{JSON.stringify(professor, null, 2)}</h1>;
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
				...res.data,
			},
		},
	};
}
