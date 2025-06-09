// PlanetNavBar.jsx
import React from "react";
import "../App.css"; // Asegúrate de que los estilos se apliquen

function PlanetNavBar({ planets, onSelect, onBack }) {
  return (
    <div className="planet-navbar">
      <span className="planet-link" onClick={onBack}>🌕 Inicio
      </span>
      {planets.map((planet, i) => (
        <span
          key={i}
          className="planet-link"
          onClick={() => onSelect(planet.name)}
        >
          {planet.name}
        </span>
      ))}
    </div>
  );
}

export default PlanetNavBar;
