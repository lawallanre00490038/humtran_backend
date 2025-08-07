import express, { Router } from 'express';

import { getEmergencyTypes } from '../controllers/emergency.controller';
import { assignAgent, requestHelp } from '../controllers/emergency.controller';
import { getSecuritiesWithLocation } from '../controllers/securities.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Emergency
 *   description: Emergency request and management
 */

/**
 * @swagger
 * /api/emergency:
 *   post:
 *     summary: User requests emergency help. When a new emergency is requested, previous chat sessions involving the user are deleted.
 *     description: User requests emergency help by providing location and type of emergency. Requires the valid JWT bearer token in the `Authorization` header like `Bearer <token>`.
 *     tags: [Emergency]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       description: This is a request object containing location and type of emergency. Type of emergency can be (e.g. robbery, fire, flood, etc.)
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 description: Type of emergency (e.g. robbery, fire, flood, etc.)
 *               location:
 *                 type: object
 *                 description: Latitude and longitude of the emergency location
 *                 properties:
 *                   lat:
 *                     type: number
 *                     description: Latitude of the emergency location
 *                   lng:
 *                     type: number
 *                     description: Longitude of the emergency location
 *     responses:
 *       200:
 *         description: Emergency request created
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/emergency/assign:
 *   post:
 *     summary: Admin assigns a security agent to an emergency
 *     description: Admin assigns a security agent to an emergency by providing emergencyId and agentId. Requires a valid JWT token in the `Authorization` header like `Bearer <token>`.
 *     tags: [Emergency]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               emergencyId:
 *                 type: string
 *               agentId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agent successfully assigned
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/emergency/types:
 *   get:
 *     summary: Get all available emergency types
 *     description: Get all available emergency types.
 *     tags: [Emergency]
 *     responses:
 *       200:
 *         description: Array of emergency types
 *       401:
 *         description: Unauthorized
 * */

/**
 * @swagger
 * /api/emergency/securities-and-locations:
 *   get:
 *     summary: Get all available security agents with their locations
 *     description: Get all available security agents with their locations. Requires a valid JWT token in the `Authorization` header like `Bearer <token>`.
 *     tags: [Emergency]
 *     responses:
 *       200:
 *         description: Array of security agents with their locations
 *       401:
 *         description: Unauthorized
 * */

router.post('/', requireAuth(['USER']), requestHelp);
router.post('/assign', requireAuth(['USER']), assignAgent);
router.get('/types', getEmergencyTypes);  
router.get('/securities-and-locations', requireAuth(['USER']), getSecuritiesWithLocation);

export default router;




