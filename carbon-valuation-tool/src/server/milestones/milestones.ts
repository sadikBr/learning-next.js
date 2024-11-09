'use server';

import { MilestonesInsetType } from './milestones-types';

export async function createMilestone(unsafeData: MilestonesInsetType) {
  console.log(unsafeData);
}
