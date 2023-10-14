import React from "react";

const Bullet = ({ level, children }) => {
	return (
		<div className="my-2 flex text-classmate-green-7">
			<div>
				{level === 1 && (
					<div className="ml-2 mr-3 inline-block h-[7px] w-[7px] rounded-full bg-classmate-green-1 xs:ml-4"></div>
				)}
				{level === 2 && (
					<div className="ml-8 mr-3 inline-block h-[8px] w-[8px] rounded-full border-[1px] border-classmate-green-1 xs:ml-12"></div>
				)}
			</div>
			<div>{children}</div>
		</div>
	);
};

export default Bullet;
