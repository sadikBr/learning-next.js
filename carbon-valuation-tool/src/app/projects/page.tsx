import { getAllProjectsForRegularUser } from '@/server-actions/projects';

export default async function ProjectsPage() {
  const projects = await getAllProjectsForRegularUser();

  return (
    <div className='container'>
      <h2>Projects Page!</h2>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
}
