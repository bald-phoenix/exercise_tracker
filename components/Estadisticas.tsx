"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import { RUTINA } from "@/lib/rutina";
import {
  Registro,
  fechaISO,
  diaDeLaSemana,
  porcentajeDia,
  lunesDeSemana,
} from "@/lib/storage";

type Props = {
  registro: Registro;
};

export default function Estadisticas({ registro }: Props) {
  const semanas = useMemo(() => {
    const hoy = new Date();
    const lunesActual = lunesDeSemana(hoy);
    const data: { semana: string; pct: number; esActual: boolean }[] = [];

    for (let s = 3; s >= 0; s--) {
      const lunes = new Date(lunesActual);
      lunes.setDate(lunesActual.getDate() - s * 7);
      let suma = 0;
      let cuenta = 0;
      for (let d = 0; d < 5; d++) {
        const fecha = new Date(lunes);
        fecha.setDate(lunes.getDate() + d);
        const fechaStr = fechaISO(fecha);
        const rutinaDia = RUTINA.find((r) => r.diaSemana === d + 1);
        if (rutinaDia) {
          suma += porcentajeDia(
            registro,
            fechaStr,
            rutinaDia.ejercicios.length
          );
          cuenta++;
        }
      }
      const dia = lunes.getDate();
      const mes = lunes.toLocaleDateString("es", { month: "short" });
      data.push({
        semana: `${dia} ${mes}`,
        pct: cuenta > 0 ? Math.round(suma / cuenta) : 0,
        esActual: s === 0,
      });
    }
    return data;
  }, [registro]);

  const porDiaSemana = useMemo(() => {
    const totales: { [k: number]: { suma: number; cuenta: number } } = {};
    for (let d = 1; d <= 5; d++) totales[d] = { suma: 0, cuenta: 0 };

    Object.keys(registro).forEach((fecha) => {
      const d = new Date(fecha + "T00:00:00");
      const ds = diaDeLaSemana(d);
      if (ds > 5) return;
      const rutinaDia = RUTINA.find((r) => r.diaSemana === ds);
      if (!rutinaDia) return;
      const pct = porcentajeDia(registro, fecha, rutinaDia.ejercicios.length);
      totales[ds].suma += pct;
      totales[ds].cuenta++;
    });

    return [1, 2, 3, 4, 5].map((d) => {
      const t = totales[d];
      const nombres = ["", "Lun", "Mar", "Mié", "Jue", "Vie"];
      return {
        dia: nombres[d],
        pct: t.cuenta > 0 ? Math.round(t.suma / t.cuenta) : 0,
      };
    });
  }, [registro]);

  const sesionesCompletas = useMemo(() => {
    return Object.entries(registro).filter(([fecha, eje]) => {
      const d = new Date(fecha + "T00:00:00");
      const ds = diaDeLaSemana(d);
      const rutinaDia = RUTINA.find((r) => r.diaSemana === ds);
      if (!rutinaDia) return false;
      const completados = Object.values(eje).filter(Boolean).length;
      return completados / rutinaDia.ejercicios.length >= 0.8;
    }).length;
  }, [registro]);

  const totalChecks = useMemo(() => {
    let n = 0;
    Object.values(registro).forEach((d) => {
      n += Object.values(d).filter(Boolean).length;
    });
    return n;
  }, [registro]);

  return (
    <div className="space-y-4">
      {/* KPIs en cards individuales */}
      <div className="grid grid-cols-2 gap-3">
        <KpiCard
          label="Sesiones"
          value={sesionesCompletas}
          subtitle="completas (≥80%)"
        />
        <KpiCard
          label="Ejercicios"
          value={totalChecks}
          subtitle="marcados en total"
        />
      </div>

      {/* Cumplimiento últimas 4 semanas */}
      <div className="bg-paper border border-line-soft rounded-2xl p-5 shadow-soft">
        <header className="flex items-baseline justify-between mb-4">
          <div>
            <p className="font-mono text-label uppercase text-ink-light mb-0.5">
              Cumplimiento
            </p>
            <p className="font-display text-title text-ink">Últimas 4 semanas</p>
          </div>
        </header>
        <div className="h-44 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={semanas} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <XAxis
                dataKey="semana"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#6b6357",
                  fontSize: 10,
                  fontFamily: "JetBrains Mono",
                }}
              />
              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#9a9085",
                  fontSize: 9,
                  fontFamily: "JetBrains Mono",
                }}
                tickFormatter={(v) => `${v}`}
                ticks={[0, 50, 100]}
                width={24}
              />
              <Tooltip
                cursor={{ fill: "rgba(184, 73, 44, 0.06)" }}
                contentStyle={{
                  background: "#161310",
                  border: "none",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  padding: "6px 10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                labelStyle={{ color: "#9a9085", fontSize: 10, marginBottom: 2 }}
                itemStyle={{ color: "#f7f3ea", padding: 0 }}
                formatter={(v: number) => [`${v}%`, "Cumplimiento"]}
              />
              <Bar dataKey="pct" radius={[6, 6, 0, 0]}>
                {semanas.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={entry.esActual ? "#b8492c" : "#d8cdb8"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* % por día de la semana */}
      <div className="bg-paper border border-line-soft rounded-2xl p-5 shadow-soft">
        <header className="flex items-baseline justify-between mb-4">
          <div>
            <p className="font-mono text-label uppercase text-ink-light mb-0.5">
              Promedio
            </p>
            <p className="font-display text-title text-ink">Por día de la semana</p>
          </div>
        </header>
        <div className="h-44 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={porDiaSemana} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <XAxis
                dataKey="dia"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#6b6357",
                  fontSize: 10,
                  fontFamily: "JetBrains Mono",
                }}
              />
              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#9a9085",
                  fontSize: 9,
                  fontFamily: "JetBrains Mono",
                }}
                ticks={[0, 50, 100]}
                width={24}
              />
              <Tooltip
                cursor={{ fill: "rgba(22, 19, 16, 0.04)" }}
                contentStyle={{
                  background: "#161310",
                  border: "none",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  padding: "6px 10px",
                }}
                labelStyle={{ color: "#9a9085", fontSize: 10, marginBottom: 2 }}
                itemStyle={{ color: "#f7f3ea", padding: 0 }}
                formatter={(v: number) => [`${v}%`, "Promedio"]}
              />
              <Bar dataKey="pct" radius={[6, 6, 0, 0]}>
                {porDiaSemana.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={
                      entry.pct >= 80
                        ? "#b8492c"
                        : entry.pct >= 50
                        ? "#3d362e"
                        : "#d8cdb8"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="font-mono text-[10px] text-ink-light mt-3 leading-relaxed">
          Días claros = menor cumplimiento. Revisa si hay un patrón.
        </p>
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  subtitle,
}: {
  label: string;
  value: number;
  subtitle: string;
}) {
  return (
    <div className="bg-paper border border-line-soft rounded-2xl p-4 shadow-soft">
      <p className="font-mono text-label uppercase text-ink-light mb-2">
        {label}
      </p>
      <p className="font-display text-display-lg text-ink leading-none">
        {value}
      </p>
      <p className="text-[11px] text-ink-muted mt-1.5">{subtitle}</p>
    </div>
  );
}
