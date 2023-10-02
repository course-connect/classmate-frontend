import React, { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const Dashboard = () => {
	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		console.log(windowWidth);
		const vizElement = document.getElementById("tableauViz");

		if (windowWidth > 800) {
			vizElement.style.width = "1000px";
			vizElement.style.height = "1027px";
		} else if (windowWidth > 500) {
			vizElement.style.width = "1000px";
			vizElement.style.height = "1027px";
		} else {
			vizElement.style.width = "100%";
			vizElement.style.height = "1077px";
		}

		const scriptElement = document.createElement("script");
		scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
		vizElement.parentNode.insertBefore(scriptElement, vizElement);

		return () => {
			// Clean up the script element when the component unmounts
			scriptElement.parentNode.removeChild(scriptElement);
		};
	}, [windowWidth]);

	return (
		<div className="flex w-full justify-center bg-classmate-tan-1">
			<div
				className="tableauPlaceholder"
				id="viz1695269634488"
				style={{ position: "relative" }}>
				<noscript>
					<a href="#">
						<img
							alt="TEST DASH"
							src="https://public.tableau.com/static/images/TE/TESTDASHDONOTSHARE/TESTDASH/1_rss.png"
							style={{ border: "none" }}
						/>
					</a>
				</noscript>
				<object
					className="tableauViz"
					id="tableauViz"
					style={{ display: "none" }}>
					<param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
					<param name="embed_code_version" value="3" />
					<param name="site_root" value="" />
					<param name="name" value="TESTDASHDONOTSHARE/TESTDASH" />
					<param name="tabs" value="no" />
					<param name="toolbar" value="yes" />
					<param
						name="static_image"
						value="https://public.tableau.com/static/images/TE/TESTDASHDONOTSHARE/TESTDASH/1.png"
					/>
					<param name="animate_transition" value="yes" />
					<param name="display_static_image" value="yes" />
					<param name="display_spinner" value="yes" />
					<param name="display_overlay" value="yes" />
					<param name="display_count" value="yes" />
					<param name="language" value="en-US" />
				</object>
			</div>
		</div>
	);
};

export default Dashboard;