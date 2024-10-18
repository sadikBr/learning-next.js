import { DatabaseProject } from '@/types';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: DatabaseProject }) {
  return (
    <div className='border border-primary rounded flex justify-between'>
      <div className='flex-1 px-4 py-2'>
        <h2 className='font-bold text-primary text-xl'>{project.title}</h2>
        <div className='flex items-center gap-2 text-xs'>
          <p className='text-secondary'>{project.startDate}</p>-
          <p className='text-red-500'>{project.endDate}</p>
        </div>
      </div>

      <div className='flex items-stretch flex-col'>
        <Link
          className='flex-1 px-4 py-4 flex items-center justify-center bg-primary text-white font-bold'
          href={`/calculator/${project.id}`}
        >
          Calculate
        </Link>
        <Link
          className='flex-1 px-4 py-4 flex items-center justify-center bg-secondary text-white font-bold'
          href={`/projects/${project.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
