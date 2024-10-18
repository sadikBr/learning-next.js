import ProjectCard from '@/components/ProjectCard';
import { getAllProjectsForRegularUser } from '@/server-actions/projects';

export default async function ProjectsPage() {
  const projects = await getAllProjectsForRegularUser();

  return (
    <div className='container custom-home-height overflow-y-auto flex flex-col gap-5 py-5'>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}
