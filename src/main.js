import './style.css'

// ===============================
// CONFIGURACIÓN DE LA CUENTA ATRÁS
// ===============================

// Fecha objetivo: 2 de Diciembre de 2025 a las 19:46 (mes 11 = diciembre, 0-indexed)
const target_date =
{
  targetYear: 2025,
  targetMonth: 12,
  targetDay: 19,
  targetHour: 14,
  targetMinute: 00,
}


// Asignar el nombre del mes usando un array
const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
target_date.monthName = monthNames[target_date.targetMonth - 1] || 'Brumario';

// Mensajes principales para el título y subtítulo
const mainMessages = {
  title: 'Cuenta Atrás',
  subtitle: `${target_date.targetDay} de ${target_date.monthName} de ${target_date.targetYear} a las ${target_date.targetHour}:${target_date.targetMinute}`
};
// Mensajes dinámicos según el tiempo restante
const messages = {
  moreThanTwoWeeks: '⏳ Más de dos semanas aún...',
  twoWeeks: '📆 ¡Faltan dos semanas justas!',
  lessThanTwoWeeks: '📅 Menos de dos semanas...',
  lessThanTenDays: '📅 Menos de diez días...',
  oneWeek: '🗓️ ¡Falta justo una semana!',
  lessThanOneWeek: '🔥 Menos de una semana...',
  oneDay: '⏰ ¡Mañana... Por fin mañana!',
  comming: '⏳ Ya casi casi...',
  today: '⌛ ¡Hoy es el día, pero aún falta un poco!',
  imminent: '😊 YA ESTAMOS, CONTANDO LOS FUCKING SEGUNDOS',
  triggerMessage: 'POR FIN  🎉🏡'
};




// ===============================
// FUNCIÓN PRINCIPAL DE LA CUENTA ATRÁS
// ===============================

// Crear el objeto Date para la fecha objetivo
const targetDate = new Date(
  target_date.targetYear,
  target_date.targetMonth - 1, // Restar 1 porque los meses en JS son 0-indexed
  target_date.targetDay,
  target_date.targetHour,
  target_date.targetMinute,
  0
);

// Mostrar título y subtítulo en la página
document.getElementById('title').textContent = mainMessages.title;
document.getElementById('subtitle').textContent = mainMessages.subtitle;


/**
 * Calcula el tiempo restante y actualiza la interfaz cada segundo.
 * Muestra mensajes dinámicos según el tiempo que falta para el evento.
 */
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now; // Diferencia en milisegundos

  // Inicializar valores por defecto
  let days = 0, hours = 0, minutes = 0, seconds = 0;
  let trigger = false;

  // Solo calcular si falta más de 1 segundo
  if (diff > 1000) {
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
    trigger = true;
  }

  // Actualizar los valores en pantalla
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // Seleccionar el mensaje adecuado según el tiempo restante
  const messageEl = document.getElementById('message');
  if (!trigger) {
    // Evento ya iniciado
    messageEl.textContent = messages.triggerMessage;
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
  } else if (hours > 13) {
    messageEl.textContent = messages.comming;
  } else if (hours > 5) {
    messageEl.textContent = messages.today;
  } else {
    messageEl.textContent = messages.imminent;
  }
}

// ===============================
// INICIALIZACIÓN Y ACTUALIZACIÓN AUTOMÁTICA
// ===============================

// Ejecutar la función al cargar la página
updateCountdown();
// Actualizar la cuenta atrás cada 250 milisegundos
setInterval(updateCountdown, 250);

