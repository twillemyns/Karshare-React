import React, { useState } from 'react';
import '../../assets/styles/components/register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	// États pour chaque champ
	const [username, setUsername] = useState('');
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	// Validation du mot de passe
	const isPasswordValid = (pwd) => {
		const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
		return regex.test(pwd);
	};

	const handleRegister = () => {
		// Vérification du mot de passe
		if (!isPasswordValid(password)) {
			setErrorMessage("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.");
			return;
		}

		// Vérifier si l'email est déjà utilisé
		const users = JSON.parse(localStorage.getItem('users')) || [];
		const existingUser = users.find(u => u.mail === email);
		if (existingUser) {
			setErrorMessage("Cet email est déjà utilisé.");
			return;
		}

		// Créer un nouvel utilisateur
		const newUser = {
			id: Date.now(),
			username,
			nom,
			prenom,
			birthDate,
			mail: email,
			password
		};

		// Ajouter et stocker dans le localStorage
		const updatedUsers = [...users, newUser];
		localStorage.setItem('users', JSON.stringify(updatedUsers));

		// Se connecter automatiquement
		localStorage.setItem('user', JSON.stringify(newUser));

		// Rediriger
		navigate('/');
	};

	return (
		<div className="register-wrapper">
			<h1 className="register-title">
				Remplissez le formulaire pour vous inscrire et profiter du covoiturage en toute simplicité.
			</h1>

			<div className="register-content">
				<div className="form-section">
					<div className="input-group">
						<input
							type="text"
							placeholder="Nom d'utilisateur"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Nom"
							value={nom}
							onChange={(e) => setNom(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Prénom"
							value={prenom}
							onChange={(e) => setPrenom(e.target.value)}
						/>
						<input
							type="date"
							placeholder="Date de naissance"
							value={birthDate}
							onChange={(e) => setBirthDate(e.target.value)}
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Mot de passe"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{errorMessage && <div className="error-message">{errorMessage}</div>}
					<button className="next-btn" onClick={handleRegister}>
						S'inscrire
					</button>
				</div>

				<div className="image-section">
					<img src="/formulaire.png" alt="Illustration formulaire" />
				</div>
			</div>
		</div>
	);
};

export default Register;
