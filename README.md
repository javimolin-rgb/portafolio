# Javi Molin, portafolio

Portafolio de María Javiera Molin Aguad, Diseñadora Integral UC. Sitio estático hecho con [Astro](https://astro.build).

- **Cómo trabajar en este repo:** [`CLAUDE.md`](CLAUDE.md). Manda sobre todo lo demás.
- **Dirección de arte:** [`DESIGN.md`](DESIGN.md). Léelo antes de cambiar algo visual.
- **Auditoría y direcciones exploradas:** [`docs/`](docs/), que documentan versiones anteriores.

## Trabajar en local

```bash
npm install
npm run dev      # http://localhost:4321/portafolio/
npm run build    # genera dist/
npm run preview  # revisa el build
```

Requiere Node 20 o superior.

## Dónde está cada cosa

```
src/data/projects.ts        Proyectos: datos, textos y bloques de cada caso
src/data/perfil.ts          Experiencia, formación, áreas y herramientas
src/data/portadas.ts        Láminas de portada del índice
src/data/biblioteca-*.ts    Bibliotecas gráficas de marca, registradas en bibliotecas.ts
src/assets/work/<slug>/     Imágenes fuente de cada proyecto (se optimizan solas a AVIF/WebP)
src/assets/perfil/          foto-retrato.jpg, el círculo de la barra lateral
public/video/               Loops de video (.mp4, sin sonido)
public/<marca>/fondos/      Fondos SVG de una marca
public/cv/                  CV en PDF
src/layouts/Base.astro      Barra lateral, <head>, JSON-LD, pie
src/components/             Blocks, Figure, ProjectCard, Portada, ScaleRow, GlyphSheet, Fondos, Icon
src/pages/                  index, proyectos/, trabajo/[slug], experiencia/, contacto/, 404
src/styles/global.css       Tokens, botones, secciones
```

## Agregar un proyecto

1. Crea `src/assets/work/mi-proyecto/` y pon ahí las imágenes (JPG o PNG, lado mayor hasta 2400 px).
2. En `src/data/projects.ts`, copia un proyecto completo y cambia `slug`, `grupo` (`'ripley'` o `'freelance'`), textos y piezas.
3. Arma el caso con bloques (`notes`, `bleed`, `piece`, `row`, `grid`, `pair`, `stack`, `scale`, `sequence`, `swatches`, `statement`, `anatomy`, `markers`, `glyphs`, `fondos`). Ver DESIGN.md §8.
4. Videos: `public/video/nombre.mp4` y `video: 'nombre'` en la pieza; la imagen de `ref` queda de póster.
5. Dibuja su lámina de portada en `src/data/portadas.ts`. Ver DESIGN.md §7.

El orden del índice y el de Anterior / Siguiente sale de `grupo`: primero Ripley, después Freelance.

## Publicar

El workflow [`.github/workflows/astro.yml`](.github/workflows/astro.yml) publica en GitHub Pages en cada push a `main`. En el repositorio: *Settings → Pages → Source: GitHub Actions*.

Queda en `https://javimolin-rgb.github.io/portafolio/`. Para un dominio propio, cambia `site` y `base` en `astro.config.mjs` y la URL de `public/robots.txt`.

## Fuentes

Newsreader (títulos) e Inter Tight (texto), ambas con licencia SIL Open Font License (ver `src/fonts/`). En esa carpeta quedan además Instrument Serif y Mona Sans, de la dirección anterior, que ya no se usan.
