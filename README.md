# MathonGo Backend

This is the backend API for the MathonGo assignment. It provides user authentication, chapter management, and caching with Redis.

## Features

- User signup & login with JWT authentication
- Admin-only chapter upload via JSON file
- Chapter listing with filtering, pagination, and Redis caching
- Rate limiting using Redis
- MongoDB for data storage

## Depolyment Link (EC2)
link is heree - `http://3.7.185.123.nip.io/`


## Project Structure

```
backend/
  config/           # Database connection
  controllers/      # Route controllers
  middleware/       # Auth, error handling, rate limiting, file upload
  models/           # Mongoose schemas
  routes/           # Express route definitions
  utils/            # Constants
  redisClient.js    # Redis client setup
  index.js          # Entry point
  .env              # Environment variables
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB database
- Redis instance (Upstash or local)

### Installation

1. Clone the repository and navigate to the backend folder:
    ```sh
    git clone <repo-url>
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file (see `.env` for example values):
    ```
    PORT=8080
    MONGODB=<your-mongodb-uri>
    REDIS_URL=<your-redis-url>
    JWT_SECRET=<your-jwt-secret>
    ```

### Running the Server

- For development (with auto-reload):
    ```sh
    npm run dev
    ```
- For production:
    ```sh
    npm start
    ```

Server will run on `http://localhost:8080` by default.

## API Endpoints

### Users

- `POST /api/users/signup` — Register a new user
- `POST /api/users/login` — Login and receive JWT

### Chapters

- `GET /api/v1/chapters` — List chapters (supports filters and pagination)
- `GET /api/v1/chapters/:id` — Get chapter by ID
- `POST /api/v1/chapters` — Upload chapters (admin only, JSON file upload)

## Environment Variables

See [backend/.env](backend/.env) for required variables.

## License

MIT
