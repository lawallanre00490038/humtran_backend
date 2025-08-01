// src/swagger.ts
import { Express } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
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
  definition: {
    components: {
      securitySchemes: {
        bearerAuth: {
          scheme: 'bearer',
          type: 'http',
        },
      },
    },
    info: {
      description: 'API documentation for the Realtime Security Platform',
      title: 'Humguard API',
      version: '1.0.0',
    },
    openapi: '3.0.0',
    security: [{ bearerAuth: [] }],
  },
};

const swaggerSpec = swaggerJsDoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
