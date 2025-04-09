import React from 'react';

function Planet({ name, color, size, delay, orbit }) {
  return (
    <div className={`orbit ${orbit}`}>
      <div className={`planet-wrapper planet${orbit.slice(-1)}`}>
        <div
          className="planet"
          style={{
            backgroundColor: color,
            width: size,
            height: size,
            animationDelay: delay
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

export default Planet;
