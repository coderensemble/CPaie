import { Router } from 'express';
import { body } from 'express-validator';
import { checkJwt } from '../config/auth0.js';
import { syncOrCreateUser } from '../middleware/auth.middleware.js';
import { requireClient } from '../middleware/roleCheck.middleware.js';
import { validate } from '../middleware/validation.middleware.js';
import { createContact, getMyContacts } from '../controllers/contact.controller.js';

const router = Router();

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().trim(),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

// Route publique ou authentifiée
router.post(
  '/',
  validate(contactValidation),
  (req, res, next) => {
    if (req.headers.authorization) {
      return checkJwt(req, res, next);
    }
    next();
  },
  (req, res, next) => {
    if (req.auth) {
      return syncOrCreateUser(req, res, next);
    }
    next();
  },
  createContact
);

// Routes protégées
router.get('/', checkJwt, syncOrCreateUser, requireClient, getMyContacts);

export default router;