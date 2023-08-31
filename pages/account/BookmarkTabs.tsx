import React, { useState } from "react";
import Tab from "../../components/ui/Tabs/Tab";
import Tabs from "../../components/ui/Tabs/Tabs";
import CustomTabPanel from "../../components/ui/Tabs/CustomTabPanel";

const BookmarkTabs = ({ handleTabClick, value }) => {
	return (
		<>
			<Tabs handleTabClick={handleTabClick} value={value}>
				<Tab label={"Item 1"} index={0} />
				<Tab label={"Item 2"} index={1} />
			</Tabs>
			<CustomTabPanel value={value} index={0}>
				Item 1
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				Item 2
			</CustomTabPanel>
		</>
	);
};

export default BookmarkTabs;
