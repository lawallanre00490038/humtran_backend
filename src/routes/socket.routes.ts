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
 *       #### 📡 Client to Server
 *       - `join`: Join a socket room with `userId`
 *         - Payload: `{ userId: string }`
 *       - `location-update`: Agent sends live location updates to the user
 *         - Payload: `{ agentUserId: string, lat: number, lng: number, requesterUserId: string }`
 *       - `chat`: Send a chat message either to an agent or to a user. The from field will be the agent or user' userId
 *         - Payload: `{ from: string,  message: string, to: string}`
 *       
 *       #### 📡 Server to Client
 *       - `agent-location`: Agent location update to user
 *         - Payload: `{ lat: number, lng: number }`
 *       - `chat`: Real-time chat message
 *         - Payload: `{ from: string, message: string }`
 *       - `new-emergency`: Emergency assigned to the closest agent
 *         - Payload: `{ emergency: EmergencyRequest }`
 *     responses:
 *       200:
 *         description: Socket.IO event reference
 */
router.get('/docs/socket', (req, res) => {
  res.send('This route documents socket events. See Swagger description.');
});


export default router;