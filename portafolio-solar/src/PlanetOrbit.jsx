import React from "react";
import './PlanetOrbit.css';

function PlanetOrbit({ name, color, size, delay, orbitClass }) {
  return (
    <div className={`orbit ${orbitClass}`}>
      <div className="planet-wrapper" style={{ transform: `translate(${size}, -50%)` }}>
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

export default PlanetOrbit;
