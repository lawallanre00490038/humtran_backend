
# 🛡️ SecureLink - Security Agent Dispatch Platform

SecureLink is a real-time security dispatch system that connects users in need of protection with nearby security agents. It features:

- 🧍 User & 👮‍♂️ Security Agent roles
- 🔐 JWT authentication
- 🌍 Real-time location tracking (like Uber)
- 💬 Live chat & voice/video call support
- 🧭 Nearby agent discovery using geospatial queries
- 📡 WebSocket support (Socket.IO)
- 🧰 Built with TypeScript, Express, Prisma, PostgreSQL, and Redis

---

## 📁 Folder Structure

```
/src
 ┣ /controllers        # Route logic (auth, users, location, chat)
 ┣ /middlewares        # Authentication & error handling
 ┣ /models             # Prisma schema and types
 ┣ /routes             # Route definitions
 ┣ /sockets            # WebSocket connection logic
 ┣ /utils              # Helper functions (geolocation, hashing, etc.)
 ┣ /config             # DB & Redis config
 ┣ server.ts           # App entry point
 ┗ /types              # Shared TS types (payloads, enums, etc.)
```

---

## 🚀 Features

### 🧑‍💼 Roles

| Role       | Description                   |
|------------|-------------------------------|
| `USER`     | Can request security service  |
| `SECURITY` | Can accept/respond to users   |
| `ADMIN`    | Future scope - dashboard etc  |

---

### 🔐 Auth System

- JWT-based access control
- Secure cookies for sessions
- `POST /api/auth/register` → Accepts `email`, `phone`, `name`, `password`, `role`
- `POST /api/auth/login`
- `GET /api/auth/me` → Get current user details

---

### 🌍 Real-Time Location Tracking

Security agents periodically send their location (lat/lng) to the server.

- `POST /api/location/update` → Agent updates their location
- `GET /api/nearby-agents?lat=...&lng=...` → Users fetch nearest agents within X km radius

> Uses Haversine formula and PostGIS (if enabled) or Prisma client-side filtering

---

### 💬 Real-Time Chat (WebSockets)

- Socket.IO implementation
- Room-based messaging between user-agent pairs
- Events:
  - `message:send`
  - `message:receive`
  - `agent:connected`, `user:connected`

---

### 📞 Voice/Video Calling (Signaling only)

- WebRTC-compatible signaling over Socket.IO
- Events:
  - `call:initiate`
  - `call:accept`
  - `call:decline`

---

### 🧪 Swagger API Docs

Swagger UI available at:  
**`/api-docs`**

```ts
// Example Swagger doc block
/**
 * @swagger
 * /api/auth/me:
 *   post:
 *     summary: Get authenticated user's profile
 *     security:
 *       - bearerAuth: []
 */
```

---

## 🛠️ Tech Stack

| Tech        | Usage                     |
|-------------|---------------------------|
| TypeScript  | Language                  |
| Express     | Web server                |
| Prisma ORM  | DB access with PostgreSQL |
| PostgreSQL  | Database                  |
| Redis       | Pub/Sub (for chat, calls) |
| Socket.IO   | WebSockets (chat & calls) |
| JWT         | Auth                      |
| Swagger     | API Documentation         |

---

## 🧰 Setup Instructions

### ✅ Prerequisites

- Node.js ≥ 18
- PostgreSQL ≥ 12
- Redis (optional for real-time pub/sub)
- Yarn / npm / pnpm

---

### 🏗️ Installation

```bash
# 1. Clone the project
git clone https://github.com/your-org/securelink.git
cd securelink

# 2. Install dependencies
pnpm install

# 3. Setup environment variables
cp .env.example .env
```

---

### ⚙️ .env Configuration

```env
DATABASE_URL=postgresql://user:password@localhost:5432/securelink
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
PORT=4000
```

---

### 🧱 Migrate & Seed DB

```bash
pnpm prisma migrate dev --name init
pnpm prisma generate
```

---

### 🚦 Start Development Server

```bash
pnpm dev
```

---

### 📖 Run Swagger API Docs

Visit:  
[http://localhost:4000/api-docs](http://localhost:4000/api-docs)

---

### ✅ Sample API Usage (Register)

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+2347000000000",
  "password": "securepassword123",
  "role": "USER"
}
```

---

## 🧪 Testing WebSockets

Use tools like Postman + [Socket.IO tester](https://amritb.github.io/socketio-client-tool/)  
Or connect via frontend app.

---

## 🧯 Future Features

- Admin dashboard (analytics, agent management)
- Push notifications (FCM/OneSignal)
- SOS triggers for emergency
- Payment integration for service fees

---

## 🤝 Contributing

1. Fork this repo
2. Create a branch `feat/your-feature`
3. Submit PR with detailed description

---

## 📜 License

MIT License – 2025 © SecureLink Inc.

---

## 👥 Team

Built with ❤️ by Humguard Dev Team
