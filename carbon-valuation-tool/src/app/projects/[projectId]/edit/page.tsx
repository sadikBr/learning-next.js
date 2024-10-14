export default function ProjectPage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return (
    <div className='container'>
      <h2>This is the edit page of the object with id: {projectId}</h2>
    </div>
  );
}
