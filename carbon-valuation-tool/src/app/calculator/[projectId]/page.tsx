export default function PrivateCalculator({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return (
    <div className='container'>
      <h2>Calculator Page, Linked to the project with id: {projectId}!</h2>
    </div>
  );
}
