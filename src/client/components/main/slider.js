import React, { Component } from "react";
import Slider from "react-slick";

import "./main.css";

export default class Responsive extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 3
		};
		return (
			<div className="intro">
				<h2> Programmes a ne pas rater.. </h2>
				<Slider {...settings}>
					<div>
						<img
							className="prog"
							src="http://shops.tn/wp-content/uploads/2019/07/67115951_752388655180132_718404203050958848_o.jpg"
						/>
					</div>
					<div>
						<img
							className="prog"
							src="https://www.traveltodoticket.com/wp-content/uploads/2019/07/Nidhal-Saadi-600x600.jpg"
						/>
					</div>
					<div>
						<img
							className="prog"
							src="https://www.traveltodoticket.com/wp-content/uploads/2019/07/DOUBLE-FACE-600x600.jpg"
						/>
					</div>
					<div>
						<img
							className="prog"
							src="http://festivaldecarthage.tn/wp-content/uploads/2019/07/67294046_756730454745952_9009035391914737664_o-550x350.jpg"
						/>
					</div>

					<div>
						<img className="prog" src="http://www.festivalbizerte.com/img/artiste/aymen-lessigue.jpg" />
					</div>
					<div>
						<img
							className="prog"
							src="https://www.tunisie.co/uploads/images/content/bigbossawajihajendoubi-280319-u.jpg"
						/>
					</div>
				</Slider>
			</div>
		);
	}
}
