import React, { useState } from 'react';
import '../../assets/styles/components/registervoit.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		date: '',
		modele: '',
		plate: '',
		places: '',
		color: '',
		bags: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const isValidPlate = (plate) => /^[A-Z]{2}-\d{3}-[A-Z]{2}$/.test(plate);
	const isValidPlaces = (places) => {
		const n = parseInt(places);
		return !isNaN(n) && n >= 1 && n <= 5;
	};
	const isValidBags = (bags) => {
		const n = parseInt(bags);
		return !isNaN(n) && n >= 0 && n <= 4;
	};

	const isFormValid =
		formData.date &&
		formData.modele &&
		isValidPlate(formData.plate) &&
		isValidPlaces(formData.places) &&
		formData.color &&
		isValidBags(formData.bags);

	return (
		<div className="allvoit">
			<div className="titrevoit">
				<h1>Merci d’enregistrer votre véhicule ainsi que les informations complémentaires.</h1>
			</div>
			<div className="contvoit">
				<p>Date d'obtention du permis :</p>
				<div className="inputvoit">
					<input type="date" name="date" value={formData.date} onChange={handleChange} />
					<input type="text" name="modele" placeholder="Modèle de la voiture" value={formData.modele} onChange={handleChange} />
					<input type="text" name="plate" placeholder="Plaque d'immatriculation" value={formData.plate} onChange={handleChange} />
					<input type="text" name="places" placeholder="Nombre de places" value={formData.places} onChange={handleChange} />
					<input type="text" name="color" placeholder="Couleur" value={formData.color} onChange={handleChange} />
					<input type="text" name="bags" placeholder="Nombre de bagages maximum" value={formData.bags} onChange={handleChange} />
				</div>
				<div className="btnvoit">
					<button
						className="next-btnvoit"
						onClick={() => navigate("/Planification")}
						type="submit"
						disabled={!isFormValid}
					>
						Enregistrer
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
