// src/types/express.d.ts

import { User } from '@/types/user';

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        // add more fields if needed
      };
    }
  }
}

export {};
