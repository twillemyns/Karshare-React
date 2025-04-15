import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/profil.css';

function Profil() {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [car, setCar] = useState(null);

	useEffect(() => {
		// Récupère l'utilisateur depuis localStorage
		const storedUser = JSON.parse(localStorage.getItem("user"));
		if (storedUser) {
			setUser(storedUser);

			// Simuler un appel pour récupérer la voiture en fonction de l'ID
			const carsData = [
				{
					user_id: 3,
					color: "Noir",
					model: "Peugeot 208",
					nb_seats: 4,
					luggage_accepted: false,
					plate: "CD-456-EF",
					photo: "https://example.com/car2.jpg"
				}
			];
			const userCar = carsData.find(c => c.user_id === storedUser.id);
			if (userCar) {
				setCar(userCar);
			}
		} else {
			navigate('/login'); // redirige si non connecté
		}
	}, [navigate]);

	if (!user) return <div>Chargement...</div>;

	return (
		<div className="alls">
			<div className="container">
				<div className="Photo">
					<img src="/user.png" alt="Photo de profil" />
				</div>
				<div className="Prenom">
					<h2>{user.first_name} {user.last_name}</h2>
				</div>
				<div className="age">
					<p>Âge : {user.age} ans</p>
				</div>
			</div>

			<div className="info">
				<p>Permis : {user.has_license ? "Oui ✅" : "Non ❌"}</p>
				{car ? (
					<div className="car">
						<h3>Voiture :</h3>
						<img src={car.photo} alt="Voiture" width="200" />
						<p>{car.model} - {car.color} ({car.nb_seats} places)</p>
						<p>Plaque : {car.plate}</p>
					</div>
				) : (
					<p>Pas de voiture enregistrée.</p>
				)}
				<div className="description">
					<p>
						{user.description || "Conducteur ou passager motivé, prêt à voyager dans la bonne humeur ! ✨"}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Profil;
