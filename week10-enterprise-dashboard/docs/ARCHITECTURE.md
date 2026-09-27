# Architecture Notes

The project follows the Week 10 feature-based architecture:
- `app/` owns global providers and Redux store configuration.
- `features/` owns domain-specific state and business behavior.
- `components/` contains reusable UI layers following atomic design.
- `services/` isolates external communication.
- `hooks/` contains reusable cross-feature behavior.
- route-level `lazy()` imports demonstrate code splitting.
- protected routes prevent unauthenticated access to dashboard pages.
- the WebSocket service is a local simulation and can be replaced by an authenticated backend.
