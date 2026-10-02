
import React from 'react';
import player from '../playerData'; // Import the player data

const PlayerName = () => {
  return <h2 className="player-name">{player.name}</h2>;
};

export default PlayerName;