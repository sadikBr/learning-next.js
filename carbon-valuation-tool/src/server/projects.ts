'use server';

export function createProject() {
  // Create a new project for a given user (make sure the user is authenticated).
  // Make sure the provided data from the client is the expected data to insert into the database.
}

export function getAllProjectsForAUser() {
  // Get all project based on a userId (make sure the user is authenticated).
  // Make sure to not send the deleted projects
}

export function getAllProjectsForAdmin() {
  // Get all project in the database (make sure the user is authenticated and is application admin).
  // Make sure to not send the deleted projects
}

export function getProjectByID() {
  // Get a specific project from the database by its ID.
  // Make sure the user requesting this data is the owner of the project or the application admin.
  // Make sure to not send the project if it is considered as deleted (has a deleted at timestamp set).
}

export function deleteProjectByID() {
  // Delete a project from the database using its ID.
  // Make sure the user requesting this action is either the owner of the project or the application admin.
  // PS: Maybe don't delete the project from the database entirely, just a value for the deleted at column.
}

export function deleteAllProjectsOfAUser() {
  // Delete all objects of a given user.
  // Make sure this action is requested by the projects owner or an application admin.
  // PS: Maybe don't delete the project from the database entirely, just a value for the deleted at column.
}

export default function getAllDeletedProjects() {
  // Get all the projects that have a deleted at timestamp set.
  // Make sure the user requesting this data is an application admin.
}

export function updateProjectByID() {
  // Update a specific project using its ID.
  // Make sure the user requesting this data is the owner of the project or the application admin.
  // Make sure to not update the project if it is considered as deleted (has a deleted at timestamp set).
}
