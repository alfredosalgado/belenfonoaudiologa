document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.whatsapp-btn');

  if (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Evita que el navegador siga el enlace `href`
      const phone = '56995548383'; // Número de teléfono
      const message = 'Hola, me interesa saber más información.';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
  } else {
    console.error("No se encontró el botón de WhatsApp en el DOM.");
  }
});

// Obtén el botón de "Subir"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Cuando el usuario haga scroll hacia abajo, muestra el botón
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = "flex"; // Muestra el botón
  } else {
    scrollToTopBtn.style.display = "none"; // Oculta el botón
  }
};

// Cuando el usuario haga clic en el botón, realiza el desplazamiento suave
scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la acción predeterminada de ancla

  // Desplazamiento suave hasta la parte superior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Añade la transición suave
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-animado");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("titulo-visible"); // Agrega la animación cuando es visible
      } else {
        entry.target.classList.remove("titulo-visible"); // Quita la animación cuando deja de ser visible
      }
    });
  }, { threshold: 0.2 });

  titulos.forEach(titulo => observer.observe(titulo));
});



document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".texto-fade");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("texto-visible"); // Activa la animación
      } else {
        entry.target.classList.remove("texto-visible"); // Permite que se repita
      }
    });
  }, { threshold: 0.2 });

  textos.forEach(texto => observer.observe(texto));
});





function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const isMoney = counter.classList.contains('money');
  let count = 0;
  const increment = target / 100; // Ajusta la velocidad de animación

  const updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.textContent = isMoney ? `+ ${Math.floor(count).toLocaleString('es-CL')}` : Math.floor(count).toLocaleString('es-CL');
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = isMoney ? `+ ${target.toLocaleString('es-CL')}` : target.toLocaleString('es-CL');
    }
  };

  updateCounter();
}

// Observer para detectar cuando los contadores sean visibles
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterBox = entry.target;
      counterBox.classList.add("visible"); // Aparece suavemente

      const counters = counterBox.querySelectorAll(".counter");
      counters.forEach(counter => {
        counter.textContent = "0"; // Reinicia el conteo cada vez que es visible
        animateCounter(counter);
      });
    }
  });
}, { threshold: 0.5 }); // Se activa cuando al menos el 50% del elemento es visible

// Aplicar el observer a cada contador
document.querySelectorAll('.counter-box').forEach(counterBox => observer.observe(counterBox));



const carousel = document.getElementById('testimonialCarousel');
        const cardWidth = 300; // Ancho de la tarjeta (280px) + gap (20px)
        const totalCards = document.querySelectorAll('.testimonial-card').length;
        let currentIndex = 0;

        function scrollCarousel(direction) {
            const containerWidth = carousel.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / cardWidth); // Tarjetas visibles completas
            const maxIndex = Math.max(0, totalCards - cardsPerView); // Índice máximo ajustado

            // Actualizar el índice según la dirección
            currentIndex += direction;

            // Limitar el índice para no exceder los bordes
            if (currentIndex < 0) {
                currentIndex = 0;
            } else if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }

            // Calcular el desplazamiento
            const offset = -currentIndex * cardWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        }

        // Ajuste responsivo al redimensionar la ventana
        window.addEventListener('resize', () => {
            const containerWidth = carousel.parentElement.offsetWidth;
            const cardsPerView = Math.floor(containerWidth / cardWidth);
            const maxIndex = Math.max(0, totalCards - cardsPerView);
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            const offset = -currentIndex * cardWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        });




document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popupModal");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");
  const closeSpan = document.querySelector(".close-btn");

  // 🚀 Hacer que el pop-up aparezca automáticamente al cargar la página
  setTimeout(() => {
    popup.style.display = "flex";
  }, 2000); // Espera 2 segundos antes de mostrarlo (puedes cambiar el tiempo)

  // Abrir el pop-up con el botón (opcional, sigue funcionando)
  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Cerrar el pop-up con el botón
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Cerrar el pop-up con la "X"
  closeSpan.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Cerrar el pop-up al hacer clic fuera de él
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
