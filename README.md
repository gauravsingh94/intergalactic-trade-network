# Intergalactic Trade Network

## Project Structure

```
intergalactic-trade-network/
├── prisma
│   ├── migrations
│   │   ├── 20240906214907_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── src
│   ├── api
│   │   ├── cargo
│   │   │   ├── cargo.controller.ts
│   │   │   ├── cargo.routes.ts
│   │   │   └── cargo.service.ts
│   │   ├── index.ts
│   │   ├── inventory
│   │   │   ├── inventory.controller.ts
│   │   │   ├── inventory.routes.ts
│   │   │   └── inventory.service.ts
│   │   ├── realtimeUpdate
│   │   │   ├── updates.service.ts
│   │   │   └── updates.ts
│   │   └── trades
│   │       ├── trades.controller.ts
│   │       ├── trades.routes.ts
│   │       └── trades.service.ts
│   ├── app.ts
│   ├── config
│   │   ├── database.ts
│   │   └── redis.ts
│   └── server.ts
```

## Tech Stack

- **Node.js**: JavaScript runtime for building the server-side application.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Prisma**: ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: Relational database for storing data.
- **SRE (Server-Sent Events)**: Real-time updates using server-sent events.
- **Redis**: In-memory data structure store for caching and message brokering.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gauravsingh94/intergalactic-trade-network.git
   cd intergalactic-trade-network
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/intergalactic
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Migrations**

   ```bash
   npx prisma migrate deploy
   ```

5. **Start the Application**

   ```bash
   yarn start
   ```

## API Documentation

For API documentation, visit [Postman API Documentation](https://documenter.getpostman.com/view/25129739/2sAXjRVpBx#9160f09f-257d-4a0d-b880-6fd88d8674c6).

## Video Implementation

Refer to the video implementation guide [here](https://youtu.be/ZKplAxCu2lM?si=YurfTCjeIwqKiXIb).
