# Prototipo web BUSTREN PM

Maquetación navegable de alta fidelidad para la nueva web comercial de BUSTREN PM. No está indexada: el HTML incluye `noindex, nofollow` y `public/robots.txt` permite el rastreo para que esas metaetiquetas puedan leerse.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Build de producción:

```bash
npm run build
npm run preview
```

## Capturas para el plan de proyecto

Generadas con Playwright:

```bash
npx playwright install chromium
npm run screenshots
```

Rutas:

- `screenshots/bustren-home-desktop.png` — inicio 1440×900
- `screenshots/bustren-portfolio-desktop.png` — proyectos 1440×900 con filtro Metro activo
- `screenshots/bustren-quito-desktop.png` — ficha Línea 1 Metro de Quito
- `screenshots/bustren-mobile.png` — inicio 390×844

## Contenido

Los proyectos y textos proceden de las presentaciones `Pagina web BT_Propuesta_v3.pptx` y `Presentacion BUSTREN-11-2025_v2.pptx`. Las fotografías se extrajeron de esos decks y se guardaron en `public/images`.
