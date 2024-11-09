import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Edit,
  PlusCircle,
  Download,
  Share2,
  Briefcase,
  Calendar,
  Building2,
  AlertTriangle,
  Users,
  MapPin,
  User,
  Clock,
  Target,
  Banknote,
  Calculator,
} from 'lucide-react';
import Container from '@/components/container';
import { formatDate, formatNumber } from '@/lib/formatters';

export default async function ProjectDetails() {
  const project = {
    id: '5cd2095e-92a1-4c47-966a-58e69f793875',
    title: 'This is the title of the project (Updated !!)',
    description:
      "This is a brief description of the project, don't take this seriously it is just a bunch of nonsense",
    department: 'Something',
    region: 'Africa except Egypt and South Africa',
    sector: 'Energy',
    clientName: 'Someone',
    startDate: '2024-10-23',
    endDate: '2024-11-07',
    budget: '$120000000',
    clerk_user_id: 'user_2nQxC1nDkYwOcZnIncmf3NwYRwq',
    updated_at: null,
    created_at: '2024-10-22T20:57:19.133Z',
    deleted_at: null,
    milestone: [
      {
        id: '0164601f-959e-4eb7-aed0-5f0b027ea187',
        name: 'There are not milestones',
        completed: false,
        projectId: '5cd2095e-92a1-4c47-966a-58e69f793875',
      },
      {
        id: '82749e13-c205-4288-9a85-b667360f2f3e',
        name: 'This is just some rubish',
        completed: false,
        projectId: '5cd2095e-92a1-4c47-966a-58e69f793875',
      },
      {
        id: 'a1ccee17-85b0-46ac-aff6-497805b6adce',
        name: 'Another rubish',
        completed: false,
        projectId: '5cd2095e-92a1-4c47-966a-58e69f793875',
      },
    ],
    stakeholder: [
      {
        id: '7cc29725-0551-4f43-8ab1-333b9c62c457',
        name: 'Nobody',
        projectId: '5cd2095e-92a1-4c47-966a-58e69f793875',
      },
      {
        id: 'b0bce696-d6f3-441f-a9fe-4732f9e23ab5',
        name: 'Nobody 2',
        projectId: '5cd2095e-92a1-4c47-966a-58e69f793875',
      },
    ],
  };

  return (
    <Container>
      <div className='space-y-6 w-full'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-6 shadow-lg'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-3xl font-bold font-heading flex items-center'>
              <Target className='mr-2 h-8 w-8' />
              {project.title}
            </h1>
            <div className='flex items-center space-x-2'>
              <Button
                className='bg-white text-green-600 hover:bg-green-100'
                size='sm'
                asChild
              >
                <Link href={`/projects/${project.id}/edit`}>
                  <Edit className='mr-2 h-4 w-4' /> Edit
                </Link>
              </Button>
              <Button
                className='bg-white text-blue-600 hover:bg-blue-100'
                size='sm'
              >
                <Download className='mr-2 h-4 w-4' /> Export
              </Button>
              <Button
                className='bg-white text-purple-600 hover:bg-purple-100'
                size='sm'
              >
                <Share2 className='mr-2 h-4 w-4' /> Share
              </Button>
            </div>
          </div>
          <p className='text-white text-opacity-90'>{project.description}</p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          <Card className='bg-gradient-to-br from-green-400 to-blue-500 text-white transform hover:scale-105 transition-transform duration-200'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Banknote className='mr-2 h-6 w-6' /> Budget
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-4xl font-bold'>
                {formatNumber(Number(project.budget.replace('$', '')))}
              </p>
              <p className='text-sm opacity-80'>Total project budget</p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-purple-400 to-pink-500 text-white transform hover:scale-105 transition-transform duration-200'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Calendar className='mr-2 h-6 w-6' /> Project Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-xl font-bold'>
                {formatDate(new Date(project.startDate))}
              </p>
              <p className='text-sm opacity-80'>
                Duration:{' '}
                {Math.ceil(
                  (Number(new Date(project.endDate)) -
                    Number(new Date(project.startDate))) /
                    (1000 * 60 * 60 * 24)
                )}{' '}
                days
              </p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-yellow-400 to-orange-500 text-white transform hover:scale-105 transition-transform duration-200'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Building2 className='mr-2 h-6 w-6' /> Sector
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-4xl font-bold'>{project.sector}</p>
              <p className='text-sm opacity-80'>Industry classification</p>
            </CardContent>
          </Card>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle className='text-green-700 dark:text-green-400 flex items-center'>
                <Briefcase className='mr-2 h-6 w-6' /> Project Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <Building2 className='mr-2 h-5 w-5 text-blue-500' />
                  <span className='font-semibold mr-2'>Department:</span>{' '}
                  {project.department}
                </li>
                <li className='flex items-center'>
                  <MapPin className='mr-2 h-5 w-5 text-red-500' />
                  <span className='font-semibold mr-2'>Region:</span>{' '}
                  {project.region}
                </li>
                <li className='flex items-center'>
                  <User className='mr-2 h-5 w-5 text-purple-500' />
                  <span className='font-semibold mr-2'>Client:</span>{' '}
                  {project.clientName}
                </li>
                <li className='flex items-center'>
                  <Clock className='mr-2 h-5 w-5 text-green-500' />
                  <span className='font-semibold mr-2'>Created:</span>{' '}
                  {formatDate(new Date(project.created_at))}
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle className='text-green-700 dark:text-green-400 flex items-center'>
                <Users className='mr-2 h-6 w-6' /> Stakeholders
              </CardTitle>
              <Button size='sm'>
                <PlusCircle className='mr-2 h-4 w-4' /> New Stakeholder
              </Button>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                {project.stakeholder.map((stakeholder) => (
                  <li
                    key={stakeholder.id}
                    className='flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md'
                  >
                    <User className='mr-2 h-5 w-5 text-blue-500' />
                    <span>{stakeholder.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle className='text-green-700 dark:text-green-400 flex items-center'>
              <Target className='mr-2 h-6 w-6' /> Milestones
            </CardTitle>
            <Button size='sm'>
              <PlusCircle className='mr-2 h-4 w-4' /> New Milestone
            </Button>
          </CardHeader>
          <CardContent>
            <ul className='space-y-4'>
              {project.milestone.map((milestone) => (
                <li key={milestone.id} className='flex items-center space-x-2'>
                  <Checkbox
                    id={milestone.id}
                    checked={milestone.completed}
                    aria-readonly
                  />
                  <label
                    htmlFor={milestone.id}
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    {milestone.name}
                  </label>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-green-700 dark:text-green-400 flex items-center'>
              <Calculator className='mr-2 h-6 w-6' /> Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col items-center justify-center h-40 bg-gray-100 dark:bg-gray-800 rounded-md'>
              <Calculator className='h-12 w-12 text-gray-400 mb-2' />
              <p className='text-lg font-semibold text-gray-600 dark:text-gray-300'>
                Coming Soon
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Project calculations will be available here in the future.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 border-yellow-500 border-2'>
          <CardHeader>
            <CardTitle className='text-yellow-700 dark:text-yellow-400 flex items-center'>
              <AlertTriangle className='mr-2 h-6 w-6' /> Project Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-yellow-800 dark:text-yellow-200 flex items-center'>
              <Calendar className='mr-2 h-5 w-5' />
              This project is scheduled to end on{' '}
              {formatDate(new Date(project.endDate))}. Ensure all milestones are
              completed before the end date.
            </p>
            <Button
              variant='outline'
              className='mt-4 text-yellow-700 dark:text-yellow-300 border-yellow-500 hover:bg-yellow-200 dark:hover:bg-yellow-800'
            >
              <Target className='mr-2 h-4 w-4' /> View Project Timeline
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
