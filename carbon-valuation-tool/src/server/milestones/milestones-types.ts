import { MilestoneTable } from '../../drizzle/schema/project';

export type MilestonesInsetType = typeof MilestoneTable.$inferInsert;
export type MilestonesSelectType = typeof MilestoneTable.$inferSelect;
