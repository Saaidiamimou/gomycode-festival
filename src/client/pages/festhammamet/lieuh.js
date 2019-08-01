import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
	"https://espazium.s3.eu-central-1.amazonaws.com/files/styles/espazium_280px_height/public/migration/images/5733410be1554.jpg?itok=NUi9CgOY",
	"https://upload.wikimedia.org/wikipedia/commons/1/12/Hammamet_theatre.jpg",
	"https://www.tuniscope.com/uploads/images/content/hammamet-010711-1.jpg"
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
				Le Centre culturel international tient place dans une somptueuse villa, avenue des Nations-Unis, sur la route de
				Sousse. La villa, entourée d'un vaste parc verdoyant, a été légué à l'état tunisien par son ancien propriétaire,
				Georges Sebastian La villa fût construite en suivant des normes de l'architecture traditionnelle, murs blancs
				aux décorations arabisantes, pour un résultat qui impressionna Le Corbusier lors de son passage.Un théâtre fût
				construit dans le parc, qui accueille tous les étés le festival international de Hammamet et ses artistes
				d'horizons divers (films, théâtre, danse, musique...), comme pour rendre hommage au passé de ce lieu
			</h5>

			<h3>Adresse</h3>
			<img
				id="map"
				src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67348699_900083587032072_1148937754936082432_n.png?_nc_cat=106&_nc_oc=AQm2rFMxMsJaFLzp3Cl2_n3viL21xWt0_6fFQLMbbwspXkdka6NRy3LqQ6WtXR9g9ds&_nc_ht=scontent.ftun1-1.fna&oh=7a1d915ead210b5ff7ba718c3e342d55&oe=5DDC1303"
			/>
			<h3>Les points de ventes</h3>
			<ul className="ptdevente">
				<h5>
					<li>teskirti.tn</li>
				</h5>
				<h5>
					<li>Centre Culturel International de Hammamet</li>
				</h5>
				<h5>
					<li>TikaShop.poste.tn</li>
				</h5>
				<h5>
					<li>Maison de Culture Ibn Rachiq – Tunis</li>
				</h5>
				<h5>
					<li>Librairie Ennaiem – Nabeul</li>
				</h5>
			</ul>
		</div>
	);
}
