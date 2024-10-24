import NewProjectForm from '@/components/forms/NewProjectForm';

export default function NewProjectPage() {
  return (
    <div className='container custom-home-height overflow-y-auto pt-2 pb-6'>
      <h2 className='font-bold text-light-primary dark:text-dark-text-primary mb-6 text-2xl'>
        Create New Project
      </h2>
      <NewProjectForm />
    </div>
  );
}
