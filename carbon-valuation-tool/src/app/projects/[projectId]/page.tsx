import { getProjectByID } from '@/server-actions/projects';
import Link from 'next/link';

export default async function ProjectPage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const project = await getProjectByID(projectId);

  return (
    <div className='container custom-home-height'>
      <h2 className='my-4 text-2xl font-extrabold text-primary flex items-center justify-between'>
        {project.title}
        <Link
          className='border-primary font-semibold text-base border-2 rounded px-4 py-2 hover:bg-primary hover:text-white transition hover:shadow-lg'
          href={`/projects/${project.id}/edit`}
        >
          Edit Project
        </Link>
      </h2>
      <h2>
        This is the details page of the project:{' '}
        <pre>{JSON.stringify(project, null, 2)}</pre>
      </h2>
    </div>
  );
}
