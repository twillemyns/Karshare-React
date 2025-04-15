import React, { useState } from 'react';
import '../../assets/styles/components/register2.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		pays: '',
		ville: '',
		adresse: '',
		telephone: '',
	});

	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		setErrorMessage('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { pays, ville, adresse, telephone } = formData;

		if (!pays || !ville || !adresse || !telephone) {
			setErrorMessage('Veuillez remplir tous les champs.');
			return;
		}

		const phoneRegex = /^\d{10}$/;
		if (!phoneRegex.test(telephone)) {
			setErrorMessage('Le numéro de téléphone doit contenir exactement 10 chiffres.');
			return;
		}

		// Correspondance avec le JSON (champs en anglais)
		const mappedData = {
			country: pays,
			city: ville,
			address: adresse,
			phone: `+33${telephone.slice(1)}`, // format international si le téléphone commence par 0
		};

		console.log('Données à envoyer (format JSON) :', mappedData);

		navigate("/auth/welcome");
	};

	return (
		<div className="register-container">
			<h1 className="register-title">
				Quelques détails en plus pour finaliser votre inscription.
			</h1>

			<div className="register-content">
				<div className="register-image">
					<img src="/city.png" alt="Illustration ville" />
				</div>

				<form className="input-group" onSubmit={handleSubmit}>
					<input
						type="text"
						name="pays"
						placeholder="Pays"
						value={formData.pays}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="ville"
						placeholder="Ville"
						value={formData.ville}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="adresse"
						placeholder="Adresse"
						value={formData.adresse}
						onChange={handleChange}
					/>
					<input
						type="tel"
						name="telephone"
						placeholder="Téléphone"
						value={formData.telephone}
						onChange={handleChange}
					/>

					{errorMessage && (
						<p className="error-message">{errorMessage}</p>
					)}

					<button className="next-btn" type="submit">
						S'inscrire
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
