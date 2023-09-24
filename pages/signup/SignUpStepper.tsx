import React from "react";

const SignUpStepper = ({ baseIndex, children }) => {
	const offsets = [-1200, -600, 0, 600, 1200];

	return (
		<>
			<div className="relative flex justify-center overflow-hidden">
				<div
					style={{ transform: `translateX(${offsets[baseIndex]}px)` }}
					className="transition-all">
					{children[0]}
				</div>
				<div
					style={{ transform: `translateX(${offsets[baseIndex + 1]}px)` }}
					className="absolute top-0 transition-all">
					{children[1]}
				</div>
				<div
					style={{ transform: `translateX(${offsets[baseIndex + 2]}px)` }}
					className="absolute top-0 transition-all">
					{children[2]}
				</div>
			</div>
		</>
	);
};

export default SignUpStepper;
