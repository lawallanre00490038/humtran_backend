import express from 'express';

import { getSessionMessages, startOrGetSession } from '../controllers/chat.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router: express.Router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Chat session management
 */

/**
 * @swagger
 * /api/chat/sessions/{sessionId}/messages:
 *   get:
 *     summary: Get messages for a session
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Messages for the session
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *       404:
 *         description: Session not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/chat/start-session:
 *   post:
 *     summary: Start or get a chat session
 *     description: This endpoint starts a new chat session or retrieves an existing session for the user. The otherUserId parameter is userId of the other user required to start a new chat session.
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               otherUserId:
 *                 type: string
 *                 example: 9876543210
 *     responses:
 *       200:
 *         description: Chat session started or retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sessionId:
 *                   type: string
 *                   description: Session ID
 *                   example: 1234567890
 *       500:
 *         description: Internal server error
 */



router.post('/start-session',  requireAuth(['USER', 'SECURITY', 'AGENT']), startOrGetSession);
router.get('/sessions/:sessionId/messages', requireAuth(['USER', 'SECURITY', 'AGENT']),  getSessionMessages);

export default router;
