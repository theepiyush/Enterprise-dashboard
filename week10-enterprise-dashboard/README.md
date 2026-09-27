# Week 10 — Enterprise Dashboard

Production-oriented React + TypeScript dashboard demonstrating the Week 10 requirements: feature-based architecture, Redux Toolkit, nested routing, protected routes, data visualization, React Query, WebSocket-style real-time updates, testing, Storybook-ready components, performance techniques, and responsive UI.

## Stack

- React 18 + TypeScript strict mode
- Vite
- Redux Toolkit + Redux Persist
- React Router v6
- Recharts
- Material UI
- TanStack React Query
- WebSocket service abstraction with automatic reconnect
- Vitest + React Testing Library
- Storybook configuration
- Feature-based folder structure

## Run

```bash
npm install
npm run dev
```

Open the URL printed by Vite.

## Quality commands

```bash
npm run type-check
npm run lint
npm test
npm run build
npm run storybook
```

## Demo credentials

The dashboard uses a local demo auth flow for this training project. Click **Sign in** and use any email/password to enter the protected dashboard.

## Architecture

```text
src/
├── app/
│   ├── store/
│   ├── hooks/
│   └── providers/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── features/
│   ├── auth/
│   ├── dashboard/
│   └── notifications/
├── hooks/
├── pages/
├── services/
├── types/
├── utils/
└── main.tsx
```

## Production notes

The demo WebSocket layer is intentionally self-contained so the project runs without a backend. In production, replace the demo endpoint with an authenticated `wss://` endpoint and validate every incoming message at the boundary. Never place API secrets in `VITE_*` client variables.
