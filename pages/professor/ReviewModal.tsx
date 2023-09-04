import React from "react";
import Modal from "../../components/ui/Modal/Modal";
import ReviewSection from "./ReviewSection";
import FormSelect from "../../components/ui/FormSelect";
import FormSelectOptions from "../../components/ui/FormSelectOptions";
import { useForm, FormProvider } from "react-hook-form";
import Checkbox from "../../components/ui/Checkbox/Checkbox";

const ReviewModal = ({ professor, showModal, handleCloseModal }) => {
	console.log(professor);
	const methods = useForm({
		defaultValues: {
			school: "",
			newSchool: "false",
		},
		mode: "onChange",
	});
	const { handleSubmit, setError, setValue, getValues } = methods;

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
						<FormSelect
							name="school"
							size="sm"
							label="School"
							type="local-search"
							backgroundColor="bg-classmate-tan-2"
							setValue={setValue}
							getValues={getValues}
							rules={{
								required: true,
							}}>
							{professor.data.schools.map(({ school_name }) => (
								<FormSelectOptions text={school_name} />
							))}
						</FormSelect>
						<Checkbox name="newSchool" label="Add new school" />
					</ReviewSection>
				</FormProvider>
				<button type="submit">submit</button>
			</form>
		</Modal>
	);
};

export default ReviewModal;
