# MERN stack Learning Management System (LMS)

A professional, futuristic Learning Management System showcasing modern MERN architecture, polished UI, animations, and production-ready tooling.

- Frontend: React + Vite + TypeScript + Tailwind
- Backend: Node.js + Express + MongoDB (Mongoose)
- Auth: JWT with roles (Student, Instructor, Admin) and refresh tokens
- Analytics: Chart.js dashboards + progress heatmap
- Tooling: Docker, GitHub Actions CI, Swagger, Postman collection, tests

## Architecture

<lov-mermaid>
flowchart LR
  A[React + Vite] -- Axios --> B(Express API)
  B --> C[(MongoDB)]
  B -- Caching --> D[(Redis)]
  B -- S3 Signed URLs --> E[(AWS S3)]
  A -- Realtime (optional) --> B
  B -- OpenAPI --> F[Swagger UI]
</lov-mermaid>

## Monorepo Layout

- server/ – Express API (MVC) with Swagger, rate limiting, JWT, Mongoose models
- src/ – Frontend app (Router v6, protected routes, Context auth, charts)
- __tests__/ – Jest + RTL examples
- .github/workflows/ci.yml – CI pipeline
- docker-compose.yml – One-command local stack (API + Mongo + Redis)
- docs/postman_collection.json – API examples

## Quick Start

1. Frontend
   - npm i
   - npm run dev
2. Backend
   - docker compose up -d
   - cd server && npm i && npm run start
   - Open Swagger at http://localhost:5000/docs

Environment variables (backend):
- MONGO_URI=mongodb://localhost:27017/lms
- JWT_SECRET=change-me
- JWT_REFRESH_SECRET=change-me-too
- AWS creds (optional) for S3 uploads

## Frontend Highlights
- Protected routes and role checks
- Axios interceptors for JWT
- Dashboard with progress chart and heatmap
- Accessible components and responsive layout

## Backend Highlights
- Express rate-limit, structured error handling
- Mongoose models: User, Course, Enrollment, Content
- Swagger (OpenAPI 3) auto docs
- Ready for Redis caching, S3 content storage

## Testing
- Frontend: React Testing Library example – __tests__/frontend/Login.test.js
- Backend: Model test example – __tests__/backend/user.test.js

## CI/CD
- GitHub Actions: installs, lints, builds, and runs tests

## Deployment
- Backend: Heroku (Docker) or any container platform
- Frontend: Netlify (npm run build output dist)

## Screenshots
Add screenshots of Dashboard, Course Player, and Login after running locally.

## Lighthouse
Run: npx lighthouse http://localhost:5173 --view

