"use client";

import { useEffect, useState } from "react";
import { RUTINA } from "@/lib/rutina";
import {
  cargarRegistro,
  guardarRegistro,
  fechaHoy,
  fechaISO,
  diaDeLaSemana,
  semanaLaboral,
  porcentajeDia,
  porcentajeSemana,
  rachaDias,
  Registro,
} from "@/lib/storage";
import DiaCard from "@/components/DiaCard";
import Estadisticas from "@/components/Estadisticas";

type Tab = "hoy" | "semana" | "stats";

export default function Home() {
  const [registro, setRegistro] = useState<Registro>({});
  const [tab, setTab] = useState<Tab>("hoy");
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setRegistro(cargarRegistro());
    setMontado(true);
  }, []);

  const toggleEjercicio = (fecha: string, idx: number) => {
    const nuevo = { ...registro };
    if (!nuevo[fecha]) nuevo[fecha] = {};
    nuevo[fecha][idx] = !nuevo[fecha][idx];
    setRegistro(nuevo);
    guardarRegistro(nuevo);
  };

  if (!montado) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-ink/30 animate-pulse-soft" />
      </div>
    );
  }

  const hoy = new Date();
  const diaHoy = diaDeLaSemana(hoy);
  const fechaHoyStr = fechaHoy();
  const rutinaHoy = RUTINA.find((d) => d.diaSemana === diaHoy);
  const semana = semanaLaboral(hoy);
  const racha = rachaDias(registro);
  const pctSemana = porcentajeSemana(
    registro,
    semana.map(fechaISO),
    RUTINA.map((d) => d.ejercicios.length)
  );

  const fechaFormateada = hoy.toLocaleDateString("es", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="max-w-2xl mx-auto px-5 pb-12">
      {/* ============== HEADER ============== */}
      <header className="pt-7 pb-5">
        <div className="flex items-start justify-between mb-7">
          <div>
            <p className="font-mono text-label uppercase text-ink-light mb-1.5">
              Exercise Tracker
            </p>
            <h1 className="font-display text-display-xl text-ink first-letter:capitalize">
              {fechaFormateada.split(",")[0]}
            </h1>
            <p className="text-body-sm text-ink-muted mt-1 first-letter:capitalize">
              {fechaFormateada.split(",")[1]?.trim()}
            </p>
          </div>

          {/* Hero de racha */}
          <div className={`text-right ${racha > 0 ? "streak-pulse" : ""}`}>
            <div className="inline-flex items-baseline gap-1.5 px-3 py-2 bg-ink rounded-xl">
              <span className="font-display text-2xl font-medium text-paper leading-none">
                {racha}
              </span>
              <span className="font-mono text-[10px] text-paper/60 uppercase tracking-wider">
                {racha === 1 ? "día" : "días"}
              </span>
            </div>
            <p className="font-mono text-[10px] text-ink-light uppercase tracking-widest mt-1.5">
              {racha === 0 ? "sin racha" : "racha"}
            </p>
          </div>
        </div>

        {/* Tabs estilo iOS segmented control */}
        <nav className="relative bg-paper-soft p-1 rounded-xl flex shadow-soft">
          {([
            { id: "hoy", label: "Hoy" },
            { id: "semana", label: "Semana" },
            { id: "stats", label: "Progreso" },
          ] as { id: Tab; label: string }[]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 py-2 px-3 text-body-sm font-medium rounded-lg transition-all duration-200 press-scale ${
                tab === t.id
                  ? "bg-paper text-ink shadow-card"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {/* ============== CONTENIDO ============== */}
      <div key={tab} className="tab-content">
        {tab === "hoy" && (
          <section>
            {rutinaHoy ? (
              <DiaCard
                dia={rutinaHoy}
                fecha={fechaHoyStr}
                registro={registro[fechaHoyStr] || {}}
                onToggle={(idx) => toggleEjercicio(fechaHoyStr, idx)}
                esHoy
              />
            ) : (
              <DescansoCard />
            )}
          </section>
        )}

        {tab === "semana" && (
          <section className="space-y-4">
            {/* Resumen de semana */}
            <div className="bg-paper-soft border border-line-soft rounded-2xl p-5">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <p className="font-mono text-label uppercase text-ink-light mb-1">
                    Esta semana
                  </p>
                  <p className="font-display text-display-lg text-ink">
                    {pctSemana}
                    <span className="text-xl text-ink-muted">%</span>
                  </p>
                </div>
                <p className="text-body-sm text-ink-muted">
                  {semana.filter((d) => {
                    const reg = registro[fechaISO(d)];
                    return reg && Object.values(reg).some(Boolean);
                  }).length}
                  <span className="text-ink-light">/5 días</span>
                </p>
              </div>

              {/* Dots de progreso de la semana */}
              <div className="flex gap-2">
                {RUTINA.map((d, i) => {
                  const fecha = fechaISO(semana[i]);
                  const pct = porcentajeDia(
                    registro,
                    fecha,
                    d.ejercicios.length
                  );
                  const esHoyDia = fecha === fechaHoyStr;
                  return (
                    <div
                      key={d.id}
                      className="flex-1 flex flex-col items-center gap-1.5"
                    >
                      <div
                        className={`w-full h-1 rounded-full transition-all ${
                          pct >= 80
                            ? "bg-accent"
                            : pct > 0
                            ? "bg-accent/40"
                            : "bg-line"
                        }`}
                      />
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider ${
                          esHoyDia ? "text-ink font-semibold" : "text-ink-light"
                        }`}
                      >
                        {d.titulo.slice(0, 1)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cards de cada día */}
            {RUTINA.map((dia, i) => {
              const fecha = fechaISO(semana[i]);
              const pct = porcentajeDia(
                registro,
                fecha,
                dia.ejercicios.length
              );
              const esHoyDia = fecha === fechaHoyStr;
              return (
                <DiaCard
                  key={dia.id}
                  dia={dia}
                  fecha={fecha}
                  registro={registro[fecha] || {}}
                  onToggle={(idx) => toggleEjercicio(fecha, idx)}
                  porcentaje={pct}
                  esHoy={esHoyDia}
                  compacto
                />
              );
            })}
          </section>
        )}

        {tab === "stats" && (
          <section>
            <Estadisticas registro={registro} />
          </section>
        )}
      </div>
    </div>
  );
}

function DescansoCard() {
  return (
    <div className="bg-paper-soft border border-line-soft rounded-2xl p-10 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-paper border border-line mb-4">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2v3M10 15v3M2 10h3M15 10h3M4.5 4.5l2 2M13.5 13.5l2 2M4.5 15.5l2-2M13.5 6.5l2-2"
            stroke="#6b6357"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="font-display text-2xl text-ink mb-1.5">
        Día de descanso
      </p>
      <p className="text-body-sm text-ink-muted max-w-xs mx-auto">
        Saca al perro a caminar largo. La recuperación también es entrenamiento.
      </p>
    </div>
  );
}
