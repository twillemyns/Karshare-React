import React, { useState } from 'react';
import '../../assets/styles/components/log.css';
import { useNavigate } from 'react-router-dom';
import data from '../../temp/Data.json';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		// Vérifier si l'email et le mot de passe sont corrects
		const user = data.users.find(
			(user) => user.mail === email && user.password === password
		);

		if (user) {
			// Stocker les infos utiles de l'utilisateur dans le localStorage (sans le mot de passe)
			localStorage.setItem(
				'user',
				JSON.stringify({
					id: user.id,
					name: user.name,
					mail: user.mail,
					isAdmin: user.isAdmin || false,
				})
			);

			// Rediriger vers la page d'accueil
			navigate('/');
		} else {
			setErrorMessage('Erreur mot de passe invalide ou compte inexistant');
		}
	};

	return (
		<>
			<div className="login-content">
				<div className="wraps">
					<div className="title">
						<h1>Connecte-toi en saisissant ton adresse e-mail et ton mot de passe.</h1>
					</div>
					<div className="log">
						<input
							type="text"
							placeholder="E-Mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button onClick={handleLogin}>Connexion</button>
						{errorMessage && <div className="error-message">{errorMessage}</div>}
						<div className="register">
							<p>
								Pas encore de compte ? Inscrivez-vous{' '}
								<span onClick={() => navigate('/auth/register')} className="regis">
									<u>ici</u>
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="img">
					<img src="/imglog.png" alt="connexion" />
				</div>
			</div>
		</>
	);
};

export default Login;
