export type Muscle =
  | "trapezius" | "upper-back" | "lower-back"
  | "chest"
  | "biceps" | "triceps" | "forearm" | "back-deltoids" | "front-deltoids"
  | "abs" | "obliques"
  | "adductor" | "hamstring" | "quadriceps" | "abductors" | "calves" | "gluteal"
  | "head" | "neck";

export type DetalleEjercicio = {
  descripcion: string;
  requerimientos: string[];
  tips: string[];
  gifUrl?: string;
  musculos: Muscle[];
};

export const DETALLES: { [nombre: string]: DetalleEjercicio } = {
  "Press de pecho en banco": {
    descripcion:
      "Acostado boca arriba en el banco, baja las mancuernas a la altura del pecho y empújalas hacia arriba hasta extender los brazos.",
    requerimientos: ["Banco plano (sin inclinación)", "2 mancuernas"],
    tips: [
      "No bajes más allá de la línea del pecho — protege el hombro.",
      "Mantén las muñecas firmes y alineadas con los codos.",
    ],
    gifUrl: "/gifs/press-banco.gif",
    musculos: ["chest", "triceps", "front-deltoids"],
  },
  "Press militar de pie": {
    descripcion:
      "De pie, lleva las mancuernas a la altura de los hombros y empújalas verticalmente hasta extender los brazos arriba de la cabeza.",
    requerimientos: ["2 mancuernas", "Espacio libre arriba"],
    tips: [
      "Aprieta el abdomen y glúteos para no arquear la espalda baja.",
      "No bloquees los codos al final del movimiento.",
    ],
    gifUrl: "/gifs/press-militar.gif",
    musculos: ["front-deltoids", "triceps", "trapezius"],
  },
  "Aperturas en banco": {
    descripcion:
      "Acostado boca arriba, con mancuernas extendidas hacia arriba, abre los brazos hacia los lados en arco hasta sentir estiramiento en el pecho, luego regresa.",
    requerimientos: ["Banco plano", "2 mancuernas (peso ligero)"],
    tips: [
      "Mantén un ligero doblez en los codos durante todo el movimiento.",
      "Baja controlado — la fase excéntrica es donde está el trabajo.",
    ],
    gifUrl: "/gifs/aperturas.gif",
    musculos: ["chest", "front-deltoids"],
  },
  "Patada de tríceps": {
    descripcion:
      "Inclinado hacia adelante apoyado en el banco, codo pegado al costado, extiende el antebrazo hacia atrás hasta que el brazo quede recto.",
    requerimientos: ["Banco (para apoyarte)", "1 mancuerna"],
    tips: [
      "El codo NO se mueve — solo el antebrazo.",
      "Aprieta el tríceps arriba 1 segundo antes de bajar.",
    ],
    gifUrl: "/gifs/patada-triceps.gif",
    musculos: ["triceps"],
  },
  "Plancha": {
    descripcion:
      "Apoyado en antebrazos y puntas de los pies, mantén el cuerpo recto como una tabla, sin levantar la cadera ni dejarla caer.",
    requerimientos: ["Tapete"],
    tips: [
      "Aprieta abdomen y glúteos todo el tiempo.",
      "Si te falla la espalda baja, baja a rodillas en vez de soltar la forma.",
    ],
    gifUrl: "/gifs/plancha.gif",
    musculos: ["abs", "obliques", "lower-back"],
  },
  "Remo a una mano en banco": {
    descripcion:
      "Una rodilla y una mano en el banco, espalda paralela al piso. Con la otra mano jala la mancuerna hacia la cadera, llevando el codo hacia atrás.",
    requerimientos: ["Banco plano", "1 mancuerna"],
    tips: [
      "Jala con el codo, no con la mano — piensa en pegar el codo al techo.",
      "Espalda neutra, no la redondees.",
    ],
    gifUrl: "/gifs/remo-una-mano.gif",
    musculos: ["upper-back", "back-deltoids", "biceps"],
  },
  "Remo inclinado a dos manos": {
    descripcion:
      "De pie, inclinado hacia adelante con espalda recta a ~45°, mancuernas colgando. Jala ambas hacia las caderas llevando los codos atrás.",
    requerimientos: ["2 mancuernas"],
    tips: [
      "Rodillas suavemente flexionadas, cadera atrás.",
      "Aprieta los omóplatos al final del movimiento.",
    ],
    gifUrl: "/gifs/remo-inclinado.gif",
    musculos: ["upper-back", "back-deltoids", "biceps", "trapezius"],
  },
  "Curl de bíceps": {
    descripcion:
      "De pie, brazos a los costados con palmas al frente. Flexiona los codos para subir las mancuernas hasta los hombros, luego baja controlado.",
    requerimientos: ["2 mancuernas"],
    tips: [
      "Codos fijos al costado — no los muevas hacia adelante.",
      "Baja en 2-3 segundos, no dejes caer el peso.",
    ],
    gifUrl: "/gifs/curl-biceps.gif",
    musculos: ["biceps", "forearm"],
  },
  "Curl martillo": {
    descripcion:
      "Igual que curl de bíceps pero con palmas mirándose entre sí (agarre neutro tipo martillo).",
    requerimientos: ["2 mancuernas"],
    tips: [
      "Mantén las muñecas rectas, sin rotar.",
      "Trabaja braquial y antebrazos además del bíceps.",
    ],
    gifUrl: "/gifs/curl-martillo.gif",
    musculos: ["biceps", "forearm"],
  },
  "Superman en tapete": {
    descripcion:
      "Boca abajo en el tapete, brazos y piernas extendidos. Levanta simultáneamente brazos y piernas del piso, aprieta y baja.",
    requerimientos: ["Tapete"],
    tips: [
      "Mira al piso para no hiperextender el cuello.",
      "Aprieta los glúteos arriba — el trabajo es lumbar y glúteo, no fuerza bruta.",
    ],
    gifUrl: "/gifs/superman.gif",
    musculos: ["lower-back", "gluteal"],
  },
  "Sentadilla goblet": {
    descripcion:
      "Sostén la mancuerna vertical pegada al pecho con ambas manos. Baja en sentadilla hasta que los muslos queden paralelos al piso, sube empujando con los talones.",
    requerimientos: ["1 mancuerna"],
    tips: [
      "Rodillas alineadas con las puntas de los pies, no hacia adentro.",
      "Pecho arriba, espalda neutra. No mires al techo.",
    ],
    gifUrl: "/gifs/sentadilla-goblet.gif",
    musculos: ["quadriceps", "gluteal", "hamstring", "adductor"],
  },
  "Zancadas alternadas": {
    descripcion:
      "De pie con una mancuerna en cada mano, da un paso largo al frente y baja la rodilla trasera casi al piso. Empuja con el talón delantero para regresar y alterna pierna.",
    requerimientos: ["2 mancuernas", "Espacio para dar paso largo"],
    tips: [
      "La rodilla delantera no debe pasar la punta del pie.",
      "Torso erguido, no te inclines al frente.",
    ],
    gifUrl: "/gifs/zancadas.gif",
    musculos: ["quadriceps", "gluteal", "hamstring", "calves"],
  },
  "Peso muerto rumano": {
    descripcion:
      "De pie con una mancuerna en cada mano frente a los muslos. Con piernas ligeramente flexionadas, baja las mancuernas siguiendo las piernas, empujando la cadera atrás. Sube apretando glúteos.",
    requerimientos: ["2 mancuernas"],
    tips: [
      "El movimiento viene de la cadera, no de la espalda.",
      "Las mancuernas casi rozan tus piernas todo el camino.",
    ],
    gifUrl: "/gifs/peso-muerto.gif",
    musculos: ["hamstring", "gluteal", "lower-back"],
  },
  "Puente de glúteo": {
    descripcion:
      "Acostado boca arriba con rodillas flexionadas y pies en el piso. Empuja la cadera hacia arriba apretando glúteos hasta formar línea recta hombros-rodillas, baja controlado.",
    requerimientos: ["Tapete"],
    tips: [
      "Aprieta los glúteos arriba 1 segundo.",
      "Si lo sientes en la espalda baja, no estás usando glúteos. Concéntrate.",
    ],
    gifUrl: "/gifs/puente-gluteo.gif",
    musculos: ["gluteal", "hamstring"],
  },
  "Plancha lateral": {
    descripcion:
      "De lado, apoyado en un antebrazo y el canto del pie inferior. Levanta la cadera para que el cuerpo forme una línea recta, mantén la posición.",
    requerimientos: ["Tapete"],
    tips: [
      "Cadera arriba — no la dejes caer.",
      "Si es muy difícil, apoya la rodilla inferior en lugar del pie.",
    ],
    gifUrl: "/gifs/plancha-lateral.gif",
    musculos: ["obliques", "abs"],
  },
  "Press Arnold sentado": {
    descripcion:
      "Sentado con espalda apoyada, empieza con mancuernas a la altura del pecho con palmas hacia ti. Mientras empujas hacia arriba, gira las muñecas para que las palmas terminen al frente.",
    requerimientos: ["Banco con respaldo (incl. ~80° o vertical)", "2 mancuernas"],
    tips: [
      "El giro de muñecas es la clave — eso lo distingue del press militar.",
      "Mantén el core firme contra el respaldo.",
    ],
    gifUrl: "/gifs/press-arnold.gif",
    musculos: ["front-deltoids", "triceps"],
  },
  "Elevaciones laterales": {
    descripcion:
      "De pie con mancuernas a los costados, palmas mirando al cuerpo. Sube los brazos lateralmente hasta la altura de los hombros (forma de T), baja controlado.",
    requerimientos: ["2 mancuernas (peso ligero)"],
    tips: [
      "No subas más de la línea de los hombros.",
      "Codos ligeramente flexionados, no rígidos.",
    ],
    gifUrl: "/gifs/elevaciones-laterales.gif",
    musculos: ["front-deltoids", "back-deltoids"],
  },
  "Press inclinado en banco": {
    descripcion:
      "Banco inclinado a ~30-45°. Acostado, lleva las mancuernas a la altura de los hombros y empuja hacia arriba hasta extender los brazos.",
    requerimientos: ["Banco inclinado (30-45°)", "2 mancuernas"],
    tips: [
      "Más inclinación = más hombro, menos pecho. Mantente ≤45°.",
      "Pies firmes en el piso para estabilizar.",
    ],
    gifUrl: "/gifs/press-inclinado.gif",
    musculos: ["chest", "front-deltoids", "triceps"],
  },
  "Fondos de tríceps en banco": {
    descripcion:
      "Sentado al borde del banco, manos apoyadas a los lados de las caderas. Desliza el cuerpo al frente y baja flexionando codos a 90°, sube empujando con los tríceps.",
    requerimientos: ["Banco plano"],
    tips: [
      "Codos hacia atrás, no abiertos a los lados.",
      "Para hacerlo más fácil, mantén las rodillas flexionadas (pies más cerca del banco).",
    ],
    gifUrl: "/gifs/fondos-triceps.gif",
    musculos: ["triceps", "front-deltoids", "chest"],
  },
  "Crunch en tapete": {
    descripcion:
      "Boca arriba con rodillas flexionadas y pies en el piso, manos detrás de la cabeza o cruzadas en el pecho. Levanta los hombros del piso contrayendo el abdomen.",
    requerimientos: ["Tapete"],
    tips: [
      "No jales del cuello — las manos solo sostienen, no jalan.",
      "Sube solo los hombros, no toda la espalda.",
    ],
    gifUrl: "/gifs/crunch.gif",
    musculos: ["abs"],
  },
  "Remo renegado (plancha + remo)": {
    descripcion:
      "En posición de plancha alta con una mancuerna en cada mano. Manteniendo plancha estable, jala una mancuerna hacia la cadera, baja, y alterna.",
    requerimientos: ["Tapete", "2 mancuernas (hexagonales mejor, no ruedan)"],
    tips: [
      "No rotes la cadera — mantenla cuadrada al piso.",
      "Si es muy difícil, hazlo con rodillas apoyadas.",
    ],
    gifUrl: "/gifs/remo-renegado.gif",
    musculos: ["upper-back", "back-deltoids", "biceps", "abs", "obliques"],
  },
  "Pullover en banco": {
    descripcion:
      "Acostado en el banco con una mancuerna sostenida con ambas manos sobre el pecho. Baja la mancuerna en arco hacia atrás de la cabeza, regresa al inicio.",
    requerimientos: ["Banco plano", "1 mancuerna"],
    tips: [
      "Brazos ligeramente flexionados, fijos así todo el movimiento.",
      "Baja hasta sentir estiramiento, no más.",
    ],
    gifUrl: "/gifs/pullover.gif",
    musculos: ["chest", "upper-back", "triceps"],
  },
  "Curl concentrado": {
    descripcion:
      "Sentado en el banco con piernas abiertas, codo del brazo trabajando apoyado en la cara interna del muslo. Sube la mancuerna hacia el hombro y baja controlado.",
    requerimientos: ["Banco plano", "1 mancuerna"],
    tips: [
      "El codo NO se separa del muslo en ningún momento.",
      "Aprieta el bíceps arriba antes de bajar.",
    ],
    gifUrl: "/gifs/curl-concentrado.gif",
    musculos: ["biceps"],
  },
  "Apertura inversa (face pull)": {
    descripcion:
      "Inclinado al frente con espalda recta, mancuernas colgando. Abre los brazos hacia los lados llevando los codos atrás (como apertura, pero al revés).",
    requerimientos: ["2 mancuernas (peso ligero)"],
    tips: [
      "Aprieta los omóplatos al final.",
      "Movimiento controlado — este ejercicio es de técnica, no de peso.",
    ],
    gifUrl: "/gifs/apertura-inversa.gif",
    musculos: ["back-deltoids", "upper-back", "trapezius"],
  },
  "Russian twist": {
    descripcion:
      "Sentado con rodillas flexionadas, torso inclinado ~45° atrás, mancuerna sostenida con ambas manos. Rota el torso de un lado al otro tocando el piso con la mancuerna.",
    requerimientos: ["Tapete", "1 mancuerna"],
    tips: [
      "El movimiento viene del torso, no de los brazos.",
      "Para más reto, levanta los pies del piso.",
    ],
    gifUrl: "/gifs/russian-twist.gif",
    musculos: ["obliques", "abs"],
  },
};
