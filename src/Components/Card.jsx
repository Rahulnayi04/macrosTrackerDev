// Card.js
import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-shape"></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default Card;
