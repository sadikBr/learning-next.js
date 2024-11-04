'use server';

import { db } from '@/drizzle/db';
import { RegionTable } from '@/drizzle/schema/emissions';

export async function getAllRegions() {
  const regions = (
    await db.select().from(RegionTable).orderBy(RegionTable.name)
  ).flat();

  return regions;
}
