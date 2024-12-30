<h3 align="center">TS-Commerce</h3>

  <p align="center">
    A fullstack e-commerce application written completely in Typescript
  </p>

## About The Project

A fullstack e-commerce application written with Next.JS and Express.js, powered by Turborepo.

## Features

- Fullstack integration (REST API with Axios)
- Database integration (PostgreSQL)
- CORS configured
- Cart and Checkout flow with React Hooks / Server Actions

## How To Use

1. Install required packages:

```
pnpm install
```

2. Add .env file with following environment variables in /apps/storefront directory:

```
NEXT_PUBLIC_API_URL="<API_URL>" // Express.js application URL - on development: http://localhost:5001 (make sure that is correct url for your example)
```

3. Add .env file with following environment variables in /apps/api directory:

```
DATABASE_URL="postgresql://<user>:<password>@<url>:<port>/<database>" // PostgreSQL Database connection string
USER_ID=1 // For testing purposes 1 (database seed scripting creating user with ID=1)
STOREFRONT_URL="http://localhost:3000/" // Next.js application URL - on development: http://localhost:3000 (make sure that is correct url for your example)
```

4. Run scripts to apply migrations and seed database in the apps/api directory:

```
pnpm drizzle-kit push
pnpm drizzle:seed
```

5. Run entire application in the root directory:

```
pnpm dev
```
