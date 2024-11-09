'use server';

import { StakeholdersInsetType } from './stakeholders-types';

export async function createStakeholder(unsafeData: StakeholdersInsetType) {
  console.log(unsafeData);
}
