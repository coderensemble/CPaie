import { Router, Response } from 'express';
import { checkJwt } from '../config/auth0.js';
import { syncOrCreateUser } from '../middleware/auth.middleware.js';
import { AuthRequest } from '../types/auth.types.js';
import cors from 'cors';

const router = Router();

// OPTIONS preflight pour ce router
router.options('*', cors());

router.get(
  '/me',
  checkJwt,
  syncOrCreateUser,
  (req: AuthRequest, res: Response) => {
    res.json(req.user);
  }
);

export default router;
