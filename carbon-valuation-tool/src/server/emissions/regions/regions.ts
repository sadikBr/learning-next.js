import { db } from '@/drizzle/db';
import { asc } from 'drizzle-orm';

export async function getRegions() {
  return await db.query.RegionTable.findMany({
    orderBy: (table) => asc(table.name),
  });
}
