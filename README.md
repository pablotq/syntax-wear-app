**Syntax Wear — Frontend**

Português
--------

Descrição
- Projeto frontend de uma loja online (páginas de produto, listagem, carrinho, autenticação básica e formulários). Usa dados mockados em `src/mocks` para produtos e categorias.

Principais tecnologias
- **Vite:** empacotador e dev server rápido.
- **React 19:** biblioteca de UI.
- **TypeScript:** tipagem estática para segurança e produtividade.
- **Tailwind CSS:** utilitários CSS para estilização.
- **@tanstack/react-router:** roteamento do app.
- **react-hook-form:** gerenciamento de formulários.
- **Zod:** validação e schemas (usado junto com `react-hook-form`).
- **@hookform/resolvers:** integração `react-hook-form` + `zod`.
- **react-icons:** ícones prontos.
- **ESLint + plugins:** linting e regras para React/TypeScript.
- **@vitejs/plugin-react:** plugin React para Vite.

Estrutura relevante
- `src/components` — componentes reutilizáveis (Header, Footer, ProductCard, CartDrawer, etc.).
- `src/pages` — rotas e páginas (produtos, categorias, auth).
- `src/contexts` — `CartContext` e `CartProvider` para estado do carrinho.
- `src/mocks` — dados de exemplo (`products.ts`, `categories.ts`).
- `src/utils` — utilitários (formatação, validação de CPF, etc.).

Execução
- Instalar dependências: `npm install`
- Rodar em modo dev: `npm run dev`
- Build para produção: `npm run build`
- Visualizar build: `npm run preview`
- Rodar lint: `npm run lint`

Observações
- Arquivos de configuração: `tsconfig.json`, `vite.config.ts`, `eslint.config.js`, `vercel.json`.
- O projeto é focado no frontend; não há backend — os dados vêm de mocks.

English
-------

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
