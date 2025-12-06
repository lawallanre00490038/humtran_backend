// src/swagger.ts
import { Express } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  apis: [
    "./src/routes/*.ts",
    "./src/controllers/*.ts",
    "./src/middlewares/*.ts",
    "./src/types/*.ts",
    "./src/utils/*.ts",
    "./src/models/*.ts",
  ],
  definition: {
    components: {
      parameters: {
        PaginationLimit: {
          description: "Maximum items per page",
          in: "query",
          name: "limit",
          schema: { default: 20, type: "integer" },
        },
        PaginationSkip: {
          description: "Items to skip for pagination",
          in: "query",
          name: "skip",
          schema: { default: 0, type: "integer" },
        },
      },
      schemas: {
        ApiError: {
          properties: {
            message: { example: "Invalid credentials", type: "string" },
            status: { example: 401, type: "number" },
            success: { example: false, type: "boolean" },
          },
          type: "object",
          
        },

        ApiResponse: {
          properties: {
            data: { type: "object" },
            message: { example: "Operation successful", type: "string" },
            success: { example: true, type: "boolean" },
          },
          type: "object",
          
        },
        ChatMessage: {
          properties: {
            message: { example: "Help is on the way!", type: "string" },
          },
          required: ["message"],
          type: "object",
        },
        ChatMessageResponse: {
          properties: {
            message: { example: "Stay calm, agent is arriving.", type: "string" },
            sender: {example: "USER",  type: "string" },
            sessionId: { type: "string" },
            timestamp: {  example: "2025-12-01T12:30:00Z", type: "string" },
          },
          type: "object",
          
        },
        EmergencyRequest: {
          properties: {
            address: {
              example: "13 Admiralty Way, Lekki Phase 1, Lagos",
              type: "string",
              
            },
            description: {
              example: "Armed robbery in progress",
              type: "string",
              
            },
            latitude: { example: 6.5244, type: "number" },
            longitude: { example: 3.3792, type: "number" },
          },
          required: ["latitude", "longitude", "description"],
          type: "object",
        },

        EmergencyResponse: {
          properties: {
            assignedAgentId: { type: "string" },
            emergencyId: { type: "string" },
            eta: { example: 4.5 , type: "number"},
          },
          type: "object",
        },
        LoginUser: {
          properties: {
            email: { example: "jane@example.com", type: "string" },
            password: { example: "secret123" , type: "string"},
          },
          required: ["email", "password"],
          type: "object",
        },
        OTPVerify: {
          properties: {
            identifier: { example: "jane@example.com", type: "string" },
            otp: { example: "123456", type: "string" },
          },
          required: ["identifier", "otp"],
          type: "object",
        },

        RegisterUser: {
          properties: {
            email: { example: "jane@example.com", type: "string",  },
            name: { example: "Jane Doe", type: "string",  },
            password: { example: "secret123", type: "string",  },
            phone: { example: "08012345678", type: "string",  },
            role: { example: "SECURITY" , type: "string", },
          },
          required: ["name", "email", "phone", "password", "role"],
          type: "object",
        },
        UpdateAgentLocation: {
          properties: {
            lat: { example: 6.5244, type: "number" },
            lng: { example: 3.3792, type: "number" },
          },
          required: ["lat", "lng"],
          type: "object",
        },
      },
      securitySchemes: {
        bearerAuth: {
          bearerFormat: "JWT",
          description: `
            Paste your Bearer token here.

            \`\`\`
            Authorization: Bearer <token>
            \`\`\`
        `,
          scheme: "bearer",
          type: "http",
        },

        cookieAuth: {
          description: "Secure HTTP-only cookie token returned after login. Used for browser sessions.",
          in: "cookie",
          name: "token",
          type: "apiKey",
        },
      },
    },
    info: {
      contact: {
        email: "support@humguard.com",
        name: "Humguard Engineering",
        url: "https://humguard.com",
      },
      description: `
        Humguard - Real-Time Security Dispatch API
        Humguard is a real-time emergency dispatch platform connecting users to the nearest security agents.

        Key Features:
        - Emergency Requests & Live Dispatch
        - Real-Time Agent Location Tracking
        - JWT & Secure Cookie Authentication
        - OTP Verification (Email/SMS)
        - Nearest-Agent Geo Matching
        - Live Chat Session (Websocket + DB History)
        - Instant Notifications
        - Agent Availability & Status Management

        API Documentation Guide:
        - Summary
        - Authentication Requirements
        - Request Body + Schema
        - Responses
        - Examples
        - Tags for Grouping

        Contact & Support:
        Engineering Team
        support@humguard.com
        https://humguard.com
      `,

      license: {
        name: "MIT License",
        url: "https://opensource.org/licenses/MIT",
      },
      // termsOfService: "https://humguard.com/terms",
      title: "Humguard Security Dispatch API",
      version: "1.0.0",    
    },
    
    openapi: "3.0.0",
    security: [{ bearerAuth: [] }],  
  },
};

const swaggerSpec = swaggerJsDoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger Docs available at http://localhost:8000/api-docs");
}



// - 🚨 Emergency Requests & Live Dispatch
//         - 📍 Real-Time Agent Location Tracking (Uber-style)
//         - 🔐 JWT & Secure Cookie Authentication
//         - 📱 OTP Verification (Email/SMS)
//         - 🧭 Nearest-Agent Geo Matching
//         - 💬 Live Chat Session (Websocket + DB History)
//         - ⚡ Instant Notifications
//         - 👮 Agent Availability & Status Management