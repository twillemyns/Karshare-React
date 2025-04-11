import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/planification.css'

function Profil() {
	const navigate = useNavigate();
	return (
		<>
			<div className="alls">
				<div className="container">
					<div className="Photo">
					<img src="/user.png" alt="" />
					</div>
					<div className="Prenom">

					</div>
					<div className="age">

					</div>
				</div>

			</div>
		</>
	)
}

export default Profil