## Proyecto: Cuenta Atrás Vintage hasta 2 de Diciembre

### Descripción

Página web interactiva creada con Vite que muestra una cuenta atrás estilo vintage hasta el 2 de diciembre de 2024 a las 19:46. Incluye:

- Reloj analógico vintage
- Calendario interactivo
- Contador de tiempo (días, horas, minutos, segundos)
- Reloj digital
- Diseño responsive y adaptable a GitHub Pages

### Stack Tecnológico

- **Framework**: Vite (vanilla JavaScript)
- **HTML5**: Estructura semántica
- **CSS3**: Diseño vintage con gradientes y sombras
- **JavaScript Vanilla**: Lógica de actualización en tiempo real
- **Deploy**: GitHub Pages con GitHub Actions

### Archivos Principales

- `src/main.js` - Lógica del contador, calendario y reloj
- `src/style.css` - Estilos vintage
- `index.html` - Estructura HTML
- `vite.config.js` - Configuración para GitHub Pages
- `.github/workflows/deploy.yml` - Automatización de deploy

### Cómo Ejecutar Localmente

```bash
npm install
npm run dev
```

Accede a `http://localhost:5173/countdown/`

### Compilar para Producción

```bash
npm run build
```

Los archivos se guardan en la carpeta `dist/`

### Desplegar en GitHub Pages

1. Crear repositorio en GitHub
2. Configurar git y hacer push
3. Habilitar GitHub Pages desde Settings
4. La página estará disponible en `https://usuario.github.io/countdown/`

### Personalización

- **Cambiar fecha objetivo**: Editar línea 3 de `src/main.js`
- **Cambiar colores**: Modificar valores CSS en `src/style.css`
- **Cambiar textos**: Actualizar strings en `src/main.js`

### Características Implementadas ✅

- [x] Reloj analógico funcionando
- [x] Calendario interactivo
- [x] Contador regresivo
- [x] Reloj digital
- [x] Responsive design
- [x] Compilación Vite lista
- [x] GitHub Actions workflow
- [x] Documentación completa
