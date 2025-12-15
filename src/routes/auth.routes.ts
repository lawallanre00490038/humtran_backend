import express, { Router } from 'express';

// Ensure all controller functions, including the new ones, are imported.
import { deleteUser, getAllUsers, getCurrentUser, getUserRoles, login, register, updateUserRole } from '@/controllers/auth.controller';
import { resendOtp, verifyOtp } from '@/controllers/otp.controller';
import { requireAuth } from '@/middlewares/auth.middleware';


const router: Router = express.Router();


/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication endpoints
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - password
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               phone:
 *                 type: string
 *                 example: "08012345678"
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secret123
 *               role:
 *                 type: string
 *                 enum: [USER, SECURITY, ADMIN]
 *                 example: SECURITY
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Email or phone already exists or validation error
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user using email or phone
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identifier
 *               - password
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: Email or phone
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secret123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 */

/**
 * @swagger
 * /api/auth/resend-otp:
 *   post:
 *     summary: Request a new One-Time Password (OTP) for verification
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identifier
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: User's email or phone number
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: OTP resent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Validation error (identifier missing or user already verified)
 *       404:
 *         description: User not found
 *       500:
 *         description: Server or OTP delivery error
 */

/**
 * @swagger
 * /api/auth/verify-otp:
 *   post:
 *     summary: Verify the provided One-Time Password (OTP)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identifier
 *               - otp
 *             properties:
 *               identifier:
 *                 type: string
 *                 description: User's email or phone number
 *                 example: user@example.com
 *               otp:
 *                 type: string
 *                 description: The 6-digit OTP code received by the user
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Validation error (OTP expired, invalid, or missing)
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get authenticated user's profile
 *     description: Requires a valid JWT bearer token in the `Authorization` header
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                   format: email
 *                 phone:
 *                   type: string
 *                 role:
 *                   type: string
 *                   enum: [USER, SECURITY, ADMIN]
 *       401:
 *         description: Unauthorized or token missing/invalid
 */

/**
 * @swagger
 * /api/auth/user_roles:
 *   get:
 *     summary: Get list of available user roles
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: List of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roles:
 *                   type: array
 *                   items:
 *                     type: string
 *                     enum: [USER, SECURITY, ADMIN]
 */



/**
 * @swagger
 * /api/auth/update-role/{userId}:
 *   patch:
 *     summary: Update a user's role
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 example: SECURITY
 *             required:
 *               - role
 *     responses:
 *       200:
 *         description: Role updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized (missing/invalid token)
 *       403:
 *         description: Forbidden (not an admin)
 *       404:
 *         description: User not found
 */





/**
 * @swagger
 * /api/auth/{userId}:
 *   delete:
 *     summary: Delete a user
 *     description: |
 *       Deletes a user from the system.  
 *       Only an admin can delete a user.  
 *       If the user is a security agent, their associated security record will also be deleted.
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 userId:
 *                   type: string
 *       403:
 *         description: Not authorized to delete users
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */




/**
 * @swagger
 * /api/auth/users/all:
 *   get:
 *     summary: Get all registered users (Admin only)
 *     description: |
 *       Fetches a list of all users in the system.
 *       Only ADMIN users can access this endpoint.
 *       Requires a valid JWT token in the Authorization header in the format: Bearer <token>.
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Array of user objects
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                         nullable: true
 *                       phone:
 *                         type: string
 *                         nullable: true
 *                       role:
 *                         type: string
 *                       isOnline:
 *                         type: boolean
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized — missing or invalid token
 *       403:
 *         description: Forbidden — user is not an admin
 */







router.post('/register', register);
router.post('/login', login);
router.post('/resend-otp', resendOtp);
router.post('/verify-otp', verifyOtp);
router.get('/me', requireAuth(['USER', 'SECURITY', 'ADMIN']), getCurrentUser)
router.patch("/update-role/:userId", requireAuth(['USER', 'SECURITY', 'ADMIN']), updateUserRole);
router.get("/user_roles", getUserRoles);
router.delete("/:userId", requireAuth(['USER', 'SECURITY', 'ADMIN']), deleteUser)


router.get("/users/all", requireAuth(['ADMIN']),  getAllUsers);

export default router;