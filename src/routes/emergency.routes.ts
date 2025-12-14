import express, { Router } from 'express';

import { deleteEmergency,  getAgentEmergencies, getAllEmergencies, getEmergencyTypes ,getUserEmergencies, updateEmergencyStatus} from '@/controllers/emergency.controller';
import { assignAgent, requestHelp } from '@/controllers/emergency.controller';
import { getSecuritiesWithLocation } from '@/controllers/securities.controller';
import { requireAuth } from '@/middlewares/auth.middleware';

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
 * /api/emergency/user/{userId}:
 *   get:
 *     summary: Get all emergencies created by a specific user
 *     description: |
 *       Fetches a list of all emergencies that were created by the specified user.
 *       - ADMIN can fetch emergencies for any user.
 *       - USER can only fetch their own emergencies.
 *
 *       The response includes:
 *       - Emergency details (id, type, status, location, description, timestamps)
 *       - Assigned security agent details (if any)
 *     tags: [Emergency]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user whose emergencies to fetch
 *     responses:
 *       200:
 *         description: List of emergencies created by the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 emergencies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       type:
 *                         type: string
 *                       status:
 *                         type: string
 *                         enum: [PENDING, ASSIGNED, ARRIVED, COMPLETED]
 *                       lat:
 *                         type: number
 *                       lng:
 *                         type: number
 *                       description:
 *                         type: string
 *                         nullable: true
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       assignedTo:
 *                         type: object
 *                         nullable: true
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           lat:
 *                             type: number
 *                           lng:
 *                             type: number
 *                           status:
 *                             type: string
 *                           user:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: string
 *                               name:
 *                                 type: string
 *                               email:
 *                                 type: string
 *       401:
 *         description: Unauthorized — missing or invalid token
 *       403:
 *         description: Forbidden — user is not allowed to access these emergencies
 *       404:
 *         description: No emergencies found for this user
 */




/**
 * @swagger
 * /api/emergency/agent/{agentId}:
 *   get:
 *     summary: Get all emergencies assigned to a specific security agent
 *     description: |
 *       Fetches a list of all emergencies assigned to a security agent.
 *       - SECURITY can only see emergencies assigned to them
 *       - ADMIN can view emergencies assigned to any agent
 *
 *       The response includes:
 *       - Emergency details
 *       - User who created the emergency (name, email, id)
 *       - Assigned security agent details (name, email, id, lat, lng, status)
 *     tags: [Emergency]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the security agent
 *     responses:
 *       200:
 *         description: List of emergencies assigned to the agent
 *       401:
 *         description: Unauthorized — missing or invalid token
 *       403:
 *         description: Forbidden — user does not have the required role
 *       404:
 *         description: No emergencies found for this agent
 */


/**
 * @swagger
 * /api/emergency/{emergencyId}/status:
 *   patch:
 *     summary: Update the status of an emergency
 *     description: |
 *       Updates the status of a specific emergency request.  
 *       Only the assigned security agent or an ADMIN can update the status.  
 *       Allowed status values:
 *       - ASSIGNED
 *       - EN_ROUTE
 *       - ARRIVED
 *       - COMPLETED (resolved)
 *       
 *       Response includes the emergency details, the user who created it, and the assigned agent.
 *     tags: [Emergency]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: emergencyId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the emergency to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [ASSIGNED, EN_ROUTE, ARRIVED, COMPLETED]
 *                 description: The new status of the emergency
 *     responses:
 *       200:
 *         description: Emergency status updated successfully
 *       400:
 *         description: Invalid status value
 *       401:
 *         description: Unauthorized — missing or invalid token
 *       403:
 *         description: Forbidden — user is not assigned to this emergency
 *       404:
 *         description: Emergency not found
 *       500:
 *         description: Server error
 */




/**
 * @swagger
 * /api/emergency/securities-and-locations:
 *   get:
 *     summary: Get all available security agents with their locations
 *     description: Get all available security agents with their locations. Requires a valid JWT token in the `Authorization` header like `Bearer <token>`.
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Array of security agents with their locations
 *       401:
 *         description: Unauthorized
 * */



/**
 * @swagger
 * /api/emergency/all:
 *   get:
 *     summary: Get all emergencies (admin + security + user)
 *     description: 
 *       Returns a list of all emergency records.  
 *       - ADMIN can see all emergencies  
 *       - SECURITY sees emergencies assigned to them  
 *       - USER sees emergencies they created  
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of emergency records
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden — user does not have required role
 */


/**
 * @swagger
 * /api/emergency/{emergencyId}:
 *   delete:
 *     summary: Delete a specific emergency
 *     description: 
 *       Deletes a specific emergency. Only the ADMIN or the user who created the emergency can delete it.
 *     tags: [Emergency]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: emergencyId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the emergency to delete
 *     responses:
 *       200:
 *         description: Emergency deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Emergency not found
 */



router.post('/', requireAuth(['USER', 'SECURITY', 'ADMIN']), requestHelp);
router.post('/assign', requireAuth(['USER', 'SECURITY', 'ADMIN']), assignAgent);

router.get('/types', getEmergencyTypes);
router.get('/all', requireAuth(['USER', 'SECURITY', 'ADMIN']), getAllEmergencies);

router.get('/user/:userId', requireAuth(['USER', 'SECURITY', 'ADMIN']), getUserEmergencies);
router.get('/agent/:agentId', requireAuth(['ADMIN','SECURITY', 'USER']), getAgentEmergencies);
router.delete( "/:emergencyId", requireAuth(["USER", "SECURITY", "ADMIN"]),deleteEmergency);
router.patch('/:emergencyId/status', requireAuth(['ADMIN','SECURITY', 'USER']), updateEmergencyStatus);

router.get('/securities-and-locations', requireAuth(['USER', 'SECURITY', 'ADMIN']), getSecuritiesWithLocation);

export default router;