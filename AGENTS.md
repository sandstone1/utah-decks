# Enchanting Apps Astro

## Tech Stack
- Astro 7 with SSR (server output)
- React 18.2 — components live in src/components/react/
- Solid.js — components live in src/components/solid/
- Vanilla Three.js and R3F for 3D
- SCSS modules for styling
- Turso/LibSQL for database
- Nanostores for shared state
- Netlify for deployment, Node for local dev

## Client Directives
- React Three Fiber components → client:only="react"
- Vanilla Three.js components → client:visible
- Above the fold components → client:load
- Static content below fold → client:visible

## Conventions
- No TypeScript — use .js and .jsx only
- SCSS modules — no inline styles
- Intersection Observer for animation triggers
- dynamic imports for heavy components

## Dev Server
- Local: npm run dev (runs on port 3036)
- Deploy: Netlify

## Do Not Touch
- astro.config.mjs adapter logic
- tsconfig.json
- .env files
