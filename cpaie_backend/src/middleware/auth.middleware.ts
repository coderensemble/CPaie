import { Request, Response, NextFunction } from 'express';
import { auth0Service } from '../services/auth0.service.js';
import { dbService } from '../services/database.service.js';
import { UserRole } from '../types/auth.types.js';

export const syncOrCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.auth?.sub) {
      res.status(401).json({ error: 'Unauthorized: No auth payload' });
      return;
    }

    const auth0Id = req.auth.sub;

    // Récupérer les infos depuis Auth0
    const auth0User = await auth0Service.getUserInfo(auth0Id);
    const role: UserRole = auth0User.app_metadata?.role || 
                          (auth0User.user_metadata?.role as UserRole) || 
                          'client';

    // Créer ou mettre à jour l'utilisateur
    const dbUser = await dbService.createOrUpdateUser(
      auth0Id,
      auth0User.email,
      auth0User.name || null,
      role,
      auth0User.user_metadata || {}
    );

    req.user = dbUser;
    next();
  } catch (error) {
    console.error('Error syncing user:', error);
    res.status(500).json({ error: 'Failed to sync user' });
  }
};