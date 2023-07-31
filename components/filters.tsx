import React from "react";
import Image from "next/image";

const filterButton = ({ text }) => {
	return (
		<div className="h-[500px]">
			<button className="font-classmate  flex items-center justify-center gap-4 rounded-md border-[1px] border-classmate-gray-3 bg-classmate-tan-2 px-3 py-1 text-classmate-green-7 outline-none ring-classmate-gold-1 focus:ring">
				School
				<Image width={14} height={14} src="./plus.svg" alt="" />
			</button>
			{/* <button>Course</button>
			<button>Department</button>
			<button>Score</button>
			<button>Difficulty</button>
			<button>Reviews</button> */}
		</div>
	);
};

export default filterButton;
