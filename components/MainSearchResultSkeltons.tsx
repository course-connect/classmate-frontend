import React from "react";

const MainSearchResultSkeltons = ({ resultType }) => {
	let resultSkeletons;
	switch (resultType) {
		case "professor":
			resultSkeletons = [...Array(3)].map((_, index) => (
				<div
					key={index}
					className="font-classmate flex cursor-pointer flex-col gap-10 rounded-xl bg-classmate-tan-2 p-8 text-left text-classmate-green-6 shadow-xl">
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							<div className="h-5 w-1/2 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-20 animate-pulse rounded-md bg-classmate-gray-4" />
						</div>
						<div className="h-5 w-1/3 animate-pulse rounded-md bg-classmate-gray-4" />
					</div>
					<div className="flex flex-col gap-2">
						<div className="h-5 w-full animate-pulse rounded-md bg-classmate-gray-4" />
						<div className="h-5 w-full animate-pulse rounded-md bg-classmate-gray-4" />
						<div className="h-5 w-full animate-pulse rounded-md bg-classmate-gray-4" />
					</div>
					<div className="flex flex-wrap gap-8">
						<div className="flex flex-wrap gap-2">
							<div className="h-12 w-16 animate-pulse rounded-md bg-classmate-gray-4 xs:h-16 xs:w-24 " />
							<div className="h-12 w-16 animate-pulse rounded-md bg-classmate-gray-4 xs:h-16 xs:w-24 " />
							<div className="h-12 w-16 animate-pulse rounded-md bg-classmate-gray-4 xs:h-16 xs:w-24 " />
						</div>
						<div className="flex h-fit w-fit flex-wrap gap-1">
							<div className="h-5 w-16 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-20 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-16 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-14 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-20 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-16 animate-pulse rounded-md bg-classmate-gray-4" />
						</div>
					</div>
				</div>
			));
			break;
		case "school":
			resultSkeletons = [...Array(3)].map((_, index) => (
				<div
					key={index}
					className="font-classmate flex cursor-pointer flex-col gap-10 rounded-xl bg-classmate-tan-2 p-8 text-left text-classmate-green-6 shadow-xl">
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							<div className="h-5 w-1/2 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-20 animate-pulse rounded-md bg-classmate-gray-4" />
						</div>
						<div className="h-5 w-1/3 animate-pulse rounded-md bg-classmate-gray-4" />
					</div>
					<div className="flex flex-col gap-2">
						<div className="h-5 w-full animate-pulse rounded-md bg-classmate-gray-4" />
						<div className="h-5 w-full animate-pulse rounded-md bg-classmate-gray-4" />
						<div className="h-5 w-full animate-pulse rounded-md bg-classmate-gray-4" />
					</div>
					<div className="flex gap-8">
						<div className="flex gap-2">
							<div className="h-16 w-20 animate-pulse rounded-md bg-classmate-gray-4 md:h-20 md:w-28" />
							<div className="h-16 w-20 animate-pulse rounded-md bg-classmate-gray-4 md:h-20 md:w-28" />
							<div className="h-16 w-20 animate-pulse rounded-md bg-classmate-gray-4 md:h-20 md:w-28" />
						</div>
						<div className="flex h-fit w-fit flex-wrap gap-1">
							<div className="h-5 w-16 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-20 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-16 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-14 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-20 animate-pulse rounded-md bg-classmate-gray-4" />
							<div className="h-5 w-16 animate-pulse rounded-md bg-classmate-gray-4" />
						</div>
					</div>
				</div>
			));
			break;
		case "course":
			resultSkeletons = [...Array(3)].map((_, index) => (
				<div
					key={index}
					className="font-classmate flex cursor-pointer flex-col gap-10 rounded-xl bg-classmate-tan-2 p-8 text-left text-classmate-green-6 shadow-xl">
					<div className="flex flex-col gap-3">
						<div className="h-5 w-20 animate-pulse rounded-md bg-classmate-gray-4" />
						<div className="h-5 w-1/2 animate-pulse rounded-md bg-classmate-gray-4" />
						<div className="h-5 w-1/3 animate-pulse rounded-md bg-classmate-gray-4" />
					</div>
				</div>
			));
			break;
	}

	return resultSkeletons;
};

export default MainSearchResultSkeltons;
