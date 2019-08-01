import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import "./footer.css";

const FooterPagePro = () => {
	return (
		<MDBFooter color="indigo" className="font-small ">
			<MDBContainer className="footer">
				<MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
					<MDBCol md="2" className="b-3">
						<h4 className="title font-weight-bold">
							<Link to="/">Acceuil</Link>
						</h4>
					</MDBCol>
					<MDBCol md="2" className="b-3">
						<h6 className="title font-weight-bold">
							<Link href="/">Festivals</Link>
						</h6>
					</MDBCol>
					<MDBCol md="2" className="b-3">
						<h6 className="title font-weight-bold">
							<Link to="/contact">Contact</Link>
						</h6>
					</MDBCol>
				</MDBRow>
				<hr className="rgba-white-light" style={{ margin: "0 15%" }} />
				<MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
					<MDBCol md="8" sm="12" className="mt-5">
						<p style={{ lineHeight: "1.7rem" }}>
							Ne perdez plus votre temps à chercher dans plusieurs sites les bons plans de sortie près de chez vous et
							ne ratez plus aucun événement! Mahrajanet.tn est un véritable guide pour les Tunisiens qui regroupe toutes
							les bonnes adresses pour passer un bon moment en famille ou entre amis.
						</p>
					</MDBCol>
				</MDBRow>
				<hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
				<MDBRow className="pb-3">
					<MDBRow>
						<MDBCol md="12" className="py-5" className="py-5">
							<div className="mb-5 flex-center">
								<a className="fb-ic" href="/">
									<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" />
								</a>

								<a className="gplus-ic" href="/">
									<i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x" />
								</a>

								<a className="ins-ic" href="/">
									<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" />
								</a>
							</div>
						</MDBCol>
					</MDBRow>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				Made with love in Tunisia
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:
					<a href="https://www.MDBootstrap.com"> www.mahrajanet.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default FooterPagePro;
