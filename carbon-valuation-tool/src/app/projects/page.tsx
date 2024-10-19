import ProjectCard from '@/components/ProjectCard';
import { getAllProjectsForRegularUser } from '@/server-actions/projects';
import Link from 'next/link';

export default async function ProjectsPage() {
  const projects = await getAllProjectsForRegularUser();

  return (
    <div className='container custom-home-height'>
      <h2 className='mt-4 text-2xl font-extrabold text-primary flex items-center justify-between'>
        My Projects
        <Link
          className='border-primary font-semibold text-base border-2 rounded px-4 py-2 hover:bg-primary hover:text-white transition hover:shadow-lg'
          href='/projects/new'
        >
          Create New Project
        </Link>
      </h2>
      <div className='overflow-y-auto flex flex-col gap-5 py-5'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
