import React from "react";

const MobileSlideUp = ({ children, showSlideUp, toggleSlideUp }) => {
	return (
		<>
			{showSlideUp && (
				<div
					onClick={() => toggleSlideUp()}
					className="fixed left-0 top-0 z-20 h-screen w-screen bg-black opacity-40"
				/>
			)}
			<div
				style={{
					height: "fit-content",
					maxHeight: showSlideUp ? "100%" : 0,
					transition: "all 0.2s ease",
				}}
				className={`fixed bottom-0 left-0 z-20 flex w-full justify-center overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-classmate-tan-2 transition ${
					showSlideUp ? "z-30" : "first-letter:"
				}`}>
				{children}
			</div>
		</>
	);
};

export default MobileSlideUp;
