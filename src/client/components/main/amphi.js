import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
	"https://lepetitjournal.com/sites/default/files/styles/main_article/public/2019-07/CARTAGE.jpg?itok=dzPOeDoV",
	"https://www.tunisienumerique.com/wp-content/uploads/2018/06/festival-el-jem.gif",
	"https://www.nachoua.com/Web-03-2007/festival-carthage-2019.jpg",
	"http://image-photos.linternaute.com/image_photo/640/colisee-de-nuit-1264743554-1663681.jpg",
	"https://www.airfrance.fr/FR/common/common/img/tbaf/news/TUN/nuits-blanches-au-festival-international-de-carthage/TUN-nuits-blanches-au-festival-international-de-carthage-2_1-1024x512.jpg",
	"slide6.jpg",
	"https://www.tekiano.com/wp-content/uploads/2017/08/public-carthage.gif",
	"https://www.nachoua.com/EL-JEM/Festival-El-Jem-Tunisia.jpg"
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
		<Zoom {...zoomOutProperties}>
			{images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)}
		</Zoom>
	);
}
