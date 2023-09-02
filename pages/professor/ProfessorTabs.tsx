import React, { useEffect, useState } from "react";
import Tabs from "../../components/ui/Tabs/Tabs";
import Tab from "../../components/ui/Tabs/Tab";
import CustomTabPanel from "../../components/ui/Tabs/CustomTabPanel";
import useWindowSize from "../../hooks/useWindowSize";

const ProfessorTabs = () => {
	const { width: windowWidth } = useWindowSize();
	const [value, setValue] = useState(0);
	const handleTabClick = (e) => {
		console.log(e.target.dataset.index);
		setValue(Number(e.target.dataset.index));
	};

	useEffect(() => {
		if (windowWidth >= 768 && value === 2) {
			setValue(0);
		}
	}, [windowWidth]);

	return (
		<div>
			<Tabs handleTabClick={handleTabClick} value={value}>
				<Tab label={"Overview"} index={0} />
				<Tab label={"Reviews"} index={1} />
				{windowWidth < 768 && <Tab label={"Tags"} index={2} />}
			</Tabs>
			<CustomTabPanel value={value} index={0}>
				Overview
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				Reviews
			</CustomTabPanel>
			{windowWidth < 768 && (
				<CustomTabPanel value={value} index={2}>
					Tags
				</CustomTabPanel>
			)}
		</div>
	);
};

export default ProfessorTabs;
