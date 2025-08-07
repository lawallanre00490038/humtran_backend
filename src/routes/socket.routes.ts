import express, { Router } from 'express';

const router: Router = express.Router();


/**
 * @swagger
 * /docs/socket:
 *   get:
 *     tags:
 *       - Socket Events
 *     summary: Socket.IO Event Reference
 *     description: |
 *       ### Available Events
 *       #### 📡 Client to Server. You can emit these events using the `socket.emit` method.
 *       #### But ensure you first connect to the backend socket server. E.g. `const socket = io('https://humtran-backend.onrender.com')`;
 *       - `join`: Join a socket room with `userId` either as an agent or a user
 *         - Request Payload: `{ userId: string }`
 *       - `update-agent-location`: Agent sends live location updates to the user
 *         - Request Payload: `{ agentId: string, lat: number, lng: number, requesterUserId: string }`
 *       - `chat`: Send a chat message either to an agent or to a user. The from field will be the agent or user' userId
 *         - Request Payload: `{ from: string,  message: string, sessionId: string, to: string}`
 *       
 *       #### 📡 Server to Client. You can listen to these events using the `socket.on` method.
 *       - `updated-agent-location`: Agent location update to user. Listen for this event to get live agent location updates on the user's or emergency requester's end.
 *         - Server sends this event response: `{ lat: number, lng: number }`
 *       - `chat`: Real-time chat message
 *         - Server sends this event response: `{ from: string, message: string, sessionId: string }`
 *       - `new-emergency`: Emergency assigned to the closest agent. The closest agent will receive this event when an emergency is assigned to them.
 *         - Server sends this event response: `{ emergency: EmergencyRequest }`
 *     responses:
 *       200:
 *         description: Socket.IO event reference
 */
router.get('/docs/socket', (req, res) => {
  res.send('This route documents socket events. See Swagger description.');
});


export default router;