import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const DistributionRow = ({
	ratingText,
	ratingNumber,
	percentage,
	count,
	backgroundColor,
}) => {
	const [width, setWidth] = useState(0);
	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		setWidth(percentage);
	}, []);

	return (
		<div className="flex w-full items-center gap-4">
			{windowWidth >= 640 && (
				<p className="min-w-[60px] text-right text-sm sm:min-w-[80px] sm:text-base">
					{ratingText}
				</p>
			)}
			<p className="font-classmate-bold mt-4 min-w-[16px] text-2xl sm:mt-0">
				{ratingNumber}
			</p>
			<div className="w-full">
				{windowWidth < 640 && <p className="mb-[2px] text-sm">{ratingText}</p>}
				<div className="h-10 grow overflow-hidden rounded-md bg-classmate-gray-4">
					<div
						style={{
							width: width,
						}}
						className={`h-full transition-[width] duration-500 ${backgroundColor}`}></div>
				</div>
			</div>
			<p className="font-classmate-bold mt-4 min-w-[30px] text-2xl sm:mt-0">
				{count}
			</p>
		</div>
	);
};

export default DistributionRow;
