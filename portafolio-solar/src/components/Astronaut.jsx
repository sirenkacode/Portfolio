import React from 'react';
import astronauta from '../assets/astronauta.png';

function Astronaut({ onClick, isShaking }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '70%',
        height: '70%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
      }}
    >
      <img
        src={astronauta}
        className={`astronaut ${isShaking ? 'clicked' : ''}`}
        alt="Astronauta flotando"
        onClick={onClick}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          clipPath: 'circle(50%)', // Corta el área fuera del astronauta (círculo)
        }}
      />
    </div>
  );
}

export default Astronaut;
