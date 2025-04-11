import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/planification.css'

function Planification() {
	const navigate = useNavigate();
	return (
		<>
			<div className="all margin_page">
				<div className="container_responsive">


					<div className="container">
						<h1>Planification Trajet</h1>
						<div className="cont">
							<div className="input">
								<input type="text" placeholder='Départ' />
								<input type="text" placeholder='Destination' />
								<input type="date" />
								<input type="time" />
								<input type="search" placeholder='Voiture' />
								<button>Publier</button>
							</div>
							<div className="inscriptionvoiture">
							<p>
							Aucune voiture enregistrée ? Ajoutez-en une dès maintenant.{' '}
								<span onClick={() => navigate('/auth/Permis')} className="regis">
									<u>ici</u>
								</span>
							</p>
							</div>

						</div>
					</div>



					<div className="illustration">
						<img src="plan.jpg" className='appli' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Planification