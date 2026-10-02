import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import UserList from './UserList'; // Import the UserList component
import './App.css'; // Import the specific CSS for App component

function App() {
  const [listOfUsers, setListOfUsers] = useState([]); // State to hold the list of users
  const [loading, setLoading] = useState(true);     // State to manage loading status
  const [error, setError] = useState(null);         // State to store any errors during fetch

  // useEffect hook to perform data fetching when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true); // Set loading to true before starting the fetch operation
        // Make a GET request to the JSONPlaceholder API for users
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data); // Update the state with the fetched user data
      } catch (err) {
        // Catch any errors during the fetch and update the error state
        setError('Failed to fetch users. Please check your network connection.');
        console.error('Error fetching data:', err); // Log the error for debugging purposes
      } finally {
        setLoading(false); // Set loading to false once the fetch operation is complete
      }
    };

    fetchUsers(); // Call the async function to fetch users
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="app-container">
      <h1 className="app-title">Utilisateurs JSONPlaceholder</h1>

      {loading && (
        <div className="loading-message">
          Chargement des utilisateurs...
        </div>
      )}

      {error && (
        <div className="error-message">
          <p className="error-title">Erreur de chargement :</p>
          <p>{error}</p>
          <p className="error-hint">Veuillez vérifier votre connexion Internet.</p>
        </div>
      )}

      {/* Only render UserList if not loading and no error */}
      {!loading && !error && (
        <UserList users={listOfUsers} />
      )}

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} API Checkpoint App. Données de JSONPlaceholder.</p>
      </footer>
    </div>
  );
}

export default App;
