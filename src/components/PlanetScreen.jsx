import React, { useEffect, useState } from 'react'; 
import PlanetNavBar from './PlanetNavBar';
import '../App.css';
import './PlanetScreen.css';
import Licencias from './Licencias';
// import otros componentes cuando los vayas a usar...

function PlanetScreen({ planetName, color, onBack }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (planetName.toLowerCase()) {
      case "licencias":
        return <Licencias />;
      // podés agregar más casos luego:
      // case "proyectos":
      //   return <Proyectos />;
       default:
        return null;

    }
  };

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
      {renderContent()}
    </div>
  );
}

export default PlanetScreen;
