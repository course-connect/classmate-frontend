import React, { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal/Modal";
import ReviewSection from "./ReviewSection";

import ReviewSchoolSection from "./ReviewSchoolSection";
import ReviewCourseSection from "./ReviewCourseSection";
import ReviewGradeSection from "./ReviewGradeSection";
import ReviewTextBookSection from "./ReviewTextbookSection";

import ClassmateButton from "../../components/ClassmateButton";

import { useForm, FormProvider } from "react-hook-form";

const ReviewModal = ({ professor, showModal, handleCloseModal }) => {
	// console.log(professor);
	const [newSchoolSelected, setNewSchoolSelected] = useState(false);
	const [newCourseSelected, setNewCourseSelected] = useState(false);

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
						iconAlt={"book"}>
						<ReviewTextBookSection professor={professor} methods={methods} />
					</ReviewSection>
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
