"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { DETALLES } from "@/lib/detalles";
import { DIAGRAMAS } from "./Diagramas";

type Props = {
  nombre: string;
  detalle: string;
  onClose: () => void;
};

export default function ModalEjercicio({ nombre, detalle, onClose }: Props) {
  const info = DETALLES[nombre];
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);

    // Bloquear scroll preservando posición (iOS Safari friendly)
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  if (!montado) return null;

  const Diagrama = info?.diagrama ? DIAGRAMAS[info.diagrama] : null;

  const contenido = (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(26, 24, 20, 0.5)",
          zIndex: 9998,
        }}
      />

      {/* Modal — centrado en viewport */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100% - 2rem)",
          maxWidth: "32rem",
          maxHeight: "calc(100dvh - 4rem)",
          overflowY: "auto",
          zIndex: 9999,
          backgroundColor: "#f5f1e8",
          border: "1px solid #1a1814",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="px-5 py-5 md:px-6 md:py-6">
          <header className="flex items-start justify-between mb-1 pb-4 border-b border-line">
            <div className="flex-1 min-w-0 pr-4">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mb-1">
                Ejercicio
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                {nombre}
              </h2>
              <p className="font-mono text-xs text-muted mt-2">{detalle}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 flex items-center justify-center hover:bg-cream transition-colors border border-line"
              aria-label="Cerrar"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="#1a1814"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </header>

          {info ? (
            <>
              {Diagrama && (
                <div className="mt-5 mb-5 p-3 bg-cream/50 border border-line">
                  <Diagrama />
                </div>
              )}

              <section className="mt-5">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mb-2">
                  Cómo se hace
                </p>
                <p className="text-sm leading-relaxed">{info.descripcion}</p>
              </section>

              <section className="mt-5">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mb-2">
                  Necesitas
                </p>
                <ul className="space-y-1">
                  {info.requerimientos.map((req, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-5">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mb-2">
                  Tips
                </p>
                <ul className="space-y-2">
                  {info.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed pl-4 border-l-2 border-accent"
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <p className="mt-5 text-sm text-muted italic">
              Sin información disponible.
            </p>
          )}
        </div>
      </div>
    </>
  );

  // Renderiza directamente en document.body — fuera del árbol de <main>
  return createPortal(contenido, document.body);
}
