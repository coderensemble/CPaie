export interface Auth0User {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
  nickname?: string;
  picture?: string;
  updated_at: string;
  user_metadata?: Record<string, unknown>;
  app_metadata?: {
    role?: UserRole;
  };
}

export type UserRole = 'admin' | 'client';

export interface DBUser {
  id: string;
  auth0_id: string;
  email: string;
  name: string | null;
  role: UserRole;
  metadata: Record<string, unknown>;
  created_at: Date;
  updated_at: Date;
}

export interface JWTPayload {
  sub: string;
  iss: string;
  aud: string[];
  iat: number;
  exp: number;
  scope: string;
  permissions?: string[];
  'https://api.yourapp.com/roles'?: UserRole[];
}