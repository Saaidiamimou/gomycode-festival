import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./bizerte.css";

export default class cart extends Component {
	state = {
		show: false
	};
	showDetails = () => {
		this.setState({
			show: true
		});
	};
	hideDetails = () => {
		this.setState({
			show: false
		});
	};
	renderContent = (el, i) => {
		if (this.state.show) {
			return (
				<div className="details">
					<h1> {el.name}</h1>
					<div className="contenu">
						<div>
							<h4 className="date">{el.date}</h4>
							<h4 id="prix">{el.prixchaise}</h4>
							<h4 id="prix">{el.prixgradain}</h4>
						</div>
					</div>
					<div>
						<Link to="/reservation" class="button btnFade btnOrange" id="btn">
							{el.button}
						</Link>
					</div>
				</div>
			);
		} else {
			return (
				<Fragment>
					<img className="contact-card__image" src={el.imgUrl} alt="Credit Card" />
					<div className="contact-card__footer">
						<h4 id="name">{el.name}</h4>
					</div>
				</Fragment>
			);
		}
	};
	render() {
		const { el, i } = this.props;
		return (
			<div className="contact-card" key={i} onMouseOver={this.showDetails} onMouseLeave={this.hideDetails}>
				{this.renderContent(el, i)}
			</div>
		);
	}
}
