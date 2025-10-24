# NextJS Fullstack Auth App

[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Built with Next.js](https://img.shields.io/badge/next.js-%23000000.svg?logo=next.js&logoColor=white)](https://nextjs.org)

A clean, production-minded full-stack authentication example built with Next.js, Node, Express-style API routes, MongoDB (Mongoose), and JWT-based auth. Designed to be easy to review by recruiters and engineering teams: clear architecture, secure defaults, and easy local setup or Vercel deployment.

Why this repo is worth reviewing
- Focused, end-to-end feature: authentication (signup, login, protected routes, token refresh) with minimal, readable code.
- Modern stack and conventions: Next.js app directory, React components, dedicated Controllers/Models, and simple REST API routes.
- Production-aware: environment configuration, validation, password hashing, and clear separation of concerns.

Table of contents
- Features
- Tech stack
- Quick demo
- Project structure (key files)
- Setup (local) — PowerShell commands
- Environment variables
- How to evaluate (for recruiters)
- Deployment
- Security & quality notes
- Contributing & license
- Contact / Hiring notes

## Features
- User registration and login
- Password hashing with bcrypt
- JWT issuance and validation for protected routes
- Minimal, reusable React components (auth form, navbar)
- Mongoose User model and concise controller logic
- Clear API route: `app/api/auth/route.js`

## Tech stack
- Next.js (App Router)
- React
- Node.js
- MongoDB (Mongoose)
- JWT for authentication
- HTML/CSS (simple, accessible components)

## Quick demo
1. Start the app locally (see Setup below).
2. Visit `http://localhost:3000` and use the sign-up / login flow.

(Screenshot/gif placeholder: include a short GIF showing signup, login, and a protected profile page. Add under `public/` and reference it here in README.)

## Project structure — key files to inspect
- `app/page.jsx` — landing page
- `app/profile/page.jsx` — protected profile UI
- `app/components/authForm.jsx` — auth form component
- `app/components/Navbar.jsx` — top navigation
- `app/api/auth/route.js` — authentication API route
- `Controllers/authController.js` — request handling and business logic
- `Models/User.js` — Mongoose user schema
- `utils/database.js` — MongoDB connection helper

These files contain the heart of the app; a quick pass through them will show authentication flow, validation, and model logic.

## Setup (local, Windows PowerShell)
Open PowerShell in the project folder (`d:/Mern Stack/NextJS Auth/auth-app`), then:

```powershell
# 1) Install dependencies
npm install

# 2) Create a .env.local with the required variables (see next section)
# 3) Run the development server
npm run dev
```

Open: http://localhost:3000

## Environment variables
Create a `.env.local` file in the project root with these keys:

```
MONGODB_URI=<your_mongo_connection_string>
JWT_SECRET=<a_long_random_secret>
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Notes:
- Use MongoDB Atlas or a local MongoDB instance.
- Keep `JWT_SECRET` secure in production (use secrets manager).

## How to evaluate (for recruiters / engineers)
A focused review should take ~5–20 minutes. Suggested quick checklist:
1. Run the app locally (npm install && npm run dev).
2. Sign up a user and log in. Verify the profile page is protected when not authenticated.
3. Inspect `Controllers/authController.js` for password hashing (bcrypt), token creation, and error handling.
4. Inspect `Models/User.js` for schema, validation, and indexes.
5. Check `app/api/auth/route.js` to see API route structure and response shapes.
6. Code quality: small, single-responsibility files; simple, readable logic.

Key strengths to call out in interviews:
- Clear separation of concerns: routes -> controllers -> models
- Secure password handling and JWT usage
- Lightweight, easy-to-run project demonstrating full-stack competency

## Deployment
Recommended: Vercel for Next.js (frontend) + MongoDB Atlas (database).
High-level steps:
1. Push repository to GitHub.
2. In Vercel, import the project (build command: `npm run build`, output: `.next`).
3. Set the same environment variables in Vercel dashboard.
4. Use MongoDB Atlas connection string with secure IP access / network rules.

## Security & Quality notes
- Passwords hashed using bcrypt before storing in DB.
- JWTs used for stateless authentication — place token securely (httpOnly cookie or local storage depending on strategy).
- Use HTTPS and secure cookie flags in production.
- Consider session rotation and refresh tokens for long sessions.

## Tests & linting
This starter focuses on clarity and architecture. If desired, add:
- Jest + React Testing Library for unit/component tests
- ESLint + Prettier for consistent style

## Contributing
Contributions are welcome. For focused improvements, consider:
- Adding unit tests for controllers and components
- Implementing refresh tokens and secure cookie storage
- Adding CI with GitHub Actions (build + lint + test)

## License
MIT — see LICENSE file.


Thanks for reviewing — this project is intentionally small and battle-ready as a portfolio piece demonstrating secure, practical full-stack skills.
