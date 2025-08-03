import { Router } from 'express';

import { updateAgentLocation } from '../controllers/agentLocation.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router: Router = Router();



/**
 * @swagger
 * tags:
 *   name: Update Agent Location
 *   description: Update agent location
 */

/**
 * @swagger
 * /api/update-agent-location:
 *   post:
 *     summary: Update agent location
 *     description: Update agent location, Ensure you pass the authentication token in the header.
 *     tags: [Update Agent Location]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               agentId:
 *                 type: string
 *                 description: Agent Id
 *               location:
 *                 type: object
 *                 properties:
 *                   lat:
 *                     type: number
 *                   lng:
 *                     type: number
 *     responses:
 *       200:
 *         description: Emergency request created
 *       401:
 *         description: Unauthorized
 */



router.post('/', requireAuth(['SECURITY']),  updateAgentLocation);

export default router;
