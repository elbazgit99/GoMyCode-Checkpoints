import React from 'react';
import player from '../playerData'; 

const OverallRating = () => {
  return <p className="overall-rating">{player.overallRating} OVR</p>;
};

export default OverallRating;