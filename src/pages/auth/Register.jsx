import React from 'react';
import '../../assets/styles/components/register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	return (
		<div className="register-wrapper">
			<h1 className="register-title">
				Remplissez le formulaire pour vous inscrire et profiter du covoiturage en toute simplicité.
			</h1>

			<div className="register-content">
				<div className="form-section">
					<div className="input-group">
						<input type="text" placeholder="Nom d'utilisateur" />
						<input type="text" placeholder="Nom" />
						<input type="text" placeholder="Prénom" />
						<input type="date" placeholder="Date de naissance" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Mot de passe" />
					</div>
					<button className="next-btn" onClick={() => navigate("/auth/register2")}>
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
