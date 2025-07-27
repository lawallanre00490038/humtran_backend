// src/swagger.ts
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Humguard API',
      version: '1.0.0',
      description: 'API documentation for the Realtime Security Platform',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
    './src/controllers/*.ts', 
    './src/routes/*.ts', 
    './src/types/*.ts', 
    './src/utils/*.ts',
    './src/models/*.ts',
    './src/middlewares/*.ts',
    './src/lib/*.ts',
    './src/utils/*.ts',
  ],
};

const swaggerSpec = swaggerJsDoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
