import React from "react";

import Image from "next/image";

type InputProps = {
	icon?: string;
	text: string;
	selected: boolean;
};

const FormSelectOptions = ({ icon, text, selected }: InputProps) => {
	console.log(selected);
	return (
		<button
			data-value={text}
			className="font-classmate relative flex w-full items-center gap-4 overflow-hidden rounded-md bg-classmate-gray-6 px-3 py-2 text-left text-classmate-green-7 outline-none ring-classmate-gold-1 transition-all hover:bg-classmate-gray-6 focus:ring">
			{icon && <Image width={19} height={19} src={icon} alt={""} />}
			{text}
			{selected && (
				<div className="absolute right-0 flex h-full w-8 items-center justify-center bg-classmate-gray-6">
					<Image
						width={16}
						height={10}
						src="./check-green.svg"
						alt="check mark"
					/>
				</div>
			)}
		</button>
	);
};

export default FormSelectOptions;
