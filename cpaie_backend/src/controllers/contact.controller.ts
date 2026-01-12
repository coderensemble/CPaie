import { Request, Response } from 'express';
import { dbService } from '../services/database.service.js';

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, message } = req.body;
    const userId = req.user?.id;

    const contact = await dbService.createContact(
      { name, email, phone, message },
      userId
    );

    res.status(201).json({
      success: true,
      data: { contact },
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Failed to create contact' });
  }
};

export const getMyContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const contacts = await dbService.getContactsByUserId(req.user.id);

    res.json({
      success: true,
      data: { contacts },
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};