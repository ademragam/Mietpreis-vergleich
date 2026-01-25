import React from 'react';
import ReactDOM from 'react-dom/client';
import Mietprognosen from './components/Mietprognosen'; // Pfad zur Mietprognosen-Komponente
import './index.css'; // Hier könntest du Tailwind oder andere Styles einbinden

// React-Router, falls du Routing benötigst, kannst du es hier integrieren
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Mietprognosen />
  </React.StrictMode>
);
