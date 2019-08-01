import React, { Component } from "react";
import "./contact.css";

class contact extends Component {
	constructor() {
		super();
		this.state = {
			nom: "",
			prenom: "",
			email: "",
			tel: "",
			msg: "",
			errors: {}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			nom: this.state.nom,
			prenom: this.state.prenom,
			email: this.state.email,
			tel: this.state.tel,
			msg: this.state.msg
		};
		console.log(user);
	}

	render() {
		return (
			<div>
				<div class="container">
					<form id="contact" action="" method="post">
						<h3>Contactez-nous</h3>

						<fieldset>
							<input
								placeholder="Nom"
								type="text"
								tabindex="1"
								name="nom"
								onChange={this.handleInputChange}
								value={this.state.nom}
								required
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder=" Prénom "
								type="email"
								tabindex="2"
								name="prenom"
								onChange={this.handleInputChange}
								value={this.state.prenom}
								required
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="Num télèphone"
								type="text"
								tabindex="3"
								name="tel"
								onChange={this.handleInputChange}
								value={this.state.tel}
								required
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="E-mail"
								type="email"
								tabindex="4"
								name="email"
								onChange={this.handleInputChange}
								value={this.state.email}
								required
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="tapez votre message ici...."
								tabindex="5"
								type="text"
								name="msg"
								onChange={this.handleInputChange}
								value={this.state.msg}
								required
							/>
						</fieldset>
						<fieldset onClick={this.handleSubmit}>
							<button name="Envoyer" type="submit" id="envoyer" data-submit="...Sending">
								Envoyer
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}
export default contact;
