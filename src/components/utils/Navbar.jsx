import React from 'react';
import logo from '../../assets/whitelogo.png';
import { FaUserCircle } from 'react-icons/fa';
import '../../assets/styles/components/nav.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	// Récupère l'utilisateur connecté depuis le localStorage
	const user = JSON.parse(localStorage.getItem('user'));

	// Fonction de déconnexion
	const handleLogout = () => {
		localStorage.removeItem('user');
		navigate('/auth/login');
	};

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<img src={logo} alt="Logo Karshare" className="navbar-logo" />
				<p onClick={() => navigate("/")} className="navbar-title">Karshare</p>
			</div>
			<div className="navbar-right">
				<div className="navbar-link">
					<p
						onClick={() => {
							if (user) {
								navigate("/Planification");
							} else {
								alert("Vous devez être connecté pour planifier un trajet.");
								navigate("/auth/login");
							}
						}}
					>
						Planifier un trajet
					</p>
				</div>
				<div className="navbar-link">
					<FaUserCircle
						className="profile-icon"
						onClick={() => navigate(user ? "/Profil" : "/auth/login")}
					/>
				</div>

				{/* Bouton de déconnexion visible seulement si utilisateur connecté */}
				{user && (
					<div className="navbar-link">
						<p onClick={handleLogout}>Déconnexion</p>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
