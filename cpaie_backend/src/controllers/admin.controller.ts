import { Request, Response } from 'express';
import { dbService } from '../services/database.service.js';

export const getAllContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20', status, search } = req.query;

    const { contacts, total } = await dbService.getAllContacts(
      parseInt(page as string),
      parseInt(limit as string),
      status as string,
      search as string
    );

    res.json({
      success: true,
      data: { contacts },
      pagination: {
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        total,
        pages: Math.ceil(total / parseInt(limit as string)),
      },
    });
  } catch (error) {
    console.error('Error fetching all contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

export const updateContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const contact = await dbService.updateContact(id, updates);

    if (!contact) {
      res.status(404).json({ error: 'Contact not found' });
      return;
    }

    res.json({
      success: true,
      data: { contact },
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deleted = await dbService.deleteContact(id);

    if (!deleted) {
      res.status(404).json({ error: 'Contact not found' });
      return;
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};

export const getStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const stats = await dbService.getContactStats();

    res.json({
      success: true,
      data: { stats },
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};