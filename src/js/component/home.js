import React from "react";
import JumbotronBox from "./jumbotronbox.jsx";
//aqui importar la navbar

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		//	<Navbar />
		<div className="container">
			<JumbotronBox />
		</div>
	);
}
