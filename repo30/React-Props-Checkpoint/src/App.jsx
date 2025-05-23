
import React from 'react';
import './App.css'; 
import { Card } from 'react-bootstrap';

// Import your custom player components
import PlayerName from './components/PlayerName';
import OverallRating from './components/OverallRating';
import PlayerDetails from './components/PlayerDetails';
import PlayerImage from './components/PlayerImage';
import player from './playerData'; 


const firstName = "Juan"; // <-- CHANGE THIS TO YOUR FIRST NAME, or set to "" or null

function App() {
  const isFirstNameProvided = firstName && firstName.trim() !== "";

  return (
    <div className="app-container">
      <Card 
        className="fifa-player-card" 
        style={{ backgroundImage: `url(${player.cardBackgroundUrl})` }} // Dynamic background from player data
      >
        <div className="card-overlay">
          <OverallRating /> {/* Rating usually at top left */}
          <PlayerImage />
          <Card.Body>
            <PlayerName />
            <PlayerDetails />
          </Card.Body>
        </div>
      </Card>

      {/* Dynamic Greeting Message and Image */}
      <div className="greeting-section">
        <p className="greeting-text">
          Hello, {isFirstNameProvided ? firstName : "there!"}
        </p>
        {isFirstNameProvided && (
          <img
            src="https://via.placeholder.com/120/007bff/FFFFFF?text=Fan!" // A placeholder image for a football fan
            alt="Greeting visual"
            className="greeting-image"
          />
        )}
      </div>
    </div>
  );
}



export default App
