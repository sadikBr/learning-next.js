import numeral from 'numeral';
import { format } from 'date-fns';

import { getProjectByID } from '@/server-actions/projects';
import Link from 'next/link';

export default async function ProjectPage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const project = await getProjectByID(projectId);

  return (
    <div className='container custom-home-height overflow-y-auto'>
      <h2 className='my-4 text-2xl font-extrabold text-light-primary dark:text-dark-text-primary flex items-center justify-between'>
        {project.title}
        <Link
          className='border-light-primary dark:border-dark-text-primary font-semibold text-base border-2 rounded px-4 py-2 hover:bg-light-primary dark:hover:bg-dark-text-primary hover:text-white dark:hover:text-dark-background-primary transition hover:shadow-lg'
          href={`/projects/${project.id}/edit`}
        >
          Edit Project
        </Link>
      </h2>
      <div className='flex flex-col gap-4 text-gray-700 dark:text-dark-text-secondary'>
        <p className='text-base font-light'>{project.description}</p>
        <div className='flex flex-col gap-1 text-sm'>
          <p>
            <strong className='text-light-primary dark:text-dark-text-primary'>
              Client Name:
            </strong>{' '}
            {project.clientName}
          </p>
          <p>
            <strong className='text-light-primary dark:text-dark-text-primary'>
              Department:
            </strong>{' '}
            {project.department}
          </p>
          <p>
            <strong className='text-light-primary dark:text-dark-text-primary'>
              Region:
            </strong>{' '}
            {project.region}
          </p>
          <p>
            <strong className='text-light-primary dark:text-dark-text-primary'>
              Sector:
            </strong>{' '}
            {project.sector}
          </p>
          <p>
            <strong className='text-light-primary dark:text-dark-text-primary'>
              Start Date:
            </strong>{' '}
            {format(new Date(project.startDate), 'EEEE, MMMM dd, yyyy')}
          </p>
          {project.endDate && (
            <p>
              <strong className='text-light-primary dark:text-dark-text-primary'>
                End Date:
              </strong>{' '}
              {format(new Date(project.endDate), 'EEEE, MMMM dd, yyyy')}
            </p>
          )}
          <p>
            <strong className='text-light-primary dark:text-dark-text-primary'>
              Budget:
            </strong>{' '}
            {numeral(project.budget).format('$0.000a')}
          </p>
        </div>
        <div className='flex flex-col gap-1 text-sm'>
          <strong className='text-light-primary dark:text-dark-text-primary'>
            Milestones
          </strong>
          <ul className='flex flex-col gap-1'>
            {project.milestone.map((item) => (
              <li className='ml-2 flex items-center gap-2' key={item.name}>
                <input readOnly type='checkbox' checked={item.completed} />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-1 text-sm'>
          <strong className='text-light-primary dark:text-dark-text-primary'>
            Stakeholders
          </strong>
          <ul className='flex items-center gap-2'>
            {project.stakeholder.map((item) => (
              <li
                className='text-white bg-light-secondary dark:text-dark-background-primary dark:bg-dark-accent-secondary px-4 py-2 rounded-lg font-semibold'
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='text-sm'>
          <div className='flex items-center justify-between mb-4'>
            <strong className='text-light-primary dark:text-dark-text-primary'>
              Emissions Calculations
            </strong>
            <Link
              className='border-light-primary dark:border-dark-text-primary dark:text-dark-text-primary border rounded px-2 py-1 hover:bg-light-primary dark:hover:bg-dark-text-primary hover:text-white dark:hover:text-dark-background-primary transition hover:shadow-lg'
              href={`/calculator/${project.id}`}
            >
              Calculate Emissions
            </Link>
          </div>
          {/* More code will go here */}
        </div>
      </div>
    </div>
  );
}
