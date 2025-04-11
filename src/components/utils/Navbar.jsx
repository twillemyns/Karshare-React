import React from 'react';
import logo from '../../assets/whitelogo.png';
import { FaUserCircle } from 'react-icons/fa'; // seul icon conservé
import '../../assets/styles/components/nav.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
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
				<div href="/profil" className="navbar-link">
					<FaUserCircle className="profile-icon" onClick={() => navigate("/auth/login")} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
