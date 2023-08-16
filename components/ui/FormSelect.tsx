import React, { FC, useState, useRef } from "react";

import { Controller, useFormContext } from "react-hook-form";

import useOutsideAlerter from "../../hooks/useOutsideAlerter";

import Image from "next/image";

type InputProps = {
	type?: "select" | "local-search" | "database-search";
	name: string;
	label: string;
	backgroundColor: string;
	setValue: any;
	getValues: any;
	children?: any;
	rules: Record<string, unknown>;
};

const FormSelect: FC<InputProps> = ({
	name,
	label,
	rules,
	type = "select",
	setValue,
	getValues,
	children,
	backgroundColor,
}) => {
	const [moveLabel, setMoveLabel] = useState(false);
	const [inputFocused, setInputFocused] = useState(false);
	const [changeLabelColor, setChangeLabelColor] = useState(false);
	const labelRef = useRef();
	const { control } = useFormContext();
	const selectRef = useRef();

	useOutsideAlerter((e) => {
		const selectedValue = e.target.dataset.value;
		const currentValue = getValues(name);
		if (selectedValue && selectedValue != currentValue) {
			setValue(name, selectedValue);
		} else if (!currentValue) {
			setMoveLabel(false);
		}

		setChangeLabelColor(false);
		setInputFocused(false);
	}, selectRef);

	const hanldeInputClick = (e) => {
		if (!moveLabel) {
			setMoveLabel(true);
		}

		if (!inputFocused) {
			setChangeLabelColor(true);
			setInputFocused(true);
		} else {
			const currentValue = getValues(name);
			if (!currentValue) {
				setMoveLabel(false);
			}
			setChangeLabelColor(false);
			setInputFocused(false);
			e.target.blur();
		}
	};

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div className="relative flex w-full items-center">
					<span
						ref={labelRef}
						className={`font-classmate pointer-events-none absolute left-[18px] px-1 text-base text-classmate-green-7 transition-all duration-200 ${backgroundColor} ${
							moveLabel ? "-translate-y-[29px] text-sm" : ""
						}`}>
						<p
							className={`whitespace-nowrap ${
								changeLabelColor ? "text-classmate-gold-1" : ""
							} ${error ? "!text-classmate-error-red" : ""}`}>
							{label}
						</p>
					</span>

					<input
						ref={selectRef}
						onClick={(e) => hanldeInputClick(e)}
						onChange={onChange}
						value={value || ""}
						className={`font-classmate w-full cursor-pointer rounded-md border-[1px] border-classmate-gray-2 bg-transparent px-4 py-4 text-classmate-green-7 placeholder-classmate-green-7 caret-transparent hover:border-classmate-gray-1 ${
							!!error
								? `!border-classmate-error-red !placeholder-classmate-error-red focus:!outline-classmate-error-red`
								: "focus:!outline-classmate-gold-1"
						}`}
					/>

					<Image
						style={{
							filter:
								"invert(33%) sepia(8%) saturate(1099%) hue-rotate(65deg) brightness(97%) contrast(20%)",
						}}
						src="./caret.svg"
						height={12}
						width={12}
						className={`pointer-events-none absolute right-3 transition-all ${
							inputFocused ? "rotate-180" : ""
						}`}
					/>

					<div
						className={`absolute top-[58px] flex w-full origin-top cursor-pointer flex-col gap-2 rounded-lg bg-classmate-tan-2 p-4 shadow-xl transition-all  ${
							inputFocused
								? "pointer-events-auto scale-100 opacity-100"
								: "pointer-events-none scale-75 opacity-0"
						} }`}>
						{children}
					</div>
				</div>
			)}
		/>
	);
};

export default FormSelect;
