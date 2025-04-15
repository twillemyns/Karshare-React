import React, { useState } from 'react';
import '../../assets/styles/components/log.css';
import { useNavigate } from 'react-router-dom';
import data from '../../temp/Data.json';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleLogin = () => {
		const user = data.users.find(
			(user) => user.mail === email && user.password === password
		);

		if (user) {
			localStorage.setItem(
				'user',
				JSON.stringify({
					id: user.id,
					name: `${user.first_name} ${user.last_name}`,
					mail: user.mail,
					isAdmin: user.role_id === 1,
				})
			);
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
							type={showPassword ? 'text' : 'password'}
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="checkbox-container" style={{ marginBottom: '10px' }}>
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
