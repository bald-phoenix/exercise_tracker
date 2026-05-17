"use client";

import { useState } from "react";
import { Dia } from "@/lib/rutina";
import ModalEjercicio from "./ModalEjercicio";

type Props = {
  dia: Dia;
  fecha: string;
  registro: { [idx: string]: boolean };
  onToggle: (idx: number) => void;
  porcentaje?: number;
  esHoy?: boolean;
  compacto?: boolean;
};

export default function DiaCard({
  dia,
  registro,
  onToggle,
  porcentaje,
  esHoy,
  compacto,
}: Props) {
  const [modal, setModal] = useState<{ nombre: string; detalle: string } | null>(
    null
  );

  const total = dia.ejercicios.length;
  const completados = Object.values(registro).filter(Boolean).length;
  const pct = porcentaje ?? Math.round((completados / total) * 100);
  const completo = pct === 100;

  return (
    <>
      <article
        className={`relative bg-paper border rounded-2xl overflow-hidden transition-all duration-300 ${
          esHoy
            ? "border-ink/15 shadow-card"
            : "border-line-soft shadow-soft"
        } ${completo ? "bg-paper-soft" : ""}`}
      >
        {/* Header */}
        <header className="px-5 pt-5 pb-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {esHoy && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-accent/10 rounded-md">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span className="font-mono text-[9px] tracking-wider uppercase text-accent font-semibold">
                      Hoy
                    </span>
                  </span>
                )}
                <p className="font-mono text-label uppercase text-ink-light truncate">
                  {dia.enfoque}
                </p>
              </div>
              <h2 className="font-display text-display text-ink">
                {dia.titulo}
              </h2>
            </div>

            <div className="text-right shrink-0">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-2xl text-ink">
                  {completados}
                </span>
                <span className="text-body-sm text-ink-light">/{total}</span>
              </div>
              <p className="font-mono text-[10px] text-ink-light uppercase tracking-wider mt-0.5">
                {pct}%
              </p>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="h-1 bg-line-soft rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out ${
                completo ? "bg-accent" : "bg-accent/70"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </header>

        {/* Lista de ejercicios */}
        <ul className="px-2 pb-2">
          {dia.ejercicios.map((ej, idx) => {
            const hecho = !!registro[idx];
            return (
              <li key={idx}>
                <div
                  className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                    hecho ? "" : "hover:bg-paper-soft active:bg-paper-soft"
                  }`}
                >
                  {/* Checkbox grande */}
                  <button
                    onClick={() => onToggle(idx)}
                    className="shrink-0 press-scale"
                    aria-label={hecho ? "Desmarcar" : "Marcar"}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 ${
                        hecho
                          ? "bg-accent border-accent"
                          : "bg-paper border-2 border-line group-hover:border-ink-muted"
                      }`}
                      style={{
                        borderWidth: hecho ? "0" : "1.5px",
                      }}
                    >
                      {hecho && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="check-anim"
                        >
                          <path
                            d="M2.5 7L5.5 10L11.5 4"
                            stroke="#f7f3ea"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Texto */}
                  <button
                    onClick={() => onToggle(idx)}
                    className="flex-1 min-w-0 text-left press-scale"
                  >
                    <p
                      className={`text-body font-medium transition-colors ${
                        hecho ? "text-ink-light" : "text-ink"
                      }`}
                    >
                      <span className={hecho ? "strike-anim" : ""}>
                        {ej.nombre}
                      </span>
                    </p>
                    <p
                      className={`font-mono text-[11px] mt-0.5 transition-colors ${
                        hecho ? "text-ink-light/60" : "text-ink-muted"
                      }`}
                    >
                      {ej.detalle}
                    </p>
                  </button>

                  {/* Botón info — secundario */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModal({ nombre: ej.nombre, detalle: ej.detalle });
                    }}
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-ink-light hover:text-ink hover:bg-paper-warm transition-colors press-scale"
                    aria-label="Ver instrucciones del ejercicio"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle
                        cx="7"
                        cy="7"
                        r="5.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M7 6.5V10M7 4V4.1"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Mensaje de día completado */}
        {completo && (
          <div className="px-5 py-3 border-t border-line-soft bg-accent/5">
            <p className="font-mono text-label uppercase text-accent flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Día completado
            </p>
          </div>
        )}
      </article>

      {modal && (
        <ModalEjercicio
          nombre={modal.nombre}
          detalle={modal.detalle}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
