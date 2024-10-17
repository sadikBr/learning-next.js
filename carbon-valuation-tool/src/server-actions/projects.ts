'use server';

import { FormData } from '@/app/projects/new/page';
import { db } from '@/drizzle/db';
import { ProjectTable } from '@/drizzle/schema/projects';
import { auth } from '@clerk/nextjs/server';

type FormDataExtended = Omit<FormData, 'startDate' | 'endDate'> & {
  startDate: string;
  endDate: string | null;
};

export async function createNewProject(projectData: FormDataExtended) {
  const { userId } = auth();

  if (!userId) {
    throw new Error('Un-Authorized', {
      cause: 'You are not signed in to the application',
    });
  }

  const response = await db
    .insert(ProjectTable)
    .values({
      clerkUserId: userId,
      ...projectData,
      budget: `$${projectData.budget}`,
    })
    .returning({ insertedId: ProjectTable.id });

  return { insertedId: response[0].insertedId };
}

export async function getAllProjectsForRegularUser() {
  const { userId } = auth();

  if (!userId) {
    throw new Error('Un-Authorized', {
      cause: 'You are not signed in to the application',
    });
  }

  const projects = await db.query.ProjectTable.findMany({
    where: (ProjectTable, { eq }) => eq(ProjectTable.clerkUserId, userId),
  });

  return projects;
}

export async function getProjectByID(projectId: string) {
  const { userId, orgRole } = auth();

  if (!userId) {
    throw new Error('Un-Authorized', {
      cause: 'You are not signed in to the application',
    });
  }

  const project = await db.query.ProjectTable.findFirst({
    where: (ProjectTable, { eq }) => eq(ProjectTable.id, projectId),
    with: {
      milestone: {
        columns: { id: true, name: true },
      },
      stakeholder: {
        columns: { id: true, name: true },
      },
    },
  });

  if (project?.clerkUserId !== userId && orgRole !== 'org:admin') {
    throw new Error('Un-Authorized', {
      cause: 'You are not the owner of the project nor the admin',
    });
  }

  return project;
}

export async function editProjectByID() {}
