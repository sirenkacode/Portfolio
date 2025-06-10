import React, { useEffect, useState } from 'react';
import PlanetNavBar from './PlanetNavBar';
import '../App.css';
import './PlanetScreen.css';

function PlanetScreen({ planetName, color, onBack }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`planet-screen ${fadeIn ? 'fade-in' : ''}`}
      style={{
        background: `linear-gradient(to bottom, #686081, ${color})`,
        minHeight: '100vh',
        fontFamily: 'Silkscreen, monospace',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '4rem',
        transition: 'opacity 0.8s ease',
      }}
    >
      <PlanetNavBar onBack={onBack} />

      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          fontFamily: 'Nabla, cursive',
          color: '#222',
        }}>{planetName}</h2>

        <p style={{
          fontSize: '0.9rem',
          color: '#444',
          marginBottom: '2rem'
        }}>
          Bienvenido a la sección <strong>{planetName}</strong>. Este bloque está diseñado para mantener la estética retro-espacial del sistema solar original.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}>
          <div className="planet-box">Contenido 1</div>
          <div className="planet-box">Contenido 2</div>
          <div className="planet-box">Contenido 3</div>
        </div>
      </div>
    </div>
  );
}

export default PlanetScreen;
