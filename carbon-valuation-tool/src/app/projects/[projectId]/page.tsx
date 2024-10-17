import { getProjectByID } from '@/server-actions/projects';

export default async function ProjectPage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const project = await getProjectByID(projectId);

  return (
    <div className='container'>
      <h2>
        This is the details page of the project:{' '}
        <pre>{JSON.stringify(project, null, 2)}</pre>
      </h2>
    </div>
  );
}
