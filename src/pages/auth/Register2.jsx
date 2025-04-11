import React from 'react';
import '../../assets/styles/components/register2.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<div className="register-container">
			<h1 className="register-title">
				Quelques détails en plus pour finaliser votre inscription.
			</h1>

			<div className="register-content">
				<div className="register-image">
					<img src="/city.png" alt="Illustration ville" />
				</div>

				<form className="input-group">
					<input type="text" placeholder="Pays" />
					<input type="text" placeholder="Ville" />
					<input type="text" placeholder="Adresse" />
					<input type="tel" placeholder="Téléphone" />
					<button className="next-btn" onClick={() => navigate("/auth/welcome")}type="submit">S'inscrire</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
