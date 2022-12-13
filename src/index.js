// import { createRoot } from 'react-dom/client';
// import App from "./components/App";

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
