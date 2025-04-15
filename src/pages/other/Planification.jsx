import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/planification.css';

function Planification() {
	const navigate = useNavigate();

	const [depart, setDepart] = useState('');
	const [destination, setDestination] = useState('');
	const [date, setDate] = useState('');
	const [heure, setHeure] = useState('');
	const [voiture, setVoiture] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = () => {
		if (!depart || !destination || !date || !heure || !voiture) {
			setError("Merci de remplir tous les champs.");
			return;
		}

		const now = new Date();
		const selectedDateTime = new Date(`${date}T${heure}`);

		if (selectedDateTime < now) {
			setError("La date et l'heure doivent être ultérieures à l'heure actuelle.");
			return;
		}

		setError(''); 

		const trajet = {
			depart,
			destination,
			date,
			heure,
			voiture,
		};

		console.log('Trajet publié:', trajet);
		navigate('/trajets');
	};

	return (
		<div className="all margin_page">
			<div className="container_responsive">
				<div className="container">
					<h1>Planification Trajet</h1>
					<div className="cont">
						<div className="input gap1">
							<input type="text" placeholder="Départ" value={depart} onChange={(e) => setDepart(e.target.value)} />
							<input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
							<input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
							<input type="time" value={heure} onChange={(e) => setHeure(e.target.value)} />
							<input type="search" placeholder="Voiture" value={voiture} onChange={(e) => setVoiture(e.target.value)} />

							
							{error && <p className="error-message">{error}</p>}

							<button className="btn-publier" onClick={handleSubmit}>Publier</button>
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
					<img src="plan.jpg" className="appli" alt="illustration trajet" />
				</div>
			</div>
		</div>
	);
}

export default Planification;
