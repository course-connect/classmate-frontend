import React, { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal/Modal";
import ReviewSection from "./ReviewSection";

import ReviewSchoolSection from "./ReviewSchoolSection";
import ReviewCourseSection from "./ReviewCourseSection";
import ReviewGradeSection from "./ReviewGradeSection";
import ReviewTextBookSection from "./ReviewTextbookSection";
import ReviewTextBookPriceSection from "./ReviewTextBookPriceSection";

import ClassmateButton from "../../components/ClassmateButton";

import { useForm, FormProvider } from "react-hook-form";

const ReviewModal = ({ professor, showModal, handleCloseModal }) => {
	// console.log(professor);
	const [newSchoolSelected, setNewSchoolSelected] = useState(false);
	const [newCourseSelected, setNewCourseSelected] = useState(false);
	const [textbookRequired, setTextbookRequired] = useState(false);
	const [paidForTextbookSelected, setPaidForTextbookSelected] = useState(false);

	const methods = useForm({
		defaultValues: {
			school: "",
			newSchoolSelected: false,
			newSchoolName: "",
			course: "",
			newCourseSelected: false,
			newCourseCode: "",
			newCourseName: "",
			textbookRequired: null,
			textbookTitle: "",
			textbookAuthor: "",
			paidForTextbook: null,
			textbookPrice: "",
		},
	});
	const { handleSubmit, setError, setValue, getValues, watch } = methods;

	// Update values when new school check box is selected
	useEffect(() => {
		const schoolAlreadySelected = getValues("school");
		const newSchoolSelected = getValues("newSchoolSelected");
		const newSchoolNameEntered = getValues("newSchoolName");

		setNewSchoolSelected(newSchoolSelected);
		if (schoolAlreadySelected && newSchoolSelected) {
			setValue("school", "");
		}
		if (newSchoolNameEntered && !newSchoolSelected) {
			setValue("newSchoolName", "");
		}
	}, [watch("newSchoolSelected")]);

	// Update values when new course check box is selected
	useEffect(() => {
		const courseAlreadySelected = getValues("course");
		const newCourseSelected = getValues("newCourseSelected");
		const newCourseCodeEntered = getValues("newCourseCode");
		const newCourseNameEntered = getValues("newCourseName");
		setNewCourseSelected(newCourseSelected);
		if (courseAlreadySelected && newCourseSelected) {
			setValue("course", "");
		}
		if (newCourseCodeEntered && !newCourseSelected) {
			setValue("newCourseCode", "");
		}
		if (newCourseNameEntered && !newCourseSelected) {
			setValue("newCourseName", "");
		}
	}, [watch("newCourseSelected")]);

	useEffect(() => {
		const textbookRequiredSelected = getValues("textbookRequired");
		const textbookTitleEntered = getValues("textbookTitle");
		const textbookAuthorEntered = getValues("textbookAuthor");

		setTextbookRequired(getValues("textbookRequired"));
		if (!textbookRequiredSelected && textbookTitleEntered) {
			setValue("textbookTitle", "");
		}
		if (!textbookRequiredSelected && textbookAuthorEntered) {
			setValue("textbookAuthor", "");
		}

		const paidForTextbookSelected = getValues("paidForTextbook");
		const textbookPriceEntered = getValues("textbookPrice");
		if (
			paidForTextbookSelected ||
			(!paidForTextbookSelected && paidForTextbookSelected !== null)
		) {
			setValue("paidForTextbook", null);
		}
		if (!paidForTextbookSelected && textbookPriceEntered) {
			setValue("textbookPrice", "");
		}
	}, [watch("textbookRequired")]);

	useEffect(() => {
		const paidForTextbookSelected = getValues("paidForTextbook");
		const textbookPriceEntered = getValues("textbookPrice");

		setPaidForTextbookSelected(getValues("paidForTextbook"));
		if (!paidForTextbookSelected && textbookPriceEntered) {
			setValue("textbookPrice", "");
		}
	}, [watch("paidForTextbook")]);

	function onSubmit(values) {
		console.log(values);
	}

	return (
		<Modal showModal={showModal} handleCloseModal={handleCloseModal}>
			<h4 className="font-classmate-bold border-b-2 border-classmate-gray-4 pb-4 text-classmate-green-1 ">
				Review for:{" "}
				<span className="font-classmate whitespace-nowrap capitalize text-classmate-green-6">{`${professor.data.first_name} ${professor.data.last_name}`}</span>
			</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<ReviewSection
						title={"School"}
						icon={"/school-solid.svg"}
						iconAlt={"school"}
						required={true}>
						<ReviewSchoolSection
							professor={professor}
							methods={methods}
							newSchoolSelected={newSchoolSelected}
						/>
					</ReviewSection>
					<ReviewSection
						title={"Course"}
						icon={"/open-book-solid.svg"}
						iconAlt={"open book"}
						required={true}>
						<ReviewCourseSection
							professor={professor}
							methods={methods}
							newCourseSelected={newCourseSelected}
						/>
					</ReviewSection>
					<ReviewSection
						title={"What grade did you earn?"}
						icon={"/graduation-cap-solid.svg"}
						iconAlt={"garduation cap"}
						required={true}>
						<ReviewGradeSection professor={professor} methods={methods} />
					</ReviewSection>
					<ReviewSection
						title={"Was a textbook required?"}
						icon={"/book-solid.svg"}
						iconAlt={"book"}
						required={false}>
						<ReviewTextBookSection
							professor={professor}
							methods={methods}
							textbookRequired={textbookRequired}
						/>
					</ReviewSection>
					{textbookRequired && (
						<ReviewSection
							title={"Was the texbook free?"}
							icon={"/book-solid.svg"}
							iconAlt={"book"}
							required={false}>
							<ReviewTextBookPriceSection
								professor={professor}
								methods={methods}
								paidForTextbookSelected={paidForTextbookSelected}
							/>
						</ReviewSection>
					)}
				</FormProvider>
				<div className="mt-4 flex w-full justify-end">
					<ClassmateButton
						type="submit"
						variant="filled"
						size="md"
						styles="bg-classmate-green-2 text-classmate-tan-2">
						Submit
					</ClassmateButton>
				</div>
			</form>
		</Modal>
	);
};

export default ReviewModal;
