import './style.css'

// Fecha objetivo: 2 de Diciembre de 2025 a las 19:46
const targetDate = new Date(2025, 11, 2, 19, 46, 0);

// Función para actualizar la cuenta atrás
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  let days = 0, hours = 0, minutes = 0, seconds = 0;
  let trigger = false;

  if (diff > 1000) {
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
    trigger = true;
  }

  // Actualizar elementos HTML

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // Mostrar mensaje cuando se llegue
  const messageEl = document.getElementById('message');
  if (!trigger) {
    messageEl.textContent = '¡Llegó el momento! 🎉🎊';
  } else if (days > 14) {
    messageEl.textContent = '⏳ Más de dos semanas aún...';
  } else if (days == 14) {
    messageEl.textContent = '📆 ¡Faltan dos semanas justas!';
  } else if (days > 10) {
    messageEl.textContent = '📅 Menos de dos semanas...';
  } else if (days > 7) {
    messageEl.textContent = '📅 Menos de diez días...';
  } else if (days == 7) {
    messageEl.textContent = '🗓️ ¡Falta justo una semana!';
  } else if (days > 1) {
    messageEl.textContent = '🔥 Menos de una semana...';
  } else if (days == 1) {
    messageEl.textContent = '⏰ ¡Falta solo un día!';
  } else if (hours > 5) {
    messageEl.textContent = '⌛ ¡Hoy es el día, pero aún falta un poco!';
  } else {
    messageEl.textContent = '😊🚂 YA EN EL TREN 🚄💨  ¡BUEN VIAJE!';
  }
}
// Actualizar cada segundo
updateCountdown();
setInterval(updateCountdown, 250);