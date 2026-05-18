export type DetalleEjercicio = {
  descripcion: string;
  requerimientos: string[];
  tips: string[];
  videoUrl?: string;
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
    videoUrl: "https://musclewiki.com/exercise/dumbbell-bench-press",
  },
  "Press militar de pie": {
    descripcion:
      "De pie, lleva las mancuernas a la altura de los hombros y empújalas verticalmente hasta extender los brazos arriba de la cabeza.",
    requerimientos: ["2 mancuernas", "Espacio libre arriba"],
    tips: [
      "Aprieta el abdomen y glúteos para no arquear la espalda baja.",
      "No bloquees los codos al final del movimiento.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-standing-overhead-press",
  },
  "Aperturas en banco": {
    descripcion:
      "Acostado boca arriba, con mancuernas extendidas hacia arriba, abre los brazos hacia los lados en arco hasta sentir estiramiento en el pecho, luego regresa.",
    requerimientos: ["Banco plano", "2 mancuernas (peso ligero)"],
    tips: [
      "Mantén un ligero doblez en los codos durante todo el movimiento.",
      "Baja controlado — la fase excéntrica es donde está el trabajo.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-fly",
  },
  "Patada de tríceps": {
    descripcion:
      "Inclinado hacia adelante apoyado en el banco, codo pegado al costado, extiende el antebrazo hacia atrás hasta que el brazo quede recto.",
    requerimientos: ["Banco (para apoyarte)", "1 mancuerna"],
    tips: [
      "El codo NO se mueve — solo el antebrazo.",
      "Aprieta el tríceps arriba 1 segundo antes de bajar.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-tricep-kickback",
  },
  "Plancha": {
    descripcion:
      "Apoyado en antebrazos y puntas de los pies, mantén el cuerpo recto como una tabla, sin levantar la cadera ni dejarla caer.",
    requerimientos: ["Tapete"],
    tips: [
      "Aprieta abdomen y glúteos todo el tiempo.",
      "Si te falla la espalda baja, baja a rodillas en vez de soltar la forma.",
    ],
    videoUrl: "https://musclewiki.com/exercise/plank",
  },
  "Remo a una mano en banco": {
    descripcion:
      "Una rodilla y una mano en el banco, espalda paralela al piso. Con la otra mano jala la mancuerna hacia la cadera, llevando el codo hacia atrás.",
    requerimientos: ["Banco plano", "1 mancuerna"],
    tips: [
      "Jala con el codo, no con la mano — piensa en pegar el codo al techo.",
      "Espalda neutra, no la redondees.",
    ],
    videoUrl: "https://musclewiki.com/exercise/single-arm-dumbbell-row",
  },
  "Remo inclinado a dos manos": {
    descripcion:
      "De pie, inclinado hacia adelante con espalda recta a ~45°, mancuernas colgando. Jala ambas hacia las caderas llevando los codos atrás.",
    requerimientos: ["2 mancuernas"],
    tips: [
      "Rodillas suavemente flexionadas, cadera atrás.",
      "Aprieta los omóplatos al final del movimiento.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-bent-over-row",
  },
  "Curl de bíceps": {
    descripcion:
      "De pie, brazos a los costados con palmas al frente. Flexiona los codos para subir las mancuernas hasta los hombros, luego baja controlado.",
    requerimientos: ["2 mancuernas"],
    tips: [
      "Codos fijos al costado — no los muevas hacia adelante.",
      "Baja en 2-3 segundos, no dejes caer el peso.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-bicep-curl",
  },
  "Curl martillo": {
    descripcion:
      "Igual que curl de bíceps pero con palmas mirándose entre sí (agarre neutro tipo martillo).",
    requerimientos: ["2 mancuernas"],
    tips: [
      "Mantén las muñecas rectas, sin rotar.",
      "Trabaja braquial y antebrazos además del bíceps.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-hammer-curl",
  },
  "Superman en tapete": {
    descripcion:
      "Boca abajo en el tapete, brazos y piernas extendidos. Levanta simultáneamente brazos y piernas del piso, aprieta y baja.",
    requerimientos: ["Tapete"],
    tips: [
      "Mira al piso para no hiperextender el cuello.",
      "Aprieta los glúteos arriba — el trabajo es lumbar y glúteo, no fuerza bruta.",
    ],
    videoUrl: "https://musclewiki.com/exercise/superman",
  },
  "Sentadilla goblet": {
    descripcion:
      "Sostén la mancuerna vertical pegada al pecho con ambas manos. Baja en sentadilla hasta que los muslos queden paralelos al piso, sube empujando con los talones.",
    requerimientos: ["1 mancuerna"],
    tips: [
      "Rodillas alineadas con las puntas de los pies, no hacia adentro.",
      "Pecho arriba, espalda neutra. No mires al techo.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-goblet-squat",
  },
  "Zancadas alternadas": {
    descripcion:
      "De pie con una mancuerna en cada mano, da un paso largo al frente y baja la rodilla trasera casi al piso. Empuja con el talón delantero para regresar y alterna pierna.",
    requerimientos: ["2 mancuernas", "Espacio para dar paso largo"],
    tips: [
      "La rodilla delantera no debe pasar la punta del pie.",
      "Torso erguido, no te inclines al frente.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-lunge",
  },
  "Peso muerto rumano": {
    descripcion:
      "De pie con una mancuerna en cada mano frente a los muslos. Con piernas ligeramente flexionadas, baja las mancuernas siguiendo las piernas, empujando la cadera atrás. Sube apretando glúteos.",
    requerimientos: ["2 mancuernas"],
    tips: [
      "El movimiento viene de la cadera, no de la espalda.",
      "Las mancuernas casi rozan tus piernas todo el camino.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-romanian-deadlift",
  },
  "Puente de glúteo": {
    descripcion:
      "Acostado boca arriba con rodillas flexionadas y pies en el piso. Empuja la cadera hacia arriba apretando glúteos hasta formar línea recta hombros-rodillas, baja controlado.",
    requerimientos: ["Tapete"],
    tips: [
      "Aprieta los glúteos arriba 1 segundo.",
      "Si lo sientes en la espalda baja, no estás usando glúteos. Concéntrate.",
    ],
    videoUrl: "https://musclewiki.com/exercise/glute-bridge",
  },
  "Plancha lateral": {
    descripcion:
      "De lado, apoyado en un antebrazo y el canto del pie inferior. Levanta la cadera para que el cuerpo forme una línea recta, mantén la posición.",
    requerimientos: ["Tapete"],
    tips: [
      "Cadera arriba — no la dejes caer.",
      "Si es muy difícil, apoya la rodilla inferior en lugar del pie.",
    ],
    videoUrl: "https://musclewiki.com/exercise/side-plank",
  },
  "Press Arnold sentado": {
    descripcion:
      "Sentado con espalda apoyada, empieza con mancuernas a la altura del pecho con palmas hacia ti. Mientras empujas hacia arriba, gira las muñecas para que las palmas terminen al frente.",
    requerimientos: ["Banco con respaldo (incl. ~80° o vertical)", "2 mancuernas"],
    tips: [
      "El giro de muñecas es la clave — eso lo distingue del press militar.",
      "Mantén el core firme contra el respaldo.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-arnold-press",
  },
  "Elevaciones laterales": {
    descripcion:
      "De pie con mancuernas a los costados, palmas mirando al cuerpo. Sube los brazos lateralmente hasta la altura de los hombros (forma de T), baja controlado.",
    requerimientos: ["2 mancuernas (peso ligero)"],
    tips: [
      "No subas más de la línea de los hombros.",
      "Codos ligeramente flexionados, no rígidos.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-lateral-raise",
  },
  "Press inclinado en banco": {
    descripcion:
      "Banco inclinado a ~30-45°. Acostado, lleva las mancuernas a la altura de los hombros y empuja hacia arriba hasta extender los brazos.",
    requerimientos: ["Banco inclinado (30-45°)", "2 mancuernas"],
    tips: [
      "Más inclinación = más hombro, menos pecho. Mantente ≤45°.",
      "Pies firmes en el piso para estabilizar.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-incline-bench-press",
  },
  "Fondos de tríceps en banco": {
    descripcion:
      "Sentado al borde del banco, manos apoyadas a los lados de las caderas. Desliza el cuerpo al frente y baja flexionando codos a 90°, sube empujando con los tríceps.",
    requerimientos: ["Banco plano"],
    tips: [
      "Codos hacia atrás, no abiertos a los lados.",
      "Para hacerlo más fácil, mantén las rodillas flexionadas (pies más cerca del banco).",
    ],
    videoUrl: "https://musclewiki.com/exercise/bench-dip",
  },
  "Crunch en tapete": {
    descripcion:
      "Boca arriba con rodillas flexionadas y pies en el piso, manos detrás de la cabeza o cruzadas en el pecho. Levanta los hombros del piso contrayendo el abdomen.",
    requerimientos: ["Tapete"],
    tips: [
      "No jales del cuello — las manos solo sostienen, no jalan.",
      "Sube solo los hombros, no toda la espalda.",
    ],
    videoUrl: "https://musclewiki.com/exercise/crunches",
  },
  "Remo renegado (plancha + remo)": {
    descripcion:
      "En posición de plancha alta con una mancuerna en cada mano. Manteniendo plancha estable, jala una mancuerna hacia la cadera, baja, y alterna.",
    requerimientos: ["Tapete", "2 mancuernas (hexagonales mejor, no ruedan)"],
    tips: [
      "No rotes la cadera — mantenla cuadrada al piso.",
      "Si es muy difícil, hazlo con rodillas apoyadas.",
    ],
    videoUrl: "https://musclewiki.com/exercise/renegade-row",
  },
  "Pullover en banco": {
    descripcion:
      "Acostado en el banco con una mancuerna sostenida con ambas manos sobre el pecho. Baja la mancuerna en arco hacia atrás de la cabeza, regresa al inicio.",
    requerimientos: ["Banco plano", "1 mancuerna"],
    tips: [
      "Brazos ligeramente flexionados, fijos así todo el movimiento.",
      "Baja hasta sentir estiramiento, no más.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-pullover",
  },
  "Curl concentrado": {
    descripcion:
      "Sentado en el banco con piernas abiertas, codo del brazo trabajando apoyado en la cara interna del muslo. Sube la mancuerna hacia el hombro y baja controlado.",
    requerimientos: ["Banco plano", "1 mancuerna"],
    tips: [
      "El codo NO se separa del muslo en ningún momento.",
      "Aprieta el bíceps arriba antes de bajar.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-concentration-curl",
  },
  "Apertura inversa (face pull)": {
    descripcion:
      "Inclinado al frente con espalda recta, mancuernas colgando. Abre los brazos hacia los lados llevando los codos atrás (como apertura, pero al revés).",
    requerimientos: ["2 mancuernas (peso ligero)"],
    tips: [
      "Aprieta los omóplatos al final.",
      "Movimiento controlado — este ejercicio es de técnica, no de peso.",
    ],
    videoUrl: "https://musclewiki.com/exercise/dumbbell-rear-delt-fly",
  },
  "Russian twist": {
    descripcion:
      "Sentado con rodillas flexionadas, torso inclinado ~45° atrás, mancuerna sostenida con ambas manos. Rota el torso de un lado al otro tocando el piso con la mancuerna.",
    requerimientos: ["Tapete", "1 mancuerna"],
    tips: [
      "El movimiento viene del torso, no de los brazos.",
      "Para más reto, levanta los pies del piso.",
    ],
    videoUrl: "https://musclewiki.com/exercise/russian-twist",
  },
};
