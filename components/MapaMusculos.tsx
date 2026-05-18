"use client";

import Model from "react-body-highlighter";
import type { Muscle } from "@/lib/detalles";

type Props = {
  musculos: Muscle[];
  nombreEjercicio: string;
};

export default function MapaMusculos({ musculos, nombreEjercicio }: Props) {
  const data = [
    {
      name: nombreEjercicio,
      muscles: musculos,
    },
  ];

  return (
    <div className="rbh-wrapper flex justify-center items-start gap-2 py-3">
      <div className="flex flex-col items-center">
        <Model
          data={data}
          style={{ width: "120px", height: "auto" }}
          highlightedColors={["#b8492c"]}
          bodyColor="#ebe4d3"
        />
        <p className="font-mono text-[9px] text-ink-light uppercase tracking-wider mt-1">
          Frontal
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Model
          type="posterior"
          data={data}
          style={{ width: "120px", height: "auto" }}
          highlightedColors={["#b8492c"]}
          bodyColor="#ebe4d3"
        />
        <p className="font-mono text-[9px] text-ink-light uppercase tracking-wider mt-1">
          Trasera
        </p>
      </div>
    </div>
  );
}
