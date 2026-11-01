# DESIGN.md — Javi Molin, portafolio

Memoria de dirección de arte. Antes de agregar una página, un proyecto o un componente, lee esto. Si una decisión nueva contradice este documento, actualiza el documento en el mismo cambio y explica por qué.

> **`CLAUDE.md` manda.** Este archivo desarrolla la sección 5 de `CLAUDE.md` (diseño vigente). Si los dos se contradicen, gana `CLAUDE.md`.

> **Historia.** La primera versión, "Temporadas", usaba una grotesca de ancho extremo y pintaba cada página con el color de su campaña. Javi la encontró desordenada. La segunda, **Galería blanca**, dejó el color solo en las piezas. La actual mantiene esa idea y le suma una **barra lateral oscura** fija con el perfil y la navegación.

---

## 1. Concepto: galería blanca con barra de perfil

**El trabajo es lo único que tiene color.** El contenido es una sala blanca con placas neutras: cada pieza se cuelga sobre su placa, completa, y el resto (texto, navegación, rótulos) se retira a un segundo plano. A la izquierda, una barra oscura fija sostiene el perfil: quién es, cómo se la contacta y dónde está cada cosa.

La frase guía de Javi: *"que no parezca un menjunje de elementos"*.

## 2. Personalidad

Precisa, tranquila, segura. Se nota el oficio (medidas reales, originales, formatos) sin decorarlo. Nunca corporativa, nunca estridente.

## 3. Principios

1. **El trabajo manda.** Piezas grandes, completas, sin sombras ni esquinas redondeadas.
2. **Color solo en las piezas.** Fondo, texto y placas son neutros. La paleta de un proyecto aparece como contenido (bloque `swatches`), nunca como fondo de página.
3. **Orden visible.** Mismo margen, misma grilla, mismos espacios entre secciones en todas las páginas.
4. **Menos cosas, mejor puestas.** Si un rótulo, una línea o un número no ayuda a entender, se quita.
5. **Movimiento con causa.** Solo los loops de video se mueven, sin sonido y con pausa.
6. **Verdad.** No se inventan clientes, métricas, roles ni resultados. Lo que es propuesta se rotula como propuesta; lo que es de otro, se acredita.

## 4. Tipografía

| Rol | Familia | Uso |
|---|---|---|
| Títulos | **Newsreader** (variable, peso 500) | Nombre, títulos de caso y sección, nombres de proyecto |
| Texto | **Inter Tight** (variable, 400–600) | Párrafos, rótulos, navegación, botones |

Escala completa, en `src/styles/global.css`. **Usa los tokens, nunca un tamaño suelto.**

| Token | Tamaño | Uso |
|---|---|---|
| `--t-hero` | 2,75 → 5,25 rem | El nombre en el inicio |
| `--t-display` | 2,75 → 5,5 rem | Título de caso y de página |
| `--t-h2` | 1,875 → 2,875 rem | Títulos de sección |
| `--t-h3` | 1 rem | Subtítulos |
| `--t-lead` | 1,0625 → 1,25 rem | Entradillas |
| `--t-body` | 1 rem | Cuerpo |
| `--t-ui` | 0,9375 rem | Botones, filtros, pies de tarjeta, listas densas, bio de la barra |
| `--t-small` | 0,8125 rem | Pies de pieza, fichas, rótulos |
| `--t-mini` | 0,75 rem | Rótulos dentro de una lámina (vectores, fondos) |

Quedan fuera de la escala, a propósito: el nombre de la barra lateral y el dato grande de Contacto (serif, 1,5–1,75 rem), la frase del bloque `statement`, el título del pie de caso y el rótulo dibujado dentro de la lámina de portada (que es un SVG, no texto de la página).

- La serif nunca va en cursiva ni en negrita; la jerarquía la da el tamaño.
- **Prohibido:** mayúsculas espaciadas, monoespaciada, cadenas "A · B · C", flechas "→", una palabra del título en otro color o cursiva.

## 5. Color

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#FFFFFF` | Fondo |
| `--plate` | `#F3F3F1` | Placa detrás de portadas, pasos de proceso, pieza principal y la sección de Ripley en el inicio |
| `--ink` | `#1C1C1A` | Texto y líneas principales |
| `--ink-2` | `#72726C` | Texto secundario |
| `--rule` | `#E4E4E0` | Filetes y subrayados en reposo |
| `--side-bg` / `--side-fg` / `--side-fg-2` | `#1C1C1A` / `#F5F5F2` / `#B4B4AD` | Barra lateral |

El `surface` de cada bloque queda en los datos, pero esta dirección no lo usa: todas las superficies del caso se resuelven a blanco (ver `.s-*` en `global.css`).

Los campos `field`, `ink` y `alt` de cada proyecto sí se usan, y en un solo lugar: la **lámina de portada** del índice. Es la excepción a "color solo en las piezas", y es deliberada: la portada *es* la pieza del proyecto dentro del índice.

## 6. Imágenes

- **Piezas completas**, siempre en su proporción (`object-fit: contain`). Nunca se recortan piezas gráficas.
- **Fotos** (montaje, tienda, evento) sí se recortan, con punto focal definido en los datos (`focus`).
- **Retrato de Javi:** uno solo, redondo y chico, en la barra lateral. Ni el inicio ni Experiencia llevan una foto grande suya: en su lugar va una ficha de datos. El sitio muestra el trabajo, no a la autora.
- Sin sombras, sin bordes, sin esquinas redondeadas. Las piezas completas llevan un filete interior casi invisible (1 px, tinta al 7 %) para que las claras no se pierdan en el blanco.
- Formatos: AVIF + WebP con `srcset`, anchos 400–2400 px. Lazy loading salvo la primera imagen visible. `width` y `height` siempre declarados.
- **Niños en fotos de evento: se pueden mostrar.** Esta regla cambió en octubre de 2026; antes se excluían.
- **Exclusiones permanentes:** documentos personales (boletas, transferencias, Rindegastos), KV de agencias presentados como obra propia, stickers con caras reales, reportes de venta internos de Ripley, selfies del equipo.
- Créditos visibles donde aparece el material: fotos de montaje de Ripley, **MacroMKT**; concepto gráfico de Toys"R"Us, **agencia ODN**; fotos y renders de Neorigen, del cliente; fotos de producto de Muralia, de los fabricantes; fotos de modelos y deportistas, material de campaña de cada marca. La lista completa está en `CLAUDE.md` §3.

## 7. Estructura y grilla

- Márgenes `clamp(1.25rem, 4vw, 4rem)`; medianil `clamp(1rem, 2vw, 2rem)`.
- Dos proporciones de columnas, siempre las mismas: 7/5 (texto + dato) y 1/1.
- Todo alineado a la izquierda, con mucho aire. Las secciones se separan con espacio (`--section`) y, cuando cambia el tema, con un filete `--rule`.

### Barra lateral (288 px, `--side-w`)

Fija a la izquierda, de alto completo, con el contenido centrado vertical y horizontalmente. De arriba hacia abajo: el nombre en Newsreader, la foto redonda, una bio corta, la navegación con íconos de línea (ítem activo sobre blanco al 10 %) y, bajo un filete, "Escribir un correo", "Descargar CV" y LinkedIn.

- **Ventanas bajas (`max-height: 760px`):** la foto baja a 96 px y se comprimen los espacios, para que los botones no queden fuera de la pantalla. Bajo 620 px de alto se esconde también la bio.
- **Bajo 1000 px:** la barra pasa a ser una cabecera con botón de menú (`aria-expanded`, se cierra con Escape) y el contenido vuelve a alinearse a la izquierda.

### Páginas

- **Inicio:** presentación a dos columnas, con el nombre, el rol, las acciones a la izquierda y una **composición de tres piezas** a la derecha, de modo que haya trabajo suyo en la primera pantalla; bajo ellas, la ficha como franja de cuatro columnas → **Un año diseñando para Ripley** sobre la placa, con ficha, Día del Niño en grande y seis proyectos → **Freelance** con Muralia y Neorigen → Qué hago → Experiencia → "¿Conversamos?".
- **Proyectos:** entradilla → **cinco portadas de categoría** → filtros (Todos, Eventos, Campañas, Lanzamientos, Marca e identidad) → dos grupos por cliente: **Ripley** (`#ripley`) primero y **Freelance** (`#freelance`) después. Un filtro que deja un grupo vacío lo esconde entero, con su título.
- **Caso:** "Todos los proyectos" → título → resumen y ficha → pieza principal → índice "En este proyecto" → bloques → créditos → Anterior / Todos los proyectos / Siguiente.
- **Experiencia:** bio, botones, Trabajo (con los puntos del CV bajo Ripley) y Formación, más etiquetas de Áreas y Herramientas.
- **Contacto:** tres tarjetas (Correo, LinkedIn, CV) y el teléfono. Es el único lugar del sitio con el teléfono.

### Composiciones de piezas

`Composicion.astro` cuelga piezas reales sobre una placa, como en una sala. Los datos están en `src/data/composiciones.ts`: de cada pieza se fija solo `x`, `y` y el ancho, los tres en porcentaje de la placa. **El alto sale de la proporción real de la imagen,** así que ninguna pieza se deforma ni se recorta, y las posiciones están calculadas para que no se toquen entre ellas ni con el texto.

Se usa en dos lugares:

- **La primera pantalla del inicio:** tres piezas de tres proyectos distintos. Antes el inicio abría con texto sobre blanco y no se veía una sola pieza suya hasta hacer scroll.
- **Las cinco portadas de categoría** de Proyectos (`CategoryCover.astro`): Eventos, Campañas, Lanzamientos, Marca e identidad y Freelance. Cada una lleva de tres a cinco piezas de esa categoría, el nombre en Newsreader y, debajo, cuántos proyectos y de qué años. **Eventos ocupa la fila entera** en una placa 5:2; las otras cuatro van de a dos en 3:2. La asimetría es deliberada, y el lienzo de cinco metros de Ripley Beauty necesita ese ancho.

Las portadas son controles: las cuatro de categoría marcan su filtro, igual que los botones, que se mantienen; la de Freelance lleva al grupo `#freelance`, porque el cliente no es un filtro. Las piezas dentro van como decorativas (`alt=""`) porque la portada entera ya tiene nombre accesible, y cada pieza aparece rotulada y con pie dentro de su caso.

Lo que es propuesta se rotula dentro de la composición: Gamer Week lleva "Propuesta, no producida".

### Lámina de portada

Una por proyecto, en `src/data/portadas.ts` y dibujada por `Portada.astro` sobre un lienzo 1200 × 900. Las doce comparten estructura, y lo que cambia son las normas gráficas del proyecto:

| Parte | Qué lleva |
|---|---|
| Fondo | El `field` del proyecto |
| Motivo | Una figura sacada de su propia gráfica (el aparejo de Muralia, el arco del Día del Niño, las rayas de Toys"R"Us, la grilla en perspectiva de Gamer Week), dibujada sobre la banda de arriba |
| Cartela | Campo limpio en los 304 px de abajo, para que el texto no compita nunca con el motivo |
| Rótulo | El formato emblemático del proyecto (`format.name`): "Arco de entrada", "Pendón 100 × 200 cm" |
| Título | El nombre del proyecto, en la serif o la sans del sitio según la voz de esa marca |

Son **gráfica del portafolio, no piezas entregadas al cliente**: por eso no reproducen logos ni tipografías de marca, y el trabajo real aparece recién dentro del caso. Dos licencias que valen solo aquí, dentro de la lámina, y no en el resto del sitio: la caja alta espaciada de Campeones Sin Límites y la caja baja de Gamer Week y de Me fascinan las sandalias.

El pie de la tarjeta no repite el nombre: lleva el tipo de trabajo y el cliente con el año.

## 8. Biblioteca de bloques para casos

| Bloque | Cuándo |
|---|---|
| `notes` | Contexto y decisiones, texto a dos columnas |
| `bleed` | Foto de montaje o pieza protagonista a todo el ancho de la columna |
| `piece` | Una pieza sola |
| `row` | Familia de piezas a la misma altura; en móvil, carrusel horizontal con scroll nativo |
| `grid` | Dos o tres columnas de piezas |
| `pair` | Dos piezas en diálogo (general / clientas; frente / volumen) |
| `stack` | Piezas apiladas |
| `scale` | Varias piezas alineadas en una base común, a escala real, con medida en cm |
| `sequence` | Proceso real con orden (planta → 3D → montaje). Solo aquí se numeran pasos |
| `swatches` | Paleta del proyecto a todo el ancho |
| `statement` | Una frase del proyecto |
| `anatomy` | Una pieza anotada por zonas |
| `markers` | Una pieza con puntos numerados |
| `glyphs` | Lámina de vectores de una biblioteca de marca, por familias, con su conteo |
| `fondos` | Lámina de contactos de los fondos de pantalla de una marca |

Para un **video**, se pone `video: 'nombre'` en la pieza y el archivo en `public/video/nombre.mp4`; la imagen de `ref` sirve de póster.

Las bibliotecas gráficas viven en `src/data/biblioteca-<marca>.ts` y se registran en `src/data/bibliotecas.ts`. Los vectores se dibujan con `currentColor` y la lámina pone los colores de esa marca (los únicos colores que no son neutros fuera de una pieza); los fondos son archivos SVG en `public/<marca>/fondos/`, cargados en diferido.

## 9. Navegación

- Barra lateral fija con los cuatro destinos: Inicio, Proyectos, Experiencia y Contacto, cada uno con su ícono de línea. El activo lleva `aria-current="page"` y fondo blanco al 10 %.
- En móvil, los mismos cuatro dentro del menú desplegable.
- Cada caso empieza con un enlace a Todos los proyectos y termina con Anterior / Todos los proyectos / Siguiente. El orden es el de `projects`: **los diez de Ripley primero, los dos freelance después**.
- Entre la pieza principal y el primer bloque, un **índice del caso**: las secciones numeradas, en tres columnas, con ancla a cada una. Aparece solo cuando el caso tiene más de dos secciones con título.

## 10. Acciones y botones

| Dónde | Acciones |
|---|---|
| Barra lateral | **Escribir un correo** (principal), **Descargar CV**, LinkedIn |
| Inicio | **Ver proyectos** y **Descargar CV**; "Ver los 10 proyectos de Ripley"; "Ver el proyecto" en Día del Niño |
| Proyectos | Filtros por tipo; toda la tarjeta abre el proyecto |
| Final de cada caso | Anterior, **Todos los proyectos**, Siguiente |
| Contacto | Escribir un correo, Abrir LinkedIn, Descargar CV |

- `.btn` (tinta), `.btn--ghost` (borde), `.btn--light` y `.btn--line` (en la barra). Radio 6 px, alto mínimo 46 px.
- Enlaces subrayados con filete `--rule` que pasa a tinta al pasar el mouse.
- Las acciones son botones; el resto son enlaces de texto.

## 11. Motion

| Momento | Qué | Duración |
|---|---|---|
| Índice | La portada crece 2 % al pasar el mouse | 600 ms `ease-out` |
| Cambio de página | View Transitions nativas: la lámina de portada del índice se convierte en la pieza principal del caso | nativa |
| Videos | Loops sin sonido, que se reproducen solo a la vista y se pausan con botón | — |

- Nada de aparición "fade-up" por sección, parallax ni cursor personalizado.
- `prefers-reduced-motion`: las transiciones se desactivan y los videos no parten solos.

## 12. Responsive

- **≥ 1000 px:** barra lateral fija de 288 px; el contenido corre a su derecha.
- **< 1000 px:** la barra se vuelve cabecera con menú; el contenido ocupa todo el ancho.
- **< 900 px:** las grillas 7/5 pasan a una columna; las tarjetas de seis, a dos columnas.
- **< 800 px:** todo en una columna; `row` y `scale` pasan a carrusel con scroll nativo; objetivos táctiles ≥ 44 px.
- **Alto < 760 px:** la barra lateral se comprime (ver §7).

## 13. Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `article`, `figure/figcaption`, un `h1` por página.
- Contraste AA: tinta 16:1 y texto secundario 5,3:1 sobre blanco.
- Foco visible: contorno de 2 px en la tinta, desplazado 3 px.
- Alt descriptivo en cada pieza (qué es y para qué formato).
- Todo lo que se mueve solo puede pausarse; los videos no tienen sonido y tienen control.
- Enlace "Saltar al contenido"; el menú de móvil se cierra con Escape.

## 14. Rendimiento y SEO

- Astro estático, JS solo en el menú, los filtros y los videos (sin librerías).
- Dos familias, subconjunto latino, `font-display: swap`, precarga.
- Imágenes AVIF/WebP responsivas; la primera pantalla sin lazy.
- `title`, `description`, Open Graph y Twitter por página; `sitemap.xml`, `robots.txt`, favicon SVG, JSON-LD `Person` con el nombre completo (María Javiera Molin Aguad).
- `public/og.jpg` (1200 × 630) es lo primero que se ve al compartir el sitio en LinkedIn: su nombre en Newsreader y seis piezas reales de seis proyectos sobre la placa. Se genera fotografiando una página temporal con el componente `Composicion`, no a mano.

## 15. Evitar

Fondos de color por proyecto en las páginas (la lámina de portada es la única excepción, ver §7), tipografías estiradas, varias familias, tarjetas con sombra, gradientes, esquinas redondeadas en las piezas, fondo crema, monoespaciada, mayúsculas espaciadas, numeración fuera de procesos reales, fade-up por sección, parallax, cursor personalizado, métricas inventadas.

## 16. Tecnología

- **Astro 5**, CSS propio con custom properties (sin framework CSS), TypeScript para los datos.
- Datos de proyectos en `src/data/projects.ts` (con `grupo: 'ripley' | 'freelance'`); perfil en `src/data/perfil.ts`; portadas del índice en `src/data/portadas.ts`; bibliotecas gráficas en `src/data/biblioteca-<marca>.ts`, registradas en `src/data/bibliotecas.ts`.
- Imágenes fuente en `src/assets/work/<proyecto>/`; videos en `public/video/`; fondos de marca en `public/<marca>/fondos/`.
- View Transitions entre documentos (`@view-transition { navigation: auto }`), sin router de cliente.
- Despliegue en GitHub Pages con `.github/workflows/astro.yml`, en cada push a `main`.
