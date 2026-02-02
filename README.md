**Syntax Wear — Frontend**

Description
- Frontend project for an online store (product pages, listing, cart, basic auth and forms). Uses mocked data in `src/mocks` for products and categories.

Main technologies
- **Vite:** fast bundler and dev server.
- **React 19:** UI library.
- **TypeScript:** static typing for safety and DX.
- **Tailwind CSS:** utility-first CSS framework.
- **@tanstack/react-router:** routing solution used by the app.
- **react-hook-form:** form management.
- **Zod:** schema validation (used with `react-hook-form`).
- **@hookform/resolvers:** `react-hook-form` + `zod` resolver.
- **react-icons:** icon library.
- **ESLint + plugins:** linting setup for React/TypeScript.
- **@vitejs/plugin-react:** Vite plugin for React.

Relevant structure
- `src/components` — reusable UI components (Header, Footer, ProductCard, CartDrawer, etc.).
- `src/pages` — routes and pages (products, categories, auth).
- `src/contexts` — `CartContext` and `CartProvider` for cart state.
- `src/mocks` — example data (`products.ts`, `categories.ts`).
- `src/utils` — utilities (formatting, CPF validator, etc.).

Usage
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Run linter: `npm run lint`

Notes
- Config files: `tsconfig.json`, `vite.config.ts`, `eslint.config.js`, `vercel.json`.
- This repository is a frontend-only app; backend/API should be connected separately when needed.
