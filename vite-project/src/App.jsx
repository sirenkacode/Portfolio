import React, { useState, useEffect } from 'react';
import Astronaut from './components/Astronaut';
import Planet from './components/Planet';
import OrbitCircle from './components/OrbitCircle';

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

  const fullText = '¡Hola Mundo! Bienvenidos a mi sistema solar personal; Y feliz exploración, cosmonautas.';

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

  const handleAstronautClick = (e) => {
    const target = e.target;
    if (target.tagName === 'IMG' && target.currentSrc.includes('astronaut')) {
      setShowBubble(prev => !prev);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
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
            onClick={() => {}}
          />
        ))}

        {[1, 2, 3, 4, 5].map((n) => (
          <OrbitCircle key={n} index={n} />
        ))}
      </div>

      <footer>
        • Última actualización • <br />
        05/06/2025
      </footer>
    </>
  );
}

export default App;
