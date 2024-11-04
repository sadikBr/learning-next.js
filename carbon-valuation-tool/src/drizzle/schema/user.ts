import { relations } from 'drizzle-orm';
import { pgEnum, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { ProjectTable } from './project';

export const UserRole = pgEnum('user_role', ['ADMIN', 'NORMAL']);

export const UserTable = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  externalId: text('external_id').notNull(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  role: UserRole().notNull().default('NORMAL'),
});

export const UserTableRelations = relations(UserTable, ({ many }) => {
  return {
    project: many(ProjectTable),
  };
});
