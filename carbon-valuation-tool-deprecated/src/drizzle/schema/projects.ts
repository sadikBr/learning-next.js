import {
  boolean,
  date,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
};

export const ProjectTable = pgTable('project', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  department: text('department').notNull(),
  region: text('region').notNull(),
  sector: text('sector').notNull(),
  clientName: text('client_name').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
  budget: text('budget').notNull(),
  clerkUserId: text('clerk_user_id').notNull(),
  ...timestamps,
});

export const MilestoneTable = pgTable('milestone', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  completed: boolean().notNull().default(false),
  projectId: uuid('project_id')
    .notNull()
    .references(() => ProjectTable.id, { onDelete: 'cascade' }),
});

export const StakeholderTable = pgTable('stakeholder', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  projectId: uuid('project_id')
    .notNull()
    .references(() => ProjectTable.id, { onDelete: 'cascade' }),
});

export const projectRelations = relations(ProjectTable, ({ many }) => ({
  milestone: many(MilestoneTable),
  stakeholder: many(StakeholderTable),
}));

export const milestoneRelations = relations(MilestoneTable, ({ one }) => ({
  project: one(ProjectTable, {
    fields: [MilestoneTable.projectId],
    references: [ProjectTable.id],
  }),
}));

export const stakeholderRelations = relations(StakeholderTable, ({ one }) => ({
  project: one(ProjectTable, {
    fields: [StakeholderTable.projectId],
    references: [ProjectTable.id],
  }),
}));
