import React from 'react';
import './PlanetNavBar.css';

function PlanetNavBar({ onBack, onPlanetSelect }) {
  const sections = ['Licencias', 'Proyectos', 'Stack', 'Experiencia', 'Contacto'];

  return (
    <nav className="top-navbar">
      <ul>
        <li onClick={onBack}>Inicio</li>
        {sections.map((sec, i) => (
          <li key={i} onClick={() => onPlanetSelect(sec)}>
            {sec}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PlanetNavBar;
