import React, { Component } from "react";
import Cartespect from "./cartespect";
import Searchbar from "../../components/main/searchbar";
import Lieub from "./lieub";
import { Link } from "react-router-dom";

const contactInformation = [
	{
		imgUrl:
			"https://www.mohamedalikammoun.com/wp-content/uploads/2015/04/shinymen-La-Fleuriste-Khaled-Slama-Pr%C3%A9ludes-Med-Ali-Kammoun-136.jpg",
		name: " Mohamed Ali Kamoun ",
		date: "12 juillet 2019",
		prixchaise: "Prix chaise :15dt",
		prixgradain: " Prix gradin :10dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.tekiano.com/wp-content/uploads/2019/05/Jamila-Chihi-1-769x1024.jpg",
		name: "Jamila Chihi",
		date: "13 juillet 2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "http://www.out.tn/uploads/media/default/0001/06/thumb_5709_default_big.jpeg",
		name: "“Ziara” de Sami Lajm ",
		date: "15 juillet 2019",
		prixchaise: "Prix chaise :25dt",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.tekiano.com/wp-content/uploads/2018/12/porto-farina-film-1-680x400.jpg",
		name: "“Porto Farina” et “Cinecitta”",
		date: "16 juillet 2019",
		prixchaise: "Prix chaise :10dt",
		prixgradain: " Prix gradin :10dt",
		button: "réserver "
	},
	{
		imgUrl:
			"http://marseille.aujourdhui.fr/uploads/assets/evenements/recto_fiche/2019/03/1944786_nidhal-saadi-dans-la-hakka-la-hakka-theatre-le-royal-comedie-nice-nice.jpg",
		name: " Nidhal Saadi",
		date: "18 juillet 2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "http://www.kharjet.tn/wp-content/uploads/2019/07/Spectacle-%E2%80%9CNouba%E2%80%9D-de-Samir-Agrebi.jpg",
		name: " Samir Agrebi",
		date: "21 juillet 2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://i.ytimg.com/vi/mB2OMsBUHdA/maxresdefault.jpg",
		name: "“La petite sirène”",
		date: "22 juillet 2019",
		prixchaise: "Prix chaise :7dt",
		prixgradain: " Prix gradin :7dt",
		button: "réserver "
	},
	{
		imgUrl: "http://www.festivalbizerte.com/img/artiste/aymen-lessigue.jpg",
		name: "Aymen Lessigue et Raouf Maher ",
		date: "24 juillet 2019",
		prixchaise: "Prix chaise :15dt",
		prixgradain: " Prix gradin :10dt",
		button: "réserver "
	},
	{
		imgUrl:
			"https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67793349_664945857341708_6706797187407282176_n.jpg?_nc_cat=108&_nc_oc=AQk7Pa2b8czGS3rjcX178V7MwdjVC0KoekWyiymoK9X0-6bPmc2o1z0ci6acpUylePQ&_nc_ht=scontent.ftun1-1.fna&oh=52f59eb69aae1ef67322b515d10b9fc2&oe=5DA00AC2",
		name: " Bassem & Karim ",
		date: "26 juillet 2019",
		prixchaise: "Prix chaise :25dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},

	{
		imgUrl: "http://faiayounan.net/assets/imgs/bio/en.jpg",
		name: "Faya Younan ",
		date: "27 juillet 2019",
		prixchaise: "Prix chaise :30dt",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.tunisie.co/uploads/images/content/bigbossawajihajendoubi-280319-u.jpg",
		name: "“Big Boussa” de Wajiha Jendoubi ",
		date: "28 juillet 2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkNSJ8FA242npCntvlCtmK7isMQzGNrkYqlDuRXRaQo9zxNsrRA",
		name: " Leo Rojas et Silvio Danza",
		date: "30 juillet 2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :30dt",
		button: "réserver "
	},
	{
		imgUrl: "http://www.kharjet.tn/wp-content/uploads/2019/07/Weld-Oumou.jpg",
		name: " Naima El Jeni ",
		date: "01 aout 2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://m.media-amazon.com/images/I/911Wkw37NNL._SS500_.jpg",
		name: "Hemlyn",
		date: "02 aout 2019",
		prixchaise: "Prix chaise :15dt",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.milleworld.com/wp-content/uploads/2018/08/featured-nancy-600x405.jpg",
		name: "Nancy Ajrem ",
		date: "03 aout 2019",
		prixchaise: "Prix chaise :40dt",
		prixgradain: " Prix gradin :30dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tn24.ween.tn/news/uploads/articles/138318.jpg",
		name: "Sofiène Ben Farhat",
		date: "05 aout  2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "http://www.kharjet.tn/wp-content/uploads/2019/07/Spectacle-%E2%80%9CBest-of-Rap-Tunisien%E2%80%9D.jpg",
		name: "Best of Rap Tunisien",
		date: "07 aout  2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl:
			"http://www.kharjet.tn/wp-content/uploads/2019/07/Spectacle-%E2%80%9CMedha%E2%80%9D-de-Noureddine-B%C3%A9ji.jpg",
		name: "Noureddine Béji ",
		date: "09 aout  2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://celebrity.tn/wp-content/uploads/2019/03/hassen-doss-3-1024x825.jpg",
		name: "Hassen Doss ",
		date: "14 aout  2019",
		prixchaise: "Prix chaise :20dt",
		prixgradain: " Prix gradin :15dt",
		button: "réserver "
	},
	{
		imgUrl: "http://www.kharjet.tn/wp-content/uploads/2019/07/Adham-Nabulsi-1.jpg",
		name: "Adham Nabulsi",
		date: "15 aout  2019",
		prixchaise: "Prix chaise :30dt",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tikashop.poste.tn/uploads/billet/ca72a8f2f4770709c1104ee34a600dac.jpeg",
		name: "Marwen Khouri & Olfa ",
		date: "16 aout  2019",
		prixchaise: "Prix chaise :30dt",
		prixgradain: " Prix gradin :20dt",
		button: "réserver "
	},
	{
		imgUrl: "http://www.webdo.tn/wp-content/uploads/2017/07/saber.jpg",
		name: "Saber Rebaii",
		date: "17 aout  2019",
		prixchaise: "Prix chaise :40dt",
		prixgradain: " Prix gradin :30dt",
		button: "réserver "
	}
];
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactInformation,
			titleFilter: ""
		};
	}

	getVisibleMovies() {
		return this.state.contactInformation.filter(el =>
			el.name.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim())
		);
	}

	render() {
		return (
			<div className="backgroundb">
				<Searchbar
					value={this.state.titleFilter}
					onChange={newTitleFilter => {
						this.setState({
							titleFilter: newTitleFilter
						});
					}}
				/>
				<div className="title-bizerte">
					<div className="festbizerte">
						<Link to="/lieub">
							<img
								id="title"
								src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67759164_337146557162917_8496075791212216320_n.png?_nc_cat=101&_nc_oc=AQlefZiqt077IgvAl_U2psTD8lYm2J67Ic9Nimeg8Tggbk4cy7lcZ0TANM8YTzoX86I&_nc_ht=scontent.ftun1-1.fna&oh=bb147f0feb08c1689ca54adbc2f0ae3d&oe=5DA06179"
							/>
						</Link>
					</div>
				</div>
				<Cartespect contactList={this.getVisibleMovies()} />
			</div>
		);
	}
}

export default App;
