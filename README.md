# Rutina · Tracker

App para registrar el cumplimiento diario de tu rutina de entrenamiento.

## Características

- **Hoy** — checklist del día actual con detalle de cada ejercicio
- **Semana** — vista de toda la semana laboral (L-V)
- **Progreso** — estadísticas de las últimas 4 semanas y promedio por día
- Racha de días consecutivos
- Todo guardado localmente en tu dispositivo (localStorage)

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Recharts para gráficas
- Sin backend — datos en localStorage del navegador

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy en Vercel (5 minutos)

### Opción A: con GitHub (recomendado)

1. Crea un repo nuevo en GitHub.
2. Sube esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. Entra a [vercel.com](https://vercel.com), conecta tu GitHub.
4. Click "Add New… → Project" → selecciona el repo → "Deploy".
5. Vercel detecta Next.js automáticamente. No necesitas configurar nada.
6. En 1-2 min tendrás una URL tipo `tu-rutina.vercel.app`.

### Opción B: con Vercel CLI

```bash
npm i -g vercel
vercel
```

Sigue las instrucciones del CLI.

## Personalizar la rutina

Edita `lib/rutina.ts`. Cada día es un objeto con sus ejercicios. Cambia
nombres, pesos, reps o agrega/quita ejercicios. La app se ajusta automática.

## Notas importantes

- **Los datos viven en este navegador en este dispositivo.** Si cambias de
  celular, instalas una app nueva, o limpias datos del navegador, perderás
  el historial.
- Si quieres sincronizar entre dispositivos, hay que agregar una base de
  datos (Supabase, Vercel Postgres, etc.).
- Para usarla cómodo en el celular: ábrela en el navegador y "Agregar a
  pantalla de inicio" — funciona como una app.
