import React, { useState } from "react";
import Tab from "../../components/ui/Tabs/Tab";
import Tabs from "../../components/ui/Tabs/Tabs";
import CustomTabPanel from "../../components/ui/Tabs/CustomTabPanel";

const BookmarkTabs = () => {
	const [value, setValue] = useState(0);
	const handleTabClick = (e) => {
		setValue(Number(e.target.dataset.index));
	};

	return (
		<>
			<Tabs handleTabClick={handleTabClick} value={value}>
				<Tab label={"Item 1"} index={0} />
				<Tab label={"Item 2"} index={1} />
				<Tab label={"Item 3"} index={2} />
			</Tabs>
			<CustomTabPanel value={value} index={0}>
				Item 1
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				Item 2
			</CustomTabPanel>
			<CustomTabPanel value={value} index={2}>
				Item 3
			</CustomTabPanel>
		</>
	);
};

export default BookmarkTabs;
