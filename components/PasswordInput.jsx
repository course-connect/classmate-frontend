import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import openEye from "../public/eye-open.svg";
import closedEye from "../public/eye-closed.svg";
import Image from "next/image";

export default function PasswordInput({ name, label, rules, size }) {
	const [showPassword, setShowPassword] = useState(false);
	const { control } = useFormContext();

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div className="relative flex w-full items-center">
					<input
						type={showPassword ? "text" : "password"}
						onChange={onChange}
						value={value}
						placeholder={label}
						className={`font-classmate w-full rounded-md border-[1px] border-classmate-gray-2 bg-transparent px-4 py-3 text-classmate-green-7 placeholder-classmate-green-7  ${
							!!error
								? `!border-classmate-error-red !placeholder-classmate-error-red focus:!outline-classmate-error-red`
								: "focus:!outline-classmate-gold-1"
						}`}
					/>
					<button
						onClick={handleClickShowPassword}
						type="button"
						className="absolute right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-classmate-tan-2 transition-colors duration-300 ease-in-out hover:bg-classmate-gray-4">
						<Image
							height={20}
							width={20}
							src={showPassword ? closedEye : openEye}
							alt="Icon of an eye used to toggle password visibility."
						/>
					</button>
				</div>
			)}
		/>
	);
}
