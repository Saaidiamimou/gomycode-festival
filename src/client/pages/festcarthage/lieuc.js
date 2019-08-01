import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
	"https://www.musicien.tn/wp-content/uploads/2014/10/festival_carthage.jpg",
	"https://photos.wikimapia.org/p/00/02/35/80/44_big.jpg",
	"https://www.leaders.com.tn/uploads/content/thumbnails/149823047947_content.jpg",
	"http://nawaat.org/portail/wp-content/uploads/2016/09/impact-festival-carthage-FIFAK.jpg",
	"https://media.shemsfm.net/uploads/content/big/1516625451_content.png"
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
		<div className="slide-carthage">
			<Zoom {...zoomOutProperties}>
				{images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)}
			</Zoom>
			<div className="descrip">
				<h3>Description</h3>
				<h5>
					l’amphithéâtre de Carthage était considéré comme l’un des plus grands de l’empire romain. Les descriptions
					qu’en firent les chroniqueurs du Moyen-age nous parlent d’imposantes structures et d’altières arcades.
					Aujourd’hui, légèrement en retrait de la route, ne subsiste plus qu’une arène de forme ovale, de 65 m de long
					sur 37 de large avec, aux deux extrémités, les accès par lesquels arrivaient les bêtes sauvages. Les plus
					célèbres des suppliciés qui ont connu une telle fin, sainte Perpétue et Sainte Félicité, martyrisées à cause
					de leur foi dans cette enceinte en 203.
				</h5>
			</div>
			<h3>Adresse</h3>
			<br />
			<img src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/68243275_515825435827472_2621686589104848896_n.png?_nc_cat=100&_nc_oc=AQkWBIitKGIRqo37OdBW769oVmqc5JiiT42m0sZOhSpGoOht9h_8ZEml82x7WJWOXD0&_nc_ht=scontent.ftun1-1.fna&oh=1899a03184e636671eeb417e3b3dc3dd&oe=5DA88B2E" />
			<div className="ptsvente">
				<h3>Les points de ventes</h3>
				<ul className="ptdevente">
					<h5>
						<li>Théâtre roman de Carthage</li>
					</h5>
					<h5>
						<li>Carrefour La Marsa</li>
					</h5>
					<h5>
						<li>theatre bizerte</li>
					</h5>
					<h5>
						<li>Carrefour Boumhel</li>
					</h5>
					<h5>
						<li>Cité de la Culture</li>
					</h5>
					<h5>
						<li>e-festival.tn</li>
					</h5>
				</ul>
			</div>
		</div>
	);
}
