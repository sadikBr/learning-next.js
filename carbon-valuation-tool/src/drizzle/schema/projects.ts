import { date, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { RegionTable, SectorTable } from './emissions';

export const ProjectTable = pgTable('project', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  department: text('department').notNull(),
  regionId: uuid('region_id')
    .notNull()
    .references(() => RegionTable.id, { onDelete: 'cascade' }),
  sectorId: uuid('sector_id')
    .notNull()
    .references(() => SectorTable.id, { onDelete: 'cascade' }),
  clientName: text('client_name').notNull(),
  startDate: date('start_data').notNull(),
  endDate: date('end_date'),
  clerkUserId: text('clerk_user_id').notNull(),
});
