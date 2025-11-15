# Subscription Tracker API

A RESTful API built with Express.js and MongoDB for managing user subscriptions. Track, manage, and monitor subscriptions with user authentication and comprehensive CRUD operations.

## Features

- User authentication (sign-up, sign-in, sign-out)
- User management with CRUD operations
- Subscription management (create, read, update, delete)
- Subscription renewals and cancellations
- MongoDB database with Mongoose ODM
- Environment-based configuration
- RESTful API with versioned endpoints

## Tech Stack

- **Runtime**: Node.js (ES6 Modules)
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Package Manager**: pnpm
- **Code Quality**: ESLint + Prettier

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB (local or remote instance)
- pnpm (install globally: `npm install -g pnpm`)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sr-subscription-tracker
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:

Create an environment file based on your environment (e.g., `.env.development.local`):

```bash
NODE_ENV=development
PORT=3000
DB_URI=mongodb://localhost:27017/subscription-tracker
```

Required environment variables:
- `NODE_ENV` - Environment (development, production, etc.)
- `PORT` - Server port
- `DB_URI` - MongoDB connection string

## Running the Application

### Development Mode

Start the development server with auto-reload:
```bash
pnpm dev
```

### Production Mode

Start the production server:
```bash
pnpm start
```

The server will start on the port specified in your environment file (default: 3000).

## API Endpoints

Base URL: `http://localhost:3000/api/v1`

### Authentication
- `POST /api/v1/auth/sign-up` - Create new user account
- `POST /api/v1/auth/sign-in` - Sign in user
- `POST /api/v1/auth/sign-out` - Sign out user

### Users
- User CRUD operations available at `/api/v1/users`

### Subscriptions
- Subscription management available at `/api/v1/subscriptions`
- Includes renewal and cancellation functionality

## Code Quality

### Linting

Run ESLint to check code quality:
```bash
pnpm lint
```

Auto-fix linting issues:
```bash
pnpm lint:fix
```

### Formatting

Format code with Prettier:
```bash
pnpm format
```

## Project Structure

```
sr-subscription-tracker/
├── config/           # Environment configuration
├── database/         # MongoDB connection setup
├── routes/           # Express route handlers
├── app.js            # Express app entry point
├── .env.*.local      # Environment-specific configuration
└── package.json      # Project dependencies and scripts
```

## Development Notes

- This project uses ES6 modules (`"type": "module"`)
- Always use `import` statements with `.js` file extensions
- Environment variables are loaded from `.env.{NODE_ENV}.local` files
- The application will exit if `DB_URI` is not defined

## License

[Add your license here]

## Contributing

[Add contributing guidelines here]
