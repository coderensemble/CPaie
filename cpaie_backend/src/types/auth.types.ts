// src/types/auth.types.ts
export interface JWTPayload {
  sub: string;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  scope?: string;
  [key: string]: any;
}

export type UserRole = 'Client' | 'Admin';

export interface DBUser {
  id: string;
  email: string;
  name?: string | null;
  role: UserRole;
  metadata?: Record<string, any>;
}

// AuthRequest : on laisse req.auth comme `any` pour éviter conflit VerifyJwtResult
export interface AuthRequest extends Express.Request {
  auth?: any; // ✅ simplifie le conflit avec express-oauth2-jwt-bearer
  user?: DBUser;
}

export interface Auth0User {
  user_id: string; // ou sub
  email: string;
  name?: string;
  nickname?: string;
  app_metadata?: {
    role?: 'Admin' | 'Client';
  };
  user_metadata?: Record<string, any>;
}
