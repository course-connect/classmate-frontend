import React from "react";

const Modal = ({ children, showModal, handleCloseModal }) => {
	return (
		<div
			className={`section-padding fixed top-0 z-50 flex h-screen w-full overflow-y-auto bg-black bg-opacity-50 py-20 transition-all duration-100 ${
				showModal
					? "pointer-events-auto opacity-100"
					: "pointer-events-none opacity-0"
			}`}>
			<div
				onClick={handleCloseModal}
				className="absolute left-0 top-0 h-full w-full"
			/>
			<div className="z-10 !mx-auto !my-auto h-fit w-full max-w-3xl rounded-3xl bg-classmate-tan-2 p-5 xs:p-10 sm:p-14 md:p-16">
				{children}
			</div>
		</div>
	);
};

export default Modal;
