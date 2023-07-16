import React, { useRef, useEffect, useState } from "react";

const ToolTip = ({ children, spacing = 5, hideOn: hideToolTip }) => {
	const toolTipChildren = useRef() as React.MutableRefObject<HTMLInputElement>;
	const toolTip = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [toolTipOffset, setToolTipOffset] = useState(0);
	const [mouseOver, setMouseOver] = useState(false);

	useEffect(() => {
		const toolTipHeight = toolTip.current.offsetHeight;
		setToolTipOffset(
			(toolTipChildren.current.offsetHeight - toolTipHeight + spacing) * -1
		);
	}, []);

	const handleMouseOver = () => {
		setMouseOver(true);
	};

	const handleMouseOut = () => {
		setMouseOver(false);
	};
	return (
		<span className="relative z-20 flex justify-center whitespace-nowrap rounded-full">
			<span
				ref={toolTip}
				style={{
					bottom: toolTipOffset,
					opacity: hideToolTip || !mouseOver ? 0 : 0.5,
					transform: hideToolTip || !mouseOver ? "scale(0.75)" : "scale(1)",
					transition: "all 200ms",
					transitionDelay: "100ms",
				}}
				className="font-classmate group-hover opacity-1 pointer-events-none absolute scale-100 rounded-md bg-black px-2 py-1 text-[11px] tracking-wide text-white">
				Account Menu
			</span>
			<div
				ref={toolTipChildren}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}>
				{children}
			</div>
		</span>
	);
};

export default ToolTip;
