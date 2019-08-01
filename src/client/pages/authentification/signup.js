import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { registerUser } from "../../actions/authentication";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
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
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		};
		this.props.registerUser(user, this.props.history);
	}

	render() {
		const { errors } = this.state;
		return (
			<div className="container" style={{ marginTop: "50px", width: "700px" }} id="padding">
				<h2 style={{ marginBottom: "40px" }} id="titlee">
					S'inscrire
				</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group" id="input">
						<input
							type="text"
							placeholder="Name"
							className={classnames("form-control form-control-lg", {
								"is-invalid": errors.name
							})}
							name="name"
							onChange={this.handleInputChange}
							value={this.state.name}
						/>
						{errors.name && <div className="invalid-feedback">{errors.name}</div>}
					</div>
					<div className="form-group" id="input">
						<input
							type="email"
							placeholder="Email"
							className={classnames("form-control form-control-lg", {
								"is-invalid": errors.email
							})}
							name="email"
							onChange={this.handleInputChange}
							value={this.state.email}
						/>
						{errors.email && <div className="invalid-feedback">{errors.email}</div>}
					</div>
					<div className="form-group" id="input">
						<input
							type="password"
							placeholder="Mot de passe "
							className={classnames("form-control form-control-lg", {
								"is-invalid": errors.password
							})}
							name="password"
							onChange={this.handleInputChange}
							value={this.state.password}
						/>
						{errors.password && <div className="invalid-feedback">{errors.password}</div>}
					</div>
					<div className="form-group" id="input">
						<input
							type="password"
							placeholder="Confirmer mot de passe "
							className={classnames("form-control form-control-lg", {
								"is-invalid": errors.confirmPassword
							})}
							name="confirmPassword"
							onChange={this.handleInputChange}
							value={this.state.confirmPassword}
						/>
						{errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
					</div>
					<div onClick={this.handleSubmit} className="form-group">
						<button type="submit" className="btn btn-primary" id="envoyer">
							s'inscrire
						</button>
					</div>
				</form>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
