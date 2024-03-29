import React from "react";

const ReviewSkeleton = ({ backgroundColor = "bg-classmate-tan-1" }) => {
	return (
		<div className="flex flex-col gap-8">
			{[...Array(3)].map((_, index) => (
				<div
					key={index}
					className={`font-classmate flex cursor-pointer flex-col gap-10 rounded-xl p-8 text-left text-classmate-green-6 shadow-xl ${backgroundColor}`}>
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
			))}
		</div>
	);
};

export default ReviewSkeleton;
