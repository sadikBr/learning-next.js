import numeral from 'numeral';

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
      <h2 className='my-4 text-2xl font-extrabold text-primary flex items-center justify-between'>
        {project.title}
        <Link
          className='border-primary font-semibold text-base border-2 rounded px-4 py-2 hover:bg-primary hover:text-white transition hover:shadow-lg'
          href={`/projects/${project.id}/edit`}
        >
          Edit Project
        </Link>
      </h2>
      <div className='flex flex-col gap-4 text-gray-700'>
        <p className='text-base font-light'>{project.description}</p>
        <div className='flex flex-col gap-1 text-sm'>
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
            {new Date(project.startDate).toLocaleDateString()}
          </p>
          {project.endDate && (
            <p>
              <strong className='text-primary'>End Date:</strong>{' '}
              {new Date(project.endDate).toLocaleDateString()}
            </p>
          )}
          <p>
            <strong className='text-primary'>Budget:</strong>{' '}
            {numeral(project.budget).format('$0.000a')}
          </p>
        </div>
        <div className='flex flex-col gap-1 text-sm'>
          <strong className='text-primary'>Milestones</strong>
          <ul className='flex flex-col gap-1'>
            {project.milestone.map((item) => (
              <li className='ml-2' key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-1 text-sm'>
          <strong className='text-primary'>Stakeholders</strong>
          <ul className='flex items-center gap-2'>
            {project.stakeholder.map((item) => (
              <li
                className='text-white bg-secondary px-4 py-2 rounded-lg font-semibold'
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
