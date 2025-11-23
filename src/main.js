import './style.css'

// Fecha objetivo: 2 de Diciembre de 2025 a las 19:46
const targetDate = new Date(2025, 11, 2, 19, 46, 0);


// mensajes parametrizados
const main_messages = {
  title: 'Cuenta Atrás',
  subtitle: '2 de Diciembre de 2025 a las 19:46'
}
document.getElementById('title').textContent = main_messages.title;
document.getElementById('subtitle').textContent = main_messages.subtitle;
const messages = {
  moreThanTwoWeeks: '⏳ Más de dos semanas aún...',
  twoWeeks: '📆 ¡Faltan dos semanas justas!',
  lessThanTwoWeeks: '📅 Menos de dos semanas...',
  lessThanTenDays: '📅 Menos de diez días...',
  oneWeek: '🗓️ ¡Falta justo una semana!',
  lessThanOneWeek: '🔥 Menos de una semana...',
  oneDay: '⏰ ¡Falta solo un día!',
  today: '⌛ ¡Hoy es el día, pero aún falta un poco!',
  imminent: '😊🚂 YA EN EL TREN 🚄💨  ¡BUEN VIAJE!',
  trigger_message: '😊🚂 YA EN EL TREN 🚄💨  ¡BUEN VIAJE!'
};

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
    messageEl.textContent = messages.trigger_message;
  } else if (days > 14) {
    messageEl.textContent = messages.moreThanTwoWeeks;
  } else if (days == 14) {
    messageEl.textContent = messages.twoWeeks;
  } else if (days >= 10) {
    messageEl.textContent = messages.lessThanTwoWeeks;
  } else if (days > 7) {
    messageEl.textContent = messages.lessThanTenDays;
  } else if (days == 7) {
    messageEl.textContent = messages.oneWeek;
  } else if (days > 1) {
    messageEl.textContent = messages.lessThanOneWeek;
  } else if (days == 1) {
    messageEl.textContent = messages.oneDay;
  } else if (hours > 5) {
    messageEl.textContent = messages.today;
  } else {
    messageEl.textContent = messages.imminent;
  }
}
// Actualizar cada segundo
updateCountdown();
setInterval(updateCountdown, 250);