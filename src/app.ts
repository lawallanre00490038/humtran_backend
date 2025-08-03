
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';

// import errorHandler from './middlewares/errorHandler';
import { middleware } from "./middlewares/middlewares.js";
import agentLocationRoutes from './routes/agentLocation.routes';
import authRoutes from './routes/auth.routes';
import emergencyRoutes from './routes/emergency.routes';
import socketRoutes from './routes/socket.routes';
import { setupSwagger } from './swagger';

const app: Express = express();




app.use(cors());
app.use(express.json());
app.use(cookieParser());

setupSwagger(app);

// Routes
app.get('/', middleware, (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use('/api/auth', authRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/update-agent-location', agentLocationRoutes);
app.use('/docs/socket', socketRoutes)

// Global error handler (should be after routes)
// app.use(errorHandler);

export default app;





