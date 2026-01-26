import { Router, Response } from 'express';
import { checkJwt } from '../config/auth0.js';
import { syncOrCreateUser } from '../middleware/auth.middleware.js';
import { AuthRequest } from '../types/auth.types.js';
import cors from 'cors';

const router = Router();

// OPTIONS preflight pour ce router
router.options("*", cors({ origin: ["https://cpluspaie.vercel.app"], credentials: true }));

const allowedOrigins = [
  'https://cpluspaie.vercel.app',
  'https://admin.cpluspaie.vercel.app',
];

const corsOptions = {
  origin: function (origin: string | undefined, callback: any) {
    if (!origin || allowedOrigins.includes(origin)) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
};

router.options('*', cors(corsOptions)); // préflight OPTIONS

router.get('/me', cors(corsOptions), checkJwt, syncOrCreateUser, (req: AuthRequest, res: Response) => {
  res.json(req.user);
});

export default router;