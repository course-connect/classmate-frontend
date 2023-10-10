import React, { useState } from "react";
import axios from "axios";

import ProfessorImage from "../ProfessorImage";
import ProfessorTags from "../ProfessorTags";
import ProfessorDescription from "../ProfessorDescription";
import ProfessorTabs from "../ProfessorTabs";
import SnackBar from "../../../components/ui/SnackBar/SnackBar";

import ReviewModal from "../ReviewModal";

import useLockScroll from "../../../hooks/useLockScroll";

import { useSelector } from "react-redux";

export default function Professor({ professor }) {
	const account = useSelector((state) => state.account);
	const [blockScroll, allowScroll] = useLockScroll();
	const [showModal, setShowModal] = useState(false);

	const handleCloseModal = () => {
		setShowModal(false);
		setTimeout(() => allowScroll(), 75);
	};

	const handleOpenModal = () => {
		setShowModal(true);
		blockScroll();
	};

	return (
		<>
			<ReviewModal
				professor={professor}
				showModal={showModal}
				handleCloseModal={handleCloseModal}
			/>
			<div className="section-padding flex justify-center bg-classmate-tan-2 pb-16 pt-8 xs:py-8 md:pb-20 lg:pt-12">
				<div className="max-w max-w-4xl grid-cols-12 md:grid md:gap-10 lg:gap-16 xl:max-w-5xl 2xl:max-w-6xl">
					<div className="col-start-1 col-end-5">
						<ProfessorImage professor={professor} />
						<ProfessorTags professor={professor} />
					</div>

					<div className="col-start-5 col-end-13 flex flex-col gap-8 md:gap-10">
						<ProfessorDescription
							professor={professor}
							handleOpenModal={handleOpenModal}
						/>
						<ProfessorTabs professor={professor} />
					</div>
				</div>
			</div>
			{account.snackBar.text && <SnackBar />}
		</>
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
