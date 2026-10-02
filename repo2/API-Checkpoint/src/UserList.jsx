
import React from 'react';
import './UserList.css'; // Import the specific CSS for UserList component

const UserList = ({ users }) => {
  // Display a message if no users are provided
  if (!users || users.length === 0) {
    return (
      <div className="no-users-message">
        Aucun utilisateur à afficher.
      </div>
    );
  }

  return (
    <div className="user-list-grid">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-detail">
            <span className="user-label">Pseudo:</span> {user.username}
          </p>
          <p className="user-detail">
            <span className="user-label">Email:</span> {user.email}
          </p>
          <p className="user-detail">
            <span className="user-label">Téléphone:</span> {user.phone}
          </p>
          <p className="user-detail">
            <span className="user-label">Site Web:</span>{' '}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="user-website-link"
            >
              {user.website}
            </a>
          </p>
          <div className="user-address-section">
            <p className="user-label-address">Adresse:</p>
            <p className="user-address-detail">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="user-address-detail">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
