import { DBUser, JWTPayload } from './auth.types';

declare global {
  namespace Express {
    interface Request {
      auth?: JWTPayload;
      user?: DBUser;
    }
  }
}

export {};