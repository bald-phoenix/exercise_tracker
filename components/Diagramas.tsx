// Diagramas SVG estilo stick-figure para cada ejercicio.
// Cada componente muestra 2 posiciones (inicio | fin) con una flecha entre ellas.

import React from "react";

// Paleta — debe coincidir con la app
const INK = "#1a1814";
const ACCENT = "#c84b31";
const MUTED = "#6b6357";
const LINE = "#d4cab5";

const STROKE = 2.5;

// === Primitivas reutilizables ===
const Head = ({ cx, cy, r = 8 }: { cx: number; cy: number; r?: number }) => (
  <circle cx={cx} cy={cy} r={r} stroke={INK} strokeWidth={STROKE} fill="none" />
);

const Limb = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
);

const Bench = ({ x, y, width, height = 6, angle = 0 }: { x: number; y: number; width: number; height?: number; angle?: number }) => (
  <g transform={angle ? `rotate(${angle} ${x + width / 2} ${y + height / 2})` : undefined}>
    <rect x={x} y={y} width={width} height={height} fill={MUTED} rx={1} />
    {/* Patas */}
    <line x1={x + 4} y1={y + height} x2={x + 4} y2={y + height + 8} stroke={MUTED} strokeWidth={2} />
    <line x1={x + width - 4} y1={y + height} x2={x + width - 4} y2={y + height + 8} stroke={MUTED} strokeWidth={2} />
  </g>
);

const Dumbbell = ({ cx, cy, size = 5 }: { cx: number; cy: number; size?: number }) => (
  <g>
    <rect x={cx - size * 1.6} y={cy - size * 0.3} width={size * 3.2} height={size * 0.6} fill={ACCENT} />
    <rect x={cx - size * 2} y={cy - size} width={size * 0.6} height={size * 2} fill={ACCENT} rx={1} />
    <rect x={cx + size * 1.4} y={cy - size} width={size * 0.6} height={size * 2} fill={ACCENT} rx={1} />
  </g>
);

const Mat = ({ x, y, width }: { x: number; y: number; width: number }) => (
  <rect x={x} y={y} width={width} height={4} fill={LINE} rx={1} />
);

const Arrow = ({ x, y }: { x: number; y: number }) => (
  <g>
    <line x1={x - 8} y1={y} x2={x + 8} y2={y} stroke={MUTED} strokeWidth={2} strokeLinecap="round" />
    <polyline
      points={`${x + 4},${y - 4} ${x + 8},${y} ${x + 4},${y + 4}`}
      stroke={MUTED}
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
);

const Label = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <text x={x} y={y} fontSize="10" fontFamily="monospace" fill={MUTED} textAnchor="middle" letterSpacing="1">
    {text}
  </text>
);

// === Wrapper común ===
const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {children}
  </svg>
);

// ============================================================
// DIAGRAMAS POR EJERCICIO
// ============================================================

// 1. Press de pecho en banco — acostado, brazos abajo → arriba
export const pressPecho = () => (
  <Frame>
    <Label x={60} y={20} text="INICIO" />
    {/* Banco */}
    <Bench x={20} y={90} width={90} />
    {/* Cuerpo acostado */}
    <Head cx={28} cy={82} />
    <Limb x1={36} y1={86} x2={100} y2={86} />
    {/* Brazos abajo (codos doblados, mancuernas a la altura del pecho) */}
    <Limb x1={70} y1={86} x2={70} y2={70} />
    <Dumbbell cx={70} cy={65} />
    <Label x={60} y={130} text="pecho" />

    <Arrow x={160} y={75} />

    <Label x={260} y={20} text="FIN" />
    <Bench x={220} y={90} width={90} />
    <Head cx={228} cy={82} />
    <Limb x1={236} y1={86} x2={300} y2={86} />
    {/* Brazos arriba (extendidos) */}
    <Limb x1={270} y1={86} x2={270} y2={45} />
    <Dumbbell cx={270} cy={40} />
    <Label x={260} y={130} text="arriba" />
  </Frame>
);

// 2. Press militar de pie
export const pressMilitar = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={60} cy={45} />
    <Limb x1={60} y1={53} x2={60} y2={105} /> {/* tronco */}
    <Limb x1={60} y1={105} x2={50} y2={130} /> {/* pierna izq */}
    <Limb x1={60} y1={105} x2={70} y2={130} /> {/* pierna der */}
    {/* Brazos doblados, mancuernas a la altura de los hombros */}
    <Limb x1={60} y1={60} x2={45} y2={70} />
    <Limb x1={60} y1={60} x2={75} y2={70} />
    <Dumbbell cx={42} cy={72} size={4} />
    <Dumbbell cx={78} cy={72} size={4} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={260} cy={60} />
    <Limb x1={260} y1={68} x2={260} y2={115} />
    <Limb x1={260} y1={115} x2={250} y2={140} />
    <Limb x1={260} y1={115} x2={270} y2={140} />
    {/* Brazos extendidos arriba */}
    <Limb x1={260} y1={65} x2={250} y2={30} />
    <Limb x1={260} y1={65} x2={270} y2={30} />
    <Dumbbell cx={248} cy={26} size={4} />
    <Dumbbell cx={272} cy={26} size={4} />
  </Frame>
);

// 3. Aperturas en banco
export const aperturas = () => (
  <Frame>
    <Label x={60} y={20} text="INICIO" />
    <Bench x={20} y={90} width={90} />
    <Head cx={28} cy={82} />
    <Limb x1={36} y1={86} x2={100} y2={86} />
    {/* Brazos juntos arriba */}
    <Limb x1={65} y1={86} x2={65} y2={55} />
    <Limb x1={75} y1={86} x2={75} y2={55} />
    <Dumbbell cx={65} cy={50} size={4} />
    <Dumbbell cx={75} cy={50} size={4} />

    <Arrow x={160} y={75} />

    <Label x={260} y={20} text="FIN" />
    <Bench x={220} y={90} width={90} />
    <Head cx={228} cy={82} />
    <Limb x1={236} y1={86} x2={300} y2={86} />
    {/* Brazos abiertos */}
    <Limb x1={265} y1={86} x2={235} y2={70} />
    <Limb x1={275} y1={86} x2={305} y2={70} />
    <Dumbbell cx={230} cy={68} size={4} />
    <Dumbbell cx={310} cy={68} size={4} />
  </Frame>
);

// 4. Patada de tríceps
export const patadaTriceps = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    {/* Inclinado, apoyado en banco */}
    <Bench x={75} y={75} width={40} />
    <Head cx={30} cy={55} />
    <Limb x1={38} y1={58} x2={85} y2={75} /> {/* torso inclinado */}
    <Limb x1={75} y1={70} x2={85} y2={75} /> {/* mano apoyada */}
    {/* Brazo trabajando: codo arriba, antebrazo doblado abajo */}
    <Limb x1={50} y1={62} x2={45} y2={78} /> {/* antebrazo doblado */}
    <Dumbbell cx={43} cy={82} size={3.5} />
    <Limb x1={85} y1={75} x2={70} y2={130} /> {/* pierna */}

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Bench x={275} y={75} width={40} />
    <Head cx={230} cy={55} />
    <Limb x1={238} y1={58} x2={285} y2={75} />
    <Limb x1={275} y1={70} x2={285} y2={75} />
    {/* Brazo extendido atrás */}
    <Limb x1={250} y1={62} x2={210} y2={68} />
    <Dumbbell cx={205} cy={68} size={3.5} />
    <Limb x1={285} y1={75} x2={270} y2={130} />
  </Frame>
);

// 5. Plancha
export const plancha = () => (
  <Frame>
    <Label x={160} y={20} text="MANTÉN POSICIÓN" />
    <Mat x={40} y={100} width={240} />
    {/* Cuerpo en línea */}
    <Head cx={55} cy={70} />
    <Limb x1={63} y1={74} x2={250} y2={92} /> {/* tronco diagonal ligero */}
    {/* Antebrazos apoyados */}
    <Limb x1={55} y1={78} x2={55} y2={98} />
    <Limb x1={55} y1={98} x2={75} y2={98} />
    {/* Pies */}
    <Limb x1={250} y1={92} x2={265} y2={98} />
    <Label x={160} y={130} text="cuerpo recto · abdomen y glúteos apretados" />
  </Frame>
);

// 6. Remo a una mano en banco
export const remoUnaMano = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Bench x={30} y={75} width={80} />
    {/* Cuerpo inclinado */}
    <Head cx={130} cy={55} />
    <Limb x1={122} y1={58} x2={50} y2={72} /> {/* torso */}
    <Limb x1={50} y1={72} x2={50} y2={82} /> {/* brazo apoyado */}
    <Limb x1={60} y1={72} x2={60} y2={82} /> {/* rodilla apoyada */}
    <Limb x1={130} y1={62} x2={130} y2={130} /> {/* pierna apoyada al piso */}
    {/* Brazo libre con mancuerna abajo */}
    <Limb x1={100} y1={68} x2={100} y2={100} />
    <Dumbbell cx={100} cy={105} size={4} />

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Bench x={230} y={75} width={80} />
    <Head cx={330} cy={55} />
    <Limb x1={322} y1={58} x2={250} y2={72} />
    <Limb x1={250} y1={72} x2={250} y2={82} />
    <Limb x1={260} y1={72} x2={260} y2={82} />
    <Limb x1={330} y1={62} x2={330} y2={130} />
    {/* Brazo arriba (jaló hacia la cadera) */}
    <Limb x1={300} y1={68} x2={295} y2={75} />
    <Dumbbell cx={293} cy={73} size={4} />
  </Frame>
);

// 7. Remo inclinado a dos manos
export const remoInclinado = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={90} cy={45} />
    <Limb x1={86} y1={52} x2={45} y2={80} /> {/* torso inclinado */}
    <Limb x1={45} y1={80} x2={40} y2={130} /> {/* pierna izq */}
    <Limb x1={45} y1={80} x2={55} y2={130} /> {/* pierna der */}
    {/* Brazos colgando */}
    <Limb x1={62} y1={70} x2={62} y2={105} />
    <Limb x1={75} y1={65} x2={75} y2={105} />
    <Dumbbell cx={62} cy={110} size={3.5} />
    <Dumbbell cx={75} cy={110} size={3.5} />

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={290} cy={45} />
    <Limb x1={286} y1={52} x2={245} y2={80} />
    <Limb x1={245} y1={80} x2={240} y2={130} />
    <Limb x1={245} y1={80} x2={255} y2={130} />
    {/* Brazos jalados a la cadera */}
    <Limb x1={262} y1={70} x2={258} y2={82} />
    <Limb x1={275} y1={65} x2={272} y2={78} />
    <Dumbbell cx={256} cy={82} size={3.5} />
    <Dumbbell cx={270} cy={78} size={3.5} />
  </Frame>
);

// 8. Curl de bíceps
export const curlBiceps = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={60} cy={45} />
    <Limb x1={60} y1={53} x2={60} y2={105} />
    <Limb x1={60} y1={105} x2={50} y2={130} />
    <Limb x1={60} y1={105} x2={70} y2={130} />
    {/* Brazos extendidos abajo */}
    <Limb x1={50} y1={60} x2={50} y2={95} />
    <Limb x1={70} y1={60} x2={70} y2={95} />
    <Dumbbell cx={50} cy={100} size={3.5} />
    <Dumbbell cx={70} cy={100} size={3.5} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={260} cy={45} />
    <Limb x1={260} y1={53} x2={260} y2={105} />
    <Limb x1={260} y1={105} x2={250} y2={130} />
    <Limb x1={260} y1={105} x2={270} y2={130} />
    {/* Brazos flexionados (mancuernas al hombro) */}
    <Limb x1={250} y1={60} x2={250} y2={75} />
    <Limb x1={250} y1={75} x2={258} y2={60} />
    <Limb x1={270} y1={60} x2={270} y2={75} />
    <Limb x1={270} y1={75} x2={262} y2={60} />
    <Dumbbell cx={258} cy={58} size={3.5} />
    <Dumbbell cx={262} cy={58} size={3.5} />
  </Frame>
);

// 9. Curl martillo — visualmente similar al curl pero anotamos diferencia
export const curlMartillo = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={60} cy={45} />
    <Limb x1={60} y1={53} x2={60} y2={105} />
    <Limb x1={60} y1={105} x2={50} y2={130} />
    <Limb x1={60} y1={105} x2={70} y2={130} />
    <Limb x1={50} y1={60} x2={50} y2={95} />
    <Limb x1={70} y1={60} x2={70} y2={95} />
    {/* Mancuernas verticales (giradas 90°) */}
    <g transform="rotate(90 50 100)">
      <Dumbbell cx={50} cy={100} size={3.5} />
    </g>
    <g transform="rotate(90 70 100)">
      <Dumbbell cx={70} cy={100} size={3.5} />
    </g>

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={260} cy={45} />
    <Limb x1={260} y1={53} x2={260} y2={105} />
    <Limb x1={260} y1={105} x2={250} y2={130} />
    <Limb x1={260} y1={105} x2={270} y2={130} />
    <Limb x1={250} y1={60} x2={250} y2={75} />
    <Limb x1={250} y1={75} x2={258} y2={60} />
    <Limb x1={270} y1={60} x2={270} y2={75} />
    <Limb x1={270} y1={75} x2={262} y2={60} />
    {/* Mancuernas verticales también arriba */}
    <g transform="rotate(90 258 58)">
      <Dumbbell cx={258} cy={58} size={3.5} />
    </g>
    <g transform="rotate(90 262 58)">
      <Dumbbell cx={262} cy={58} size={3.5} />
    </g>
  </Frame>
);

// 10. Superman
export const superman = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Mat x={20} y={95} width={130} />
    <Head cx={30} cy={88} />
    <Limb x1={38} y1={92} x2={140} y2={92} /> {/* cuerpo plano */}
    <Limb x1={45} y1={92} x2={20} y2={88} /> {/* brazo extendido */}

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Mat x={220} y={105} width={130} />
    {/* Brazos y piernas levantados */}
    <Head cx={240} cy={80} />
    <Limb x1={248} y1={84} x2={340} y2={92} />
    {/* Brazo arriba */}
    <Limb x1={252} y1={82} x2={225} y2={70} />
    {/* Pierna arriba */}
    <Limb x1={340} y1={92} x2={345} y2={75} />
  </Frame>
);

// 11. Sentadilla goblet
export const sentadillaGoblet = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={60} cy={40} />
    <Limb x1={60} y1={48} x2={60} y2={95} />
    <Limb x1={60} y1={95} x2={50} y2={130} />
    <Limb x1={60} y1={95} x2={70} y2={130} />
    {/* Mancuerna sostenida al pecho */}
    <Limb x1={55} y1={55} x2={55} y2={70} />
    <Limb x1={65} y1={55} x2={65} y2={70} />
    <g transform="rotate(90 60 65)">
      <Dumbbell cx={60} cy={65} size={4} />
    </g>

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={260} cy={55} />
    <Limb x1={260} y1={63} x2={260} y2={95} /> {/* tronco más corto (cadera bajó) */}
    {/* Piernas flexionadas (sentadilla) */}
    <Limb x1={260} y1={95} x2={240} y2={110} />
    <Limb x1={240} y1={110} x2={245} y2={130} />
    <Limb x1={260} y1={95} x2={280} y2={110} />
    <Limb x1={280} y1={110} x2={275} y2={130} />
    {/* Mancuerna al pecho */}
    <Limb x1={255} y1={70} x2={255} y2={82} />
    <Limb x1={265} y1={70} x2={265} y2={82} />
    <g transform="rotate(90 260 75)">
      <Dumbbell cx={260} cy={75} size={4} />
    </g>
  </Frame>
);

// 12. Zancadas
export const zancadas = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={60} cy={45} />
    <Limb x1={60} y1={53} x2={60} y2={105} />
    <Limb x1={60} y1={105} x2={55} y2={130} />
    <Limb x1={60} y1={105} x2={65} y2={130} />
    <Limb x1={50} y1={62} x2={50} y2={95} />
    <Limb x1={70} y1={62} x2={70} y2={95} />
    <Dumbbell cx={50} cy={100} size={3.5} />
    <Dumbbell cx={70} cy={100} size={3.5} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={250} cy={45} />
    <Limb x1={250} y1={53} x2={250} y2={100} />
    {/* Pierna delantera flexionada */}
    <Limb x1={250} y1={100} x2={280} y2={110} />
    <Limb x1={280} y1={110} x2={280} y2={130} />
    {/* Pierna trasera flexionada (rodilla casi al piso) */}
    <Limb x1={250} y1={100} x2={225} y2={125} />
    <Limb x1={225} y1={125} x2={235} y2={130} />
    {/* Brazos */}
    <Limb x1={240} y1={62} x2={240} y2={92} />
    <Limb x1={260} y1={62} x2={260} y2={92} />
    <Dumbbell cx={240} cy={97} size={3.5} />
    <Dumbbell cx={260} cy={97} size={3.5} />
  </Frame>
);

// 13. Peso muerto rumano
export const pesoMuerto = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={60} cy={45} />
    <Limb x1={60} y1={53} x2={60} y2={105} />
    <Limb x1={60} y1={105} x2={50} y2={130} />
    <Limb x1={60} y1={105} x2={70} y2={130} />
    {/* Brazos frente a muslos */}
    <Limb x1={55} y1={62} x2={55} y2={90} />
    <Limb x1={65} y1={62} x2={65} y2={90} />
    <Dumbbell cx={55} cy={95} size={3.5} />
    <Dumbbell cx={65} cy={95} size={3.5} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    {/* Cadera atrás, torso inclinado */}
    <Head cx={240} cy={50} />
    <Limb x1={244} y1={56} x2={285} y2={80} /> {/* torso inclinado */}
    {/* Piernas casi rectas */}
    <Limb x1={285} y1={80} x2={283} y2={130} />
    <Limb x1={285} y1={80} x2={290} y2={130} />
    {/* Brazos hacia las rodillas */}
    <Limb x1={260} y1={70} x2={260} y2={110} />
    <Limb x1={270} y1={72} x2={270} y2={110} />
    <Dumbbell cx={260} cy={115} size={3.5} />
    <Dumbbell cx={270} cy={115} size={3.5} />
  </Frame>
);

// 14. Puente de glúteo
export const puenteGluteo = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Mat x={20} y={110} width={140} />
    <Head cx={30} cy={100} />
    <Limb x1={38} y1={104} x2={120} y2={104} /> {/* tronco plano */}
    {/* Piernas flexionadas con pies en el piso */}
    <Limb x1={120} y1={104} x2={140} y2={108} />
    <Limb x1={140} y1={108} x2={145} y2={104} />

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Mat x={210} y={110} width={140} />
    <Head cx={220} cy={100} />
    {/* Cadera elevada */}
    <Limb x1={228} y1={104} x2={320} y2={80} />
    <Limb x1={320} y1={80} x2={330} y2={108} />
    <Limb x1={330} y1={108} x2={335} y2={104} />
  </Frame>
);

// 15. Plancha lateral
export const planchaLateral = () => (
  <Frame>
    <Label x={160} y={20} text="MANTÉN POSICIÓN" />
    <Mat x={40} y={108} width={240} />
    {/* Cuerpo de lado en línea diagonal */}
    <Head cx={60} cy={50} />
    <Limb x1={66} y1={56} x2={260} y2={100} />
    {/* Antebrazo apoyado */}
    <Limb x1={60} y1={58} x2={60} y2={106} />
    <Limb x1={60} y1={106} x2={80} y2={106} />
    {/* Brazo libre arriba */}
    <Limb x1={66} y1={56} x2={70} y2={30} />
    <Label x={160} y={130} text="cuerpo en línea recta · cadera arriba" />
  </Frame>
);

// 16. Press Arnold
export const pressArnold = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    {/* Banco con respaldo casi vertical */}
    <Bench x={30} y={100} width={50} />
    <line x1={30} y1={100} x2={30} y2={50} stroke={MUTED} strokeWidth={6} strokeLinecap="round" />
    {/* Sentado */}
    <Head cx={50} cy={55} />
    <Limb x1={50} y1={63} x2={50} y2={100} />
    <Limb x1={50} y1={100} x2={80} y2={100} />
    <Limb x1={80} y1={100} x2={85} y2={125} />
    {/* Brazos doblados, palmas hacia él */}
    <Limb x1={50} y1={70} x2={60} y2={85} />
    <Limb x1={60} y1={85} x2={55} y2={70} />
    <Dumbbell cx={60} cy={68} size={3.5} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Bench x={230} y={100} width={50} />
    <line x1={230} y1={100} x2={230} y2={50} stroke={MUTED} strokeWidth={6} strokeLinecap="round" />
    <Head cx={250} cy={55} />
    <Limb x1={250} y1={63} x2={250} y2={100} />
    <Limb x1={250} y1={100} x2={280} y2={100} />
    <Limb x1={280} y1={100} x2={285} y2={125} />
    {/* Brazos extendidos arriba */}
    <Limb x1={250} y1={65} x2={245} y2={30} />
    <Dumbbell cx={245} cy={26} size={3.5} />
  </Frame>
);

// 17. Elevaciones laterales
export const elevacionesLaterales = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={60} cy={45} />
    <Limb x1={60} y1={53} x2={60} y2={105} />
    <Limb x1={60} y1={105} x2={50} y2={130} />
    <Limb x1={60} y1={105} x2={70} y2={130} />
    {/* Brazos a los costados */}
    <Limb x1={50} y1={62} x2={50} y2={95} />
    <Limb x1={70} y1={62} x2={70} y2={95} />
    <Dumbbell cx={50} cy={100} size={3.5} />
    <Dumbbell cx={70} cy={100} size={3.5} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={260} cy={45} />
    <Limb x1={260} y1={53} x2={260} y2={105} />
    <Limb x1={260} y1={105} x2={250} y2={130} />
    <Limb x1={260} y1={105} x2={270} y2={130} />
    {/* Brazos en T */}
    <Limb x1={252} y1={60} x2={222} y2={58} />
    <Limb x1={268} y1={60} x2={298} y2={58} />
    <Dumbbell cx={216} cy={58} size={3.5} />
    <Dumbbell cx={304} cy={58} size={3.5} />
  </Frame>
);

// 18. Press inclinado
export const pressInclinado = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    {/* Banco inclinado */}
    <line x1={30} y1={110} x2={110} y2={65} stroke={MUTED} strokeWidth={8} strokeLinecap="round" />
    {/* Cuerpo en el banco */}
    <Head cx={102} cy={55} />
    <Limb x1={97} y1={61} x2={40} y2={100} />
    {/* Brazos abajo (a la altura del pecho) */}
    <Limb x1={75} y1={75} x2={75} y2={60} />
    <Dumbbell cx={75} cy={56} size={4} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <line x1={230} y1={110} x2={310} y2={65} stroke={MUTED} strokeWidth={8} strokeLinecap="round" />
    <Head cx={302} cy={55} />
    <Limb x1={297} y1={61} x2={240} y2={100} />
    {/* Brazos extendidos perpendicular al banco */}
    <Limb x1={275} y1={75} x2={260} y2={30} />
    <Dumbbell cx={258} cy={26} size={4} />
  </Frame>
);

// 19. Fondos tríceps
export const fondosTriceps = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Bench x={30} y={85} width={50} />
    <Head cx={80} cy={50} />
    {/* Tronco vertical, manos en el banco */}
    <Limb x1={80} y1={58} x2={80} y2={88} />
    <Limb x1={75} y1={70} x2={70} y2={85} /> {/* brazo apoyado al banco */}
    {/* Piernas al frente */}
    <Limb x1={80} y1={88} x2={130} y2={110} />
    <Limb x1={130} y1={110} x2={140} y2={130} />

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Bench x={230} y={85} width={50} />
    <Head cx={280} cy={75} /> {/* cabeza más abajo (cuerpo bajó) */}
    <Limb x1={280} y1={83} x2={280} y2={105} />
    {/* Codo doblado a 90° */}
    <Limb x1={275} y1={88} x2={275} y2={75} />
    <Limb x1={275} y1={75} x2={270} y2={85} />
    <Limb x1={280} y1={105} x2={330} y2={120} />
    <Limb x1={330} y1={120} x2={340} y2={132} />
  </Frame>
);

// 20. Crunch
export const crunch = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Mat x={20} y={108} width={140} />
    <Head cx={30} cy={98} />
    <Limb x1={38} y1={102} x2={120} y2={102} />
    {/* Piernas dobladas */}
    <Limb x1={120} y1={102} x2={140} y2={106} />
    <Limb x1={140} y1={106} x2={145} y2={102} />

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Mat x={210} y={108} width={140} />
    {/* Hombros levantados */}
    <Head cx={235} cy={80} />
    <Limb x1={241} y1={86} x2={320} y2={102} />
    <Limb x1={320} y1={102} x2={340} y2={106} />
    <Limb x1={340} y1={106} x2={345} y2={102} />
  </Frame>
);

// 21. Remo renegado
export const remoRenegado = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Mat x={20} y={108} width={140} />
    {/* Plancha alta */}
    <Head cx={35} cy={70} />
    <Limb x1={43} y1={74} x2={150} y2={95} />
    <Limb x1={50} y1={78} x2={50} y2={100} /> {/* brazo apoyado en mancuerna */}
    <Limb x1={75} y1={82} x2={75} y2={100} />
    <Dumbbell cx={50} cy={104} size={3.5} />
    <Dumbbell cx={75} cy={104} size={3.5} />

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Mat x={210} y={108} width={140} />
    <Head cx={225} cy={70} />
    <Limb x1={233} y1={74} x2={340} y2={95} />
    {/* Una mancuerna jalada hacia la cadera */}
    <Limb x1={240} y1={78} x2={240} y2={100} />
    <Dumbbell cx={240} cy={104} size={3.5} />
    {/* La otra arriba */}
    <Limb x1={265} y1={82} x2={262} y2={70} />
    <Dumbbell cx={260} cy={68} size={3.5} />
  </Frame>
);

// 22. Pullover
export const pullover = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Bench x={30} y={90} width={90} />
    <Head cx={40} cy={82} />
    <Limb x1={48} y1={86} x2={110} y2={86} />
    {/* Brazos verticales sobre el pecho */}
    <Limb x1={75} y1={86} x2={75} y2={55} />
    <g transform="rotate(90 75 50)">
      <Dumbbell cx={75} cy={50} size={4} />
    </g>

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Bench x={230} y={90} width={90} />
    <Head cx={240} cy={82} />
    <Limb x1={248} y1={86} x2={310} y2={86} />
    {/* Brazos atrás de la cabeza */}
    <Limb x1={245} y1={84} x2={215} y2={70} />
    <g transform="rotate(120 213 68)">
      <Dumbbell cx={213} cy={68} size={4} />
    </g>
  </Frame>
);

// 23. Curl concentrado
export const curlConcentrado = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Bench x={30} y={95} width={70} />
    {/* Sentado, piernas abiertas */}
    <Head cx={65} cy={45} />
    <Limb x1={65} y1={53} x2={65} y2={95} />
    <Limb x1={65} y1={95} x2={45} y2={125} /> {/* muslo izq */}
    <Limb x1={65} y1={95} x2={85} y2={125} /> {/* muslo der */}
    {/* Brazo apoyado en muslo, mancuerna abajo */}
    <Limb x1={68} y1={70} x2={75} y2={110} />
    <Dumbbell cx={75} cy={115} size={3.5} />

    <Arrow x={160} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Bench x={230} y={95} width={70} />
    <Head cx={265} cy={45} />
    <Limb x1={265} y1={53} x2={265} y2={95} />
    <Limb x1={265} y1={95} x2={245} y2={125} />
    <Limb x1={265} y1={95} x2={285} y2={125} />
    {/* Brazo flexionado */}
    <Limb x1={268} y1={70} x2={278} y2={100} />
    <Limb x1={278} y1={100} x2={272} y2={75} />
    <Dumbbell cx={270} cy={70} size={3.5} />
  </Frame>
);

// 24. Apertura inversa
export const aperturaInversa = () => (
  <Frame>
    <Label x={60} y={15} text="INICIO" />
    <Head cx={90} cy={45} />
    <Limb x1={86} y1={52} x2={45} y2={80} />
    <Limb x1={45} y1={80} x2={40} y2={130} />
    <Limb x1={45} y1={80} x2={55} y2={130} />
    {/* Brazos colgando */}
    <Limb x1={62} y1={70} x2={62} y2={105} />
    <Limb x1={75} y1={65} x2={75} y2={105} />
    <Dumbbell cx={62} cy={110} size={3.5} />
    <Dumbbell cx={75} cy={110} size={3.5} />

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="FIN" />
    <Head cx={290} cy={45} />
    <Limb x1={286} y1={52} x2={245} y2={80} />
    <Limb x1={245} y1={80} x2={240} y2={130} />
    <Limb x1={245} y1={80} x2={255} y2={130} />
    {/* Brazos abiertos hacia afuera */}
    <Limb x1={262} y1={70} x2={232} y2={62} />
    <Limb x1={275} y1={65} x2={305} y2={62} />
    <Dumbbell cx={226} cy={61} size={3.5} />
    <Dumbbell cx={310} cy={61} size={3.5} />
  </Frame>
);

// 25. Russian twist
export const russianTwist = () => (
  <Frame>
    <Label x={60} y={15} text="IZQ" />
    <Mat x={20} y={120} width={140} />
    {/* Sentado inclinado */}
    <Head cx={110} cy={50} />
    <Limb x1={106} y1={56} x2={50} y2={100} />
    <Limb x1={50} y1={100} x2={30} y2={115} />
    <Limb x1={50} y1={100} x2={40} y2={115} />
    {/* Mancuerna a la izquierda */}
    <Limb x1={80} y1={75} x2={45} y2={95} />
    <g transform="rotate(45 42 95)">
      <Dumbbell cx={42} cy={95} size={3.5} />
    </g>

    <Arrow x={170} y={75} />

    <Label x={260} y={15} text="DER" />
    <Mat x={220} y={120} width={140} />
    <Head cx={310} cy={50} />
    <Limb x1={306} y1={56} x2={250} y2={100} />
    <Limb x1={250} y1={100} x2={230} y2={115} />
    <Limb x1={250} y1={100} x2={240} y2={115} />
    {/* Mancuerna a la derecha */}
    <Limb x1={280} y1={75} x2={335} y2={95} />
    <g transform="rotate(-45 338 95)">
      <Dumbbell cx={338} cy={95} size={3.5} />
    </g>
  </Frame>
);

// === Mapa key → componente ===
export const DIAGRAMAS: { [key: string]: () => JSX.Element } = {
  pressPecho,
  pressMilitar,
  aperturas,
  patadaTriceps,
  plancha,
  remoUnaMano,
  remoInclinado,
  curlBiceps,
  curlMartillo,
  superman,
  sentadillaGoblet,
  zancadas,
  pesoMuerto,
  puenteGluteo,
  planchaLateral,
  pressArnold,
  elevacionesLaterales,
  pressInclinado,
  fondosTriceps,
  crunch,
  remoRenegado,
  pullover,
  curlConcentrado,
  aperturaInversa,
  russianTwist,
};
