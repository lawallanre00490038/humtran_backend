// src/types/express.d.ts

import { User } from '@/types/user'; // adjust path if needed

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

export {}; // Very important to treat this as a module
