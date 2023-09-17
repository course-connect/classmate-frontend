import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Image from "next/image";

const Raiting = ({ name, callback, icon, iconAlt, rules }) => {
	const { control } = useFormContext();

	const getScoreText = (score) => {
		let text;
		switch (score) {
			case 1:
				text = "Very Bad";
				break;
			case 2:
				text = "Bad";
				break;
			case 3:
				text = "Average";
				break;
			case 4:
				text = "Good";
				break;
			case 5:
				text = "Very Good";
				break;
			default:
				text = "default";
		}
		return text;
	};

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div className="flex flex-col items-center gap-4">
					<div className="flex w-fit justify-center gap-1">
						{new Array(5).fill(0).map((_, index) => (
							<button type="button" onClick={() => callback(index)}>
								<Image
									src={icon}
									alt={iconAlt}
									width={0}
									height={0}
									className={`h-8 w-8 ${
										value >= index + 1
											? "filter-classmate-gold-1"
											: "filter-classmate-gray-4"
									}`}
								/>
							</button>
						))}
					</div>
					<p className="flex text-classmate-green-6">
						<span>{value}</span>
						<span>/5&nbsp;-&nbsp;</span>
						<span>{getScoreText(value)}</span>
					</p>
				</div>
			)}
		/>
	);
};

export default Raiting;
