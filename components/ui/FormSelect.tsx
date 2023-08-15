import React, { FC, useState, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

import Image from "next/image";

type InputProps = {
	name: string;
	label: string;
	background: string;
	rules: Record<string, unknown>;
};

const FormSelect: FC<InputProps> = ({ name, label, rules, background }) => {
	const [inputFocused, setInputFocused] = useState(false);
	const [changeLabelColor, setChangeLabelColor] = useState(false);
	const labelRef = useRef();
	const { control } = useFormContext();

	const hanldeInputClick = (e) => {
		setChangeLabelColor(true);
		if (!inputFocused) {
			setInputFocused(true);
		} else {
			setInputFocused(false);
			e.target.blur();
		}
	};

	const hanldeInputBlur = (userInput) => {
		setChangeLabelColor(false);
		if (!userInput) {
			setInputFocused(false);
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
						className={`font-classmate pointer-events-none absolute left-[18px] px-1 text-base text-classmate-green-7 transition-all duration-200 ${background} ${
							inputFocused ? "-translate-y-[29px] text-sm" : ""
						}`}>
						<p
							className={`whitespace-nowrap ${
								changeLabelColor ? "!text-classmate-gold-1" : ""
							} ${error ? "!text-classmate-error-red" : ""}`}>
							{label}
						</p>
					</span>

					<input
						onClick={(e) => hanldeInputClick(e)}
						onBlur={() => hanldeInputBlur(value)}
						onChange={onChange}
						value={value}
						className={` font-classmate w-full cursor-pointer rounded-md border-[1px] border-classmate-gray-2 bg-transparent px-4 py-4 text-classmate-green-7 placeholder-classmate-green-7 caret-transparent  ${
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
						className={`absolute top-[58px] h-10 w-full cursor-pointer bg-red-500 transition-all ${
							inputFocused
								? "pointer-events-auto opacity-100"
								: "pointer-events-none opacity-0"
						} }`}>
						hello
					</div>
				</div>
			)}
		/>
	);
};

export default FormSelect;
