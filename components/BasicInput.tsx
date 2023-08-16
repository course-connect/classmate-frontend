import React, { FC, useState, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

type InputProps = {
	name: string;
	label: string;
	background: string;
	rules: Record<string, unknown>;
};

const BasicInput: FC<InputProps> = ({ name, label, rules, background }) => {
	const [movePlaceHolder, setMovePlaceHolder] = useState(false);
	const [changeLabelColor, setChangeLabelColor] = useState(false);
	const labelRef = useRef();
	const { control } = useFormContext();

	const hanldeInputFocus = () => {
		setChangeLabelColor(true);
		if (!movePlaceHolder) {
			setMovePlaceHolder(true);
		}
	};

	const hanldeInputBlur = (userInput) => {
		setChangeLabelColor(false);
		if (!userInput) {
			setMovePlaceHolder(false);
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
							movePlaceHolder ? "-translate-y-[29px] text-sm" : ""
						}`}>
						<p
							className={`whitespace-nowrap ${
								changeLabelColor ? "text-classmate-gold-1" : ""
							} ${error ? "!text-classmate-error-red" : ""}`}>
							{label}
						</p>
					</span>

					<input
						onFocus={hanldeInputFocus}
						onBlur={() => hanldeInputBlur(value)}
						onChange={onChange}
						value={value}
						className={`font-classmate w-full rounded-md border-[1px] border-classmate-gray-2 bg-transparent px-4 py-4 text-classmate-green-7 placeholder-classmate-green-7 hover:border-classmate-gray-1  ${
							!!error
								? `!border-classmate-error-red !placeholder-classmate-error-red focus:!outline-classmate-error-red`
								: "focus:!outline-classmate-gold-1"
						}`}
					/>
				</div>
			)}
		/>
	);
};

export default BasicInput;
