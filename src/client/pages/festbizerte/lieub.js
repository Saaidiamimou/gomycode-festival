import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
	"https://upload.wikimedia.org/wikipedia/commons/7/75/Amphi_theatre_of_Bizerte.JPG",
	"https://www.voyagevirtuel.co.uk/tunisie/bigphotos/bizerte-arenes-fort-espagne-51.jpg",
	"http://www.tourismtunisia.com/wp-content/uploads/2013/11/24.jpg",
	"https://st.depositphotos.com/1008084/2227/i/950/depositphotos_22277409-stock-photo-sea-in-bizerte-tunis.jpg"
];

const zoomOutProperties = {
	duration: 2000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	scale: 0.4,
	arrows: true
};

export default function Slideshow() {
	return (
		<div className="slide-bizerte">
			<Zoom {...zoomOutProperties}>
				{images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)}
			</Zoom>
			<h3>Description</h3>
			<h5>
				37e édition du 12 juillet au 17 aout Le programme de la 37 éme édition du festival international de Bizerte,
				prévu cette année du 12 juillet au 17 aout 2019 est tombé avec a l’affiche plus de 20 spectacles variés proposés
				Par des artistes de Tunisie et d’ailleurs indique son nouveau président Ahmed Trifi .
			</h5>
			<h3>Adresse</h3>
			<img src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67367377_455067498681024_8014893889028620288_n.png?_nc_cat=102&_nc_oc=AQnvek_QzYPlvkNObnVJ6FWEnPc_dLV54GAXHmfOysSweWUCrZVd7ZX82VbRFf6V3MI&_nc_ht=scontent.ftun1-1.fna&oh=987e1108eedbcb993795975e7ab1b756&oe=5DAA9689" />

			<h3>Les points de ventes</h3>
			<ul className="ptdevente">
				<h5>
					<li>teskirti.tn</li>
				</h5>
				<h5>
					<li>traveltodo.com</li>
				</h5>
				<h5>
					<li>theatre bizerte</li>
				</h5>
				<h5>
					<li>e-festival.tn</li>
				</h5>
				<h5>
					<li>carrfour bizerte</li>
				</h5>
			</ul>
		</div>
	);
}
