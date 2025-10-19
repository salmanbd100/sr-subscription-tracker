# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Subscription tracker API built with Express.js and MongoDB/Mongoose. This is an ES6 module-based Node.js project that provides REST API endpoints for managing user subscriptions.

## Development Commands

```bash
# Start development server with auto-reload
pnpm dev

# Start production server
pnpm start

# Lint code
pnpm lint

# Lint and auto-fix issues
pnpm lint:fix

# Format code with Prettier
pnpm format
```

## Architecture

### API Structure
- RESTful API with versioned endpoints (`/api/v1/`)
- Three main route modules mounted in `app.js`:
  - `/api/v1/auth` - Authentication endpoints (sign-up, sign-in, sign-out)
  - `/api/v1/users` - User CRUD operations
  - `/api/v1/subscriptions` - Subscription management including renewals and cancellations

### Project Structure
```
routes/          # Express route handlers (currently stub implementations)
config/          # Environment configuration
database/        # MongoDB connection setup
app.js           # Express app entry point and route mounting
```

### Database
- Uses Mongoose ODM for MongoDB
- Connection established on server startup in `app.js:21`
- Database URI loaded from environment-specific files via `config/env.js`

### Environment Configuration
- Environment variables loaded from `.env.{NODE_ENV}.local` files
- Required variables: `PORT`, `NODE_ENV`, `DB_URI`
- Defaults to `development` if `NODE_ENV` not set
- Application will exit if `DB_URI` is not defined

### Current Implementation Status
The API skeleton is in place with route definitions, but route handlers are currently stubs returning placeholder JSON responses. Models, controllers, and middleware directories do not exist yet.

## Key Technical Details

- **Module System**: ES6 modules (`"type": "module"` in package.json)
- **Import Syntax**: Use `import` statements with `.js` extensions
- **Package Manager**: Uses `pnpm` (evidenced by `pnpm-lock.yaml`)
- **Code Quality**: ESLint + Prettier configured for linting and formatting
