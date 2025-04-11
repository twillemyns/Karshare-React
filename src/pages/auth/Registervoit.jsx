import React from 'react';
import '../../assets/styles/components/registervoit.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="allvoit">
				<div className="titrevoit">
					<h1>Merci d’enregistrer votre véhicule ainsi que les informations complémentaires. </h1>
				</div>
				<div className="contvoit">
				<p>Date d'obtention du permis :</p>
					<div className="inputvoit">
						<input type="date" placeholder='' />
						<input type="text" placeholder='Modèle de la voiture' />
						<input type="text" placeholder="Plaque d'immatriculation" />
						<input type="text" placeholder='Nombre de places' />
						<input type="text" placeholder='Couleur' />
						<input type="text" placeholder='Nombre de bagages maximum' />
					</div>
					<div className="btnvoit">
						<button className="next-btnvoit" onClick={() => navigate("/Planification")} type="submit">Enregistrer</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
