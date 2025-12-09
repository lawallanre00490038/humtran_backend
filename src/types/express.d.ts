declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        role: string;   // <-- Add this
        // add more fields if needed
      };
    }
  }
}

export {};
