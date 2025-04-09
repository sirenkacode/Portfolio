import React from 'react';
import astronauta from '../assets/astronauta.png';

function Astronaut({ onClick, isShaking }) {
  return (
    <img
      src={astronauta}
      className={`astronaut ${isShaking ? 'clicked' : ''}`}
      alt="Astronauta flotando"
      onClick={onClick}
    />
  );
}

export default Astronaut;
