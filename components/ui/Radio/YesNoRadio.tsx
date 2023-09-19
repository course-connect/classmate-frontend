import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Image from "next/image";

const YesNoRadio = ({ name, methods, rules }) => {
	const { control } = useFormContext();
	const { getValues, setValue, watch, clearErrors } = methods;

	const handleYesClick = () => {
		const isNull = getValues(name) === null;
		const noSelected = getValues(name) === "no";
		const yesSelected = !noSelected;
		if (noSelected || isNull) {
			setValue(name, "yes");
		} else if (yesSelected) {
			setValue(name, null);
		}
	};

	const handleNoClick = () => {
		const isNull = getValues(name) === null;
		const yesSelected = getValues(name) === "yes";
		const noSelected = !yesSelected;
		if (yesSelected || isNull) {
			setValue(name, "no");
		} else if (noSelected) {
			setValue(name, null);
		}
	};

	useEffect(() => {
		clearErrors(name);
	}, [watch(name)]);

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				const yesSelected = value === "yes" && value !== null;
				const noSelected = value === "no" && value !== null;
				return (
					<div className="flex justify-center gap-8">
						<div className="flex flex-col items-center gap-1">
							<button
								type="button"
								onClick={handleYesClick}
								className={`flex h-10 w-10 items-center justify-center rounded-full bg-classmate-gray-4 outline-none ring-classmate-gold-1 focus:ring ${
									yesSelected ? "bg-classmate-green-3" : ""
								} ${!!error ? "ring-[2px] !ring-classmate-error-red" : ""}`}>
								{yesSelected && (
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
									noSelected ? "bg-classmate-red-1" : ""
								} ${!!error ? "ring-[2px] !ring-classmate-error-red" : ""}`}>
								{noSelected && (
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
