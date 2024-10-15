import { db } from '@/drizzle/db';
import { ProjectTable } from '@/drizzle/schema/projects';

export async function GET() {
  const projects = await db.select().from(ProjectTable);

  // make sure only the projects of the user that sent the request are returned
  // If the user is an admin and they include the param include_all in the request send all the projects in the database.

  return Response.json(projects);
}
