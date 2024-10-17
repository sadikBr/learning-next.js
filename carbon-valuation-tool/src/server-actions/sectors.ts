'use server';

import { db } from '@/drizzle/db';
import { SectorTable } from '@/drizzle/schema/emissions';

export async function getAllSectors() {
  const sectors = (
    await db.select().from(SectorTable).orderBy(SectorTable.name)
  ).flat();

  return sectors;
}
