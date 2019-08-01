import React, { Component } from "react";
import "./reservation.css";

function contact() {
	return (
		<div>
			<div class="container">
				<form id="contact" action="" method="post">
					<h3>Réservez vous billets</h3>

					<fieldset>
						<input placeholder="Nom et prénom" type="text" tabindex="1" required autofocus />
					</fieldset>
					<fieldset>
						<input placeholder="E-mail" type="email" tabindex="2" required />
					</fieldset>
					<fieldset>
						<input placeholder="Num télèphone" type="tel" tabindex="3" required />
					</fieldset>
					<fieldset>
						<div>
							<input type="checkbox" tabindex="3" required />Gradin
						</div>
						<br />
						<input type="checkbox" tabindex="3" required />Chaise
						<br />
						Tickets<input type="number" required id="number" />
					</fieldset>
					<fieldset>
						<chekbox placeholder="tapez votre message ici...." tabindex="5" required />
					</fieldset>
					<fieldset>
						<button name="Envoyer" type="submit" id="envoyer" data-submit="...Sending">
							Envoyer
						</button>
					</fieldset>
					<h4>Il faut pas depassé les 24h pour récuperer vos billets chez nos points de ventes</h4>
				</form>
			</div>
		</div>
	);
}
export default contact;
