/* Biblioteca gráfica de Muralia: 124 elementos vectoriales y 52 fondos de pantalla.
   Los SVG se dibujan con `currentColor`, así que heredan el color del bloque que los contiene.
   Los fondos viven como archivos en public/muralia/fondos/ y se cargan de forma diferida. */

export type Glifo = { name: string; wide: boolean; svg: string };
export type GrupoGlifos = { id: string; title: string; desc: string; items: Glifo[] };
export type Fondo = { n: number; slug: string; name: string; colors: string[] };

export const glifos: GrupoGlifos[] = [
  {
    "id": "iconos",
    "title": "Iconos",
    "desc": "Productos, propiedades, sectores y contacto. Grilla de 48 × 48 con trazo de 3.",
    "items": [
      {
        "name": "Lana (aislación)",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><clipPath id=\"u1cl\"><rect x=\"4\" y=\"8\" width=\"40\" height=\"32\"/></clipPath><path d=\"M4 8H44M4 40H44\"/><g clip-path=\"url(#u1cl)\" stroke-width=\"2.4\"><polyline points=\"-4.0,14.1 -6.2,14.4 -8.3,15.4 -10.0,17.0 -11.1,19.0 -11.6,21.4 -11.4,24.0 -10.4,26.6 -8.7,28.9 -6.4,31.0 -3.5,32.6 -0.2,33.6 3.2,33.9 6.7,33.6 9.9,32.6 12.8,31.0 15.2,29.0 16.9,26.6 17.8,24.0 18.1,21.4 17.6,19.0 16.4,17.0 14.7,15.4 12.7,14.4 10.5,14.1 8.2,14.4 6.2,15.4 4.5,17.0 3.3,19.1 2.8,21.4 3.1,24.0 4.0,26.6 5.7,28.9 8.1,31.0 11.0,32.6 14.2,33.6 17.7,33.9 21.1,33.6 24.4,32.6 27.3,31.0 29.6,28.9 31.3,26.6 32.3,24.0 32.5,21.4 32.0,19.1 30.9,17.0 29.2,15.4 27.1,14.4 24.9,14.1 22.7,14.4 20.6,15.4 18.9,17.0 17.8,19.0 17.3,21.4 17.5,24.0 18.5,26.6 20.2,29.0 22.5,31.0 25.4,32.6 28.7,33.6 32.1,33.9 35.6,33.6 38.8,32.6 41.7,31.0 44.1,29.0 45.8,26.6 46.7,24.0 47.0,21.4 46.5,19.0 45.3,17.0 43.6,15.4 41.6,14.4 39.4,14.1 37.1,14.4 35.1,15.4 33.4,17.0 32.2,19.0 31.7,21.4 32.0,24.0 32.9,26.6 34.6,29.0 37.0,31.0 39.9,32.6 43.1,33.6 46.6,33.9 50.0,33.6 53.3,32.6 56.2,31.0 58.5,29.0 60.2,26.6 61.2,24.0 61.4,21.4 60.9,19.0 59.8,17.0 58.1,15.4 56.1,14.4 53.8,14.1 51.6,14.4 49.5,15.4 47.8,17.0 46.7,19.1 46.2,21.4 46.4,24.0 47.4,26.6 49.1,28.9 51.4,31.0 54.3,32.6 57.6,33.6 61.0,33.9 64.5,33.6 67.7,32.6 70.6,31.0 73.0,28.9 74.7,26.6 75.6,24.0 75.9,21.4 75.4,19.1 74.2,17.0 72.6,15.4 70.5,14.4 68.3,14.1\"/></g></g></svg>"
      },
      {
        "name": "Placa",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"8\" y=\"8\" width=\"32\" height=\"32\"/><path d=\"M8 22L22 8M8 36L36 8M22 40L40 22\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Placa de yeso cartón",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"10\" width=\"36\" height=\"28\"/><path d=\"M6 16H42M6 32H42\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Fuego",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 5C30 13 37 18 37 28A13 13 0 0 1 11 28C11 21 15 17 18 13C19 19 21 21 24 21C25 15 23 10 24 5Z\"/></g></svg>"
      },
      {
        "name": "Cortafuego",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"6\" width=\"6\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M29 10C33 16 38 20 38 28A9 9 0 0 1 20 28C20 23 23 20 25 17C26 21 27 22 29 22C30 18 28 14 29 10Z\"/><path d=\"M14 42H42\"/></g></svg>"
      },
      {
        "name": "Resistencia al fuego",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 5L40 11V23C40 33 24 43 24 43C24 43 8 33 8 23V11Z\"/><path d=\"M24 14C27 18 30 20 30 25A6 6 0 0 1 18 25C18 22 20 20 21 18C22 21 23 22 24 22Z\" stroke-width=\"2.4\"/></g></svg>"
      },
      {
        "name": "Temperatura",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M20 6H28V29A8 8 0 1 1 20 29Z\"/><path d=\"M24 16V34\"/><path d=\"M32 12H36M32 18H36M32 24H36\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Aislación térmica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"21\" y=\"5\" width=\"6\" height=\"38\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M4 14H15M11 10L15 14L11 18M4 34H15M11 30L15 34L11 38\"/><path d=\"M33 14H44M33 34H44\" stroke-dasharray=\"3 4\"/></g></svg>"
      },
      {
        "name": "Acústica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"18\" width=\"7\" height=\"12\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M13 18L22 10V38L13 30\"/><path d=\"M28 17A9 9 0 0 1 28 31M33 12A16 16 0 0 1 33 36\"/></g></svg>"
      },
      {
        "name": "Aislación acústica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"27\" y=\"5\" width=\"6\" height=\"38\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M8 17A9 9 0 0 1 8 31M14 12A16 16 0 0 1 14 36\"/><path d=\"M39 21A4 4 0 0 1 39 27\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Decibeles",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 40V28M16 40V20M24 40V12M32 40V22M40 40V32\"/></g></svg>"
      },
      {
        "name": "Humedad",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 5C24 5 11 20 11 29A13 13 0 0 0 37 29C37 20 24 5 24 5Z\"/></g></svg>"
      },
      {
        "name": "Resistente a humedad",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"6\" width=\"36\" height=\"36\"/><path d=\"M24 12C24 12 16 21 16 27A8 8 0 0 0 32 27C32 21 24 12 24 12Z\"/></g></svg>"
      },
      {
        "name": "Resistente al impacto",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"36\" y=\"5\" width=\"6\" height=\"38\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M4 24H24M18 18L24 24L18 30\"/><path d=\"M29 12L31 17M29 36L31 31M28 24H32\" stroke-width=\"2.4\"/></g></svg>"
      },
      {
        "name": "Ducto",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M6 18H32V36H6Z\"/><path d=\"M6 18L14 10H40V28L32 36M32 18L40 10\"/></g></svg>"
      },
      {
        "name": "Viga / estructura metálica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M10 8H38M10 40H38M24 8V40\" stroke-width=\"5\"/></g></svg>"
      },
      {
        "name": "Columna",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"14\" y=\"6\" width=\"20\" height=\"36\"/><path d=\"M14 6L34 42M34 6L14 42\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Perfil C (montante)",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M34 16V10H14V38H34V32\"/></g></svg>"
      },
      {
        "name": "Perfil U (solera)",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M10 12V36H38V12\"/></g></svg>"
      },
      {
        "name": "Tornillo",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M14 8H34M24 8V42M20 16L28 19M20 22L28 25M20 28L28 31M20 34L28 37\" /></g></svg>"
      },
      {
        "name": "Tabique",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"6\" width=\"36\" height=\"36\"/><path d=\"M18 6V42M30 6V42\" stroke-dasharray=\"4 3\"/></g></svg>"
      },
      {
        "name": "Cielo",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 8H44M4 30H44M12 8V30M24 8V30M36 8V30\" /><path d=\"M4 36H44\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/></g></svg>"
      },
      {
        "name": "Cinta",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"22\" cy=\"22\" r=\"14\"/><circle cx=\"22\" cy=\"22\" r=\"6\"/><path d=\"M22 36H44\"/></g></svg>"
      },
      {
        "name": "Masilla / espátula",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 30H30L36 42H14Z\"/><path d=\"M22 30L30 6\"/></g></svg>"
      },
      {
        "name": "Rollo",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"24\" cy=\"22\" r=\"16\"/><circle cx=\"24\" cy=\"22\" r=\"9\"/><circle cx=\"24\" cy=\"22\" r=\"2.5\"/><path d=\"M4 42H44\"/></g></svg>"
      },
      {
        "name": "Stock",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"26\" width=\"16\" height=\"16\"/><rect x=\"26\" y=\"26\" width=\"16\" height=\"16\"/><rect x=\"16\" y=\"8\" width=\"16\" height=\"16\"/></g></svg>"
      },
      {
        "name": "Despacho",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 12H28V34H4Z\"/><path d=\"M28 20H37L44 27V34H28\"/><circle cx=\"12\" cy=\"36\" r=\"4\"/><circle cx=\"36\" cy=\"36\" r=\"4\"/></g></svg>"
      },
      {
        "name": "Seguridad en obra",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M6 34H42M10 34A14 14 0 0 1 38 34\"/><path d=\"M24 14V22M19 16V24M29 16V24\" stroke-width=\"2.4\"/></g></svg>"
      },
      {
        "name": "Minería",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M6 18Q24 2 42 18\"/><path d=\"M24 10V44\"/></g></svg>"
      },
      {
        "name": "Industria / celulosa",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 42V22L14 28V22L24 28V10H32V42Z\"/><path d=\"M36 42V16H44V42\" /><path d=\"M2 42H46\"/></g></svg>"
      },
      {
        "name": "Termoeléctrica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M12 42C17 30 17 20 13 6H35C31 20 31 30 36 42Z\"/><path d=\"M4 42H44\"/></g></svg>"
      },
      {
        "name": "Escuelas",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M6 42V20L24 10L42 20V42Z\"/><rect x=\"19\" y=\"30\" width=\"10\" height=\"12\"/><path d=\"M24 10V4H32V8H24\"/></g></svg>"
      },
      {
        "name": "Edificios",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"12\" y=\"4\" width=\"24\" height=\"38\"/><path d=\"M18 12H22M26 12H30M18 20H22M26 20H30M18 28H22M26 28H30\"/><path d=\"M4 42H44\"/></g></svg>"
      },
      {
        "name": "Casas",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M6 22L24 8L42 22M11 18V42H37V18\"/><rect x=\"20\" y=\"30\" width=\"8\" height=\"12\"/></g></svg>"
      },
      {
        "name": "Plano",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"8\" width=\"36\" height=\"32\"/><path d=\"M6 20H42M18 8V40M30 20V40\" stroke-width=\"2\"/><rect x=\"30\" y=\"32\" width=\"12\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Escuadra",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 6V42H44Z\"/><path d=\"M15 21V35H29Z\"/><path d=\"M8 14H12M8 22H12M8 30H12\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Nivel",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"17\" width=\"40\" height=\"14\"/><circle cx=\"24\" cy=\"24\" r=\"3.5\"/><path d=\"M17 17V31M31 17V31\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Cotización",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M10 4H30L38 12V44H10Z\"/><path d=\"M30 4V12H38\"/><path d=\"M16 22H32M16 29H32M16 36H26\" stroke-width=\"2.4\"/></g></svg>"
      },
      {
        "name": "Teléfono",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"14\" y=\"4\" width=\"20\" height=\"40\"/><path d=\"M14 10H34M14 36H34\"/><path d=\"M22 40H26\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Correo",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"5\" y=\"11\" width=\"38\" height=\"26\"/><path d=\"M5 11L24 26L43 11\"/></g></svg>"
      },
      {
        "name": "Ubicación",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 44C24 44 10 29 10 19A14 14 0 0 1 38 19C38 29 24 44 24 44Z\"/><rect x=\"20\" y=\"15\" width=\"8\" height=\"8\"/></g></svg>"
      },
      {
        "name": "Horario",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"6\" width=\"36\" height=\"36\"/><path d=\"M24 13V24H33\"/></g></svg>"
      },
      {
        "name": "Check",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 25L19 36L40 13\"/></g></svg>"
      },
      {
        "name": "Norma / certificación",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 4H32V30M8 4V44H24\"/><path d=\"M14 13H26M14 20H26\" stroke-width=\"2.4\"/><circle cx=\"34\" cy=\"36\" r=\"7\"/><path d=\"M31 42V46M37 42V46\" stroke-width=\"2.4\"/></g></svg>"
      },
      {
        "name": "Capas / sistema",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 6L42 14L24 22L6 14Z\"/><path d=\"M6 23L24 31L42 23\"/><path d=\"M6 32L24 40L42 32\"/></g></svg>"
      },
      {
        "name": "Espesor",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M14 4V44M34 4V44\"/><path d=\"M18 24H30\" stroke-width=\"2\"/><path d=\"M18 20V28M30 20V28\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Densidad",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 16L24 8L40 16V34L24 42L8 34Z\"/><path d=\"M8 16L24 24L40 16M24 24V42\"/></g></svg>"
      },
      {
        "name": "Asesoría técnica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 6H30V24H14L8 30V24H4Z\"/><path d=\"M34 16H44V34H40V40L34 34H18V28\"/></g></svg>"
      },
      {
        "name": "Garantía",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 4L40 10V22C40 33 24 44 24 44C24 44 8 33 8 22V10Z\"/><path d=\"M16 23L22 29L33 17\"/></g></svg>"
      },
      {
        "name": "Fibra cerámica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 14C12 8 16 20 24 14S36 8 44 14M4 24C12 18 16 30 24 24S36 18 44 24M4 34C12 28 16 40 24 34S36 28 44 34\"/></g></svg>"
      },
      {
        "name": "Panel",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M6 14L30 6V34L6 42Z\"/><path d=\"M30 6L42 10V38L30 34\"/></g></svg>"
      },
      {
        "name": "Colchoneta",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"16\" width=\"40\" height=\"16\"/><path d=\"M4 24H44\" stroke-dasharray=\"3 3\" stroke-width=\"2\"/><path d=\"M10 16V32M38 16V32\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Protección rayos X",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"6\" width=\"36\" height=\"36\"/><circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M24 12L20 18H28Z M13 31L20 30L17 24Z M35 31L28 30L31 24Z\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Instalación",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M10 38L28 20\"/><path d=\"M26 10A8 8 0 0 0 38 22L42 18L30 6Z\"/><path d=\"M6 42L14 34\"/></g></svg>"
      }
    ]
  },
  {
    "id": "franjas",
    "title": "Franjas",
    "desc": "Bandas horizontales para cabeceras, pies de página, separadores de sección y bordes de piezas.",
    "items": [
      {
        "name": "Aparejo",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 4H480M0 24H480M0 44H480\"/><path d=\"M0 4V24\"/><path d=\"M60 4V24\"/><path d=\"M120 4V24\"/><path d=\"M180 4V24\"/><path d=\"M240 4V24\"/><path d=\"M300 4V24\"/><path d=\"M360 4V24\"/><path d=\"M420 4V24\"/><path d=\"M480 4V24\"/><path d=\"M30 24V44\"/><path d=\"M90 24V44\"/><path d=\"M150 24V44\"/><path d=\"M210 24V44\"/><path d=\"M270 24V44\"/><path d=\"M330 24V44\"/><path d=\"M390 24V44\"/><path d=\"M450 24V44\"/></g></svg>"
      },
      {
        "name": "Lana",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><clipPath id=\"u56cb\"><rect width=\"480\" height=\"48\"/></clipPath><path d=\"M0 4H480M0 44H480\"/><g clip-path=\"url(#u56cb)\" stroke-width=\"2.4\"><polyline points=\"-8.0,9.6 -11.2,10.1 -14.1,11.5 -16.5,13.8 -18.1,16.8 -18.7,20.3 -18.3,24.0 -16.9,27.7 -14.3,31.2 -10.8,34.2 -6.6,36.5 -1.8,37.9 3.3,38.4 8.4,37.9 13.2,36.5 17.5,34.2 20.9,31.2 23.5,27.7 25.0,24.0 25.4,20.3 24.7,16.8 23.1,13.8 20.7,11.5 17.8,10.1 14.6,9.6 11.4,10.1 8.5,11.5 6.1,13.8 4.5,16.8 3.9,20.3 4.3,24.0 5.8,27.7 8.3,31.2 11.8,34.2 16.0,36.5 20.8,37.9 25.9,38.4 31.0,37.9 35.8,36.5 40.1,34.2 43.6,31.2 46.1,27.7 47.6,24.0 48.0,20.3 47.3,16.8 45.7,13.8 43.4,11.5 40.4,10.1 37.2,9.6 34.0,10.1 31.1,11.5 28.8,13.8 27.2,16.8 26.5,20.3 26.9,24.0 28.4,27.7 30.9,31.2 34.4,34.2 38.7,36.5 43.5,37.9 48.5,38.4 53.6,37.9 58.4,36.5 62.7,34.2 66.2,31.2 68.7,27.7 70.2,24.0 70.6,20.3 69.9,16.8 68.3,13.8 66.0,11.5 63.1,10.1 59.9,9.6 56.7,10.1 53.7,11.5 51.4,13.8 49.8,16.8 49.1,20.3 49.5,24.0 51.0,27.7 53.5,31.2 57.0,34.2 61.3,36.5 66.1,37.9 71.2,38.4 76.3,37.9 81.1,36.5 85.3,34.2 88.8,31.2 91.3,27.7 92.8,24.0 93.2,20.3 92.6,16.8 91.0,13.8 88.6,11.5 85.7,10.1 82.5,9.6 79.3,10.1 76.4,11.5 74.0,13.8 72.4,16.8 71.7,20.3 72.1,24.0 73.6,27.7 76.2,31.2 79.6,34.2 83.9,36.5 88.7,37.9 93.8,38.4 98.9,37.9 103.7,36.5 107.9,34.2 111.4,31.2 114.0,27.7 115.4,24.0 115.8,20.3 115.2,16.8 113.6,13.8 111.2,11.5 108.3,10.1 105.1,9.6 101.9,10.1 99.0,11.5 96.6,13.8 95.0,16.8 94.4,20.3 94.8,24.0 96.2,27.7 98.8,31.2 102.3,34.2 106.5,36.5 111.3,37.9 116.4,38.4 121.5,37.9 126.3,36.5 130.5,34.2 134.0,31.2 136.6,27.7 138.1,24.0 138.5,20.3 137.8,16.8 136.2,13.8 133.8,11.5 130.9,10.1 127.7,9.6 124.5,10.1 121.6,11.5 119.2,13.8 117.6,16.8 117.0,20.3 117.4,24.0 118.9,27.7 121.4,31.2 124.9,34.2 129.1,36.5 133.9,37.9 139.0,38.4 144.1,37.9 148.9,36.5 153.2,34.2 156.7,31.2 159.2,27.7 160.7,24.0 161.1,20.3 160.4,16.8 158.8,13.8 156.5,11.5 153.5,10.1 150.3,9.6 147.1,10.1 144.2,11.5 141.8,13.8 140.2,16.8 139.6,20.3 140.0,24.0 141.5,27.7 144.0,31.2 147.5,34.2 151.8,36.5 156.6,37.9 161.6,38.4 166.7,37.9 171.5,36.5 175.8,34.2 179.3,31.2 181.8,27.7 183.3,24.0 183.7,20.3 183.0,16.8 181.4,13.8 179.1,11.5 176.2,10.1 173.0,9.6 169.8,10.1 166.8,11.5 164.5,13.8 162.9,16.8 162.2,20.3 162.6,24.0 164.1,27.7 166.6,31.2 170.1,34.2 174.4,36.5 179.2,37.9 184.3,38.4 189.3,37.9 194.2,36.5 198.4,34.2 201.9,31.2 204.4,27.7 205.9,24.0 206.3,20.3 205.7,16.8 204.1,13.8 201.7,11.5 198.8,10.1 195.6,9.6 192.4,10.1 189.5,11.5 187.1,13.8 185.5,16.8 184.8,20.3 185.2,24.0 186.7,27.7 189.3,31.2 192.7,34.2 197.0,36.5 201.8,37.9 206.9,38.4 212.0,37.9 216.8,36.5 221.0,34.2 224.5,31.2 227.1,27.7 228.5,24.0 228.9,20.3 228.3,16.8 226.7,13.8 224.3,11.5 221.4,10.1 218.2,9.6 215.0,10.1 212.1,11.5 209.7,13.8 208.1,16.8 207.5,20.3 207.8,24.0 209.3,27.7 211.9,31.2 215.4,34.2 219.6,36.5 224.4,37.9 229.5,38.4 234.6,37.9 239.4,36.5 243.6,34.2 247.1,31.2 249.7,27.7 251.2,24.0 251.6,20.3 250.9,16.8 249.3,13.8 246.9,11.5 244.0,10.1 240.8,9.6 237.6,10.1 234.7,11.5 232.3,13.8 230.7,16.8 230.1,20.3 230.5,24.0 232.0,27.7 234.5,31.2 238.0,34.2 242.2,36.5 247.0,37.9 252.1,38.4 257.2,37.9 262.0,36.5 266.3,34.2 269.8,31.2 272.3,27.7 273.8,24.0 274.2,20.3 273.5,16.8 271.9,13.8 269.5,11.5 266.6,10.1 263.4,9.6 260.2,10.1 257.3,11.5 254.9,13.8 253.3,16.8 252.7,20.3 253.1,24.0 254.6,27.7 257.1,31.2 260.6,34.2 264.9,36.5 269.7,37.9 274.7,38.4 279.8,37.9 284.6,36.5 288.9,34.2 292.4,31.2 294.9,27.7 296.4,24.0 296.8,20.3 296.1,16.8 294.5,13.8 292.2,11.5 289.3,10.1 286.1,9.6 282.9,10.1 279.9,11.5 277.6,13.8 276.0,16.8 275.3,20.3 275.7,24.0 277.2,27.7 279.7,31.2 283.2,34.2 287.5,36.5 292.3,37.9 297.4,38.4 302.4,37.9 307.2,36.5 311.5,34.2 315.0,31.2 317.5,27.7 319.0,24.0 319.4,20.3 318.8,16.8 317.2,13.8 314.8,11.5 311.9,10.1 308.7,9.6 305.5,10.1 302.6,11.5 300.2,13.8 298.6,16.8 297.9,20.3 298.3,24.0 299.8,27.7 302.4,31.2 305.8,34.2 310.1,36.5 314.9,37.9 320.0,38.4 325.1,37.9 329.9,36.5 334.1,34.2 337.6,31.2 340.1,27.7 341.6,24.0 342.0,20.3 341.4,16.8 339.8,13.8 337.4,11.5 334.5,10.1 331.3,9.6 328.1,10.1 325.2,11.5 322.8,13.8 321.2,16.8 320.5,20.3 320.9,24.0 322.4,27.7 325.0,31.2 328.5,34.2 332.7,36.5 337.5,37.9 342.6,38.4 347.7,37.9 352.5,36.5 356.7,34.2 360.2,31.2 362.8,27.7 364.3,24.0 364.7,20.3 364.0,16.8 362.4,13.8 360.0,11.5 357.1,10.1 353.9,9.6 350.7,10.1 347.8,11.5 345.4,13.8 343.8,16.8 343.2,20.3 343.6,24.0 345.1,27.7 347.6,31.2 351.1,34.2 355.3,36.5 360.1,37.9 365.2,38.4 370.3,37.9 375.1,36.5 379.4,34.2 382.8,31.2 385.4,27.7 386.9,24.0 387.3,20.3 386.6,16.8 385.0,13.8 382.6,11.5 379.7,10.1 376.5,9.6 373.3,10.1 370.4,11.5 368.0,13.8 366.4,16.8 365.8,20.3 366.2,24.0 367.7,27.7 370.2,31.2 373.7,34.2 378.0,36.5 382.8,37.9 387.8,38.4 392.9,37.9 397.7,36.5 402.0,34.2 405.5,31.2 408.0,27.7 409.5,24.0 409.9,20.3 409.2,16.8 407.6,13.8 405.3,11.5 402.3,10.1 399.2,9.6 396.0,10.1 393.0,11.5 390.7,13.8 389.1,16.8 388.4,20.3 388.8,24.0 390.3,27.7 392.8,31.2 396.3,34.2 400.6,36.5 405.4,37.9 410.5,38.4 415.5,37.9 420.3,36.5 424.6,34.2 428.1,31.2 430.6,27.7 432.1,24.0 432.5,20.3 431.9,16.8 430.3,13.8 427.9,11.5 425.0,10.1 421.8,9.6 418.6,10.1 415.7,11.5 413.3,13.8 411.7,16.8 411.0,20.3 411.4,24.0 412.9,27.7 415.5,31.2 418.9,34.2 423.2,36.5 428.0,37.9 433.1,38.4 438.2,37.9 443.0,36.5 447.2,34.2 450.7,31.2 453.2,27.7 454.7,24.0 455.1,20.3 454.5,16.8 452.9,13.8 450.5,11.5 447.6,10.1 444.4,9.6 441.2,10.1 438.3,11.5 435.9,13.8 434.3,16.8 433.6,20.3 434.0,24.0 435.5,27.7 438.1,31.2 441.6,34.2 445.8,36.5 450.6,37.9 455.7,38.4 460.8,37.9 465.6,36.5 469.8,34.2 473.3,31.2 475.9,27.7 477.4,24.0 477.8,20.3 477.1,16.8 475.5,13.8 473.1,11.5 470.2,10.1 467.0,9.6 463.8,10.1 460.9,11.5 458.5,13.8 456.9,16.8 456.3,20.3 456.7,24.0 458.2,27.7 460.7,31.2 464.2,34.2 468.4,36.5 473.2,37.9 478.3,38.4 483.4,37.9 488.2,36.5 492.5,34.2 495.9,31.2 498.5,27.7 500.0,24.0 500.4,20.3 499.7,16.8 498.1,13.8 495.7,11.5 492.8,10.1 489.6,9.6 486.4,10.1 483.5,11.5 481.1,13.8 479.5,16.8 478.9,20.3 479.3,24.0 480.8,27.7 483.3,31.2 486.8,34.2 491.1,36.5 495.9,37.9 500.9,38.4 506.0,37.9 510.8,36.5 515.1,34.2 518.6,31.2 521.1,27.7 522.6,24.0 523.0,20.3 522.3,16.8 520.7,13.8 518.4,11.5 515.4,10.1 512.2,9.6 509.0,10.1 506.1,11.5 503.8,13.8 502.2,16.8 501.5,20.3 501.9,24.0 503.4,27.7 505.9,31.2 509.4,34.2 513.7,36.5 518.5,37.9 523.6,38.4 528.6,37.9 533.4,36.5 537.7,34.2 541.2,31.2 543.7,27.7 545.2,24.0 545.6,20.3 545.0,16.8 543.4,13.8 541.0,11.5 538.1,10.1 534.9,9.6\"/></g></g></svg>"
      },
      {
        "name": "Montantes",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 4H480M0 44H480\" stroke-dasharray=\"6 5\" stroke-width=\"2\"/><path d=\"M0 4V44\"/><path d=\"M15 24H25M20 19V29\" stroke-width=\"2\"/><path d=\"M40 4V44\"/><path d=\"M55 24H65M60 19V29\" stroke-width=\"2\"/><path d=\"M80 4V44\"/><path d=\"M95 24H105M100 19V29\" stroke-width=\"2\"/><path d=\"M120 4V44\"/><path d=\"M135 24H145M140 19V29\" stroke-width=\"2\"/><path d=\"M160 4V44\"/><path d=\"M175 24H185M180 19V29\" stroke-width=\"2\"/><path d=\"M200 4V44\"/><path d=\"M215 24H225M220 19V29\" stroke-width=\"2\"/><path d=\"M240 4V44\"/><path d=\"M255 24H265M260 19V29\" stroke-width=\"2\"/><path d=\"M280 4V44\"/><path d=\"M295 24H305M300 19V29\" stroke-width=\"2\"/><path d=\"M320 4V44\"/><path d=\"M335 24H345M340 19V29\" stroke-width=\"2\"/><path d=\"M360 4V44\"/><path d=\"M375 24H385M380 19V29\" stroke-width=\"2\"/><path d=\"M400 4V44\"/><path d=\"M415 24H425M420 19V29\" stroke-width=\"2\"/><path d=\"M440 4V44\"/><path d=\"M455 24H465M460 19V29\" stroke-width=\"2\"/><path d=\"M480 4V44\"/><path d=\"M495 24H505M500 19V29\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Achurado",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><clipPath id=\"u58ch\"><rect y=\"4\" width=\"480\" height=\"40\"/></clipPath><path d=\"M0 4H480M0 44H480\"/><g clip-path=\"url(#u58ch)\" stroke-width=\"2\"><path d=\"M-40 44L0 4\"/><path d=\"M-30 44L10 4\"/><path d=\"M-20 44L20 4\"/><path d=\"M-10 44L30 4\"/><path d=\"M0 44L40 4\"/><path d=\"M10 44L50 4\"/><path d=\"M20 44L60 4\"/><path d=\"M30 44L70 4\"/><path d=\"M40 44L80 4\"/><path d=\"M50 44L90 4\"/><path d=\"M60 44L100 4\"/><path d=\"M70 44L110 4\"/><path d=\"M80 44L120 4\"/><path d=\"M90 44L130 4\"/><path d=\"M100 44L140 4\"/><path d=\"M110 44L150 4\"/><path d=\"M120 44L160 4\"/><path d=\"M130 44L170 4\"/><path d=\"M140 44L180 4\"/><path d=\"M150 44L190 4\"/><path d=\"M160 44L200 4\"/><path d=\"M170 44L210 4\"/><path d=\"M180 44L220 4\"/><path d=\"M190 44L230 4\"/><path d=\"M200 44L240 4\"/><path d=\"M210 44L250 4\"/><path d=\"M220 44L260 4\"/><path d=\"M230 44L270 4\"/><path d=\"M240 44L280 4\"/><path d=\"M250 44L290 4\"/><path d=\"M260 44L300 4\"/><path d=\"M270 44L310 4\"/><path d=\"M280 44L320 4\"/><path d=\"M290 44L330 4\"/><path d=\"M300 44L340 4\"/><path d=\"M310 44L350 4\"/><path d=\"M320 44L360 4\"/><path d=\"M330 44L370 4\"/><path d=\"M340 44L380 4\"/><path d=\"M350 44L390 4\"/><path d=\"M360 44L400 4\"/><path d=\"M370 44L410 4\"/><path d=\"M380 44L420 4\"/><path d=\"M390 44L430 4\"/><path d=\"M400 44L440 4\"/><path d=\"M410 44L450 4\"/><path d=\"M420 44L460 4\"/><path d=\"M430 44L470 4\"/><path d=\"M440 44L480 4\"/><path d=\"M450 44L490 4\"/><path d=\"M460 44L500 4\"/><path d=\"M470 44L510 4\"/><path d=\"M480 44L520 4\"/></g></g></svg>"
      },
      {
        "name": "Achurado cruzado",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><clipPath id=\"u59cx\"><rect y=\"4\" width=\"480\" height=\"40\"/></clipPath><g clip-path=\"url(#u59cx)\" stroke-width=\"1.8\"><path d=\"M-40 44L0 4\"/><path d=\"M-32 44L8 4\"/><path d=\"M-24 44L16 4\"/><path d=\"M-16 44L24 4\"/><path d=\"M-8 44L32 4\"/><path d=\"M0 44L40 4\"/><path d=\"M8 44L48 4\"/><path d=\"M16 44L56 4\"/><path d=\"M24 44L64 4\"/><path d=\"M32 44L72 4\"/><path d=\"M0 4L40 44\"/><path d=\"M8 4L48 44\"/><path d=\"M16 4L56 44\"/><path d=\"M24 4L64 44\"/><path d=\"M32 4L72 44\"/><path d=\"M40 4L80 44\"/><path d=\"M48 4L88 44\"/><path d=\"M56 4L96 44\"/><path d=\"M64 4L104 44\"/><path d=\"M72 4L112 44\"/><path d=\"M40 44L80 4\"/><path d=\"M48 44L88 4\"/><path d=\"M56 44L96 4\"/><path d=\"M64 44L104 4\"/><path d=\"M72 44L112 4\"/><path d=\"M80 44L120 4\"/><path d=\"M88 44L128 4\"/><path d=\"M96 44L136 4\"/><path d=\"M104 44L144 4\"/><path d=\"M112 44L152 4\"/><path d=\"M80 4L120 44\"/><path d=\"M88 4L128 44\"/><path d=\"M96 4L136 44\"/><path d=\"M104 4L144 44\"/><path d=\"M112 4L152 44\"/><path d=\"M120 4L160 44\"/><path d=\"M128 4L168 44\"/><path d=\"M136 4L176 44\"/><path d=\"M144 4L184 44\"/><path d=\"M152 4L192 44\"/><path d=\"M120 44L160 4\"/><path d=\"M128 44L168 4\"/><path d=\"M136 44L176 4\"/><path d=\"M144 44L184 4\"/><path d=\"M152 44L192 4\"/><path d=\"M160 44L200 4\"/><path d=\"M168 44L208 4\"/><path d=\"M176 44L216 4\"/><path d=\"M184 44L224 4\"/><path d=\"M192 44L232 4\"/><path d=\"M160 4L200 44\"/><path d=\"M168 4L208 44\"/><path d=\"M176 4L216 44\"/><path d=\"M184 4L224 44\"/><path d=\"M192 4L232 44\"/><path d=\"M200 4L240 44\"/><path d=\"M208 4L248 44\"/><path d=\"M216 4L256 44\"/><path d=\"M224 4L264 44\"/><path d=\"M232 4L272 44\"/><path d=\"M200 44L240 4\"/><path d=\"M208 44L248 4\"/><path d=\"M216 44L256 4\"/><path d=\"M224 44L264 4\"/><path d=\"M232 44L272 4\"/><path d=\"M240 44L280 4\"/><path d=\"M248 44L288 4\"/><path d=\"M256 44L296 4\"/><path d=\"M264 44L304 4\"/><path d=\"M272 44L312 4\"/><path d=\"M240 4L280 44\"/><path d=\"M248 4L288 44\"/><path d=\"M256 4L296 44\"/><path d=\"M264 4L304 44\"/><path d=\"M272 4L312 44\"/><path d=\"M280 4L320 44\"/><path d=\"M288 4L328 44\"/><path d=\"M296 4L336 44\"/><path d=\"M304 4L344 44\"/><path d=\"M312 4L352 44\"/><path d=\"M280 44L320 4\"/><path d=\"M288 44L328 4\"/><path d=\"M296 44L336 4\"/><path d=\"M304 44L344 4\"/><path d=\"M312 44L352 4\"/><path d=\"M320 44L360 4\"/><path d=\"M328 44L368 4\"/><path d=\"M336 44L376 4\"/><path d=\"M344 44L384 4\"/><path d=\"M352 44L392 4\"/><path d=\"M320 4L360 44\"/><path d=\"M328 4L368 44\"/><path d=\"M336 4L376 44\"/><path d=\"M344 4L384 44\"/><path d=\"M352 4L392 44\"/><path d=\"M360 4L400 44\"/><path d=\"M368 4L408 44\"/><path d=\"M376 4L416 44\"/><path d=\"M384 4L424 44\"/><path d=\"M392 4L432 44\"/><path d=\"M360 44L400 4\"/><path d=\"M368 44L408 4\"/><path d=\"M376 44L416 4\"/><path d=\"M384 44L424 4\"/><path d=\"M392 44L432 4\"/><path d=\"M400 44L440 4\"/><path d=\"M408 44L448 4\"/><path d=\"M416 44L456 4\"/><path d=\"M424 44L464 4\"/><path d=\"M432 44L472 4\"/><path d=\"M400 4L440 44\"/><path d=\"M408 4L448 44\"/><path d=\"M416 4L456 44\"/><path d=\"M424 4L464 44\"/><path d=\"M432 4L472 44\"/><path d=\"M440 4L480 44\"/><path d=\"M448 4L488 44\"/><path d=\"M456 4L496 44\"/><path d=\"M464 4L504 44\"/><path d=\"M472 4L512 44\"/></g><rect x=\"0\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"40\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"80\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"120\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"160\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"200\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"240\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"280\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"320\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"360\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"400\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/><rect x=\"440\" y=\"4\" width=\"40\" height=\"40\" stroke-width=\"3\"/></g></svg>"
      },
      {
        "name": "Marco",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"28\"/><rect x=\"55\" y=\"19\" width=\"10\" height=\"10\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"86\" y=\"10\" width=\"28\" height=\"28\"/><rect x=\"135\" y=\"19\" width=\"10\" height=\"10\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"166\" y=\"10\" width=\"28\" height=\"28\"/><rect x=\"215\" y=\"19\" width=\"10\" height=\"10\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"246\" y=\"10\" width=\"28\" height=\"28\"/><rect x=\"295\" y=\"19\" width=\"10\" height=\"10\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"326\" y=\"10\" width=\"28\" height=\"28\"/><rect x=\"375\" y=\"19\" width=\"10\" height=\"10\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"406\" y=\"10\" width=\"28\" height=\"28\"/><rect x=\"455\" y=\"19\" width=\"10\" height=\"10\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Regla milimetrada",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 44H480\"/><path d=\"M0 44V4\" stroke-width=\"3\"/><path d=\"M5 44V34\" stroke-width=\"1.5\"/><path d=\"M10 44V22\" stroke-width=\"1.5\"/><path d=\"M15 44V34\" stroke-width=\"1.5\"/><path d=\"M20 44V22\" stroke-width=\"1.5\"/><path d=\"M25 44V34\" stroke-width=\"1.5\"/><path d=\"M30 44V22\" stroke-width=\"1.5\"/><path d=\"M35 44V34\" stroke-width=\"1.5\"/><path d=\"M40 44V22\" stroke-width=\"1.5\"/><path d=\"M45 44V34\" stroke-width=\"1.5\"/><path d=\"M50 44V4\" stroke-width=\"3\"/><path d=\"M55 44V34\" stroke-width=\"1.5\"/><path d=\"M60 44V22\" stroke-width=\"1.5\"/><path d=\"M65 44V34\" stroke-width=\"1.5\"/><path d=\"M70 44V22\" stroke-width=\"1.5\"/><path d=\"M75 44V34\" stroke-width=\"1.5\"/><path d=\"M80 44V22\" stroke-width=\"1.5\"/><path d=\"M85 44V34\" stroke-width=\"1.5\"/><path d=\"M90 44V22\" stroke-width=\"1.5\"/><path d=\"M95 44V34\" stroke-width=\"1.5\"/><path d=\"M100 44V4\" stroke-width=\"3\"/><path d=\"M105 44V34\" stroke-width=\"1.5\"/><path d=\"M110 44V22\" stroke-width=\"1.5\"/><path d=\"M115 44V34\" stroke-width=\"1.5\"/><path d=\"M120 44V22\" stroke-width=\"1.5\"/><path d=\"M125 44V34\" stroke-width=\"1.5\"/><path d=\"M130 44V22\" stroke-width=\"1.5\"/><path d=\"M135 44V34\" stroke-width=\"1.5\"/><path d=\"M140 44V22\" stroke-width=\"1.5\"/><path d=\"M145 44V34\" stroke-width=\"1.5\"/><path d=\"M150 44V4\" stroke-width=\"3\"/><path d=\"M155 44V34\" stroke-width=\"1.5\"/><path d=\"M160 44V22\" stroke-width=\"1.5\"/><path d=\"M165 44V34\" stroke-width=\"1.5\"/><path d=\"M170 44V22\" stroke-width=\"1.5\"/><path d=\"M175 44V34\" stroke-width=\"1.5\"/><path d=\"M180 44V22\" stroke-width=\"1.5\"/><path d=\"M185 44V34\" stroke-width=\"1.5\"/><path d=\"M190 44V22\" stroke-width=\"1.5\"/><path d=\"M195 44V34\" stroke-width=\"1.5\"/><path d=\"M200 44V4\" stroke-width=\"3\"/><path d=\"M205 44V34\" stroke-width=\"1.5\"/><path d=\"M210 44V22\" stroke-width=\"1.5\"/><path d=\"M215 44V34\" stroke-width=\"1.5\"/><path d=\"M220 44V22\" stroke-width=\"1.5\"/><path d=\"M225 44V34\" stroke-width=\"1.5\"/><path d=\"M230 44V22\" stroke-width=\"1.5\"/><path d=\"M235 44V34\" stroke-width=\"1.5\"/><path d=\"M240 44V22\" stroke-width=\"1.5\"/><path d=\"M245 44V34\" stroke-width=\"1.5\"/><path d=\"M250 44V4\" stroke-width=\"3\"/><path d=\"M255 44V34\" stroke-width=\"1.5\"/><path d=\"M260 44V22\" stroke-width=\"1.5\"/><path d=\"M265 44V34\" stroke-width=\"1.5\"/><path d=\"M270 44V22\" stroke-width=\"1.5\"/><path d=\"M275 44V34\" stroke-width=\"1.5\"/><path d=\"M280 44V22\" stroke-width=\"1.5\"/><path d=\"M285 44V34\" stroke-width=\"1.5\"/><path d=\"M290 44V22\" stroke-width=\"1.5\"/><path d=\"M295 44V34\" stroke-width=\"1.5\"/><path d=\"M300 44V4\" stroke-width=\"3\"/><path d=\"M305 44V34\" stroke-width=\"1.5\"/><path d=\"M310 44V22\" stroke-width=\"1.5\"/><path d=\"M315 44V34\" stroke-width=\"1.5\"/><path d=\"M320 44V22\" stroke-width=\"1.5\"/><path d=\"M325 44V34\" stroke-width=\"1.5\"/><path d=\"M330 44V22\" stroke-width=\"1.5\"/><path d=\"M335 44V34\" stroke-width=\"1.5\"/><path d=\"M340 44V22\" stroke-width=\"1.5\"/><path d=\"M345 44V34\" stroke-width=\"1.5\"/><path d=\"M350 44V4\" stroke-width=\"3\"/><path d=\"M355 44V34\" stroke-width=\"1.5\"/><path d=\"M360 44V22\" stroke-width=\"1.5\"/><path d=\"M365 44V34\" stroke-width=\"1.5\"/><path d=\"M370 44V22\" stroke-width=\"1.5\"/><path d=\"M375 44V34\" stroke-width=\"1.5\"/><path d=\"M380 44V22\" stroke-width=\"1.5\"/><path d=\"M385 44V34\" stroke-width=\"1.5\"/><path d=\"M390 44V22\" stroke-width=\"1.5\"/><path d=\"M395 44V34\" stroke-width=\"1.5\"/><path d=\"M400 44V4\" stroke-width=\"3\"/><path d=\"M405 44V34\" stroke-width=\"1.5\"/><path d=\"M410 44V22\" stroke-width=\"1.5\"/><path d=\"M415 44V34\" stroke-width=\"1.5\"/><path d=\"M420 44V22\" stroke-width=\"1.5\"/><path d=\"M425 44V34\" stroke-width=\"1.5\"/><path d=\"M430 44V22\" stroke-width=\"1.5\"/><path d=\"M435 44V34\" stroke-width=\"1.5\"/><path d=\"M440 44V22\" stroke-width=\"1.5\"/><path d=\"M445 44V34\" stroke-width=\"1.5\"/><path d=\"M450 44V4\" stroke-width=\"3\"/><path d=\"M455 44V34\" stroke-width=\"1.5\"/><path d=\"M460 44V22\" stroke-width=\"1.5\"/><path d=\"M465 44V34\" stroke-width=\"1.5\"/><path d=\"M470 44V22\" stroke-width=\"1.5\"/><path d=\"M475 44V34\" stroke-width=\"1.5\"/><path d=\"M480 44V22\" stroke-width=\"1.5\"/></g></svg>"
      },
      {
        "name": "Cota",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 30H476M4 14V44M476 14V44M-2 36L10 24M470 36L482 24\"/><path d=\"M52 24V36\" stroke-width=\"2\"/><path d=\"M100 24V36\" stroke-width=\"2\"/><path d=\"M148 24V36\" stroke-width=\"2\"/><path d=\"M196 24V36\" stroke-width=\"2\"/><path d=\"M244 24V36\" stroke-width=\"2\"/><path d=\"M292 24V36\" stroke-width=\"2\"/><path d=\"M340 24V36\" stroke-width=\"2\"/><path d=\"M388 24V36\" stroke-width=\"2\"/><path d=\"M436 24V36\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Zigzag",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><polyline points=\"0,40 24,8 48,40 72,8 96,40 120,8 144,40 168,8 192,40 216,8 240,40 264,8 288,40 312,8 336,40 360,8 384,40 408,8 432,40 456,8 480,40\"/></g></svg>"
      },
      {
        "name": "Doble línea",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 16H480\" stroke-width=\"5\"/><path d=\"M0 32H480\" stroke-width=\"1.5\"/></g></svg>"
      },
      {
        "name": "Puntos cuadrados",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"24\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"44\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"64\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"84\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"104\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"124\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"144\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"164\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"184\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"204\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"224\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"244\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"264\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"284\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"304\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"324\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"344\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"364\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"384\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"404\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"424\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"444\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"464\" y=\"20\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Perforado",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"8\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"8\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"24\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"24\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"40\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"40\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"56\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"56\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"72\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"72\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"88\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"88\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"104\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"104\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"120\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"120\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"136\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"136\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"152\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"152\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"168\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"168\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"184\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"184\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"200\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"200\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"216\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"216\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"232\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"232\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"248\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"248\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"264\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"264\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"280\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"280\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"296\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"296\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"312\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"312\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"328\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"328\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"344\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"344\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"360\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"360\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"376\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"376\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"392\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"392\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"408\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"408\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"424\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"424\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"440\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"440\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"456\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"456\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"472\" cy=\"14\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"472\" cy=\"34\" r=\"3.2\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Onda acústica",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><polyline points=\"0.0,24.0 2.0,27.3 4.0,30.5 6.0,33.4 8.0,35.9 10.0,37.9 12.0,39.2 14.0,39.9 16.0,39.9 18.0,39.2 20.0,37.9 22.0,35.9 24.0,33.4 26.0,30.5 28.0,27.3 30.0,24.0 32.0,20.7 34.0,17.5 36.0,14.6 38.0,12.1 40.0,10.1 42.0,8.8 44.0,8.1 46.0,8.1 48.0,8.8 50.0,10.1 52.0,12.1 54.0,14.6 56.0,17.5 58.0,20.7 60.0,24.0 62.0,27.3 64.0,30.5 66.0,33.4 68.0,35.9 70.0,37.9 72.0,39.2 74.0,39.9 76.0,39.9 78.0,39.2 80.0,37.9 82.0,35.9 84.0,33.4 86.0,30.5 88.0,27.3 90.0,24.0 92.0,20.7 94.0,17.5 96.0,14.6 98.0,12.1 100.0,10.1 102.0,8.8 104.0,8.1 106.0,8.1 108.0,8.8 110.0,10.1 112.0,12.1 114.0,14.6 116.0,17.5 118.0,20.7 120.0,24.0 122.0,27.3 124.0,30.5 126.0,33.4 128.0,35.9 130.0,37.9 132.0,39.2 134.0,39.9 136.0,39.9 138.0,39.2 140.0,37.9 142.0,35.9 144.0,33.4 146.0,30.5 148.0,27.3 150.0,24.0 152.0,20.7 154.0,17.5 156.0,14.6 158.0,12.1 160.0,10.1 162.0,8.8 164.0,8.1 166.0,8.1 168.0,8.8 170.0,10.1 172.0,12.1 174.0,14.6 176.0,17.5 178.0,20.7 180.0,24.0 182.0,27.3 184.0,30.5 186.0,33.4 188.0,35.9 190.0,37.9 192.0,39.2 194.0,39.9 196.0,39.9 198.0,39.2 200.0,37.9 202.0,35.9 204.0,33.4 206.0,30.5 208.0,27.3 210.0,24.0 212.0,20.7 214.0,17.5 216.0,14.6 218.0,12.1 220.0,10.1 222.0,8.8 224.0,8.1 226.0,8.1 228.0,8.8 230.0,10.1 232.0,12.1 234.0,14.6 236.0,17.5 238.0,20.7 240.0,24.0 242.0,27.3 244.0,30.5 246.0,33.4 248.0,35.9 250.0,37.9 252.0,39.2 254.0,39.9 256.0,39.9 258.0,39.2 260.0,37.9 262.0,35.9 264.0,33.4 266.0,30.5 268.0,27.3 270.0,24.0 272.0,20.7 274.0,17.5 276.0,14.6 278.0,12.1 280.0,10.1 282.0,8.8 284.0,8.1 286.0,8.1 288.0,8.8 290.0,10.1 292.0,12.1 294.0,14.6 296.0,17.5 298.0,20.7 300.0,24.0 302.0,27.3 304.0,30.5 306.0,33.4 308.0,35.9 310.0,37.9 312.0,39.2 314.0,39.9 316.0,39.9 318.0,39.2 320.0,37.9 322.0,35.9 324.0,33.4 326.0,30.5 328.0,27.3 330.0,24.0 332.0,20.7 334.0,17.5 336.0,14.6 338.0,12.1 340.0,10.1 342.0,8.8 344.0,8.1 346.0,8.1 348.0,8.8 350.0,10.1 352.0,12.1 354.0,14.6 356.0,17.5 358.0,20.7 360.0,24.0 362.0,27.3 364.0,30.5 366.0,33.4 368.0,35.9 370.0,37.9 372.0,39.2 374.0,39.9 376.0,39.9 378.0,39.2 380.0,37.9 382.0,35.9 384.0,33.4 386.0,30.5 388.0,27.3 390.0,24.0 392.0,20.7 394.0,17.5 396.0,14.6 398.0,12.1 400.0,10.1 402.0,8.8 404.0,8.1 406.0,8.1 408.0,8.8 410.0,10.1 412.0,12.1 414.0,14.6 416.0,17.5 418.0,20.7 420.0,24.0 422.0,27.3 424.0,30.5 426.0,33.4 428.0,35.9 430.0,37.9 432.0,39.2 434.0,39.9 436.0,39.9 438.0,39.2 440.0,37.9 442.0,35.9 444.0,33.4 446.0,30.5 448.0,27.3 450.0,24.0 452.0,20.7 454.0,17.5 456.0,14.6 458.0,12.1 460.0,10.1 462.0,8.8 464.0,8.1 466.0,8.1 468.0,8.8 470.0,10.1 472.0,12.1 474.0,14.6 476.0,17.5 478.0,20.7 480.0,24.0\"/></g></svg>"
      },
      {
        "name": "Escalera",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 8H480M0 40H480\"/><path d=\"M0 8V40\" stroke-width=\"2\"/><path d=\"M16 8V40\" stroke-width=\"2\"/><path d=\"M32 8V40\" stroke-width=\"2\"/><path d=\"M48 8V40\" stroke-width=\"2\"/><path d=\"M64 8V40\" stroke-width=\"2\"/><path d=\"M80 8V40\" stroke-width=\"2\"/><path d=\"M96 8V40\" stroke-width=\"2\"/><path d=\"M112 8V40\" stroke-width=\"2\"/><path d=\"M128 8V40\" stroke-width=\"2\"/><path d=\"M144 8V40\" stroke-width=\"2\"/><path d=\"M160 8V40\" stroke-width=\"2\"/><path d=\"M176 8V40\" stroke-width=\"2\"/><path d=\"M192 8V40\" stroke-width=\"2\"/><path d=\"M208 8V40\" stroke-width=\"2\"/><path d=\"M224 8V40\" stroke-width=\"2\"/><path d=\"M240 8V40\" stroke-width=\"2\"/><path d=\"M256 8V40\" stroke-width=\"2\"/><path d=\"M272 8V40\" stroke-width=\"2\"/><path d=\"M288 8V40\" stroke-width=\"2\"/><path d=\"M304 8V40\" stroke-width=\"2\"/><path d=\"M320 8V40\" stroke-width=\"2\"/><path d=\"M336 8V40\" stroke-width=\"2\"/><path d=\"M352 8V40\" stroke-width=\"2\"/><path d=\"M368 8V40\" stroke-width=\"2\"/><path d=\"M384 8V40\" stroke-width=\"2\"/><path d=\"M400 8V40\" stroke-width=\"2\"/><path d=\"M416 8V40\" stroke-width=\"2\"/><path d=\"M432 8V40\" stroke-width=\"2\"/><path d=\"M448 8V40\" stroke-width=\"2\"/><path d=\"M464 8V40\" stroke-width=\"2\"/><path d=\"M480 8V40\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Bloques y juntas",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"0\" y=\"6\" width=\"70\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"76\" y=\"6\" width=\"44\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"126\" y=\"6\" width=\"90\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"222\" y=\"6\" width=\"30\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"258\" y=\"6\" width=\"70\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"334\" y=\"6\" width=\"50\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"390\" y=\"6\" width=\"90\" height=\"36\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Diagonales",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><clipPath id=\"u70cd\"><rect width=\"480\" height=\"48\"/></clipPath><g clip-path=\"url(#u70cd)\"><path d=\"M-24 48L0 0L16 0L-8 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M8 48L32 0L48 0L24 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M40 48L64 0L80 0L56 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M72 48L96 0L112 0L88 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M104 48L128 0L144 0L120 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M136 48L160 0L176 0L152 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M168 48L192 0L208 0L184 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M200 48L224 0L240 0L216 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M232 48L256 0L272 0L248 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M264 48L288 0L304 0L280 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M296 48L320 0L336 0L312 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M328 48L352 0L368 0L344 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M360 48L384 0L400 0L376 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M392 48L416 0L432 0L408 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M424 48L448 0L464 0L440 48Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M456 48L480 0L496 0L472 48Z\" fill=\"currentColor\" stroke=\"none\"/></g></g></svg>"
      },
      {
        "name": "Almena",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><polyline points=\"0,40 0,8 20,8 20,40 40,40 40,8 60,8 60,40 80,40 80,8 100,8 100,40 120,40 120,8 140,8 140,40 160,40 160,8 180,8 180,40 200,40 200,8 220,8 220,40 240,40 240,8 260,8 260,40 280,40 280,8 300,8 300,40 320,40 320,8 340,8 340,40 360,40 360,8 380,8 380,40 400,40 400,8 420,8 420,40 440,40 440,8 460,8 460,40 480,40\"/></g></svg>"
      },
      {
        "name": "Cadena de marcos",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"0\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M24 24H60\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M84 24H120\" stroke-width=\"1.5\"/><rect x=\"120\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M144 24H180\" stroke-width=\"1.5\"/><rect x=\"180\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M204 24H240\" stroke-width=\"1.5\"/><rect x=\"240\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M264 24H300\" stroke-width=\"1.5\"/><rect x=\"300\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M324 24H360\" stroke-width=\"1.5\"/><rect x=\"360\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M384 24H420\" stroke-width=\"1.5\"/><rect x=\"420\" y=\"12\" width=\"24\" height=\"24\"/><path d=\"M444 24H480\" stroke-width=\"1.5\"/></g></svg>"
      },
      {
        "name": "Hilada de canto",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 4H480M0 44H480\"/><path d=\"M0 4V44\"/><path d=\"M16 4V44\"/><path d=\"M32 4V44\"/><path d=\"M48 4V44\"/><path d=\"M64 4V44\"/><path d=\"M80 4V44\"/><path d=\"M96 4V44\"/><path d=\"M112 4V44\"/><path d=\"M128 4V44\"/><path d=\"M144 4V44\"/><path d=\"M160 4V44\"/><path d=\"M176 4V44\"/><path d=\"M192 4V44\"/><path d=\"M208 4V44\"/><path d=\"M224 4V44\"/><path d=\"M240 4V44\"/><path d=\"M256 4V44\"/><path d=\"M272 4V44\"/><path d=\"M288 4V44\"/><path d=\"M304 4V44\"/><path d=\"M320 4V44\"/><path d=\"M336 4V44\"/><path d=\"M352 4V44\"/><path d=\"M368 4V44\"/><path d=\"M384 4V44\"/><path d=\"M400 4V44\"/><path d=\"M416 4V44\"/><path d=\"M432 4V44\"/><path d=\"M448 4V44\"/><path d=\"M464 4V44\"/><path d=\"M480 4V44\"/></g></svg>"
      },
      {
        "name": "Placa atornillada",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"2\" y=\"6\" width=\"476\" height=\"36\"/><path d=\"M20 24H28M24 20V28\" stroke-width=\"2\"/><path d=\"M68 24H76M72 20V28\" stroke-width=\"2\"/><path d=\"M116 24H124M120 20V28\" stroke-width=\"2\"/><path d=\"M164 24H172M168 20V28\" stroke-width=\"2\"/><path d=\"M212 24H220M216 20V28\" stroke-width=\"2\"/><path d=\"M260 24H268M264 20V28\" stroke-width=\"2\"/><path d=\"M308 24H316M312 20V28\" stroke-width=\"2\"/><path d=\"M356 24H364M360 20V28\" stroke-width=\"2\"/><path d=\"M404 24H412M408 20V28\" stroke-width=\"2\"/><path d=\"M452 24H460M456 20V28\" stroke-width=\"2\"/><path d=\"M120 6V42\" stroke-width=\"1.5\"/><path d=\"M240 6V42\" stroke-width=\"1.5\"/><path d=\"M360 6V42\" stroke-width=\"1.5\"/></g></svg>"
      },
      {
        "name": "Grilla",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"1.5\" y=\"4\" width=\"477\" height=\"40\"/><path d=\"M0 24H480\" stroke-width=\"1.5\"/><path d=\"M20 4V44\" stroke-width=\"1.5\"/><path d=\"M40 4V44\" stroke-width=\"1.5\"/><path d=\"M60 4V44\" stroke-width=\"1.5\"/><path d=\"M80 4V44\" stroke-width=\"1.5\"/><path d=\"M100 4V44\" stroke-width=\"1.5\"/><path d=\"M120 4V44\" stroke-width=\"1.5\"/><path d=\"M140 4V44\" stroke-width=\"1.5\"/><path d=\"M160 4V44\" stroke-width=\"1.5\"/><path d=\"M180 4V44\" stroke-width=\"1.5\"/><path d=\"M200 4V44\" stroke-width=\"1.5\"/><path d=\"M220 4V44\" stroke-width=\"1.5\"/><path d=\"M240 4V44\" stroke-width=\"1.5\"/><path d=\"M260 4V44\" stroke-width=\"1.5\"/><path d=\"M280 4V44\" stroke-width=\"1.5\"/><path d=\"M300 4V44\" stroke-width=\"1.5\"/><path d=\"M320 4V44\" stroke-width=\"1.5\"/><path d=\"M340 4V44\" stroke-width=\"1.5\"/><path d=\"M360 4V44\" stroke-width=\"1.5\"/><path d=\"M380 4V44\" stroke-width=\"1.5\"/><path d=\"M400 4V44\" stroke-width=\"1.5\"/><path d=\"M420 4V44\" stroke-width=\"1.5\"/><path d=\"M440 4V44\" stroke-width=\"1.5\"/><path d=\"M460 4V44\" stroke-width=\"1.5\"/></g></svg>"
      },
      {
        "name": "Chevrones",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 8L24 24L8 40\"/><path d=\"M32 8L48 24L32 40\"/><path d=\"M56 8L72 24L56 40\"/><path d=\"M80 8L96 24L80 40\"/><path d=\"M104 8L120 24L104 40\"/><path d=\"M128 8L144 24L128 40\"/><path d=\"M152 8L168 24L152 40\"/><path d=\"M176 8L192 24L176 40\"/><path d=\"M200 8L216 24L200 40\"/><path d=\"M224 8L240 24L224 40\"/><path d=\"M248 8L264 24L248 40\"/><path d=\"M272 8L288 24L272 40\"/><path d=\"M296 8L312 24L296 40\"/><path d=\"M320 8L336 24L320 40\"/><path d=\"M344 8L360 24L344 40\"/><path d=\"M368 8L384 24L368 40\"/><path d=\"M392 8L408 24L392 40\"/><path d=\"M416 8L432 24L416 40\"/><path d=\"M440 8L456 24L440 40\"/><path d=\"M464 8L480 24L464 40\"/></g></svg>"
      },
      {
        "name": "Bloque y línea",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"0\" y=\"4\" width=\"160\" height=\"40\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M168 24H480\"/><rect x=\"472\" y=\"16\" width=\"8\" height=\"16\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      }
    ]
  },
  {
    "id": "marcos-y-contenedores",
    "title": "Marcos y contenedores",
    "desc": "Estructuras para encuadrar fotos, datos y títulos. Vienen del marco del logo y de la cartela de plano.",
    "items": [
      {
        "name": "Esquineras finas",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 28V4H28M212 4H236V28M236 132V156H212M28 156H4V132\"/></g></svg>"
      },
      {
        "name": "Esquineras gruesas",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M5 40V5H40M200 5H235V40M235 120V155H200M40 155H5V120\" stroke-width=\"8\"/></g></svg>"
      },
      {
        "name": "Marco doble",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"4\" width=\"232\" height=\"152\" stroke-width=\"6\"/><rect x=\"16\" y=\"16\" width=\"208\" height=\"128\" stroke-width=\"1.5\"/></g></svg>"
      },
      {
        "name": "Ficha con pestaña",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 24H236V156H4Z\"/><rect x=\"4\" y=\"4\" width=\"80\" height=\"20\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Cartela de plano",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"4\" width=\"232\" height=\"152\"/><path d=\"M4 112H236M120 112V156M120 134H236M180 134V156\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Etiqueta",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 20H188L236 80L188 140H4Z\"/><rect x=\"196\" y=\"72\" width=\"16\" height=\"16\"/></g></svg>"
      },
      {
        "name": "Llamada con línea guía",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"10\" y=\"130\" width=\"12\" height=\"12\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M16 136L60 60H110\"/><rect x=\"110\" y=\"20\" width=\"126\" height=\"80\"/></g></svg>"
      },
      {
        "name": "Sello cuadrado",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"44\" y=\"4\" width=\"152\" height=\"152\" rx=\"8\" stroke-width=\"10\"/><path d=\"M72 112H168\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Sello circular",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"120\" cy=\"80\" r=\"74\" stroke-width=\"5\"/><circle cx=\"120\" cy=\"80\" r=\"58\" stroke-width=\"1.5\"/><path d=\"M178.0 80.0L170.0 80.0\" stroke-width=\"2\"/><path d=\"M176.0 95.0L168.3 92.9\" stroke-width=\"2\"/><path d=\"M170.2 109.0L163.3 105.0\" stroke-width=\"2\"/><path d=\"M161.0 121.0L155.4 115.4\" stroke-width=\"2\"/><path d=\"M149.0 130.2L145.0 123.3\" stroke-width=\"2\"/><path d=\"M135.0 136.0L132.9 128.3\" stroke-width=\"2\"/><path d=\"M120.0 138.0L120.0 130.0\" stroke-width=\"2\"/><path d=\"M105.0 136.0L107.1 128.3\" stroke-width=\"2\"/><path d=\"M91.0 130.2L95.0 123.3\" stroke-width=\"2\"/><path d=\"M79.0 121.0L84.6 115.4\" stroke-width=\"2\"/><path d=\"M69.8 109.0L76.7 105.0\" stroke-width=\"2\"/><path d=\"M64.0 95.0L71.7 92.9\" stroke-width=\"2\"/><path d=\"M62.0 80.0L70.0 80.0\" stroke-width=\"2\"/><path d=\"M64.0 65.0L71.7 67.1\" stroke-width=\"2\"/><path d=\"M69.8 51.0L76.7 55.0\" stroke-width=\"2\"/><path d=\"M79.0 39.0L84.6 44.6\" stroke-width=\"2\"/><path d=\"M91.0 29.8L95.0 36.7\" stroke-width=\"2\"/><path d=\"M105.0 24.0L107.1 31.7\" stroke-width=\"2\"/><path d=\"M120.0 22.0L120.0 30.0\" stroke-width=\"2\"/><path d=\"M135.0 24.0L132.9 31.7\" stroke-width=\"2\"/><path d=\"M149.0 29.8L145.0 36.7\" stroke-width=\"2\"/><path d=\"M161.0 39.0L155.4 44.6\" stroke-width=\"2\"/><path d=\"M170.2 51.0L163.3 55.0\" stroke-width=\"2\"/><path d=\"M176.0 65.0L168.3 67.1\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Marco abierto",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M120 4H4V156H236V60\" stroke-width=\"5\"/></g></svg>"
      },
      {
        "name": "Chip",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"56\" width=\"232\" height=\"48\"/><rect x=\"20\" y=\"72\" width=\"16\" height=\"16\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Bloque numerado",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"4\" width=\"64\" height=\"64\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"4\" y=\"4\" width=\"232\" height=\"152\"/></g></svg>"
      },
      {
        "name": "Marco acotado",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"36\" width=\"232\" height=\"120\"/><path d=\"M4 16H236M4 6V26M236 6V26M0 22L8 10M232 22L240 10\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Ventana para foto",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 240 160\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"4\" width=\"232\" height=\"152\"/><path d=\"M4 4L236 156M236 4L4 156\" stroke-width=\"1.5\"/></g></svg>"
      }
    ]
  },
  {
    "id": "senaletica-de-plano",
    "title": "Señalética de plano",
    "desc": "Símbolos del dibujo técnico de arquitectura. Sirven para marcar datos, niveles y detalles.",
    "items": [
      {
        "name": "Eje",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"32\" cy=\"18\" r=\"14\"/><path d=\"M32 32V62\" stroke-dasharray=\"6 4\"/></g></svg>"
      },
      {
        "name": "Nivel de piso",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 40H60\"/><path d=\"M20 40L32 22L44 40Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M32 22V10H56\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Indicador de corte",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"32\" cy=\"32\" r=\"14\"/><path d=\"M18 32H46\" stroke-width=\"2\"/><path d=\"M32 18A14 14 0 0 0 18 32H46A14 14 0 0 0 32 18Z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M4 32H18M46 32H60\"/></g></svg>"
      },
      {
        "name": "Llamada de detalle",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"32\" cy=\"32\" r=\"22\"/><path d=\"M10 32H54\"/></g></svg>"
      },
      {
        "name": "Norte",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"32\" cy=\"32\" r=\"26\"/><path d=\"M32 8L42 44L32 38L22 44Z\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Cruz de replanteo",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"32\" cy=\"32\" r=\"16\"/><path d=\"M32 4V60M4 32H60\"/></g></svg>"
      },
      {
        "name": "Pendiente",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 50L60 22\"/><path d=\"M14 36L46 20M36.6 19.1L46 20L41 28.1\" stroke-width=\"2.4\"/></g></svg>"
      },
      {
        "name": "Escala gráfica",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"26\" width=\"56\" height=\"12\"/><rect x=\"4\" y=\"26\" width=\"14\" height=\"12\" fill=\"currentColor\" stroke=\"none\"/><rect x=\"32\" y=\"26\" width=\"14\" height=\"12\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M4 20V26M32 20V26M60 20V26\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Cota vertical",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M32 6V58M20 6H44M20 58H44M26 12L38 0M26 64L38 52\" stroke-width=\"2.4\"/></g></svg>"
      },
      {
        "name": "Cota angular",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 56H60M8 56L48 12\"/><path d=\"M40 56A32 32 0 0 0 30 32\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Punto de referencia",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><circle cx=\"32\" cy=\"32\" r=\"24\"/><circle cx=\"32\" cy=\"32\" r=\"12\"/><rect x=\"28\" y=\"28\" width=\"8\" height=\"8\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Revisión",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M32 6L60 56H4Z\"/><path d=\"M32 24V40M32 46V50\"/></g></svg>"
      },
      {
        "name": "Muro cortafuego",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><clipPath id=\"u104cm\"><rect x=\"22\" y=\"4\" width=\"20\" height=\"56\"/></clipPath><rect x=\"22\" y=\"4\" width=\"20\" height=\"56\"/><g clip-path=\"url(#u104cm)\" stroke-width=\"1.8\"><path d=\"M14 4L50 -32\"/><path d=\"M14 11L50 -25\"/><path d=\"M14 18L50 -18\"/><path d=\"M14 25L50 -11\"/><path d=\"M14 32L50 -4\"/><path d=\"M14 39L50 3\"/><path d=\"M14 46L50 10\"/><path d=\"M14 53L50 17\"/><path d=\"M14 60L50 24\"/><path d=\"M14 67L50 31\"/><path d=\"M14 74L50 38\"/><path d=\"M14 81L50 45\"/><path d=\"M14 88L50 52\"/><path d=\"M14 95L50 59\"/><path d=\"M14 102L50 66\"/><path d=\"M14 109L50 73\"/></g></g></svg>"
      },
      {
        "name": "Línea de rotura",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M2 32H24L28 20L36 44L40 32H62\"/></g></svg>"
      }
    ]
  },
  {
    "id": "vinetas-flechas-y-separadores",
    "title": "Viñetas, flechas y separadores",
    "desc": "Piezas chicas para listas, llamados a la acción y divisiones de texto.",
    "items": [
      {
        "name": "Viñeta cuadrada",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"16\" y=\"16\" width=\"16\" height=\"16\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Viñeta marco",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"12\" y=\"12\" width=\"24\" height=\"24\" stroke-width=\"5\"/></g></svg>"
      },
      {
        "name": "Viñeta doble",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"10\" y=\"10\" width=\"28\" height=\"28\"/><rect x=\"18\" y=\"18\" width=\"12\" height=\"12\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Viñeta diagonal",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 8L40 24L24 40L8 24Z\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Flecha",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M6 24H40M28 12L40 24L28 36\"/></g></svg>"
      },
      {
        "name": "Flecha arriba",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 42V8M12 20L24 8L36 20\"/></g></svg>"
      },
      {
        "name": "Flecha diagonal",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M10 38L38 10M18 10H38V30\"/></g></svg>"
      },
      {
        "name": "Flecha bloque",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M4 18H26V8L44 24L26 40V30H4Z\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Chevrón",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M16 8L32 24L16 40\" stroke-width=\"5\"/></g></svg>"
      },
      {
        "name": "Más",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M24 8V40M8 24H40\" stroke-width=\"5\"/></g></svg>"
      },
      {
        "name": "Menos",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M8 24H40\" stroke-width=\"5\"/></g></svg>"
      },
      {
        "name": "Por",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 48 48\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M12 12L36 36M36 12L12 36\" stroke-width=\"5\"/></g></svg>"
      },
      {
        "name": "Separador bloques",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 24\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"0\" y=\"6\" width=\"12\" height=\"12\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M24 12H456\"/><rect x=\"468\" y=\"6\" width=\"12\" height=\"12\" fill=\"currentColor\" stroke=\"none\"/></g></svg>"
      },
      {
        "name": "Separador marco",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 24\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 12H222M258 12H480\"/><rect x=\"228\" y=\"4\" width=\"24\" height=\"16\"/></g></svg>"
      },
      {
        "name": "Separador lana",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 24\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 12H180M300 12H480\"/><clipPath id=\"u120cs\"><rect x=\"180\" y=\"0\" width=\"120\" height=\"24\"/></clipPath><g clip-path=\"url(#u120cs)\" stroke-width=\"2\"><polyline points=\"176.0,4.8 174.5,5.0 173.2,5.8 172.1,6.9 171.4,8.4 171.2,10.1 171.5,12.0 172.3,13.9 173.7,15.6 175.5,17.1 177.8,18.2 180.3,19.0 182.9,19.2 185.6,19.0 188.1,18.2 190.3,17.1 192.1,15.6 193.5,13.9 194.4,12.0 194.7,10.1 194.4,8.4 193.8,6.9 192.7,5.8 191.3,5.0 189.8,4.8 188.3,5.0 187.0,5.8 185.9,6.9 185.2,8.4 185.0,10.1 185.3,12.0 186.1,13.9 187.5,15.6 189.3,17.1 191.6,18.2 194.1,19.0 196.7,19.2 199.4,19.0 201.9,18.2 204.1,17.1 206.0,15.6 207.3,13.9 208.2,12.0 208.5,10.1 208.3,8.4 207.6,6.9 206.5,5.8 205.1,5.0 203.6,4.8 202.2,5.0 200.8,5.8 199.7,6.9 199.0,8.4 198.8,10.1 199.1,12.0 200.0,13.9 201.3,15.6 203.2,17.1 205.4,18.2 207.9,19.0 210.6,19.2 213.2,19.0 215.7,18.2 217.9,17.1 219.8,15.6 221.2,13.9 222.0,12.0 222.3,10.1 222.1,8.4 221.4,6.9 220.3,5.8 219.0,5.0 217.5,4.8 216.0,5.0 214.6,5.8 213.5,6.9 212.8,8.4 212.6,10.1 212.9,12.0 213.8,13.9 215.1,15.6 217.0,17.1 219.2,18.2 221.7,19.0 224.4,19.2 227.0,19.0 229.5,18.2 231.8,17.1 233.6,15.6 235.0,13.9 235.8,12.0 236.1,10.1 235.9,8.4 235.2,6.9 234.1,5.8 232.8,5.0 231.3,4.8 229.8,5.0 228.4,5.8 227.4,6.9 226.7,8.4 226.4,10.1 226.7,12.0 227.6,13.9 229.0,15.6 230.8,17.1 233.1,18.2 235.6,19.0 238.2,19.2 240.9,19.0 243.4,18.2 245.6,17.1 247.4,15.6 248.8,13.9 249.7,12.0 250.0,10.1 249.7,8.4 249.0,6.9 248.0,5.8 246.6,5.0 245.1,4.8 243.6,5.0 242.3,5.8 241.2,6.9 240.5,8.4 240.3,10.1 240.6,12.0 241.4,13.9 242.8,15.6 244.6,17.1 246.9,18.2 249.4,19.0 252.0,19.2 254.7,19.0 257.2,18.2 259.4,17.1 261.3,15.6 262.6,13.9 263.5,12.0 263.8,10.1 263.6,8.4 262.9,6.9 261.8,5.8 260.4,5.0 258.9,4.8 257.4,5.0 256.1,5.8 255.0,6.9 254.3,8.4 254.1,10.1 254.4,12.0 255.2,13.9 256.6,15.6 258.5,17.1 260.7,18.2 263.2,19.0 265.8,19.2 268.5,19.0 271.0,18.2 273.2,17.1 275.1,15.6 276.5,13.9 277.3,12.0 277.6,10.1 277.4,8.4 276.7,6.9 275.6,5.8 274.3,5.0 272.8,4.8 271.3,5.0 269.9,5.8 268.8,6.9 268.1,8.4 267.9,10.1 268.2,12.0 269.1,13.9 270.4,15.6 272.3,17.1 274.5,18.2 277.0,19.0 279.7,19.2 282.3,19.0 284.8,18.2 287.1,17.1 288.9,15.6 290.3,13.9 291.1,12.0 291.4,10.1 291.2,8.4 290.5,6.9 289.4,5.8 288.1,5.0 286.6,4.8 285.1,5.0 283.7,5.8 282.7,6.9 282.0,8.4 281.7,10.1 282.0,12.0 282.9,13.9 284.3,15.6 286.1,17.1 288.3,18.2 290.8,19.0 293.5,19.2 296.1,19.0 298.6,18.2 300.9,17.1 302.7,15.6 304.1,13.9 305.0,12.0 305.3,10.1 305.0,8.4 304.3,6.9 303.3,5.8 301.9,5.0 300.4,4.8 298.9,5.0 297.6,5.8 296.5,6.9 295.8,8.4 295.6,10.1 295.9,12.0 296.7,13.9 298.1,15.6 299.9,17.1 302.2,18.2 304.7,19.0 307.3,19.2 310.0,19.0 312.5,18.2 314.7,17.1 316.6,15.6 317.9,13.9 318.8,12.0 319.1,10.1 318.9,8.4 318.2,6.9 317.1,5.8 315.7,5.0 314.2,4.8 312.7,5.0 311.4,5.8 310.3,6.9 309.6,8.4 309.4,10.1 309.7,12.0 310.5,13.9 311.9,15.6 313.8,17.1 316.0,18.2 318.5,19.0 321.1,19.2 323.8,19.0 326.3,18.2 328.5,17.1 330.4,15.6 331.7,13.9 332.6,12.0 332.9,10.1 332.7,8.4 332.0,6.9 330.9,5.8 329.5,5.0 328.1,4.8\"/></g></g></svg>"
      },
      {
        "name": "Separador cota",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 24\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 12H480M0 2V22M480 2V22M-5 18L5 6M475 18L485 6M240 4V20\" stroke-width=\"2\"/></g></svg>"
      },
      {
        "name": "Separador grueso y fino",
        "wide": true,
        "svg": "<svg viewBox=\"0 0 480 24\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M0 12H120\" stroke-width=\"8\"/><path d=\"M128 12H480\" stroke-width=\"1.5\"/></g></svg>"
      }
    ]
  },
  {
    "id": "marcadores",
    "title": "Marcadores",
    "desc": "Números de paso o de sección, en contorno o sólido.",
    "items": [
      {
        "name": "Marcador contorno",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" /><text x=\"32\" y=\"46\" text-anchor=\"middle\" font-family=\"Bebas Neue, Oswald, Arial Narrow, sans-serif\" font-size=\"38\" fill=\"currentColor\" stroke=\"none\">01</text></g></svg>"
      },
      {
        "name": "Marcador sólido",
        "wide": false,
        "svg": "<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"4\" y=\"4\" width=\"56\" height=\"56\" fill=\"currentColor\" stroke=\"none\"/><text x=\"32\" y=\"46\" text-anchor=\"middle\" font-family=\"Bebas Neue, Oswald, Arial Narrow, sans-serif\" font-size=\"38\" fill=\"var(--bg,#FFFDF9)\" stroke=\"none\">02</text></g></svg>"
      }
    ]
  }
];

export const fondos: Fondo[] = [
  {
    "n": 1,
    "slug": "aparejo-gigante",
    "name": "Aparejo gigante",
    "colors": [
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 2,
    "slug": "lana-monumental",
    "name": "Lana monumental",
    "colors": [
      "#3E4A3C",
      "#EFE7DA"
    ]
  },
  {
    "n": 3,
    "slug": "bandas-verticales",
    "name": "Bandas verticales",
    "colors": [
      "#2B2A26",
      "#C2551F",
      "#EFE7DA"
    ]
  },
  {
    "n": 4,
    "slug": "corte-diagonal",
    "name": "Corte diagonal",
    "colors": [
      "#2B2A26",
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 5,
    "slug": "plano-grilla",
    "name": "Plano en grilla",
    "colors": [
      "#2B2A26",
      "#EFE7DA",
      "#C2551F"
    ]
  },
  {
    "n": 6,
    "slug": "cartela",
    "name": "Cartela de plano",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 7,
    "slug": "achurado-horizonte",
    "name": "Achurado al horizonte",
    "colors": [
      "#EFE7DA",
      "#2B2A26"
    ]
  },
  {
    "n": 8,
    "slug": "montantes-grandes",
    "name": "Montantes",
    "colors": [
      "#EFE7DA",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 9,
    "slug": "capas-isometricas",
    "name": "Capas isométricas",
    "colors": [
      "#9C4318",
      "#FFFDF9"
    ]
  },
  {
    "n": 10,
    "slug": "marcos-concentricos",
    "name": "Marcos concéntricos",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 11,
    "slug": "marcos-cascada",
    "name": "Marcos en cascada",
    "colors": [
      "#2B2A26",
      "#EFE7DA",
      "#C2551F"
    ]
  },
  {
    "n": 12,
    "slug": "marco-recortado",
    "name": "Marco recortado",
    "colors": [
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 13,
    "slug": "panel-perforado",
    "name": "Panel perforado",
    "colors": [
      "#2B2A26",
      "#EFE7DA"
    ]
  },
  {
    "n": 14,
    "slug": "punto-destacado",
    "name": "Punto destacado",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 15,
    "slug": "reglas-bordes",
    "name": "Reglas en los bordes",
    "colors": [
      "#EFE7DA",
      "#2B2A26"
    ]
  },
  {
    "n": 16,
    "slug": "ondas-acusticas",
    "name": "Ondas acústicas",
    "colors": [
      "#3E4A3C",
      "#EFE7DA"
    ]
  },
  {
    "n": 17,
    "slug": "zigzag-bandas",
    "name": "Zigzag en bandas",
    "colors": [
      "#FFFDF9",
      "#C2551F",
      "#2B2A26",
      "#EFE7DA"
    ]
  },
  {
    "n": 18,
    "slug": "damero-tonal",
    "name": "Damero tono sobre tono",
    "colors": [
      "#C2551F",
      "#9C4318"
    ]
  },
  {
    "n": 19,
    "slug": "lineas-diagonales",
    "name": "Líneas diagonales",
    "colors": [
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 20,
    "slug": "corte-de-muro",
    "name": "Corte de muro",
    "colors": [
      "#EFE7DA",
      "#2B2A26",
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 21,
    "slug": "estratos",
    "name": "Estratos",
    "colors": [
      "#2B2A26",
      "#FFFDF9",
      "#EFE7DA",
      "#C2551F",
      "#3E4A3C",
      "#9C4318"
    ]
  },
  {
    "n": 22,
    "slug": "tipo-f120",
    "name": "F-120",
    "colors": [
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 23,
    "slug": "tipo-lambda",
    "name": "Conductividad térmica",
    "colors": [
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 24,
    "slug": "tipo-decibeles",
    "name": "Decibeles",
    "colors": [
      "#EFE7DA",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 25,
    "slug": "iconos-tonal",
    "name": "Iconos en tono",
    "colors": [
      "#2B2A26",
      "#3E4A3C"
    ]
  },
  {
    "n": 26,
    "slug": "llama-gigante",
    "name": "Llama gigante",
    "colors": [
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 27,
    "slug": "ladrillo-destacado",
    "name": "Ladrillo destacado",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 28,
    "slug": "aparejo-flamenco",
    "name": "Aparejo flamenco",
    "colors": [
      "#FFFDF9",
      "#C2551F"
    ]
  },
  {
    "n": 29,
    "slug": "espiga",
    "name": "Espiga",
    "colors": [
      "#EFE7DA",
      "#2B2A26"
    ]
  },
  {
    "n": 30,
    "slug": "petatillo",
    "name": "Petatillo",
    "colors": [
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 31,
    "slug": "juntas-abiertas",
    "name": "Bloques con junta abierta",
    "colors": [
      "#FFFDF9",
      "#2B2A26"
    ]
  },
  {
    "n": 32,
    "slug": "sillares",
    "name": "Sillares irregulares",
    "colors": [
      "#EFE7DA",
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 33,
    "slug": "esquineras-red",
    "name": "Red de esquineras",
    "colors": [
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 34,
    "slug": "ejes-de-plano",
    "name": "Ejes de plano",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 35,
    "slug": "niveles",
    "name": "Niveles de edificio",
    "colors": [
      "#3E4A3C",
      "#EFE7DA",
      "#C2551F"
    ]
  },
  {
    "n": 36,
    "slug": "escalera",
    "name": "Escalera",
    "colors": [
      "#EFE7DA",
      "#C2551F",
      "#2B2A26"
    ]
  },
  {
    "n": 37,
    "slug": "horizonte-sectores",
    "name": "Horizonte de sectores",
    "colors": [
      "#EFE7DA",
      "#2B2A26"
    ]
  },
  {
    "n": 38,
    "slug": "truchet-arcos",
    "name": "Arcos difusores",
    "colors": [
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 39,
    "slug": "triangulos",
    "name": "Medios cuadrados",
    "colors": [
      "#2B2A26",
      "#C2551F",
      "#3E4A3C"
    ]
  },
  {
    "n": 40,
    "slug": "cruz-replanteo",
    "name": "Cruz de replanteo",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 41,
    "slug": "chevrones",
    "name": "Chevrones",
    "colors": [
      "#C2551F",
      "#EFE7DA"
    ]
  },
  {
    "n": 42,
    "slug": "almenas",
    "name": "Almenas",
    "colors": [
      "#FFFDF9",
      "#C2551F",
      "#2B2A26"
    ]
  },
  {
    "n": 43,
    "slug": "marcos-y-bloques",
    "name": "Marcos y bloques",
    "colors": [
      "#3E4A3C",
      "#FFFDF9"
    ]
  },
  {
    "n": 44,
    "slug": "moire",
    "name": "Moiré",
    "colors": [
      "#2B2A26",
      "#EFE7DA",
      "#C2551F"
    ]
  },
  {
    "n": 45,
    "slug": "achurado-cruzado",
    "name": "Achurado cruzado",
    "colors": [
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 46,
    "slug": "placa-atornillada",
    "name": "Placa atornillada",
    "colors": [
      "#EFE7DA",
      "#2B2A26"
    ]
  },
  {
    "n": 47,
    "slug": "cielo-modular",
    "name": "Cielo modular",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#DDD5C4",
      "#C2551F"
    ]
  },
  {
    "n": 48,
    "slug": "ductos",
    "name": "Recorrido de ductos",
    "colors": [
      "#2B2A26",
      "#C2551F",
      "#EFE7DA"
    ]
  },
  {
    "n": 49,
    "slug": "cota-minima",
    "name": "Cota mínima",
    "colors": [
      "#FFFDF9",
      "#2B2A26",
      "#C2551F"
    ]
  },
  {
    "n": 50,
    "slug": "mitad-lana",
    "name": "Mitad y mitad",
    "colors": [
      "#EFE7DA",
      "#3E4A3C",
      "#C2551F",
      "#FFFDF9"
    ]
  },
  {
    "n": 51,
    "slug": "flechas-termicas",
    "name": "Flujo de calor",
    "colors": [
      "#9C4318",
      "#FFFDF9"
    ]
  },
  {
    "n": 52,
    "slug": "sello-circular",
    "name": "Sello técnico",
    "colors": [
      "#2B2A26",
      "#C2551F"
    ]
  }
];
