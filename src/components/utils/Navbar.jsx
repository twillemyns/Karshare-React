import React from 'react';
import logo from '../../assets/whitelogo.png';
import { FaUserCircle } from 'react-icons/fa'; // seul icon conservé
import '../../assets/styles/components/nav.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	// --- ligne ajoutée : récupère l'utilisateur connecté depuis le localStorage
	const user = JSON.parse(localStorage.getItem('user')); // [AJOUTÉ]

	// --- ligne ajoutée : fonction de déconnexion
	const handleLogout = () => { // [AJOUTÉ]
		localStorage.removeItem('user'); // [AJOUTÉ]
		navigate('/auth/login'); // [AJOUTÉ]
	}; // [AJOUTÉ]

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<img src={logo} alt="Logo Karshare" className="navbar-logo" />
				<p onClick={() => navigate("/")} className='navbar-title'>Karshare</p>
			</div>
			<div className="navbar-right">
				<div className="navbar-link">
					<p onClick={() => navigate("/Planification")}>Planifier un trajet</p>
				</div>
				<div className="navbar-link">
					<FaUserCircle
						className="profile-icon"
						onClick={() => navigate("/auth/login")}
					/>
				</div>

				{/* --- bouton provisoire de déconnexion (visible seulement si utilisateur connecté) */}
				{user && ( // [AJOUTÉ]
					<div className="navbar-link"> {/* [AJOUTÉ] */}
						<p onClick={handleLogout}>Déconnexion</p> {/* [AJOUTÉ] */}
					</div> // [AJOUTÉ]
				)} 
			</div>
		</nav>
	);
};

export default Navbar;
