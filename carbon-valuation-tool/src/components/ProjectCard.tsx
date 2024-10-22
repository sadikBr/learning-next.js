import { DatabaseProject } from '@/types';
import numeral from 'numeral';
import Link from 'next/link';
import { format } from 'date-fns';

export default function ProjectCard({ project }: { project: DatabaseProject }) {
  return (
    <div className='border-2 border-light-primary rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-transparent flex flex-col gap-3'>
      <Link href={`/projects/${project.id}`}>
        <h2 className='text-2xl font-bold mb-3 text-light-primary flex items-center justify-between'>
          {project.title}
        </h2>
        <p className='text-gray-700 mb-4 line-clamp-2'>{project.description}</p>
        <div className='text-sm text-gray-600 space-y-1'>
          <p>
            <strong className='text-light-primary'>Client Name:</strong>{' '}
            {project.clientName}
          </p>
          <p>
            <strong className='text-light-primary'>Department:</strong>{' '}
            {project.department}
          </p>
          <p>
            <strong className='text-light-primary'>Region:</strong>{' '}
            {project.region}
          </p>
          <p>
            <strong className='text-light-primary'>Sector:</strong>{' '}
            {project.sector}
          </p>
          <p>
            <strong className='text-light-primary'>Start Date:</strong>{' '}
            {format(new Date(project.startDate), 'EEEE, MMMM dd, yyyy')}
          </p>
          {project.endDate && (
            <p>
              <strong className='text-light-primary'>End Date:</strong>{' '}
              {format(new Date(project.endDate), 'EEEE, MMMM dd, yyyy')}
            </p>
          )}
          <p>
            <strong className='text-light-primary'>Budget:</strong>{' '}
            {numeral(project.budget).format('$0.0a')}
          </p>
        </div>
      </Link>
      <Link
        className='self-end text-sm bg-transparent text-light-primary border-2 border-light-primary rounded-md px-4 py-2 font-bold transition-colors duration-300 hover:bg-light-primary hover:text-white'
        href={`/calculator/${project.id}`}
      >
        Calculate Emissions
      </Link>
    </div>
  );
}
