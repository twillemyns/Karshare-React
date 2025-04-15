import React from 'react';
import '../../assets/styles/components/trajet.css'
import { FaCar, FaStar, FaCheckCircle } from 'react-icons/fa';

const RideCard = () => {
  return (
    <div className="ride-card">
      <div className="ride-info">
        <div className="time">
          <span>09:30</span>
          <div className="duration-line">
            <span className="duration">2h20</span>
          </div>
          <span>11:50</span>
        </div>
        <div className="locations">
          <span>Lens</span>
          <span>Maisons-Alfort</span>
        </div>
        <div className="price">
          <span>15<sup>,59</sup> €</span>
        </div>
      </div>
      <div className="driver-info">
        <FaCar className="car-icon" />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Sébastien"
          className="profile-pic"
        />
        <span className="driver-name">Sébastien</span>
        <FaCheckCircle className="verified-icon" />
        <span className="rating">
          <FaStar /> 4,9
        </span>
      </div>
    </div>
  );
};

export default RideCard;
