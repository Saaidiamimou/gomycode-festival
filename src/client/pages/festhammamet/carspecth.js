import React from "react";
import { Link } from "react-router-dom";
import "./hammamet.css";

function ContactCardh(props) {
	return (
		<div className="card-list">
			{props.contactList.map((el, i) => (
				<div className="contact-card" key={i}>
					<img className="contact-card__image" src={el.imgUrl} alt="Credit Card" />
					<div className="contact-card__footer">
						<h4 id="name">{el.name}</h4>
					</div>
					<div className="contenu">
						<div>
							<h4 className="date">{el.date}</h4>
							<h4 id="prix">{el.prixchaise}</h4>
							<h4 id="prix">{el.prixgradain}</h4>
						</div>
						<div>
							<Link to="/reservation" class="button btnFade btnOrange" id="btn">
								{el.button}
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ContactCardh;
