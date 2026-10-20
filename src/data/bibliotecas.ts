/* Registro de bibliotecas gráficas. Los bloques `glyphs` y `fondos` de un caso
   nombran una biblioteca por su id y aquí se resuelve de dónde salen sus datos y sus colores. */
import type { BibliotecaId } from './projects';
import { glifos as muraliaGlifos, fondos as muraliaFondos, type Fondo, type GrupoGlifos } from './biblioteca-muralia';

export type Biblioteca = {
  glifos: GrupoGlifos[];
  fondos: Fondo[];
  /** Carpeta en public/ donde viven los SVG de los fondos. */
  dir: string;
  /** Colores propios de la marca para dibujar la lámina. */
  ink: string;
  paper: string;
  line: string;
};

export const bibliotecas: Record<BibliotecaId, Biblioteca> = {
  muralia: {
    glifos: muraliaGlifos,
    fondos: muraliaFondos,
    dir: 'muralia/fondos',
    ink: '#2B2A26',
    paper: '#FFFDF9',
    line: '#DDD5C4',
  },
};
