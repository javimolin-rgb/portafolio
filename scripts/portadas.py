"""Genera los recortes que usan las portadas de las tarjetas de proyecto.

Cada marca e ilustración de src/assets/portadas/ sale de una pieza real de
src/assets/work/: aquí solo se recorta y, cuando el fondo es plano, se vuelve
transparente desde los bordes. No se dibuja, no se redibuja y no se descarga nada.

Uso:  python3 scripts/portadas.py     (requiere Pillow)
Las posiciones de cada capa sobre la placa 4:3 viven en el campo `portada`
de cada proyecto, en src/data/projects.ts."""
import os
from collections import deque
from PIL import Image

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORK = os.path.join(RAIZ, 'src/assets/work')
OUT = os.path.join(RAIZ, 'src/assets/portadas')
os.makedirs(OUT, exist_ok=True)

CREMA = (246, 234, 218)    # fondo de la lámina de íconos del 18
BLANCO = (236, 235, 236)   # paño blanco de la bandera vela de Campeones

def recorte(origen, caja):
    im = Image.open(os.path.join(WORK, origen))
    W, H = im.size
    x0, y0, x1, y1 = caja
    return im.crop((round(x0 * W), round(y0 * H), round(x1 * W), round(y1 * H))).convert('RGBA')

def quitar(im, base, tol=16):
    """Borra solo el fondo plano conectado al borde; no toca el interior del dibujo."""
    px, W, H = im.load(), im.width, im.height
    visto = bytearray(W * H)
    cola = deque([(x, y) for x in range(W) for y in (0, H - 1)] +
                 [(x, y) for y in range(H) for x in (0, W - 1)])
    while cola:
        x, y = cola.popleft()
        if not (0 <= x < W and 0 <= y < H) or visto[y * W + x]:
            continue
        r, g, b, a = px[x, y]
        if abs(r - base[0]) + abs(g - base[1]) + abs(b - base[2]) > tol * 3:
            continue
        visto[y * W + x] = 1
        px[x, y] = (r, g, b, 0)
        cola.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))
    return im.crop(im.getbbox() or (0, 0, W, H))

# nombre, origen, caja, fondo a quitar (None = se deja tal cual)
PIEZAS = [
    # marcas
    ('marca-neorigen',        'neorigen/manual_01.jpg',                  (0.428, 0.138, 0.572, 0.335), None),
    ('marca-dia-del-nino',    'dia-del-nino/ddn_arco.png',               (0.168, 0.035, 0.838, 0.195), None),
    ('marca-campeones',       'campeones-sin-limites/c_bandera.png',     (0.536, 0.160, 0.686, 0.243), BLANCO),
    ('marca-toys-r-us',       'toys-r-us/tru_arco1.png',                 (0.005, 0.330, 0.165, 0.590), None),
    ('marca-new-romantic',    'new-romantic/s_nr_02.jpg',                (0.062, 0.252, 0.448, 0.364), None),
    ('marca-ventas-privadas', 'ventas-privadas/v_trebol.jpg',            (0.060, 0.158, 0.460, 0.275), None),
    ('marca-sandalias',       'me-fascinan-las-sandalias/s_sand_01v.jpg',(0.110, 0.690, 0.890, 0.855), None),
    ('marca-ripley-beauty',   'ripley-beauty/r_stdc.jpg',                (0.330, 0.042, 0.665, 0.082), None),
    ('marca-gamer-week',      'gamer-week/s_gw_01.jpg',                  (0.625, 0.270, 0.960, 0.600), None),
    ('marca-activaciones',    'activaciones/a_lin.png',                  (0.255, 0.124, 0.745, 0.178), None),
    ('marca-linett',          'activaciones/a_lin.png',                  (0.283, 0.278, 0.760, 0.518), None),
    ('marca-fiestas-patrias', 'fiestas-patrias/sep1.jpg',                (0.287, 0.226, 0.676, 0.474), CREMA),
    # formas del Día del Niño (ya vienen con transparencia)
    ('forma-arco-puntos',     'dia-del-nino/d_formas.png', (0.000, 0.010, 0.200, 0.548), None),
    ('forma-onda',            'dia-del-nino/d_formas.png', (0.310, 0.160, 0.690, 0.364), None),
    ('forma-estrella',        'dia-del-nino/d_formas.png', (0.520, 0.490, 0.660, 0.636), None),
    ('forma-arco-rayas',      'dia-del-nino/d_formas.png', (0.742, 0.455, 1.000, 1.000), None),
    ('forma-nube',            'dia-del-nino/d_formas.png', (0.505, 0.705, 0.620, 0.792), None),
    # íconos del 18
    ('icono-chupalla',        'fiestas-patrias/sep1.jpg',  (0.040, 0.035, 0.360, 0.228), CREMA),
    ('icono-banderines',      'fiestas-patrias/sep1.jpg',  (0.372, 0.018, 0.962, 0.205), CREMA),
    ('icono-empanada',        'fiestas-patrias/sep1.jpg',  (0.290, 0.685, 0.565, 0.905), CREMA),
    ('icono-guitarra',        'fiestas-patrias/sep1.jpg',  (0.712, 0.700, 0.990, 0.945), CREMA),
    ('icono-mote',            'fiestas-patrias/sep1.jpg',  (0.698, 0.445, 0.915, 0.688), CREMA),
]

info = {}
for nombre, origen, caja, base in PIEZAS:
    im = recorte(origen, caja)
    if base:
        im = quitar(im, base, tol=24 if base is BLANCO else 16)
    im.save(os.path.join(OUT, nombre + '.png'))
    esq = im.convert('RGB').getpixel((1, 1))
    info[nombre] = {'tam': im.size, 'esquina': '#%02X%02X%02X' % esq, 'alfa': im.getextrema()[3][0] < 255}
    print(f'{nombre:24s} {im.width:4d}x{im.height:4d}  esquina={info[nombre]["esquina"]}  alfa={info[nombre]["alfa"]}')
# el paño de la bandera deja una esquina de tela en el recorte de Campeones: se borra
_c = os.path.join(OUT, 'marca-campeones.png')
_im = Image.open(_c).convert('RGBA')
for _x in range(min(26, _im.width)):
    for _y in range(min(26, _im.height)):
        _r, _g, _b, _a = _im.getpixel((_x, _y))
        _im.putpixel((_x, _y), (_r, _g, _b, 0))
_im.crop(_im.getbbox()).save(_c)
print('marca-campeones limpiada ->', Image.open(_c).size)
