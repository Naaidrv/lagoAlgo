// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === index);
  });
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(reveal => {
    const elementTop = reveal.getBoundingClientRect().top;

    // Si el elemento entra en la vista
    if (elementTop < windowHeight - 100) {
      reveal.classList.add('visible');
    } else {
      // Si el elemento sale de la vista, se resetea el efecto
      reveal.classList.remove('visible');
    }
  });
});

var mySwiper = new Swiper('.swiper-container', {
    // Opción para definir el número de elementos a mostrar en la pantalla en cada momento
    slidesPerView: 3,
    // Opción para habilitar el cambio automático entre los elementos del carrusel
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // Opción para permitir el desplazamiento manual mediante gestos en dispositivos táctiles
    touchMoveStopPropagation: true,
  });
