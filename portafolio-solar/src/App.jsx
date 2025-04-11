import React, { useState, useEffect } from 'react';
import Astronaut from './components/Astronaut';
import Planet from './components/Planet';
import OrbitCircle from './components/OrbitCircle';
import OverlayExplosion from './components/OverlayExplosion';

import Licencias from './components/Licencias';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';

import './App.css';

const planets = [
  { name: 'Licencias', color: '#ffadad', size: '7vmin', delay: '0.3s', orbit: 'orbit1' },
  { name: 'Proyectos', color: '#a0c4ff', size: '6vmin', delay: '0.6s', orbit: 'orbit2' },
  { name: 'Skills', color: '#bdb2ff', size: '8vmin', delay: '0.9s', orbit: 'orbit3' },
  { name: 'Experiencia', color: '#caffbf', size: '6.5vmin', delay: '1.2s', orbit: 'orbit4' },
  { name: 'Contacto', color: '#ffd6a5', size: '7.5vmin', delay: '1.5s', orbit: 'orbit5' },
];

function App() {
  const [text, setText] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [activePlanet, setActivePlanet] = useState(null);
  const [clickPosition, setClickPosition] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const fullText = '¡Hola Mundo! Espero encuestres lo que buscas en mi sistema solar personal :) Feliz exploración, cosmonauta.';

  useEffect(() => {
    if (!showBubble) return;

    let index = 0;
    let currentText = '';
    setText(''); // Reinicia el texto cada vez

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText.charAt(index);
        setText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [showBubble]);

  const handleAstronautClick = () => {
    setShowBubble(prev => !prev);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);
  };

  const handlePlanetClick = (name, coords, planetColor) => {
    setActivePlanet(name);
    setClickPosition(coords);
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
    setTimeout(() => {
      setActivePlanet(null);
      setClickPosition(null);
    }, 300);
  };

  const renderPlanetContent = () => {
    switch (activePlanet) {
      case 'Licencias': return <Licencias />;
      case 'Proyectos': return <Proyectos />;
      case 'Skills': return <Skills />;
      case 'Experiencia': return <Experiencia />;
      case 'Contacto': return <Contacto />;
      default: return null;
    }
  };

  return (
    <>
      <div className="solar-system">
        <Astronaut onClick={handleAstronautClick} isShaking={isShaking} />

        {showBubble && (
          <div className="speech-bubble visible">
            <span>{text}</span>
            <div className="bubble-tail"></div>
          </div>
        )}

        <div className="identity-block">
          <h1>Micaela Alvariza Allende</h1>
          <p>Front-end developer, con pensamientos intrusivos de designer.</p>
        </div>

        {planets.map((planet, i) => (
          <Planet
            key={i}
            {...planet}
            onClick={(e) => handlePlanetClick(planet.name, { x: e.clientX, y: e.clientY }, planet.color)}
          />
        ))}

        {[1, 2, 3, 4, 5].map((n) => (
          <OrbitCircle key={n} index={n} />
        ))}
      </div>

      {showOverlay && clickPosition && (
        <OverlayExplosion
          origin={clickPosition}
          planetColor={planets.find(p => p.name === activePlanet).color}
          onClose={handleClose}
        >
          {renderPlanetContent()}
        </OverlayExplosion>
      )}

      <footer>• Última actualización • <br />08/04/2025</footer>
    </>
  );
}

export default App;
