import React from "react";

import { MyNavBar } from "./navbar.jsx";

import JumbotronBox from "./jumbotronbox.jsx";



export function Home() {
	return (

        <MyNavBar />
		<div className="container">
			<JumbotronBox />
		</div>

	);
}
