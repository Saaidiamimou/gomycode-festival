import React from "react";
import "./main.css";

const Searchbar = ({ value = "", onChange = () => {} }) => (
	<div class="container search">
		<div class="row justify-content-center">
			<div class="col-12 col-md-10 col-lg-8">
				<form class="card card-sm">
					<div class="card-body row no-gutters align-items-center">
						<div class="col-auto" />

						<div class="col">
							<input
								class="form-control form-control-lg form-control-borderless"
								placeholder="Mots clés"
								type="text"
								value={value}
								onChange={e => {
									onChange(e.target.value);
								}}
							/>
						</div>

						<div class="col-auto">
							<button class="btn btn-lg btn-success" type="submit" id="recherche">
								Rechercher
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
);

export default Searchbar;
