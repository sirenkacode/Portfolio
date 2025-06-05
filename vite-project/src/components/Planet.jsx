// src/components/Planet.jsx
import React from 'react';

function Planet({ name, color, size, delay, orbit, onClick }) {
  const handleClick = (e) => {
    onClick(name, { x: e.clientX, y: e.clientY });
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
          <span className="planet-label">{name}</span>
        </div>
      </div>
    </div>
  );
}

export default Planet;
