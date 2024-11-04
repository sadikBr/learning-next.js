'use server';

import { db } from '@/drizzle/db';
import {
  MilestoneTable,
  ProjectTable,
  StakeholderTable,
} from '@/drizzle/schema/projects';
import { Project } from '@/types';
import { FormData } from '@/zod_schemas/project_schema';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { redirect, RedirectType } from 'next/navigation';

export async function createNewProject(formData: FormData) {
  const { milestone, stakeholder, ...projectData } = formData;

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
      startDate: projectData.startDate as unknown as string,
      endDate: (projectData.endDate as unknown as string) || undefined,
      budget: `$${projectData.budget}`,
    })
    .returning({ insertedId: ProjectTable.id });

  for (let i = 0; i < milestone.length; i++) {
    const item = milestone[i];

    await db.insert(MilestoneTable).values({
      name: item.name,
      completed: item.completed,
      projectId: response[0].insertedId,
    });
  }

  for (let i = 0; i < stakeholder.length; i++) {
    const item = stakeholder[i];

    await db.insert(StakeholderTable).values({
      name: item.name,
      projectId: response[0].insertedId,
    });
  }

  return redirect(`/projects/${response[0].insertedId}`);
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

export async function getProjectByID(projectId: string): Promise<Project> {
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
        columns: { name: true, completed: true },
      },
      stakeholder: {
        columns: { name: true },
      },
    },
  });

  if (!project) {
    throw new Error('Not Found', {
      cause: 'The requested project does not exist',
    });
  }

  if (project?.clerkUserId !== userId && orgRole !== 'org:admin') {
    throw new Error('Un-Authorized', {
      cause: 'You are not the owner of the project nor the admin',
    });
  }

  return {
    ...project,
    startDate: new Date(project.startDate).toLocaleDateString(
      'en-CA'
    ) as unknown as Date,
    endDate: project.endDate
      ? (new Date(project.endDate).toLocaleDateString(
          'en-CA'
        ) as unknown as Date)
      : undefined,
    budget: parseInt(project.budget.replace('$', '')),
  };
}

export async function editProject(project: FormData, projectId: string) {
  const { userId } = auth();
  const { milestone, stakeholder, ...projectData } = project;

  if (!userId) {
    throw new Error('Un-Authorized', {
      cause: 'You are not signed in to the application',
    });
  }

  await db
    .update(ProjectTable)
    .set({
      ...projectData,
      budget: `$${project.budget}`,
      startDate: project.startDate as unknown as string,
      endDate: (projectData.endDate as unknown as string) || undefined,
    })
    .where(eq(ProjectTable.id, projectId));

  await db
    .delete(MilestoneTable)
    .where(eq(MilestoneTable.projectId, projectId));
  await db
    .delete(StakeholderTable)
    .where(eq(StakeholderTable.projectId, projectId));

  for (let i = 0; i < milestone.length; i++) {
    const item = milestone[i];

    await db.insert(MilestoneTable).values({
      name: item.name,
      completed: item.completed,
      projectId: projectId,
    });
  }

  for (let i = 0; i < stakeholder.length; i++) {
    const item = stakeholder[i];

    await db.insert(StakeholderTable).values({
      name: item.name,
      projectId: projectId,
    });
  }

  return redirect(`/projects/${projectId}`, RedirectType.replace);
}
