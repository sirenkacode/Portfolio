const text = `Hola mundo! Bienvenidos a mi portfolio, donde cada astro es un mundo por descubrir. Feliz exploración, cosmonauta.`;
const container = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    container.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

const astronaut = document.querySelector('.astronaut');
const bubble = document.querySelector('.speech-bubble');

astronaut.addEventListener('click', () => {
  astronaut.classList.toggle('clicked');

  if (bubble.classList.contains('visible')) {
    bubble.classList.remove('visible');
    container.textContent = '';
    index = 0;
  } else {
    bubble.classList.add('visible');
    setTimeout(typeWriter, 200);
  }
});
