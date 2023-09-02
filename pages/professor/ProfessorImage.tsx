import React from "react";
import Image from "next/image";

const ProfessorImage = () => {
	return (
		<div className=" mb-6 flex aspect-square w-full items-center justify-center rounded-3xl bg-classmate-tan-1 xs:mb-8">
			<Image
				src="/male-avatar-1.svg"
				width={0}
				height={0}
				className="h-auto w-3/5"
			/>
		</div>
	);
};

export default ProfessorImage;
