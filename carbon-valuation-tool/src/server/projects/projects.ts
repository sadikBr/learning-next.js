'use server';

import { auth } from '@clerk/nextjs/server';
import {
  createProjectInternal,
  getAllProjectsForAUserInternal,
} from './projects-db';
import { ProjectDatabaseData } from './project-types';
import projectSchema, { FormData } from '@/zod-schemas/project';

type ServerResponse = {
  error: boolean;
  message: string;
  data?: ProjectDatabaseData[];
};

export async function createProject(unsafeData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    return {
      error: true,
      message: 'Please log in first before trying to get the data',
    };
  }

  const result = projectSchema.safeParse(unsafeData);

  if (!result.success) {
    return {
      error: true,
      message: result.error.message,
    };
  }

  try {
    const projectId = await createProjectInternal({
      ...unsafeData,
      startDate: unsafeData.startDate as unknown as string,
      endDate: (unsafeData.endDate as unknown as string) || undefined,
      budget: `$${unsafeData.budget}`,
      clerk_user_id: userId,
    });

    return {
      error: false,
      message: 'The user has been successfully created',
      projectId,
    };
  } catch (error) {
    return {
      error: true,
      message: (error as unknown as Error).message,
    };
  }
}

export async function getAllProjectsForAUser(): Promise<ServerResponse> {
  const { userId } = await auth();

  // Making sure the user in authenticated
  if (!userId) {
    return {
      error: true,
      message: 'Please log in first before trying to get the data',
    };
  }

  // Get all project based on a userId.
  const projects = await getAllProjectsForAUserInternal(userId);

  if (projects.length === 0) {
    return {
      error: false,
      message: "You haven't created a project yet",
    };
  }
  // Make sure to not send the deleted projects
  return {
    error: false,
    message: `Returning ${projects.length} projects`,
    data: projects,
  };
}

export async function getAllProjectsForAdmin() {
  // Get all project in the database (make sure the user is authenticated and is application admin).
  // Make sure to not send the deleted projects
}

export async function getProjectByID() {
  // Get a specific project from the database by its ID.
  // Make sure the user requesting this data is the owner of the project or the application admin.
  // Make sure to not send the project if it is considered as deleted (has a deleted at timestamp set).
}

export async function deleteProjectByID() {
  // Delete a project from the database using its ID.
  // Make sure the user requesting this action is either the owner of the project or the application admin.
  // PS: Maybe don't delete the project from the database entirely, just a value for the deleted at column.
}

export async function deleteAllProjectsOfAUser() {
  // Delete all objects of a given user.
  // Make sure this action is requested by the projects owner or an application admin.
  // PS: Maybe don't delete the project from the database entirely, just a value for the deleted at column.
}

export async function getAllDeletedProjects() {
  // Get all the projects that have a deleted at timestamp set.
  // Make sure the user requesting this data is an application admin.
}

export async function updateProjectByID() {
  // Update a specific project using its ID.
  // Make sure the user requesting this data is the owner of the project or the application admin.
  // Make sure to not update the project if it is considered as deleted (has a deleted at timestamp set).
}
