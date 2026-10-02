
import React from 'react';
import player from '../playerData'; // Import the player JSON object
import Card from 'react-bootstrap/Card';

const PlayerImage = () => {
  return (
    <Card.Img variant="top" src={player.imageUrl} alt={player.name} className="player-card-image" />
  );
};

export default PlayerImage;