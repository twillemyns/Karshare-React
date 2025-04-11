import React from 'react';
import '../../assets/styles/components/log.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="login-content">
				<div className="wraps">
					<div className="title">
						<h1>Connecte-toi en saisissant ton adresse e-mail et ton mot de passe.</h1>
					</div>
					<div className="log">
						<input type="text" placeholder="E-Mail" />
						<input type="password" placeholder="Password" />
						<button>Connexion</button>
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



