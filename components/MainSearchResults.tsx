import React from "react";
import { useSelector } from "react-redux";
import MainSearchResult from "./MainSearchResult";
import MainSearchResultsText from "./MainSearchResultsText";
import { useRouter } from "next/router";

const MainSearchResults = () => {
	const mainSearch = useSelector((state) => state.mainSearch);
	const router = useRouter();

	const handlerItemClick = (e) => {
		if (e.target.id !== "classmate-button") {
			const resultClicked = e.target.closest("#result");
			const resultType = resultClicked.dataset.resulttype;
			const resultID = resultClicked.dataset.resultid;

			if (resultType === "professor") {
				router.push(`/professor/${resultID}`);
			}
		}
	};

	return (
		<div className="">
			{mainSearch.results.length === 0 ? (
				<p className="font-classmate text-center text-classmate-green-7">
					No Results...
				</p>
			) : (
				<>
					<MainSearchResultsText />
					<div className="flex flex-col gap-10" onClick={handlerItemClick}>
						{mainSearch.results.map((result, index) => (
							<MainSearchResult
								key={index}
								result={result}
								filters={mainSearch.filters}
								userInput={mainSearch.userInput}
								resultType={mainSearch.type}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default MainSearchResults;
