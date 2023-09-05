import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Image from "next/image";

const YesNoRadio = ({ name, methods }) => {
	const { control } = useFormContext();
	const { getValues, setValue } = methods;

	const handleYesClick = () => {
		const isNull = getValues(name) === null;
		const noSelected = !getValues(name);
		if (noSelected || isNull) {
			setValue(name, true);
		}
	};

	const handleNoClick = () => {
		const isNull = getValues(name) === null;
		const yesSelected = getValues(name);
		if (yesSelected || isNull) {
			setValue(name, false);
		}
	};

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				return (
					<div className="flex justify-center gap-8">
						<div className="flex flex-col items-center gap-1">
							<button
								type="button"
								onClick={handleYesClick}
								className={`flex h-10 w-10 items-center justify-center rounded-full bg-classmate-gray-4 outline-none ring-classmate-gold-1 focus:ring ${
									value && value !== null ? "bg-classmate-green-3" : ""
								}`}>
								{value && value !== null && (
									<Image
										src="/check-solid.svg"
										alt="check mark"
										width={0}
										height={0}
										className="filter-classmate-tan-2 h-5 w-5"
									/>
								)}
							</button>
							<span className="text-classmate-green-6">Yes</span>
						</div>
						<div className="flex flex-col items-center gap-1">
							<button
								type="button"
								onClick={handleNoClick}
								className={`flex h-10 w-10 items-center justify-center rounded-full bg-classmate-gray-4 outline-none ring-classmate-gold-1 focus:ring ${
									!value && value !== null ? "bg-classmate-red-1" : ""
								}`}>
								{!value && value !== null && (
									<Image
										src="/xmark-solid.svg"
										alt="check mark"
										width={0}
										height={0}
										className="filter-classmate-tan-2 h-4 w-4"
									/>
								)}
							</button>
							<span className="text-classmate-green-6">No</span>
						</div>
					</div>
				);
			}}
		/>
	);
};

export default YesNoRadio;
