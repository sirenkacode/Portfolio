import React from 'react';
import '../App.css';

function Planet({ name, color, size, delay, orbit, onClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
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
            borderRadius: '50%',
          }}
        >
          <span className="planet-label">{name.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

export default Planet;
