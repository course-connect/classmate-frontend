import React from "react";

type InputProps = {
	icon?: string;
	text: string;
};

const FormSelectOptions = ({ icon, text }: InputProps) => {
	return (
		<button
			data-value={text}
			className="font-classmate w-full rounded-md bg-classmate-gray-5 px-3 py-2 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 transition-all hover:bg-classmate-gray-6 focus:ring">
			{text}
		</button>
	);
};

export default FormSelectOptions;
