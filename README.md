# Movie Logger

A SvelteKit-based web application for tracking, rating, and managing movies using the OMDb API, Prisma ORM, and PostgreSQL. Users can sign up, log in, browse movies, log movies with ratings and status, and view personalized stats.

## Table of Contents
1. [Project Purpose](#project-purpose)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Database Setup](#database-setup)
   - [Running Locally](#running-locally)
5. [Codebase Structure](#codebase-structure)
6. [API Endpoints](#api-endpoints)
7. [Database Schema](#database-schema)
8. [Component & Service Communication](#component--service-communication)
9. [External Modules](#external-modules)
10. [Deployment](#deployment)
11. [Contributing](#contributing)
12. [License](#license)

## Project Purpose
Movie Logger is designed to demonstrate mastery of modern web development in a SvelteKit environment by building a fully featured movie tracking application. Users can search for movies via the OMDb API, log their watch status and rating, and manage their personal movie history.

## Tech Stack
- **Frontend & Backend**: SvelteKit (TypeScript)
- **Styling**: Tailwind CSS & SCSS
- **Database**: PostgreSQL via Prisma ORM
- **Authentication**: Cookie-based sessions
- **API**: OMDb API for movie data
- **Adapter**: @sveltejs/adapter-netlify

## Features
- User registration & login
- Movie search with live suggestions (debounced)
- Dynamic movie detail pages
- Log movies with status (`PLAN_TO_WATCH`, `WATCHING`, `COMPLETED`, `DROPPED`) and rating (1–10)
- View personal movie logs
- Responsive design with gradient hero and SVG wave separators
- Prisma-based data storage with unique user/movie constraints

## Getting Started
### Prerequisites
- Node.js `>=18`
- PostgreSQL database
- OMDb API key

### Installation
```bash
git clone https://github.com/yourusername/movie-logger.git
cd movie-logger
npm install
```

### Environment Variables
Create a `.env` file in the project root:
```env
DATABASE_URL="postgresql://user:password@host:port/dbname"
SECRET_KEY="your_session_secret"
VITE_OMDB_API_KEY="your_omdb_api_key"
```

### Database Setup
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

## Codebase Structure
```
src/
├─ lib/
│  ├─ components/       # Svelte components (MovieCard, SearchBar, etc.)
│  ├─ stores/           # Svelte stores for auth & user state
│  ├─ types.ts          # TypeScript interfaces (Movie, User, Log)
│  └─ utils/            # Helper functions and API clients
├─ routes/
│  ├─ auth/             # /login, /register, /logout actions
│  ├─ movie/[imdbID]/   # Dynamic movie detail pages
│  ├─ log/              # User movie logs
│  ├─ +layout.svelte    # Shared layout and navigation
│  └─ +error.svelte     # Custom 404 & error page
├─ prisma/
│  └─ schema.prisma     # Database schema and migrations
└─ svelte.config.js     # SvelteKit configuration
```

## API Endpoints
- `POST /auth/register` – Register a new user
- `POST /auth/login`    – Authenticate & set session
- `POST /auth/logout`   – Destroy session
- `GET /movie/[imdbID]` – Fetch movie details from OMDb via load function
- `POST /api/log`       – Create a new log entry (status + rating)

## Database Schema
Prisma models:
```prisma
model User {
  id            String   @id @default(cuid())
  username      String?  @unique
  password      String
  userAuthToken String   @unique
  logs          Log[]
}

model Log {
  id        String   @id @default(cuid())
  userId    String
  mediaId   String
  rating    Int?
  status    Status
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@unique([userId, mediaId])
}

enum Status { PLAN_TO_WATCH WATCHING COMPLETED DROPPED }
```

## Component & Service Communication
- **SearchBar** emits events to parent for debounced API calls
- **Page load functions** fetch data (movies, logs) and pass via `data` prop
- **Svelte stores** (`user`, `isAuthed`) manage global auth state
- **Forms** use `@sveltejs/kit` `enhance` for progressive enhancement

## External Modules
- **Prisma** – ORM for database operations
- **bcrypt** – Password hashing
- **cookie-session** – Session management
- **Tailwind Forms** & **Typography** – Prebuilt UI styles

## Deployment
- Uses `@sveltejs/adapter-netlify`
- Build command: `npm run build`
- Publish directory: `build`
- Ensure environment variables are set in Netlify dashboard

## Contributing
1. Fork the repo
2. Create a branch (`git checkout -b feature/xyz`)
3. Commit your changes (`git commit -m 'Add xyz'`)
4. Push to the branch (`git push origin feature/xyz`)
5. Open a Pull Request

## License
MIT © Fady Damak

