import { DatabaseProject } from '@/types';
import numeral from 'numeral';
import Link from 'next/link';
import { format } from 'date-fns';

export default function ProjectCard({ project }: { project: DatabaseProject }) {
  return (
    <div className='border-2 border-primary rounded-md p-4 shadow-md shadow-gray-300 bg-white flex flex-col gap-2'>
      <Link href={`/projects/${project.id}`}>
        <h2 className='text-xl font-semibold mb-2 text-primary flex items-center justify-between'>
          {project.title}
        </h2>
        <p className='text-gray-500 mb-4 line-clamp-2'>{project.description}</p>
        <div className='text-sm text-gray-400'>
          <p>
            <strong className='text-primary'>Client Name:</strong>{' '}
            {project.clientName}
          </p>
          <p>
            <strong className='text-primary'>Department:</strong>{' '}
            {project.department}
          </p>
          <p>
            <strong className='text-primary'>Region:</strong> {project.region}
          </p>
          <p>
            <strong className='text-primary'>Sector:</strong> {project.sector}
          </p>
          <p>
            <strong className='text-primary'>Start Date:</strong>{' '}
            {format(new Date(project.startDate), 'EEEE, MMMM dd, yyyy')}
          </p>
          {project.endDate && (
            <p>
              <strong className='text-primary'>End Date:</strong>{' '}
              {format(new Date(project.endDate), 'EEEE, MMMM dd, yyyy')}
            </p>
          )}
          <p>
            <strong className='text-primary'>Budget:</strong>{' '}
            {numeral(project.budget).format('$0.0a')}
          </p>
        </div>
      </Link>
      <Link
        className='self-end text-sm border-primary border-2 rounded px-2 py-1 hover:bg-primary text-primary font-bold hover:text-white transition hover:shadow-primary hover:shadow-md'
        href={`/calculator/${project.id}`}
      >
        Calculate Emissions
      </Link>
    </div>
  );
}
