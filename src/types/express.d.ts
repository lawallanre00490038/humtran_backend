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
