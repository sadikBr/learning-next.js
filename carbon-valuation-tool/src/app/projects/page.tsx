import ProjectCard from '@/components/ProjectCard';
import { getAllProjectsForRegularUser } from '@/server-actions/projects';
import Link from 'next/link';

export default async function ProjectsPage() {
  const projects = await getAllProjectsForRegularUser();

  return (
    <div className='container overflow-y-auto custom-home-height'>
      <h2 className='mt-4 text-3xl font-bold text-light-primary flex items-center justify-between'>
        My Projects
        <Link
          className='border-light-primary font-semibold text-base border-2 rounded px-4 py-2 hover:bg-light-primary hover:text-white transition hover:shadow-lg'
          href='/projects/new'
        >
          Create New Project
        </Link>
      </h2>
      <div className='flex flex-col gap-5 py-5'>
        {projects.length > 0 ? (
          projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })
        ) : (
          <h2 className='text-gray-400'>
            You don&apos;t have any projects! create one to get started
          </h2>
        )}
      </div>
    </div>
  );
}
