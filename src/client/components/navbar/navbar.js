import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function navbar({ isLoged, logout }) {
	return (
		<div>
			<nav class="navbar navbar-expand-lg fixed-top">
				<Link class="navbar-brand" to="/">
					<img src="logo.png" id="logo" />
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav6"
					aria-controls="navbarNav6"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarNav6">
					<ul class="navbar-nav">
						<h3>
							<li class="nav-item active">
								<Link class="nav-link" to="/">
									Acceuil
								</Link>
							</li>
						</h3>

						<h3>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Festivals
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<h4>
										<Link className="dropdown-item" to="/festival-carthage">
											Carthage
										</Link>
									</h4>
									<h4>
										<Link className="dropdown-item" to="/festival-bizerte">
											Bizerte
										</Link>
									</h4>
									<h4>
										<Link className="dropdown-item" to="/festival-hammamet">
											Hammamet
										</Link>
									</h4>
									<h4>
										<Link className="dropdown-item" to="/festival-el-jem">
											El-Jem
										</Link>
									</h4>
								</div>
							</li>
						</h3>
						<h3>
							<li class="nav-item">
								<Link class="nav-link" to="/contact">
									Contact
								</Link>
							</li>
						</h3>
					</ul>
				</div>
				{!isLoged ? (
					<form class="form-inline">
						<Link class="btn btn-sm btn-success text-white cursor-pointer mr-sm-3" id="login" to="/login">
							se connecter
						</Link>
						<Link class="btn btn-sm btn-primary text-white cursor-pointer mr-sm-5" id="signup" to="/signup">
							s'inscrire
						</Link>
					</form>
				) : (
					<button onClick={logout ? logout : null}>logout</button>
				)}
			</nav>
		</div>
	);
}
