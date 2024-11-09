import 'server-only';

import { db } from '@/drizzle/db';
import { ProjectFormData } from './project-types';
import { ProjectTable } from '@/drizzle/schema';

export async function getAllProjectsForAUserInternal(userId: string) {
  const projects = await db.query.ProjectTable.findMany({
    where: (table, { eq }) => eq(table.clerk_user_id, userId),
  });

  return projects;
}

export async function createProjectInternal(data: ProjectFormData) {
  const result = await db.insert(ProjectTable).values(data).returning({
    projectId: ProjectTable.id,
  });

  return result[0].projectId;
}
