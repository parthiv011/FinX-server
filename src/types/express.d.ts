export declare global {
  namespace Express {
    interface Request {
      user?: User; // Replace `User` with your actual user interface type
    }
  }
}
