import EditProjectForm from '@/components/forms/EditProjectForm';

export default function EditProjectPage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return (
    <div className='container custom-home-height overflow-y-auto pt-2 pb-6'>
      <h2 className='font-bold text-light-primary mb-6 text-2xl'>
        Edit Project
      </h2>
      <EditProjectForm projectId={projectId} />
    </div>
  );
}
