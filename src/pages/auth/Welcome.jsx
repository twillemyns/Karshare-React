import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/'); 
  };

  return (
    <div className="welcome-container">
      <p className="register-title">
        Merci pour votre inscription ! L'aventure du covoiturage commence maintenant.
      </p>
      <img src="/Voiture.png" className="car-image" />
      <button className="next-button" onClick={handleNext}>Suivant</button>
    </div>
  );
};

export default Welcome;
