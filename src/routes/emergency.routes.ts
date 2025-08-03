import express, { Router } from 'express';

import { assignAgent, requestHelp } from '../controllers/emergency.controller';
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
 *     summary: User requests emergency help
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
 *               type:
 *                 type: string
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

/**
 * @swagger
 * /api/emergency/assign:
 *   post:
 *     summary: Admin assigns a security agent to an emergency
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

router.post('/', requireAuth(['USER']), requestHelp);
router.post('/assign', requireAuth(['USER']), assignAgent);

export default router;




