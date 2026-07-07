# Portfolio — OpenCode Instructions

## Commands

```bash
npm run dev        # Vite dev server with HMR
npm run build      # tsc -b && vite build (typecheck + bundle)
npm run lint       # ESLint on all .ts/.tsx
npm run preview    # Serve built docs/ locally
```

`build` always runs `tsc -b` first — fix type errors before debugging bundle issues.

## CI / CD

- PRs to `main` trigger the **Quality** workflow (`.github/workflows/quality.yml`) — lint + build.
- Merges to `main` trigger the **Release** workflow (`.github/workflows/release.yml`) — builds and deploys to GitHub Pages via `actions/deploy-pages`.
- Published at https://cgzdevelopments.github.io
- Base path is `/` (see `vite.config.ts`).

## Docker

```bash
docker compose up --build   # Build and serve on http://localhost:8080
```

Multi-stage build: Node 22 (build) → Nginx (serve). Config at `docker/`.

## Entry points

- `index.html` → `src/main.tsx` → `src/App.tsx`
- All source lives under `src/`; `vite.config.ts` is in `tsconfig.node.json`.

## Theming

- Theme config in `src/theme/theme.ts` — single source of truth using MUI's `colorSchemes` API.
- Light bg `#fafafa`, dark bg `#121212`. Toggle via icon button (top-right corner).
- `src/theme/ThemeContext.tsx` — context + `useThemeContext` hook. Uses `useColorScheme()` internally.
- `src/theme/ThemeProvider.tsx` — wraps app with MUI `ThemeProvider` + `CssBaseline`.
- `src/components/ThemeToggle.tsx` — sun/moon icon button, `fixed` position top-right.
- Flash prevention script in `index.html`<head> reads `mui-mode` from localStorage.

## Codebase index

Persistent index artifact at `.codebase-memory/graph.db.zst` — commit to share with teammates.
