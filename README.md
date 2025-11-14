# ⏳ Cuenta Atrás - 2 de Diciembre 2025

Una página web moderna y elegante con cuenta atrás dinámica hasta el **2 de diciembre de 2025 a las 19:46**.

![Countdown](https://img.shields.io/badge/Vite-7.2.2-646cff?style=flat-square&logo=vite)
![Node](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)



- ✨ **Contador dinámico** que actualiza en tiempo real (cada segundo)

## 🚀 Quick Start

### Requisitos
- Node.js 18+ 
- npm

### Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/cerdeiros2/countdown.git
cd countdown

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:5173/countdown/](http://localhost:5173/countdown/) en tu navegador.

### Compilar para Producción

```bash
npm run build
```

Los archivos compilados se guardarán en la carpeta `dist/`

## � Stack Tecnológico

- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **JavaScript Vanilla** - Sin dependencias externas
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con degradados y blur effects
- **Google Fonts** - Tipografía Inter y Poppins

## 🌐 Despliegue en GitHub Pages

El proyecto se despliega automáticamente en cada push gracias a GitHub Actions.

### Pasos iniciales:

1. **Crear repositorio en GitHub** llamado `countdown`
2. **Configurar Git localmente:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/countdown.git
   git push -u origin main
   ```

3. **Habilitar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: GitHub Actions
   - El workflow se ejecutará automáticamente

4. **¡Listo!** Tu página estará disponible en:
   ```
   https://tu-usuario.github.io/countdown/
   ```

## 🎨 Personalización

### Cambiar la fecha objetivo

Edita `src/main.js` línea 3:

```javascript
const targetDate = new Date(2025, 11, 2, 19, 46, 0); 
// Formato: (Año, Mes(0-11), Día, Hora, Minuto, Segundo)
```

### Cambiar colores

Edita `src/style.css` con los colores que prefieras:

```css
/* Colores principales */
#64b5f6  /* Azul - Título */
#93c5fd  /* Azul claro - Números */
#86efac  /* Verde - Mensaje */
```

### Cambiar mensajes

Edita los mensajes en `src/main.js`:

```javascript
if (days > 14) {
  messageEl.textContent = '⏳ Más de dos semanas aún...';
}
```

## 📂 Estructura del Proyecto

```
countdown/
├── index.html              # Página principal
├── src/
│   ├── main.js            # Lógica del contador
│   └── style.css          # Estilos
├── .github/
│   ├── workflows/
│   │   └── deploy.yml     # Workflow de GitHub Actions
│   └── copilot-instructions.md
├── package.json           # Dependencias
└── README.md             # Este archivo
```

## 🔄 Workflow de CI/CD

El archivo `.github/workflows/deploy.yml` automáticamente:

1. Detecta cambios en la rama `main`
2. Instala dependencias (`npm ci`)
3. Compila el proyecto (`npm run build`)
4. Despliega en GitHub Pages

Puedes ver el estado en la sección **Actions** de tu repositorio.

## 💡 Mensajes Dinámicos

El mensaje cambia automáticamente según los días restantes:

- ⏳ **Más de 14 días**: "Más de dos semanas aún..."
- 📅 **7-14 días**: "Menos de dos semanas..."
- 🔥 **1-7 días**: "Menos de una semana..."
- 🎯 **El día**: "¡Hoy es el día!"
- 😊🚂🚄 **Hora de salida**: "YA EN EL TREN ¡BUEN VIAJE!"

## 📝 Licencia

MIT - Libre para usar y modificar como desees.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de hacer fork y crear pull requests.

---

Hecho con ❤️ usando **Vite**

**[👉 Ver página en vivo](https://cerdeiros2.github.io/countdown/)**
