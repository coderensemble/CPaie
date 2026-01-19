import { Router, Response } from 'express';
import { checkJwt } from '../config/auth0.js';

import { syncOrCreateUser } from '../middleware/auth.middleware.js';
import { AuthRequest } from '../types/auth.types.js';

const router = Router();

router.get(
  '/me',
  checkJwt,
  syncOrCreateUser,     // ← crée/sync l’utilisateur
  (req: AuthRequest, res: Response) => {
    res.json(req.user);
  }
);


export default router;
