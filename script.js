// Efecto de máquina de escribir para la burbuja de texto
const text = `Hola mundo! Bienvenidos a mi portfolio, donde cada astro es un mundo por descubrir. Feliz exploración, cosmonauta.`;
const container = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// HTML que debe ir dentro de .solar-system:
// <div class="orbit-circle orbit-circle1"></div>
// <div class="orbit-circle orbit-circle2"></div>
// <div class="orbit-circle orbit-circle3"></div>
// <div class="orbit-circle orbit-circle4"></div>
// <div class="orbit-circle orbit-circle5"></div>

// CSS para las órbitas alineadas exactamente con el CENTRO de cada planeta
const style = document.createElement('style');
style.innerHTML = `
  .orbit-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -50%);
    z-index: -2;
    pointer-events: none;
  }

  /* Ajustes precisos para que el centro exacto de cada planeta esté sobre la órbita */
  .orbit-circle1 { width: 600px; height: 600px; border-color: #ffadad; }
  .orbit-circle2 { width: 720px; height: 720px; border-color: #a0c4ff; }
  .orbit-circle3 { width: 960px; height: 960px; border-color: #bdb2ff; }
  .orbit-circle4 { width: 1080px; height: 1080px; border-color: #caffbf; }
  .orbit-circle5 { width: 1200px; height: 1200px; border-color: #ffd6a5; }

  /* translateX corregido restando la mitad del ancho del planeta */
  .planet1 { transform: translate(265px, -50%); } /* 300 - 35 */
  .planet2 { transform: translate(330px, -50%); } /* 360 - 30 */
  .planet3 { transform: translate(440px, -50%); } /* 480 - 40 */
  .planet4 { transform: translate(505px, -50%); } /* 537.5 - 32.5 */
  .planet5 { transform: translate(562.5px, -50%); } /* 600 - 37.5 */

  /* Correcciones específicas para skills y contacto */
  .planet3 .planet { width: 80px; height: 80px; } /* skills */
  .planet4 .planet { width: 65px; height: 65px; } /* contacto */
  .planet5 .planet { width: 75px; height: 75px; }
`;
document.head.appendChild(style);
