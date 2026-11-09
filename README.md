# SERIN — propuesta web

> **Propuesta de diseño no oficial** preparada por Web Local Growth. No es la web oficial de SERIN.

| | |
|---|---|
| **Cliente potencial** | SERIN Servicios e Instalaciones · C/ Rosselló 128 (esq. Benviure), Sant Boi de Llobregat · 93 630 81 90 · 651 83 66 64 · serin128@hotmail.com |
| **Objetivo** | Sustituir su web actual (WordPress + Elementor) por una más rápida, bilingüe y que enseñe sus obras |
| **Alcance** | Página única en catalán (`/`) y castellano (`/es`): portada, qué hacemos, diario de obra, fotos, hoja de presupuesto, dónde estamos; aviso legal y privacidad en los dos idiomas |
| **Estado** | Demo terminada · `PUBLIC_IS_DEMO=true` |

## Por qué (auditoría de serin128.com, 09/11/2026)

| | Web actual | Esta propuesta |
|---|---|---|
| Lighthouse móvil | Rendimiento 62 · Accesibilidad 89 · Buenas prácticas 96 · SEO 85 | **96 · 100 · 100 · 100** |
| LCP móvil | 5,3 s | 2,7 s (escritorio 0,7 s) |
| Peso | ~3,9 MB | ~310 KB |

Otros problemas de la web actual:
- El `<title>` es solo "Servicios e instalaciones".
- No tiene meta description.
- Hay enlaces sin texto y textos sin contraste suficiente.
- Usa una foto de muestra de la plantilla ("mt-sample-background").
- Tiene unas 200 imágenes duplicadas en la biblioteca.

## Identidad: "Rosselló 128"

El negocio es una tienda de barrio en el número 128 de la calle Rosselló, y el lenguaje visual sale de ahí:
- **Placas esmaltadas:** el número 128 y las placas de las calles Rosselló y Benviure, con el azul y blanco de las placas de Sant Boi (`.placa`, `.placa-carrer`).
- **Cartel de horario:** como el que se cuelga en la puerta de la tienda.
- **Hoja de encargo:** el formulario de presupuesto imita un papel pautado con el membrete de SERIN.
- **Fecha estampada:** las fotos del diario muestran la fecha en naranja, como las cámaras de 2014.
- **Tipografía:** Archivo estrecha para rótulos (como las letras de las placas), Figtree para el texto y JetBrains Mono para la fecha y los rótulos de formulario.
- **Color:** azul esmalte `#1D3B8F` (que también cumple el contraste AA), papel `#F6F2EA` y el azul del logotipo `#4168C7`.

**Textos:** escritos en primera persona y sin eslóganes. Solo usan datos que el negocio publica: dirección, horario, oficios, tamaño del equipo, zonas y marcas de calderas.

## Funcionalidades

- **Bilingüe** (i18n de Astro): catalán por defecto, como su web actual, y castellano en `/es`. Incluye `hreflang`, canonical por idioma, sitemap multilingüe y selector CA/ES en la cabecera.
- **Diario de obra** (`Diari.astro`): una tira de fotos que se expande. Se arrastra una línea de tiempo con los **días reales** de la obra (del 25/2 al 9/4/2014, sacados de los nombres de archivo de la cámara) y se colorea y expande la foto de cada fase. Funciona con teclado y se pueden pulsar los hitos.
- **Fotos:** filtro (todo, baños, cocinas, puertas) y ampliación en un `<dialog>` nativo, que se cierra con Esc o al pulsar fuera.
- **Hoja de presupuesto:** tipo de obra, trabajos, nombre y población. Valida los campos y abre WhatsApp con el mensaje escrito. No hay backend.
- **Entradas suaves** al hacer scroll. La foto principal no lleva animación, para que cargue al instante.
- **SEO:** JSON-LD `HomeAndConstructionBusiness` con dirección, horario, zona y tamaño del equipo.

## Recursos y pendientes

- **Fotos:** son de la biblioteca pública de su web (`src/assets/obres/`), de entre 2010 y 2017 y de 800 px como mucho. **Lo ideal sería pedirles fotos recientes y en más resolución.**
- **Logotipo:** vectorizado de un PNG pequeño (528×49), así que convendría pedirles el original.
- **Pendientes:**
  - NIF para el aviso legal.
  - Confirmar que el 651 83 66 64 tiene WhatsApp.
  - Autorización para usar sus fotos.

## Ejecutar y desplegar

```bash
npm install
npm run dev
npm run build
```

En Vercel: importar el repo (raíz por defecto) y añadir `PUBLIC_IS_DEMO=true`. Para producción: `PUBLIC_IS_DEMO=false` y `SITE_URL=https://serin128.com`.
