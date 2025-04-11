import React, { useState } from 'react';

function Planet({ name, color, size, delay, orbit, onClick }) {
  const [explosion, setExplosion] = useState(null);

  const handleClick = (e) => {
    const planetCoords = e.target.getBoundingClientRect();
    const coords = {
      x: planetCoords.left + planetCoords.width / 2,
      y: planetCoords.top + planetCoords.height / 2,
    };

    onClick(name, coords);  // Pasar el nombre y las coordenadas al App.jsx
    setExplosion(coords);   // Crear la explosión en la posición del clic
  };

  return (
    <div className={`orbit ${orbit}`} onClick={handleClick}>
      <div className={`planet-wrapper planet${orbit.slice(-1)}`}>
        <div
          className="planet"
          style={{
            backgroundColor: color,
            width: size,
            height: size,
            animationDelay: delay,
          }}
        >
          {name}
        </div>
      </div>

      {explosion && (
        <div
          className="explosion"
          style={{
            top: `${explosion.y - 50}px`, // Ajustamos para que la explosión surja desde el centro del planeta
            left: `${explosion.x - 50}px`, // Ajustamos para que la explosión surja desde el centro del planeta
            backgroundColor: color, // El color de la explosión es el mismo que el del planeta
          }}
        ></div>
      )}
    </div>
  );
}

export default Planet;
