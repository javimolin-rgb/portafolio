/* Datos de perfil: experiencia, formación y herramientas. Fuente: CV de Javi. */

export type Trabajo = {
  periodo: string;
  cargo: string;
  lugar: string;
  detalle: string;
  /** Puntos del CV. Hoy solo Ripley los tiene; se listan bajo el detalle en Experiencia. */
  logros?: string[];
};

export const experiencia: Trabajo[] = [
  {
    periodo: '2025',
    cargo: 'Diseñadora de Marketing',
    lugar: 'Ripley',
    detalle: 'Campañas digitales y presenciales en Chile y Perú: Ripley Beauty, Día del Niño, Navidad, CyberDay, Días R, eventos y activaciones.',
    logros: [
      'Diseñé, planifiqué y ejecuté campañas digitales y offline en Chile y Perú, en hitos institucionales y comerciales.',
      'Hice piezas gráficas y audiovisuales para eventos corporativos y promocionales (módulos, floorgraphics, merchandising) y material impreso.',
      'Adapté contenidos a redes sociales, e-commerce y tiendas, cuidando la consistencia visual en cada punto de contacto.',
      'Participé en procesos creativos con los equipos de Marketing, Contenidos y Comercial.',
      'Hice seguimiento de métricas de desempeño para optimizar resultados y cuidar la calidad de cada campaña.',
    ],
  },
  { periodo: '2022 a hoy', cargo: 'Diseñadora independiente', lugar: 'Freelance', detalle: 'Branding, redes sociales y material gráfico para clientes de distintas industrias. Hoy: identidad, manual de marca, redes y sitio web para Muralia y Neorigen.' },
  { periodo: '2022 a 2023', cargo: 'Diseñadora principal', lugar: 'Agencia Lupa BTL', detalle: 'Propuestas de diseño para clientes de capital humano, espacios y vestuario para eventos corporativos, y redes sociales de la agencia.' },
  { periodo: '2022 a 2023', cargo: 'Diseñadora complementaria', lugar: 'Fundación Banco de Ropa', detalle: 'Propuestas para un uso más eficiente de los recursos de la fundación.' },
];

export const formacion = [
  { periodo: '2019 a 2024', titulo: 'Diseño Integral, con foco en Diseño Gráfico y Branding', lugar: 'Pontificia Universidad Católica de Chile' },
  { periodo: '2023', titulo: 'Diplomado en Branding y Valor de Marca', lugar: 'Pontificia Universidad Católica de Chile' },
  { periodo: '2024', titulo: 'Certificado Académico en Innovación', lugar: 'Escuela de Ingeniería UC' },
  { periodo: '2024', titulo: 'Marketing con Redes Sociales', lugar: 'Tec de Monterrey' },
  { periodo: '2024', titulo: 'UI/UX Design', lugar: 'CalArts' },
  { periodo: '2020 a 2024', titulo: 'Ayudante de cátedra', lugar: 'Escuela de Diseño UC: Ideación y Formalización, Psicología para el Diseño, Diseño y Economía Circular' },
];

export const hace = ['Dirección de arte y key visuals', 'Campañas retail multiformato', 'Eventos, activaciones y gran formato', 'Branding e identidad', 'Redes sociales y e-commerce', 'Motion para pantallas', 'Retoque y fotomontaje', 'Originales para producción'];

export const herramientas = ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Premiere', 'Lightroom', 'Figma', 'Procreate', 'HTML', 'Midjourney', 'Firefly'];
