/* Composiciones editoriales: piezas reales colgadas sobre una placa, como en una sala.
   Cada pieza lleva su posición y su ancho en porcentaje de la placa; el alto sale solo
   de la proporción real de la imagen, así que ninguna se deforma ni se recorta.
   Las posiciones están calculadas para que no se toquen entre ellas ni con el texto. */

export type PiezaComp = {
  /** 'proyecto/archivo', igual que en projects.ts */
  ref: string;
  /** Borde izquierdo y superior, en % de la placa */
  x: number;
  y: number;
  /** Ancho en % de la placa */
  w: number;
  /** Rótulo sobre la pieza. Hoy solo para rotular una propuesta. */
  nota?: string;
};

export type Portada = {
  /** Clave del filtro de la página de Proyectos, o null si enlaza a un grupo */
  filtro: string | null;
  /** Ancla de grupo, cuando no es un filtro */
  ancla?: string;
  titulo: string;
  anos: string;
  /** Proporción de la placa (ancho / alto) */
  ratio: number;
  /** Ocupa las dos columnas de la fila */
  ancha?: boolean;
  piezas: PiezaComp[];
};

/* Primera pantalla del inicio: tres piezas que muestran de una el rango de su trabajo. */
export const heroComposicion: { ratio: number; piezas: PiezaComp[] } = {
  ratio: 1,
  piezas: [
    { ref: 'dia-del-nino/d_formas', x: 10, y: 9, w: 62 },
    { ref: 'muralia/logo_arcilla', x: 10, y: 62, w: 28 },
    { ref: 'new-romantic/s_nr_01', x: 66, y: 60, w: 24 },
  ],
};

export const portadas: Portada[] = [
  {
    filtro: 'eventos',
    titulo: 'Eventos',
    anos: '2025',
    ratio: 2.5,
    ancha: true,
    piezas: [
      { ref: 'ripley-beauty/r_lienzo', x: 48, y: 13, w: 45 },
      { ref: 'dia-del-nino/ddn_arco', x: 6, y: 14, w: 15 },
      { ref: 'dia-del-nino/d_formas', x: 25, y: 20, w: 18 },
      { ref: 'campeones-sin-limites/c_bandera', x: 50, y: 38, w: 16 },
      { ref: 'dia-del-nino/ddn_f1346', x: 72, y: 34, w: 13 },
    ],
  },
  {
    filtro: 'campanas',
    titulo: 'Campañas',
    anos: '2025',
    ratio: 1.5,
    piezas: [
      { ref: 'ventas-privadas/s_vp_04', x: 7, y: 10, w: 10 },
      { ref: 'new-romantic/s_nr_01', x: 21, y: 14, w: 21 },
      { ref: 'ventas-privadas/v_trebol', x: 46, y: 9, w: 19 },
      { ref: 'me-fascinan-las-sandalias/s_sand_03', x: 69, y: 15, w: 16 },
      { ref: 'fiestas-patrias/gc_v1', x: 70, y: 55, w: 20 },
    ],
  },
  {
    filtro: 'lanzamientos',
    titulo: 'Lanzamientos',
    anos: '2025',
    ratio: 1.5,
    piezas: [
      { ref: 'toys-r-us/tru_arco1', x: 7, y: 10, w: 24 },
      { ref: 'toys-r-us/t_std', x: 36, y: 16, w: 21 },
      { ref: 'new-romantic/s_lanz_01', x: 62, y: 12, w: 12 },
      { ref: 'toys-r-us/tru_gct1', x: 71, y: 55, w: 19 },
    ],
  },
  {
    filtro: 'identidad',
    titulo: 'Marca e identidad',
    anos: '2025 — 2026',
    ratio: 1.5,
    piezas: [
      { ref: 'muralia/manual_01', x: 7, y: 10, w: 17 },
      { ref: 'muralia/logo_arcilla', x: 28, y: 16, w: 17 },
      { ref: 'neorigen/manual_01', x: 49, y: 11, w: 25 },
      { ref: 'gamer-week/s_gw_01', x: 54, y: 40, w: 23, nota: 'Propuesta, no producida' },
    ],
  },
  {
    filtro: null,
    ancla: 'freelance',
    titulo: 'Freelance',
    anos: '2026',
    ratio: 1.5,
    piezas: [
      { ref: 'muralia/portada_05', x: 7, y: 11, w: 17 },
      { ref: 'muralia/historia_01', x: 27, y: 14, w: 12 },
      { ref: 'neorigen/sitio_web', x: 44, y: 10, w: 28 },
      { ref: 'neorigen/web_01', x: 76, y: 44, w: 16 },
    ],
  },
];
