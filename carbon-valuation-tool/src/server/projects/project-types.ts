import { ProjectTable } from '../../drizzle/schema/project';
import {
  MilestonesInsetType,
  MilestonesSelectType,
} from '../milestones/milestones-types';
import {
  StakeholdersInsetType,
  StakeholdersSelectType,
} from '../stakeholders/stakeholders-types';

export type ProjectFormData = typeof ProjectTable.$inferInsert;
export type ProjectDatabaseData = typeof ProjectTable.$inferSelect;

export type ProjectFormDataWithMilestonesAndStakeholders = ProjectFormData & {
  milestone: MilestonesInsetType[];
  stakeholder: StakeholdersInsetType[];
};

export type ProjectDatabaseDataWithMilestonesAndStakeholders =
  ProjectDatabaseData & {
    milestone: MilestonesSelectType[];
    stakeholder: StakeholdersSelectType[];
  };
