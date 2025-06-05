import React, { useEffect } from 'react';

function Licencias() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="licencias-content">
      <h2 className="fade-in">Licencias y certificaciones</h2>
      <h3 className="fade-in">Actualmente cursando la Carrera de Desarrollo Full Stack en Coderhouse (Marzo 2025 - Marzo 2026)</h3>

      <div className="links-container">
        <h3 className="fade-in">• Programación y diseño •</h3>
        <ul>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/3208-programacion-basica/diploma/detalle/" target="_blank">Curso Gratis de Programación Básica</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/10266-javascript/diploma/detalle/" target="_blank">Curso de Fundamentos de JavaScript</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/6867-sass/diploma/detalle/" target="_blank">Curso de Fundamentos de Sass: Crea tu Primera Landing Page</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/1493-diseno-interfaz/diploma/detalle/" target="_blank">Curso de Diseño de Interfaces Únicas</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/1455-ilustracion-digital/diploma/detalle/" target="_blank">Curso de Ilustración en Productos Digitales</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2286-metodologias-diseno-producto/diploma/detalle/" target="_blank">Curso de Metodologías de Diseño de Productos Digitales</a>
          </li>
        </ul>
      </div>

      <div className="links-container">
        <h3 className="fade-in">• Herramientas •</h3>
        <ul>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/1230-course/diploma/detalle/" target="_blank">Curso Básico de Photoshop</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2420-adobe-xd/diploma/detalle/" target="_blank">Curso de Adobe XD</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/1130-illustrator/diploma/detalle/" target="_blank">Curso de Adobe Illustrator</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2790-game-maker-personajes/diploma/detalle/" target="_blank">Curso de Game Maker Studio 2: Interacción y Ataque de los Personajes</a>
          </li>
        </ul>
      </div>

      <div className="links-container">
        <h3 className="fade-in">• Idiomas •</h3>
        <ul>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2574-habilidades-comunicacion/diploma/detalle/" target="_blank">Curso de Inglés Avanzado C1: Habilidades de Comunicación y Discurso Persuasivo</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2730-expresiones-idiomaticas/diploma/detalle/" target="_blank">Curso de Inglés Avanzado C1: Presentaciones y Expresiones Idiomáticas</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2976-ingles-avanzado-argumentacion/diploma/detalle/" target="_blank">Curso de Inglés Avanzado C1: Argumentación y Discusiones Coloquiales</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2599-recursos-linguisticos/diploma/detalle/" target="_blank">Curso de Inglés Avanzado C1: Escritura y Recursos Linguísticos</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2512-course/diploma/detalle/" target="_blank">Curso de Inglés Intermedio Alto B2: Condicionales y Situaciones Hipotéticas</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2415-intenciones-comparaciones/diploma/detalle/" target="_blank">Curso de Inglés Intermedio Alto B2: Intenciones y Comparaciones Complejas</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2423-course/diploma/detalle/" target="_blank">Curso de Inglés Intermedio Alto B2: Oraciones Relativas</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/2521-pasado-perfecto-pasivo-adverbiales/diploma/detalle/" target="_blank">Curso de Inglés Intermedio Alto B2: Pasado Perfecto Pasivo y Frases Adverbiales</a>
          </li>
          <li className="fade-in parallax-effect">
            <a href="https://www.udemy.com/certificate/UC-51ba47e8-3db2-4e2b-bb93-9ea79154a3ea/" target="_blank">Cursiva Rusa</a>
          </li>
        </ul>
      </div>

      <div className="links-container">
        <h3 className="fade-in">• Otros •</h3>
        <ul>
          <li className="fade-in parallax-effect">
            <a href="https://platzi.com/p/micaelaalvariza/curso/1817-psicologia-consumidor/diploma/detalle/" target="_blank">Curso de Psicología del Consumidor</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Licencias;
