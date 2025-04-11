import React from 'react';
import '../../assets/styles/components/permis.css';
import { useNavigate } from 'react-router-dom';

const Permis = () => {
	const navigate = useNavigate();

	const handleNoClick = () => {
		alert("Pas de souci ! Vous pouvez tout de même utiliser notre service sans permis.");
		navigate("/");
	};

	return (
		<>
			<div className="tout">
				<div className="title">
					<h1>Avez vous le permis ?</h1>
				</div>
				<div className="btn">
					<button className="next-btn" onClick={() => navigate("/auth/Voiture")}>
						Oui
					</button>
					<button className="next-btn" onClick={handleNoClick}>
						Non
					</button>
				</div>
			</div>
		</>
	);
};

export default Permis;
