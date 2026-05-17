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
  const [modal, setModal] = useState<{ nombre: string; detalle: string } | null>(null);

  const total = dia.ejercicios.length;
  const completados = Object.values(registro).filter(Boolean).length;
  const pct = porcentaje ?? Math.round((completados / total) * 100);

  return (
    <>
      <article
        className={`relative border ${
          esHoy ? "border-ink" : "border-line"
        } bg-cream/40 p-6 md:p-8 ${compacto ? "" : "shadow-sm"}`}
      >
        {esHoy && (
          <div className="absolute -top-3 left-6 bg-ink text-paper px-3 py-1 font-mono text-[9px] tracking-[0.2em] uppercase">
            Hoy
          </div>
        )}

        <header className="flex items-baseline justify-between mb-5 pb-3 border-b border-line">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight">
              {dia.titulo}
            </h2>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mt-1">
              {dia.enfoque}
            </p>
          </div>
          <div className="text-right shrink-0 ml-4">
            <p className="font-display text-2xl">
              {completados}
              <span className="text-muted">/{total}</span>
            </p>
            <p className="font-mono text-[10px] text-muted">{pct}%</p>
          </div>
        </header>

        <ul className="space-y-2">
          {dia.ejercicios.map((ej, idx) => {
            const hecho = !!registro[idx];
            return (
              <li key={idx}>
                <div
                  className={`w-full flex items-start gap-3 py-3 px-2 -mx-2 transition-colors hover:bg-cream/60 group ${
                    hecho ? "opacity-50" : ""
                  }`}
                >
                  {/* Checkbox (clickable) */}
                  <button
                    onClick={() => onToggle(idx)}
                    className={`shrink-0 w-5 h-5 mt-0.5 border flex items-center justify-center transition-colors ${
                      hecho
                        ? "bg-accent border-accent"
                        : "border-muted group-hover:border-ink"
                    }`}
                    aria-label={hecho ? "Desmarcar" : "Marcar"}
                  >
                    {hecho && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="check-anim"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="#f5f1e8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Texto (también clickable para marcar) */}
                  <button
                    onClick={() => onToggle(idx)}
                    className="flex-1 min-w-0 text-left"
                  >
                    <p
                      className={`font-body text-base ${
                        hecho ? "line-through decoration-1" : ""
                      }`}
                    >
                      {ej.nombre}
                    </p>
                    <p className="font-mono text-xs text-muted mt-0.5">
                      {ej.detalle}
                    </p>
                  </button>

                  {/* Botón de info */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModal({ nombre: ej.nombre, detalle: ej.detalle });
                    }}
                    className="shrink-0 w-7 h-7 border border-line hover:border-ink hover:bg-paper flex items-center justify-center transition-colors mt-0"
                    aria-label="Ver cómo hacer este ejercicio"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5" stroke="#6b6357" strokeWidth="1.2" />
                      <path
                        d="M6 5.5V8.5M6 3.5V3.6"
                        stroke="#6b6357"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 h-[2px] bg-line relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
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
