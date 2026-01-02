# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (with debugging)
npm run dev

# Production build
npm run build

# Production server
npm start

# Type checking (generates types and runs tsc)
npm run typecheck

# Linting
npx eslint .

# Format code
npx prettier --write "**/*.{js,jsx,ts,tsx,css,md}"
```

## Environment Setup

Required environment variables in `.env` at project root:

```
PORT=3000
RESEND_API_KEY=<resend api key>
RESEND_FROM_ADDRESS=<from email, defaults to "Acme <onboarding@resend.dev>">
RESEND_TO_ADDRESS=<to email, defaults to "delivered@resend.dev>">
```

Environment variables are validated using Zod schema in `app/.server/env.ts`.

## Architecture Overview

### Framework & Routing

- **React Router v7** with SSR enabled (react-router.config.ts)
- File-based routing using `@react-router/fs-routes` configured in `app/routes.ts`
- Routes are in `app/routes/` directory following flat routes convention
- Server runs on Express (server.js) with Vite middleware in development

### Build System

- **Vite** as the bundler with custom plugins:
  - `@tailwindcss/vite` for Tailwind CSS v4
  - `vite-tsconfig-paths` for TypeScript path resolution
  - `vite-plugin-babel` with **React Compiler** (babel-plugin-react-compiler) enabled
- TypeScript strict mode enabled
- ESLint with TypeScript strict rules and React plugin

### Application Structure

```
app/
├── .server/          # Server-only code (environment, email handling)
├── components/       # Shared React components
│   └── home/        # Home page specific components
├── routes/          # React Router route files
├── types/           # TypeScript type definitions
├── root.tsx         # Root layout with HTML shell
└── tailwind.css     # Tailwind CSS imports
```

### Key Patterns

**Server-only Code**: Code in `app/.server/` is server-only and should never be imported in client components. This includes:
- Environment variable validation (`env.ts`)
- Email sending via Resend API (`mailing/resend.ts`)
- Email templates using `@react-email/components`

**Layout System**:
- `root.tsx` provides the HTML shell and includes the global Layout component
- `Layout.tsx` wraps all pages with Header and Footer
- Uses `<Outlet />` for nested routing

**Contact Form Flow**:
- `contact.tsx` contains both UI and server action
- Server action validates form data, sends email via Resend, redirects to success page
- Validation uses Zod for email and custom validators for name/message
- XSS protection via `validator/lib/escape` on user inputs

**Styling**:
- Tailwind CSS v4 with custom configuration
- Design system uses slate color palette
- Background gradient: `from-slate-200 to-slate-50`
- Max width container: `max-w-7xl`

### TypeScript Configuration

- Generated types in `.react-router/types/` directory (gitignored)
- Root directories include both project root and `.react-router/types`
- Path aliases supported via `vite-tsconfig-paths`
- Run `npm run typecheck` to regenerate types and validate

### React Compiler

The project uses the experimental React Compiler via Babel plugin. The compiler automatically optimizes React components by memoizing them. Configuration in `vite.config.ts` logs successful compilations.

### Node Version

Requires Node.js >= 24.0.0 < 25.0.0 (specified in package.json engines field)
