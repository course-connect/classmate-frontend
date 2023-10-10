import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const SnackBar = () => {
	const account = useSelector((state) => state.account);

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
			style={{ animationDuration: "150ms" }}
			className={`font-classmate fixed bottom-6 left-6 flex items-center justify-center gap-3 rounded-lg px-5 py-3 text-classmate-tan-2 ${getBgColor(
				account.snackBar.type
			)} ${account.snackBarActive ? "fade-in" : "fade-out"}`}>
			<div className="flex h-4 w-4 items-center justify-center rounded-full bg-classmate-tan-2">
				<Image
					src={getIcon(account.snackBar.type)}
					width={0}
					height={0}
					alt="popup"
					className={`${getIconSize(account.snackBar.type)} ${getIconColor(
						account.snackBar.type
					)}`}
				/>
			</div>
			{account.snackBar.text}
		</div>
	);
};

export default SnackBar;
