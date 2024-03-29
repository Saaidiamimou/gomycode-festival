import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authentication";
import classnames from "classnames";
import "./auth.css";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {}
		};
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// handleSubmit = e => {
	// 	const { registerUser, loginUser, history } = this.props;
	// 	const user = {
	// 		email: this.state.email,
	// 		password: this.state.password
	// 	};
	// 	loginUser(user, history).then(el => {
	// 		console.log(el, "el");
	// 		//	res && res.data && res.data.success && localStorage.setItem("token", res.data.token);
	// 	});
	// };

	handleSubmit = async v => {
		const { loginUser, history } = this.props;
		const user = {
			email: this.state.email,
			password: this.state.password
		};
		loginUser(user, history);
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="container" style={{ marginTop: "50px", width: "700px" }} id="padding">
				<h2 style={{ marginBottom: "40px" }} id="titlee">
					Se connecter
				</h2>
				<div>
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
							placeholder="Password"
							className={classnames("form-control form-control-lg", {
								"is-invalid": errors.password
							})}
							name="password"
							onChange={this.handleInputChange}
							value={this.state.password}
						/>
						{errors.password && <div className="invalid-feedback">{errors.password}</div>}
					</div>
					<div className="form-group">
						<button onClick={this.handleSubmit} className="btn btn-primary" id="envoyer">
							Envoyer
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
