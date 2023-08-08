import React from "react";
import axios from "axios";

export default function Professor({ professor }) {
	return <h1>{JSON.stringify(professor, null, 2)}</h1>;
}

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					professorID: "KekqveeJ9PhwOBzhDx31",
				},
			},
		],
		fallback: true,
	};
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
		console.log(err);
	}

	return {
		props: {
			professor: {
				...res.data,
			},
		},
	};
}
