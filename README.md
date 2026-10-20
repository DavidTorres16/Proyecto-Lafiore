# Proyecto Lafiore

Propuesta de landing informativa y promocional para **Lafiore Medical Skin Center** (Armenia, Quindío). Es una demo no contratada, pensada para presentarla al cliente.

- Análisis de marca y bases de la propuesta: [`docs/01-analisis-marca-lafiore.md`](docs/01-analisis-marca-lafiore.md)
- Capturas de referencia del Instagram: `docs/referencias/instagram/`

## Correr el proyecto

Requiere Node.js 22.12 o superior (`.nvmrc` incluido).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Stack: Astro 6 + Tailwind v4, fuentes autoalojadas (Cormorant Garamond y Geist) e iconos Phosphor.

## Estructura de la landing

1. Hero con CTA a WhatsApp
2. Franja de confianza
3. Tratamientos: 4 líneas en bento
4. Post operatorio (bloque oscuro)
5. Promoción destacada: recuperación de cejas
6. Testimonio
7. Plan de visita al Quindío
8. Nosotras
9. Cierre con CTA y footer

Los botones abren WhatsApp con un mensaje prellenado según el tratamiento. Los datos del negocio están en `src/data/site.ts`.

## Antes de mostrarla o publicarla

- Las fotos son recortes de bajo tamaño del Instagram, escalados. Hay que reemplazarlas por los originales en alta (`public/img/`).
- El logo está vectorizado a partir de una captura (`src/assets/lafiore-mark.svg`). Hay que pedir el archivo original.
- La página lleva `noindex`. Compartirla solo por enlace privado hasta que el cliente apruebe.
- Falta confirmar la dirección, los horarios y el permiso para usar el testimonio y las fotos de personas.

## Archivo de demo

`demo/lafiore-propuesta.html` es la landing empaquetada en un solo archivo (estilos, fuentes e imágenes incluidos). Se abre directamente en el navegador, sin servidor ni conexión. Si cambias el sitio, hay que regenerarlo después de `npm run build`.
