import dotenv from 'dotenv';

dotenv.config();

interface Environment {
  DATABASE_URL: string;
  AUTH0_DOMAIN: string;
  AUTH0_AUDIENCE: string;
  AUTH0_CLIENT_ID: string;
  AUTH0_CLIENT_SECRET: string;
  PORT: number;
  NODE_ENV: string;
  FRONTEND_URL: string;
  ADMIN_URL: string;
}

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const env: Environment = {
  DATABASE_URL: getEnvVar('DATABASE_URL'),
  AUTH0_DOMAIN: getEnvVar('AUTH0_DOMAIN'),
  AUTH0_AUDIENCE: getEnvVar('AUTH0_AUDIENCE'),
  AUTH0_CLIENT_ID: getEnvVar('AUTH0_CLIENT_ID'),
  AUTH0_CLIENT_SECRET: getEnvVar('AUTH0_CLIENT_SECRET'),
  PORT: parseInt(getEnvVar('PORT', '3000'), 10),
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),
  FRONTEND_URL: getEnvVar('FRONTEND_URL', 'http://localhost:5173'),
  ADMIN_URL: getEnvVar('ADMIN_URL', 'http://localhost:5173/admin'),
};