import React, { useState, useEffect } from 'react';
import Astronaut from './components/Astronaut';
import Planet from './components/Planet';
import OrbitCircle from './components/OrbitCircle';
import PlanetScreen from './components/PlanetScreen';
import PlanetNavBar from './components/PlanetNavBar';
import './App.css';

const planets = [
  { name: 'Licencias', color: '#ffadad', size: '7vmin', delay: '0.3s', orbit: 'orbit1', angle: 200 },
  { name: 'Proyectos', color: '#a0c4ff', size: '6vmin', delay: '0.6s', orbit: 'orbit2', angle: 40 },
  { name: 'Stack', color: '#bdb2ff', size: '8vmin', delay: '0.9s', orbit: 'orbit3', angle: 120 },
  { name: 'Experiencia', color: '#caffbf', size: '6.5vmin', delay: '1.2s', orbit: 'orbit4', angle: 300 },
  { name: 'Contacto', color: '#ffd6a5', size: '7.5vmin', delay: '1.5s', orbit: 'orbit5', angle: 341 },
];

function App() {
  const [text, setText] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [activePlanet, setActivePlanet] = useState(null);
  const [bgColor, setBgColor] = useState('#f2f0f8');
  const [showAstronaut, setShowAstronaut] = useState(false);
  const [showOrbits, setShowOrbits] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const fullText = '¡Hola Mundo! Espero encuestres lo que buscas en mi sistema solar personal :) Feliz exploración, cosmonauta.';

  useEffect(() => {
    if (!showBubble) return;
    let index = 0;
    let currentText = '';
    setText('');
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

  useEffect(() => {
    const astronautTimer = setTimeout(() => setShowAstronaut(true), 300);
    const orbitsTimer = setTimeout(() => setShowOrbits(true), 1100);
    const footerTimer = setTimeout(() => setShowFooter(true), 1900);
    return () => {
      clearTimeout(astronautTimer);
      clearTimeout(orbitsTimer);
      clearTimeout(footerTimer);
    };
  }, []);

  const handleAstronautClick = (e) => {
    const target = e.target;
    if (target.tagName === 'IMG' && target.currentSrc.includes('astronaut')) {
      setShowBubble(!showBubble);
      setText('');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  const handlePlanetClick = (name) => {
    const clickedPlanet = planets.find((p) => p.name === name);
    if (!clickedPlanet) return;
    setBgColor(clickedPlanet.color);
    setActivePlanet(name);
  };

  const handleBackToSystem = () => {
    setActivePlanet(null);
    setBgColor('#f2f0f8');
  };

  const handlePlanetSelect = (name) => {
    if (name === activePlanet) return;
    const planet = planets.find(p => p.name === name);
    if (planet) {
      setBgColor(planet.color);
      setActivePlanet(name);
    }
  };

  return (
    <div
      className="app-background"
      style={{ background: `linear-gradient(to bottom, #686081, ${bgColor})` }}
    >
      {!activePlanet && (
        <div className="solar-system-container fade-in">
          <div className="solar-system">
            {showAstronaut && (
              <>
                <Astronaut onClick={handleAstronautClick} isShaking={isShaking} />
                <div className="identity-block">
                  <h1>Micaela Alvariza Allende</h1>
                  <p>Desarrolladora Frontend, con pensamientos intrusivos de diseño.</p>
                </div>
              </>
            )}

            {showBubble && text && (
              <div className="speech-bubble visible">
                <span>{text}</span>
                <div className="bubble-tail"></div>
              </div>
            )}

            {planets.map((planet, i) => (
              <Planet
                key={i}
                {...planet}
                onClick={() => handlePlanetClick(planet.name)}
                index={i}
              />
            ))}

            {showOrbits && (
              <div className="orbits-fade-in">
                {[1, 2, 3, 4, 5].map((n) => (
                  <OrbitCircle key={n} index={n} />
                ))}
              </div>
            )}
          </div>

          <footer className={`footer ${showFooter ? 'show' : ''}`}>
            • Última actualización • <br />10/06/2025
          </footer>
        </div>
      )}

      {activePlanet && (
        <>
          <PlanetNavBar
            planets={planets}
            onBack={handleBackToSystem}
            onPlanetSelect={handlePlanetSelect}
          />
          <div className="planet-screen-wrapper fade-in">
            <PlanetScreen
              key={activePlanet}
              planetName={activePlanet}
              color={bgColor}
              onBack={handleBackToSystem}
              onPlanetSelect={handlePlanetSelect}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
