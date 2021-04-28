import React from "react";
import { Fragment } from "react";
import MyNavBar from "./mynavbar.jsx";
import JumbotronBox from "./jumbotronbox.jsx";
import CardBox from "./cardbox.jsx";

export function Home() {
	let title = ["Carta 1", "Carta 2", "Carta 3", "Carta 4"];
	let text = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus.",
		"Aliquam lobortis maximus vestibulum. Fusce et dignissim eros. Maecenas hendrerit arcu et tellus imperdiet, sed volutpat nibh rhoncus. Mauris luctus ante a lectus gravida, id elementum eros tristique.",
		"Curabitur tempor, augue at ullamcorper congue, magna mauris ullamcorper lectus, molestie semper eros dolor vitae risus.",
		" Integer sit amet posuere ligula. Ut efficitur sem id odio consectetur consectetur."
	];
	let source = [
		"https://www.blogartesvisuales.net/wp-content/uploads/2008/07/fotografia-paisaje-01.jpg",
		"https://www.chamanexperience.com/wp-content/uploads/2020/01/fotografi%CC%81a-de-paisaje-1024x683.jpg",
		"https://www.tourinews.es/uploads/s1/16/86/27/paisaje-2_4_732x400.jpeg",
		"https://cdn.pixabay.com/photo/2015/04/08/12/04/landscape-712580_960_720.jpg"
	];
	let allCards = [];
	let numOfCards = 4;
	for (let i = 0; i < numOfCards; i++) {
		allCards.push(
			<CardBox
				key={i}
				title={title[i]}
				text={text[i]}
				source={source[i]}
			/>
		);
	}
	console.log({ allCards });

	return (
		<Fragment>
			<MyNavBar />
			<div className="container">
				<JumbotronBox />
				<div className="d-flex justify-content-between">{allCards}</div>
			</div>
			<footer className="d-flex justify-content-center bg-primary py-3 mt-5">
				<p className="text-white">Copyright 2019</p>
			</footer>
		</Fragment>
	);
}

//let card = [{ title: "Titulo 1", text: "Texto 1" }, { title: "Titulo2", text: "Texto 2" }, { title: "Titulo3", text: "Texto 3" }, { title: "Titulo4", text: "Texto 4" }];
