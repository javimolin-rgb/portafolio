/* Portadas del índice.
   Una lámina por proyecto, dibujada con las normas gráficas de ese proyecto:
   su campo de color, su tinta, su color de apoyo y un motivo sacado de su
   propia gráfica (el aparejo de Muralia, el arco del Día del Niño, las rayas
   de Toys"R"Us, la grilla en perspectiva de Gamer Week…).

   Son gráfica del portafolio, no piezas entregadas al cliente: por eso no
   reproducen logos ni tipografías de marca. El trabajo real vive en el caso. */

/** Motivos disponibles. Cada uno se dibuja en `Portada.astro` sobre un lienzo 1200 × 900. */
export type Motivo =
  | 'aparejo'
  | 'casa'
  | 'arco'
  | 'franja'
  | 'rayas'
  | 'flora'
  | 'escalera'
  | 'destacado'
  | 'aura'
  | 'grilla'
  | 'guirnalda'
  | 'counter';

export type Portada = {
  /** Fondo de la lámina. */
  field: string;
  /** Tinta: texto y motivo. */
  ink: string;
  /** Color de apoyo del proyecto, cuando el motivo lo usa. */
  alt?: string;
  motivo: Motivo;
  /** Familia del título: la serif de display o la sans del sitio. */
  voz: 'serif' | 'sans';
  /** Caja del título. */
  caja?: 'alta' | 'normal' | 'baja';
  /** Interletraje del título, en em. */
  track?: number;
  /** Título partido en líneas, tal como se compone en la lámina. */
  lineas: string[];
};

export const portadas: Record<string, Portada> = {
  muralia: {
    field: '#C2551F',
    ink: '#FFFDF9',
    alt: '#2B2A26',
    motivo: 'aparejo',
    voz: 'sans',
    caja: 'alta',
    track: 0.04,
    lineas: ['Muralia'],
  },
  neorigen: {
    field: '#0E2233',
    ink: '#FFFFFF',
    alt: '#C8A96A',
    motivo: 'casa',
    voz: 'serif',
    lineas: ['Neorigen'],
  },
  'dia-del-nino': {
    field: '#FFCD00',
    ink: '#101010',
    alt: '#FF0094',
    motivo: 'arco',
    voz: 'sans',
    caja: 'alta',
    lineas: ['Día del', 'Niño'],
  },
  'campeones-sin-limites': {
    field: '#E4007C',
    ink: '#FFFFFF',
    motivo: 'franja',
    voz: 'serif',
    caja: 'alta',
    track: 0.22,
    lineas: ['Campeones', 'Sin Límites'],
  },
  'toys-r-us': {
    field: '#E2231A',
    ink: '#FFFFFF',
    alt: '#F7C6D6',
    motivo: 'rayas',
    voz: 'sans',
    caja: 'alta',
    lineas: ['Toys"R"Us', 'llega a Ripley'],
  },
  'new-romantic': {
    field: '#D9CDBB',
    ink: '#101010',
    alt: '#8C7A63',
    motivo: 'flora',
    voz: 'serif',
    lineas: ['New Romantic', 'y moda'],
  },
  'ventas-privadas': {
    field: '#141414',
    ink: '#FFFFFF',
    alt: '#EC008C',
    motivo: 'escalera',
    voz: 'sans',
    caja: 'alta',
    lineas: ['Ventas Privadas', 'y Days'],
  },
  'me-fascinan-las-sandalias': {
    field: '#EDE6DD',
    ink: '#101010',
    alt: '#EC008C',
    motivo: 'destacado',
    voz: 'sans',
    caja: 'baja',
    lineas: ['me fascinan', 'las sandalias'],
  },
  'ripley-beauty': {
    field: '#F4C9D6',
    ink: '#2B1B22',
    alt: '#FFFFFF',
    motivo: 'aura',
    voz: 'sans',
    caja: 'alta',
    track: 0.02,
    lineas: ['Ripley', 'Beauty'],
  },
  'gamer-week': {
    field: '#3B0A6B',
    ink: '#FFFFFF',
    alt: '#22E3E8',
    motivo: 'grilla',
    voz: 'sans',
    caja: 'baja',
    lineas: ['gamer', 'week'],
  },
  'fiestas-patrias': {
    field: '#1E3A8A',
    ink: '#FFFFFF',
    alt: '#D52B1E',
    motivo: 'guirnalda',
    voz: 'serif',
    lineas: ['Fiestas Patrias', 'y gift cards'],
  },
  activaciones: {
    field: '#FF5F1F',
    ink: '#101010',
    motivo: 'counter',
    voz: 'sans',
    caja: 'alta',
    lineas: ['Activaciones', 'en tienda'],
  },
};
