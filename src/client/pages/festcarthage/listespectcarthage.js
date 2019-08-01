import React, { Component } from "react";
import Cartespectc from "./carspectc";
import Searchbar from "../../components/main/searchbar";
import { Link } from "react-router-dom";
import "./carthage.css";

const contactInformation = [
	{
		imgUrl: "https://www.jetsetmagazine.net/__admin/__admin_medias/modules/listes/article_839/carthage.jpg",
		name: "Le Lac des cygnes  ",
		date: "11 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "http://medias.rtci.tn/wp-content/uploads/2019/07/awa-dance3-1200x650.jpg",
		name: "Le Ballet japonais Awa Dance (Japon)",
		date: "12 juillet 2019",
		prixgradain: " Prix gradin :20dt",
		prixchaise: "Prix chaise :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://i2.wp.com/www.leconomistemaghrebin.com/wp-content/uploads/2019/07/fic5.jpg?resize=696%2C464",
		name: " Mansour Rahbani",
		date: "15 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "http://faiayounan.net/assets/imgs/bio/en.jpg ",
		name: "Faia Younan (syrie)",
		date: "18 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "http://festivaldecarthage.tn/wp-content/uploads/2019/07/LATIFA_event-1200x650.jpg",
		name: "Latifa Arfaoui ",
		date: "19 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl:
			"http://festivaldecarthage.tn/wp-content/uploads/2019/07/Capture-d%E2%80%99%C3%A9cran-2019-07-13-%C3%A0-10.23.28-PM.png",
		name: "Adham Nabulsi (Palestine)",
		date: "20 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl:
			"http://festivaldecarthage.tn/wp-content/uploads/2019/07/66607895_750362985382699_3525006760794390528_o-1200x650.jpg",
		name: "Soolking (Algérie)",
		date: "21 juillet 2019",
		prixgradain: " Prix gradin :50dt",
		prixchaise: "Prix chaise :80dt",
		button: "réserver "
	},
	{
		imgUrl: "http://festivaldecarthage.tn/wp-content/uploads/2019/07/wajiha-1200x650.jpg",
		name: "Big Bossa de Wajiha Jendoubi",
		date: "22 juillet 2019",
		prixgradain: " Prix gradin :20dt",
		prixchaise: "Prix chaise :40dt",
		button: "réserver "
	},
	{
		imgUrl: "http://kapitalis.com/tunisie/wp-content/uploads/2019/07/Chaoui-et-Electro-Btaihi-Festival-de-Carthage.jpg",
		name: " Zied Zouari Et Lina Ben Ali",
		date: "23 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl:
			"http://festivaldecarthage.tn/wp-content/uploads/2019/07/66469263_750346432051021_2239168100119347200_o-1200x650.jpg",
		name: "Adnan Chaouachi (Tunisie)",
		date: "24 juillet 2019",
		prixgradain: " Prix gradin :20dt",
		prixchaise: "Prix chaise :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://cdn-az.allevents.in/banners/e5326160-a4b9-11e9-8c3a-b1ce8b6ff81e-rimg-w526-h276-gmir.jpg",
		name: "« Ziara » De Sami Lajmi",
		date: "25 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://cdn2.webmanagercenter.com/di/wp-content/uploads/2017/08/nassif-zeytoun.jpg",
		name: "Nassif Zeitoun",
		date: "25 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "http://festivaldecarthage.tn/wp-content/uploads/2019/07/ghalia-1200x650.jpg",
		name: "Ghalia Benali (Tunisie)",
		date: "27 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl:
			"data:image/jpeg;base64,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",
		name: "Lotfi Bouchnak (Tunisie)",
		date: "28 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.tunisie.co/uploads/images/content/leo-rojas-080719-4.jpg",
		name: "Leo Rojas (Équateur)",
		date: "29 juillet 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/ousemafarhat-080719-1.jpg",
		name: "Oussama Farhat",
		date: "30 juillet 2019",
		prixgradain: " Prix gradin :20dt",
		prixchaise: "Prix chaise :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://www.tunisie.co/uploads/images/content/artiste-080719-1.jpg",
		name: "Lartiste (Maroc)",
		date: "01 aout 2019",
		prixgradain: " Prix gradin :50dt",
		prixchaise: "Prix chaise :80dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/reem-080719-1.jpg",
		name: "Reem Talhami ",
		date: "02 aout 2019",
		prixgradain: " Prix gradin :20dt",
		prixchaise: "Prix chaise :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://pbs.twimg.com/media/D_tWWcjXoAA14Ld.jpg",
		name: "Ragheb Alama",
		date: "03 aout 2019",
		prixgradain: " Prix gradin :50dt",
		prixchaise: "Prix chaise :80dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/100voix-080719-1.jpg",
		name: "Gospel pour 100 voix",
		date: "04 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl:
			"http://festivaldecarthage.tn/wp-content/uploads/2018/08/38750919_551634845255515_5861621595776221184_o-1200x650.jpg",
		name: "Ballet chinois",
		date: "05 aout 2019",
		prixgradain: " Prix gradin :20dt",
		prixchaise: "Prix chaise :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/nidhal-080719-1.jpg",
		name: "« La Hakka La Hakka » de Nidhal Saadi",
		date: "06 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://i.ytimg.com/vi/Wgku2A9ycj4/maxresdefault.jpg",
		name: "Nour Mhanna Syrie",
		date: "07 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/cendrillon-080719-1.jpg",
		name: "Cendrillon (France)",
		date: "08 aout 2019",
		prixgradain: " Prix gradin :15dt",
		prixchaise: "Prix chaise :15dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/carole-110719-2.jpg",
		name: "Carole Samaha ",
		date: "09 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/hadhra-080719-1.jpg",
		name: "Hadhrat Sidi Ben Aissa ",
		date: "10 aout 2019",
		prixgradain: " Prix gradin :20dt",
		prixchaise: "Prix chaise :40dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/marwenolfa-080719-1.jpg",
		name: "Olfa  & Marouane Khoury ",
		date: "13 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "http://festivaldecarthage.tn/wp-content/uploads/2019/07/tarek.jpg",
		name: "TarakAl-ArabiTarkan & fils ",
		date: "14 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://tunisie.co/uploads/images/content/abdeli-080719-1.jpg",
		name: " Lotfi Abdelli",
		date: "16 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "http://shops.tn/wp-content/uploads/2019/07/67115951_752388655180132_718404203050958848_o.jpg",
		name: "Assi Al Hilani",
		date: "17 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl: "https://celebrity.tn/wp-content/uploads/2018/07/saber-rebai-1.jpg",
		name: "Saber Rebai ",
		date: "16 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
		button: "réserver "
	},
	{
		imgUrl:
			"http://festivaldecarthage.tn/wp-content/uploads/2019/07/67294046_756730454745952_9009035391914737664_o-550x350.jpg",
		name: "Nassif Zaytoun",
		date: "31 aout 2019",
		prixgradain: " Prix gradin :30dt",
		prixchaise: "Prix chaise :50dt",
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
			<div className="backgroundc">
				<Searchbar
					value={this.state.titleFilter}
					onChange={newTitleFilter => {
						this.setState({
							titleFilter: newTitleFilter
						});
					}}
				/>
				<div className="title-carthage">
					{/* <h1 id="title">Festivals de Carthage</h1> */}
					<Link to="/lieuc">
						<img
							id="title"
							src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67371746_504327377044904_6316652275318128640_n.png?_nc_cat=109&_nc_oc=AQmIQnB4IqbjlhLwSMy_PcIZojM8GCz2UAyeyGGzpzG-msefS8beiSL_PZ4cag7hbR8&_nc_ht=scontent.ftun1-1.fna&oh=3db4906b989422e08691121358d377b7&oe=5DAAF86D"
						/>
					</Link>
					<div className="festcarthage" />
				</div>
				<Cartespectc contactList={this.getVisibleMovies()} />
			</div>
		);
	}
}

export default App;
