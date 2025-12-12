# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

# Refactorizacion con Fábrica (Factory Pattern) — Examen Final Ingenieria de Software 2- KAREN HERNANDEZ

- Objetivo que se logro fue eliminar el acoplamiento de la UI con clases concretas de movimientos y permitir agregar nuevos tipos sin modificar la UI (OCP). Se implementa un patrón Factory con registro dinámico.

## Cambios realizados
Se creó `MovementFactory.js`, para construir objetos IMovement.
- `main.jsx` importa automáticamente el registro.
- `MovementList.jsx` fue refactorizado para usar la fábrica en lugar de usar `new` o `switch`.
 Se creó `registerMovements.js` para registrar todos los tipos.


La UI ahora depende solo de *MovementFactory* y *--IMovement--*, no de clases concretas. Ahora toda la lógica de creación está en un único lugar.

## Justificación técnica
-la UI sólo depende de la abstracción `IMovement` y la fábrica. No conoce ni importa clases concretas, por lo que los cambios en las concreciones no afectan la UI. Usando la reduccion de acoplamiento.
- **OCP**: al añadir una nueva subclase de `IMovement` sólo registramos la concreción en la fábrica (p. ej. `MovementFactory.register('FEE', FeeMovement)`), sin tocar la UI. facilita pruebas y extensiones (se pueden añadir plugins o registrar tipos condicionalmente).

- El comportamiento visual no se cambio, tampoco se usaron librerias externas.

## Cómo correr
1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:3000` (o el puerto de la app)
