import './style.css'

// Fecha objetivo: 2 de Diciembre de 2025 a las 19:46
const targetDate = new Date(2025, 11, 2, 19, 46, 0);

// Función para actualizar la cuenta atrás
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Actualizar elementos HTML
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // Mostrar mensaje cuando se llegue
  const messageEl = document.getElementById('message');
  if (diff <= 0) {
    messageEl.textContent = '¡Llegó el momento! 🎉';
  } else {
    messageEl.textContent = '';
  }
}

// Actualizar cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);