import React from "react";

const MatchText = ({ userInput, result, resultType }) => {
	let matchedString;
	switch (resultType) {
		case "professor":
			matchedString = `${result.data.title}. ${result.data.first_name} ${result.data.last_name}`;
			break;

		default:
			break;
	}

	const addMatchColor = (matchedString, userInput) => {
		const matchedStringLwr = matchedString.toLowerCase();
		const userInputLwr = userInput.toLowerCase();

		const matchStartIdx = matchedStringLwr.indexOf(userInputLwr);
		const matchEndIdx = matchStartIdx + userInput.length;

		const stringStart = matchedString.slice(0, matchStartIdx);
		const stringMiddle = matchedString.slice(matchStartIdx, matchEndIdx);
		const stringEnd = matchedString.slice(matchEndIdx, matchedString.length);

		return (
			<p className="">
				<span>{stringStart}</span>
				<span className="text-classmate-gold-1">{stringMiddle}</span>
				<span>{stringEnd}</span>
			</p>
		);
	};

	return addMatchColor(matchedString, userInput);
};

export default MatchText;
