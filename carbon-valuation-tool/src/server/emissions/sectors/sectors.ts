import { db } from '@/drizzle/db';
import { asc } from 'drizzle-orm';

export async function getSectors() {
  return await db.query.SectorTable.findMany({
    orderBy: (table) => asc(table.name),
  });
}
