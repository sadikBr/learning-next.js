import { StakeholderTable } from '../../drizzle/schema/project';

export type StakeholdersInsetType = typeof StakeholderTable.$inferInsert;
export type StakeholdersSelectType = typeof StakeholderTable.$inferSelect;

