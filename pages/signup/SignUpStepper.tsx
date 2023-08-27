import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const SignUpStepper = ({ children }) => {
	const auth = useSelector((state) => state.auth);
	const router = useRouter();

	const offsets = [-1200, -600, 0, 600, 1200];
	const [baseIndex, setBaseIndex] = useState(2);

	const slideRight = () => {
		if (baseIndex <= 0) {
			return;
		}
		setBaseIndex((current) => current - 1);
	};

	const slideLeft = () => {
		if (baseIndex >= 2) {
			return;
		}
		if (auth.isAuthenticated && baseIndex >= 1) {
			return;
		}

		setBaseIndex((current) => current + 1);
	};

	useEffect(() => {
		const isAuthenticated = auth.isAuthenticated;
		const completedFirstStep =
			auth.userData.hasOwnProperty("first_name") &&
			auth.userData.hasOwnProperty("last_name") &&
			auth.userData.hasOwnProperty("zipcode");

		const completedSecondStep =
			auth.userData.school && auth.userData.school.length !== 0;
		auth.userData.hasOwnProperty("major") &&
			auth.userData.hasOwnProperty("graduation_year");

		if (!isAuthenticated) {
			setBaseIndex(2);
		} else if (!completedFirstStep) {
			setBaseIndex(1);
		} else if (!completedSecondStep) {
			setBaseIndex(0);
		} else {
			router.push("/account");
		}
	}, [auth.isAuthenticated, auth.userData]);

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
			<div className="flex justify-center">
				<button onClick={slideLeft} className="bg-black p-2 text-white">
					prev
				</button>
				<button onClick={slideRight} className="bg-black p-2 text-white">
					next
				</button>
			</div>
		</>
	);
};

export default SignUpStepper;
