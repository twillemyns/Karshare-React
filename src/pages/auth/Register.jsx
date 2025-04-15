import React, { useState } from 'react';
import '../../assets/styles/components/register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [nom, setNom] = useState('');
	const [prenom, setPrenom] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const isPasswordValid = (pwd) => {
		const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
		return regex.test(pwd);
	};

	const handleRegister = () => {
		// Vérifie si tous les champs sont remplis
		if (!username || !nom || !prenom || !birthDate || !email || !password) {
			setErrorMessage("Veuillez remplir tous les champs.");
			return;
		}

		// Vérifie la validité du mot de passe
		if (!isPasswordValid(password)) {
			setErrorMessage("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.");
			return;
		}

		const users = JSON.parse(localStorage.getItem('users')) || [];
		const existingUser = users.find(u => u.mail === email);
		if (existingUser) {
			setErrorMessage("Cet email est déjà utilisé.");
			return;
		}

		const newUser = {
			id: Date.now(),
			username,
			nom,
			prenom,
			birthDate,
			mail: email,
			password
		};

		const updatedUsers = [...users, newUser];
		localStorage.setItem('users', JSON.stringify(updatedUsers));
		localStorage.setItem('user', JSON.stringify(newUser));

		// ✅ Redirection vers l'étape suivante du formulaire
		navigate('/auth/register2');
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
							type={showPassword ? 'text' : 'password'}
							placeholder="Mot de passe"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="checkbox-container" style={{ margin: '10px 0' }}>
							<input
								type="checkbox"
								id="showPassword"
								checked={showPassword}
								onChange={() => setShowPassword(!showPassword)}
							/>
							<label htmlFor="showPassword" style={{ marginLeft: '5px' }}>
								Afficher le mot de passe
							</label>
						</div>
					</div>

					{errorMessage && <div className="error-message">{errorMessage}</div>}

					<button className="next-btn" onClick={handleRegister}>
						Suivant
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
