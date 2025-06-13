import React from 'react';

import Greeting from './components/Greeting'; 
import Counter from './components/Counter';  

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>
        React TypeScript Components Demo
      </h1>

      {/* Renders the Greeting component */}
      <div style={{ border: '1px solid #a8caff', padding: '15px', borderRadius: '6px', marginBottom: '20px', backgroundColor: '#eef6ff' }}>
        <h2 style={{ color: '#0056b3', marginBottom: '10px' }}>Greeting Component:</h2>
        <Greeting name="TypeScript User" />
      </div>

      {/* Renders the Counter component */}
      <div style={{ border: '1px solid #c9f0d0', padding: '15px', borderRadius: '6px', backgroundColor: '#f0fff4' }}>
        <h2 style={{ color: '#28a745', marginBottom: '10px' }}>Counter Component:</h2>
        <Counter />
      </div>

      <p style={{ fontSize: '14px', color: '#666', textAlign: 'center', marginTop: '30px' }}>
        This demonstrates integrating simple functional and class components in a React TypeScript application.
      </p>
    </div>
  );
};

export default App;
