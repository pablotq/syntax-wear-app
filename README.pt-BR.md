**Syntax Wear — Frontend**

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