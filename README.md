# AM · Asset Management

Aplicación web multi-empresa para controlar stock y asignaciones de insumos,
herramientas y dispositivos: **qué hay, dónde está y quién lo tiene**.

Proyecto personal de aprendizaje de CI/CD.

## Stack

- Frontend: React + Vite + TypeScript, desplegado en Cloudflare Pages.
- Datos y autenticación: Supabase (ambientes `dev` y `prod`).
- CI/CD: GitHub Actions.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm ci` | Instala las dependencias según `package-lock.json` |
| `npm run lint` | Lint con oxlint (falla ante cualquier advertencia) |
| `npm run typecheck` | Revisión de tipos de TypeScript |
| `npm run build` | Compila la app en `dist/` |

## Flujo de trabajo

1. Todo cambio entra por Pull Request a `main` (la rama está protegida).
2. El workflow **CI** valida cada PR: auditoría de dependencias, lint, tipos y build.
3. El despliegue a `prod` requiere aprobación manual (environment protegido).

## Seguridad

- No subir secretos al repositorio: van en *Settings → Secrets and variables* o en los environments.
- Los datos de ejemplo son ficticios.
