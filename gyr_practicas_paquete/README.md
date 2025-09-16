# GYR Ingeniería - Practicas ADSO

Este proyecto es un ejemplo de integración software de apoyo para la gestión de equipos y mantenimientos.

## Componentes
- Base de datos MySQL (inventario y mantenimientos).
- Backend Express con API REST.
- Frontend React con formulario para registrar mantenimientos.

## Requisitos
- Node.js 20+
- MySQL 8+
- React (Vite o CRA)

## Pasos
1. Crear la base de datos con `schema.sql`.
2. Ejecutar el backend:
   ```bash
   npm install
   node index.js
   ```
3. Levantar el frontend con `npm run dev`.
4. Acceder a `http://localhost:5173` (frontend) y `http://localhost:3000/api/devices` (backend).

## Endpoints API
- GET /api/devices → lista dispositivos
- POST /api/maintenance → registra mantenimiento
