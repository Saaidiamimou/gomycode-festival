import React from "react";
import Searchbar from "./amphi";
import Slider from "./slider";
import "./main.css";

export default function Main() {
	return (
		<div>
			<div className="main">
				<Searchbar />
				<div className="intro">
					<h1>Mahrajanet.tn – Guide de sorties en Tunisie</h1>
					<h5>
						Mahrajanet.tn – Guide de festivals en Tunisie Vous aimez sortir dehors mais vous ne savez pas ou trouver une
						bonne ambiance ?
					</h5>
					<h3>
						Mahrajanet est le guide de sorties en Tunisie qui réunit dans un seul site les meilleurs endroits à visiter
						en Tunisie, Une ambiance festive sera au rendez-vous car tous les h3alais et les centres culturelles de
						Tunisie ouvriront leurs portes pour les habitants et les visiteurs. Toutes les nuits, un programme composé
						de concerts, de récitals et de spectacles animera ceux qui viendront y prendre part. Ne perdez plus votre
						temps à chercher dans plusieurs sites les bons plans de sortie près de chez vous et ne ratez plus aucun
						événement! Mahrajanet.tn est un véritable guide pour les Tunisiens qui regroupe toutes les bonnes adresses
						pour passer un bon moment en famille ou entre amis.
					</h3>
				</div>
			</div>

			<Slider className="main" />
		</div>
	);
}
