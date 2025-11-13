# ⏳ Cuenta Atrás - 2 de Diciembre

Una página web vintage con cuenta atrás, calendario y reloj analógico hasta el **2 de diciembre de 2024 a las 19:46**.

## 🎨 Características

- **Reloj Analógico Vintage**: Muestra la hora actual con estilo retro
- **Calendario Interactivo**: Visualiza el mes actual con marcas especiales
- **Contador de Tiempo**: Muestra días, horas, minutos y segundos faltantes
- **Hora Digital**: Reloj digital que se actualiza en tiempo real
- **Diseño Responsive**: Se adapta a todos los tamaños de pantalla

## 🚀 Desarrollo

### Requisitos

- Node.js (v14 o superior)
- npm

### Instalar Dependencias

```bash
npm install
```

### Ejecutar en Desarrollo

```bash
npm run dev
```

La página estará disponible en `http://localhost:5173/`

### Compilar para Producción

```bash
npm run build
```

Los archivos compilados se guardarán en la carpeta `dist/`

## 📤 Desplegar en GitHub Pages

### 1. Crear un Repositorio en GitHub

1. Crea un nuevo repositorio llamado `countdown` en tu cuenta de GitHub
2. No inicializes con README, .gitignore, ni licencia

### 2. Configurar Git Localmente

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/countdown.git
git push -u origin main
```

### 3. Habilitar GitHub Pages

1. Accede a la configuración del repositorio
2. Baja a la sección "GitHub Pages"
3. En "Build and deployment", selecciona:
   - **Source**: GitHub Actions
   - Espera a que Vite se configure automáticamente, o crea un workflow

### 4. Crear GitHub Actions Workflow (Opcional)

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 5. Acceder a la Página

Tu página estará disponible en: `https://tu-usuario.github.io/countdown/`

## 🎨 Personalización

Puedes modificar:

- **Fecha Objetivo**: En `src/main.js`, línea 3, cambia la fecha:
  ```javascript
  const targetDate = new Date(2024, 11, 2, 19, 46, 0); // Mes (0-11), Día, Hora, Minuto
  ```
- **Colores**: En `src/style.css`, modifica los valores de color (variables CSS)
- **Textos**: En `src/main.js`, actualiza los textos del HTML

## 📝 Licencia

Libre para usar y modificar como desees.

---

Hecho con ❤️ usando Vite
