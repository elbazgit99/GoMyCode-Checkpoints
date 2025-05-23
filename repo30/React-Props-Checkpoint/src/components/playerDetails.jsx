
import React from 'react';
import player from '../playerData'; // Import the player JSON object

const PlayerDetails = () => {
  return (
    <div className="player-details">
      <p>Position: <strong>{player.position}</strong></p>
      <p>Club: <strong>{player.club}</strong></p>
      <p>Nation: <strong>{player.nation}</strong></p>
    </div>
  );
};

export default PlayerDetails;