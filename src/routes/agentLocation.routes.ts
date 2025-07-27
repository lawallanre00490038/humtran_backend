import express, { Router } from 'express';
import { updateAgentLocation } from '../controllers/agentLocation.controller';

const router: Router = Router();

router.post('/update', updateAgentLocation);

export default router;
