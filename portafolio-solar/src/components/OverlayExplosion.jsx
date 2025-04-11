import React, { useEffect, useState } from 'react';

function OverlayExplosion({ origin, onClose, planetColor, children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className={`overlay-explosion ${isOpen ? 'open' : ''}`}>
      <div
        className="overlay-background"
        style={{
          backgroundColor: planetColor,  // El color del planeta
          transformOrigin: `${origin.x}px ${origin.y}px`  // Origen desde el planeta
        }}
      />
      <div className="overlay-content">
        {children}
      </div>
      <button className="close-button" onClick={onClose}>×</button>
    </div>
  );
}

export default OverlayExplosion;
