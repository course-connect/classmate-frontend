import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const SnackBar = () => {
	const snackBar = useSelector((state) => state.account.snackBar);

	const getIcon = (type) => {
		switch (type) {
			case "success":
				return "/check-solid.svg";
			case "error":
				return "/xmark-solid.svg";
		}
	};

	const getBgColor = (type) => {
		switch (type) {
			case "success":
				return "bg-classmate-green-2";
			case "error":
				return "bg-classmate-red-1";
		}
	};

	const getIconColor = (type) => {
		switch (type) {
			case "success":
				return "filter-classmate-green-2";
			case "error":
				return "filter-classmate-red-1";
		}
	};

	const getIconSize = (type) => {
		switch (type) {
			case "success":
				return "h-[10px] w-[10px]";
			case "error":
				return "h-2 w-2";
		}
	};

	return (
		<div
			style={{
				animation: "snackbar 3s ease-in-out forwards",
			}}
			className={`font-classmate fixed bottom-6 left-6 flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-classmate-tan-2 ${getBgColor(
				snackBar.type
			)}`}>
			<div className="flex h-4 w-4 items-center justify-center rounded-full bg-classmate-tan-2">
				<Image
					src={getIcon(snackBar.type)}
					width={0}
					height={0}
					alt="popup"
					className={`${getIconSize(snackBar.type)} ${getIconColor(
						snackBar.type
					)}`}
				/>
			</div>
			{snackBar.text}
		</div>
	);
};

export default SnackBar;
