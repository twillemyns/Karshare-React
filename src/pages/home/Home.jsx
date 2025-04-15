import React from 'react';
import '../../assets/styles/pages/home/home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	return (
		
		<>
			<main className="all">
				<div className="container-between">
					<div className="element">
						<img src="Lille.jpg" className='ville' alt="" />
					</div>
					<div className="element">
						<img src="paris.jpg" className='ville' alt="" />
					</div>
					<div className="element">
						<img src="marseille.jpg" className='ville' alt="" />
					</div>
				</div>
				<form action="" className='form_group'>
					<div className="form_element">
						<input type="text" placeholder='Départ' />
					</div>
					<div className="form_element">
						<input type="text" placeholder='Destination' />
					</div>
					<div className="form_element">
						<input type="date" />
					</div>
					<div className="form_element">
						<button className="next-btnvoit"
						onClick={() => navigate("/Trajets")}
						type="submit">Rechercher</button>
					</div>
				</form>
				<div className="container-between">
					<div className="element">
						<div className="icons">
							<img src="eco.png" className='icon' alt="" />
						</div>
						<div className="wrap">
							<div className="titre">
								<h3>Partez à l’aventure sans casser la tirelire</h3>
							</div>
							<div className="para">
								<p>
									Envie de bouger ? On a ce qu’il vous faut ! Découvrez des trajets malins et stylés en covoiturage, le tout à prix mini.
								</p>
							</div>
						</div>
					</div>
					<div className="element">
						<div className="icons">
							<img src="money.png" className='icon' alt="" />
						</div>
						<div className="wrap">
							<div className="titre">
								<h3>Trouve, clique, roule !</h3>
							</div>
							<div className="para">
								<p>
									Réserver un trajet ? Un jeu d’enfant. Grâce à notre appli ultra simple (et un peu magique), tu peux dégoter une place près de chez toi en deux temps trois clics.
								</p>
							</div>
						</div>
					</div>
					<div className="element">
						<div className="icons">
							<img src="temps.png" className='icon' alt="" />
						</div>
						<div className="wrap">
							<div className="titre">
								<h3>Trajets sécurisés, réservation rapide</h3>
							</div>
							<div className="para">
								<p>
									Des trajets sécurisés, une réservation rapide et facile. Simple à utiliser, efficace pour vos déplacements. Profitez de nos services de qualité,accessibles en un clin d'œil.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
