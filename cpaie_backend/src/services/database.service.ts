import { pool } from '../config/database.js';
import { DBUser, UserRole } from '../types/auth.types.js';
import { Contact, CreateContactDTO, UpdateContactDTO, ContactStats } from '../types/contact.types.js';
import { QueryResult } from 'pg';

export class DatabaseService {
  // Users
  async createOrUpdateUser(
    auth0Id: string,
    email: string,
    name: string | null,
    role: UserRole,
    metadata: Record<string, unknown> = {}
  ): Promise<DBUser> {
    const result: QueryResult<DBUser> = await pool.query(
      `INSERT INTO users (auth0_id, email, name, role, metadata)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (auth0_id) 
       DO UPDATE SET 
         email = EXCLUDED.email,
         name = EXCLUDED.name,
         role = EXCLUDED.role,
         metadata = EXCLUDED.metadata,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [auth0Id, email, name, role, JSON.stringify(metadata)]
    );

    return result.rows[0];
  }

  async getUserByAuth0Id(auth0Id: string): Promise<DBUser | null> {
    const result: QueryResult<DBUser> = await pool.query(
      'SELECT * FROM users WHERE auth0_id = $1',
      [auth0Id]
    );

    return result.rows[0] || null;
  }

  // Contacts
  async createContact(data: CreateContactDTO, userId?: string): Promise<Contact> {
    const result: QueryResult<Contact> = await pool.query(
      `INSERT INTO contacts (user_id, name, email, phone, message, status)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [userId || null, data.name, data.email, data.phone || null, data.message, 'new']
    );

    return result.rows[0];
  }

  async getContactsByUserId(userId: string): Promise<Contact[]> {
    const result: QueryResult<Contact> = await pool.query(
      `SELECT * FROM contacts 
       WHERE user_id = $1 
       ORDER BY created_at DESC`,
      [userId]
    );

    return result.rows;
  }

  async getAllContacts(
    page: number = 1,
    limit: number = 20,
    status?: string,
    search?: string
  ): Promise<{ contacts: Contact[]; total: number }> {
    const offset = (page - 1) * limit;
    const params: (string | number)[] = [];
    let query = `
      SELECT c.*, u.email as user_email, u.name as user_name
      FROM contacts c
      LEFT JOIN users u ON c.user_id = u.id
      WHERE 1=1
    `;

    if (status) {
      params.push(status);
      query += ` AND c.status = $${params.length}`;
    }

    if (search) {
      params.push(`%${search}%`);
      query += ` AND (c.name ILIKE $${params.length} OR c.email ILIKE $${params.length} OR c.message ILIKE $${params.length})`;
    }

    query += ` ORDER BY c.created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const result: QueryResult<Contact> = await pool.query(query, params);

    const countQuery = `SELECT COUNT(*) FROM contacts WHERE 1=1${status ? ' AND status = $1' : ''}`;
    const countResult = await pool.query(countQuery, status ? [status] : []);

    return {
      contacts: result.rows,
      total: parseInt(countResult.rows[0].count),
    };
  }

  async getContactById(id: string): Promise<Contact | null> {
    const result: QueryResult<Contact> = await pool.query(
      'SELECT * FROM contacts WHERE id = $1',
      [id]
    );

    return result.rows[0] || null;
  }

  async updateContact(id: string, data: UpdateContactDTO): Promise<Contact | null> {
    const fields: string[] = [];
    const values: unknown[] = [];
    let index = 1;

    if (data.name !== undefined) {
      fields.push(`name = $${index++}`);
      values.push(data.name);
    }
    if (data.email !== undefined) {
      fields.push(`email = $${index++}`);
      values.push(data.email);
    }
    if (data.phone !== undefined) {
      fields.push(`phone = $${index++}`);
      values.push(data.phone);
    }
    if (data.message !== undefined) {
      fields.push(`message = $${index++}`);
      values.push(data.message);
    }
    if (data.status !== undefined) {
      fields.push(`status = $${index++}`);
      values.push(data.status);
    }

    if (fields.length === 0) {
      return this.getContactById(id);
    }

    values.push(id);
    const query = `
      UPDATE contacts 
      SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${index}
      RETURNING *
    `;

    const result: QueryResult<Contact> = await pool.query(query, values);
    return result.rows[0] || null;
  }

  async deleteContact(id: string): Promise<boolean> {
    const result = await pool.query('DELETE FROM contacts WHERE id = $1 RETURNING id', [id]);
    return result.rowCount !== null && result.rowCount > 0;
  }

  async getContactStats(): Promise<ContactStats> {
    const result = await pool.query<ContactStats>(`
      SELECT 
        COUNT(*)::int as total,
        COUNT(*) FILTER (WHERE status = 'new')::int as new,
        COUNT(*) FILTER (WHERE status = 'in_progress')::int as in_progress,
        COUNT(*) FILTER (WHERE status = 'resolved')::int as resolved,
        COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days')::int as this_week
      FROM contacts
    `);

    return result.rows[0];
  }
}

export const dbService = new DatabaseService();