import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Provider from react-redux to make the store available
import { Provider } from 'react-redux';
import store from './store';
import App from './App';


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App /> 
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found in the DOM. Check your index.html.");
}
