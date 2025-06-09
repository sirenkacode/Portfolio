import React from 'react';

function Planet({ name, color, size, delay, orbit, onClick }) {
  const handleClick = (e) => {
    e.stopPropagation(); // evita que el clic burbujee
    onClick(name);
  };

  return (
    <div className={`orbit ${orbit}`}>
      <div className={`planet-wrapper planet${orbit.slice(-1)}`}>
        <div
          className="planet"
          onClick={handleClick}
          style={{
            backgroundColor: color,
            width: size,
            height: size,
            animationDelay: delay,
            pointerEvents: 'auto', // CLAVE
            cursor: 'pointer',     // para que se vea como clickeable
          }}
        >
          <span className="planet-label">{name}</span>
        </div>
      </div>
    </div>
  );
}

export default Planet;
