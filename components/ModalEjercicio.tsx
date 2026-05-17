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
      {/* Backdrop con blur */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(22, 19, 16, 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 9998,
          animation: "fadeIn 200ms ease-out",
        }}
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "calc(100% - 1.5rem)",
          maxWidth: "30rem",
          maxHeight: "calc(100dvh - 3rem)",
          overflowY: "auto",
          zIndex: 9999,
          backgroundColor: "#f7f3ea",
          borderRadius: "20px",
          boxShadow: "0 20px 50px -12px rgba(22, 19, 16, 0.25), 0 0 0 0.5px rgba(22, 19, 16, 0.08)",
          animation: "scaleIn 220ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="px-5 py-5 md:px-6 md:py-6">
          {/* Header */}
          <header className="flex items-start justify-between gap-3 mb-5 pb-4 border-b border-line-soft">
            <div className="flex-1 min-w-0">
              <p className="font-mono text-label uppercase text-ink-light mb-1.5">
                Ejercicio
              </p>
              <h2 className="font-display text-display text-ink mb-1.5">
                {nombre}
              </h2>
              <p className="font-mono text-[11px] text-ink-muted">{detalle}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-paper-warm hover:bg-line-soft transition-colors press-scale"
              aria-label="Cerrar"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 1L11 11M11 1L1 11"
                  stroke="#161310"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </header>

          {info ? (
            <>
              {/* Diagrama */}
              {Diagrama && (
                <div className="mb-5 p-4 bg-paper-soft border border-line-soft rounded-xl">
                  <Diagrama />
                </div>
              )}

              {/* Cómo se hace */}
              <section className="mb-5">
                <p className="font-mono text-label uppercase text-ink-light mb-2">
                  Cómo se hace
                </p>
                <p className="text-body text-ink-soft leading-relaxed">
                  {info.descripcion}
                </p>
              </section>

              {/* Necesitas */}
              <section className="mb-5">
                <p className="font-mono text-label uppercase text-ink-light mb-2.5">
                  Necesitas
                </p>
                <ul className="space-y-1.5">
                  {info.requerimientos.map((req, i) => (
                    <li
                      key={i}
                      className="text-body-sm text-ink-soft flex items-start gap-2.5"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tips */}
              <section>
                <p className="font-mono text-label uppercase text-ink-light mb-2.5">
                  Tips
                </p>
                <ul className="space-y-2.5">
                  {info.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="text-body-sm text-ink-soft leading-relaxed pl-3.5 border-l-2 border-accent/40"
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <p className="text-body-sm text-ink-muted italic">
              Sin información disponible.
            </p>
          )}
        </div>
      </div>
    </>
  );

  return createPortal(contenido, document.body);
}
