import { useState, useEffect, useRef } from 'react';
import './Licencias.css';

const cursos = [
  { categoria: "Programación", 
    horas: 38, 
    titulo: "Desarrollo Web", 
    plataforma: "Coderhouse", 
    link: "https://pub.coderhouse.com/certificates/17f9a851-f1d0-420e-bfa1-8f723978a5a4?v=1" },
  
    { categoria: "Programación", 
    horas: 36, 
    titulo: "Curso Gratis de Programación Básica", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/3208-programacion-basica/diploma/detalle/" },

     { categoria: "Programación", 
    horas: 36, 
    titulo: "Fundamentos de JavaScript", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/10266-javascript/diploma/detalle/" },

    { categoria: "Programación", 
    horas: 22, 
    titulo: "Fundamentos de Sass", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/6867-sass/diploma/detalle/" },

     { categoria: "Programación", 
    horas: 34, 
    titulo: "C#", 
    plataforma: "Coderhouse", 
    link: "https://pub.coderhouse.com/legacy-certificates/6358bd4294c28200046ba3ef?lang=es" },

     { categoria: "Programación", 
    horas: 25, 
    titulo: "Game Maker Studio 2 - GML", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2790-game-maker-personajes/diploma/detalle/" },
  
    { categoria: "Diseño", 
    horas: 15, 
    titulo: "Curso Básico de Photoshop", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/1230-course/diploma/detalle/" },
  
    { categoria: "Diseño", 
    horas: 18, 
    titulo: "Curso de Adobe XD", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2420-adobe-xd/diploma/detalle/" },
  
    { categoria: "Diseño", 
    horas: 20, 
    titulo: "Curso de Diseño de Interfaces", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/1493-diseno-interfaz/diploma/detalle/" },

    { categoria: "Diseño", 
    horas: 22, 
    titulo: "Curso de Adobe Illustrator", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/1130-illustrator/diploma/detalle/" },

    { categoria: "Diseño", 
    horas: 19, 
    titulo: "Curso de Ilustración en Productos Digitales", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/1455-ilustracion-digital/diploma/detalle/" },

    { categoria: "Diseño", 
    horas: 17, 
    titulo: "Metodologías de Diseño de Productos Digitales", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2286-metodologias-diseno-producto/diploma/detalle/" },

    { categoria: "Idiomas", 
    horas: 20, 
    titulo: "Inglés Avanzado C1: Comunicación Persuasiva y Efectiva", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2574-habilidades-comunicacion/diploma/detalle/" },

     { categoria: "Idiomas", 
    horas: 22, 
    titulo: "Inglés Avanzado C1: Presentaciones y Expresión Oral", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2730-expresiones-idiomaticas/diploma/detalle/" },

     { categoria: "Idiomas", 
    horas: 21, 
    titulo: "Inglés Avanzado C1: Argumentos y Discusiones", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2976-ingles-avanzado-argumentacion/diploma/detalle/" },

     { categoria: "Idiomas", 
    horas: 24, 
    titulo: "Inglés Avanzado C1: Recursos Conversacionales y Lingüísticos", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2599-recursos-linguisticos/diploma/detalle/" },

    { categoria: "Idiomas", 
    horas: 22, 
    titulo: "Inglés Intermedio Alto B2: Discurso Indirecto y Condicionales", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2512-course/diploma/detalle/" },

    { categoria: "Idiomas", 
    horas: 21, 
    titulo: "Inglés Intermedio Alto B2: Comentarios y Opiniones", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2415-intenciones-comparaciones/diploma/detalle/" },

    { categoria: "Idiomas", 
    horas: 22, 
    titulo: "Inglés Intermedio Alto B2: Suposiciones e Instrucciones", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2423-course/diploma/detalle/" },

    { categoria: "Idiomas", 
    horas: 19, 
    titulo: "Inglés Intermedio Alto: Pasado Perfecto Pasivo y Frases Adverbiales", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2521-pasado-perfecto-pasivo-adverbiales/diploma/detalle/" },

    { categoria: "Idiomas", 
    horas: 22, 
    titulo: "Inglés Intermedio Alto B2: Discurso Indirecto y Condicionales", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/2512-course/diploma/detalle/" },

    { categoria: "Idiomas", 
    horas: 1.5, 
    titulo: "Cursiva Rusa", 
    plataforma: "Udemy", 
    link: "https://www.udemy.com/certificate/UC-51ba47e8-3db2-4e2b-bb93-9ea79154a3ea/" },
  
    { categoria: "Otras habilidades", 
    horas: 15, 
    titulo: "Curso de Psicología del Consumidor", 
    plataforma: "Platzi", 
    link: "https://platzi.com/p/micaelaalvariza/curso/1817-psicologia-consumidor/diploma/detalle/" },
];

const Licencias = () => {
  const categorias = [...new Set(cursos.map(c => c.categoria))];
  const [indice, setIndice] = useState(0);
  const [fade, setFade] = useState(true);
  const scrollLock = useRef(false);

  const categoriaActual = categorias[indice];
  const cursosFiltrados = cursos.filter(c => c.categoria === categoriaActual);
  const totalHoras = cursosFiltrados.reduce((sum, c) => sum + c.horas, 0);

  const cambiarCategoria = (direccion) => {
    if (scrollLock.current) return;
    scrollLock.current = true;
    setFade(false);

    setTimeout(() => {
      setIndice((prev) => {
        const next = prev + direccion;
        if (next < 0) return categorias.length - 1;
        if (next >= categorias.length) return 0;
        return next;
      });
      setFade(true);
      scrollLock.current = false;
    }, 400);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 20) cambiarCategoria(1);
      else if (e.deltaY < -20) cambiarCategoria(-1);
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="licencias-wrapper">
      <h1 className="licencias-titulo">Licencias</h1>
      <p>Actualmente cursando la carrera FullStack en Coderhouse.<br></br>(Cursos por completar: JavaScript, React JS Flex, 
        Programación Backend I, Programación Backend II y Programación Backend (III))</p>

      <div className={`categoria-bloque ${fade ? 'fade-in' : 'fade-out'}`}>
        <h3>{categoriaActual} ({totalHoras} h)</h3>
        <div className="card-grid">
          {cursosFiltrados.map((curso, i) => (
            <div key={i} className="curso-card">
              <div className="card-inner">
                <div className="card-texto">
                  <h4>{curso.titulo}</h4>
                  <p>{curso.plataforma}</p>
                  <span>{curso.horas} h</span>
                </div>
                <div className="card-hover">
                  <a href={curso.link} target="_blank" rel="noopener noreferrer">
                    Ver certificación
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-bubbles">
        {categorias.map((_, i) => (
          <span
            key={i}
            className={`bubble ${i === indice ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Licencias;
