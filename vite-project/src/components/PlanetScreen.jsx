import React, { useEffect, useState } from 'react';
import '../App.css';

function PlanetScreen({ planetName, color }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`planet-screen ${fadeIn ? 'fade-in' : ''}`}
      style={{
        backgroundColor: color,
        minHeight: '100vh',
        fontFamily: 'Silkscreen, monospace',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 2rem',
        transition: 'background-color 0.8s ease, opacity 0.8s ease',
      }}
    >
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
