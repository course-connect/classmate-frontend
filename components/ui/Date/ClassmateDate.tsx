import React from "react";

const ClassmateDate = ({ seconds }) => {
	function formatDate(date) {
		const options = { year: "numeric", month: "long", day: "numeric" };
		const formattedDate = date.toLocaleDateString(undefined, options);

		// Add the "st", "nd", "rd", or "th" for the day
		const day = date.getDate();
		const daySuffix = getDaySuffix(day);

		const dateSplit = formattedDate.split(",");
		const result = dateSplit[0] + daySuffix + "," + dateSplit[1];

		return result;
	}

	function getDaySuffix(day) {
		if (day >= 11 && day <= 13) {
			return "th";
		}
		switch (day % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	}

	// Example usage
	const milliseconds = seconds * 1000;
	const date = new Date(milliseconds);
	const formattedDate = formatDate(date);

	return <p className="whitespace-nowrap text-sm">{formattedDate}</p>;
};

export default ClassmateDate;
