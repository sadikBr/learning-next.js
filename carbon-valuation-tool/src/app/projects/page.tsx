import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PlusCircle, Eye, Edit, Trash2 } from 'lucide-react';
import Container from '@/components/container';

export default function ProjectsList() {
  const projects = [
    {
      id: 1,
      name: 'Project A',
      sector: 'Energy',
      startDate: '2023-01-15',
      totalEmissions: 1500,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Project B',
      sector: 'Manufacturing',
      startDate: '2023-02-01',
      totalEmissions: 2200,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Project C',
      sector: 'Transport',
      startDate: '2023-03-10',
      totalEmissions: 1800,
      status: 'Completed',
    },
    {
      id: 4,
      name: 'Project D',
      sector: 'Agriculture',
      startDate: '2023-04-05',
      totalEmissions: 900,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Project E',
      sector: 'Energy',
      startDate: '2023-05-20',
      totalEmissions: 1100,
      status: 'On Hold',
    },
  ];

  return (
    <Container>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-green-800 dark:text-green-400 font-heading'>
          My Projects
        </h1>
        <Button asChild className='bg-green-600 hover:bg-green-700 text-white'>
          <Link href='/projects/new'>
            <PlusCircle className='mr-2 h-5 w-5' /> New Project
          </Link>
        </Button>
      </div>
      <Card className='bg-white dark:bg-gray-800 mb-6'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-green-700 dark:text-green-400'>
            Project Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col md:flex-row gap-4 mb-4'>
            <div className='flex-grow'>
              <Input placeholder='Search projects...' className='w-full' />
            </div>
            <div className='flex gap-2'>
              <Select>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Filter by sector' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Energy'>Energy</SelectItem>
                  <SelectItem value='Manufacturing'>Manufacturing</SelectItem>
                  <SelectItem value='Transport'>Transport</SelectItem>
                  <SelectItem value='Agriculture'>Agriculture</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Sort by' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='name'>Name</SelectItem>
                  <SelectItem value='emissions'>Total Emissions</SelectItem>
                  <SelectItem value='date'>Start Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[250px]'>Project Name</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead className='text-right'>
                  Total Emissions (kg CO2e)
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className='font-medium'>{project.name}</TableCell>
                  <TableCell>{project.sector}</TableCell>
                  <TableCell>{project.startDate}</TableCell>
                  <TableCell className='text-right'>
                    {project.totalEmissions.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Active'
                          ? 'bg-green-200 text-green-800'
                          : project.status === 'Completed'
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-yellow-200 text-yellow-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button variant='ghost' size='sm' asChild>
                      <Link href={`/projects/${project.id}`}>
                        <Eye className='h-4 w-4' />
                      </Link>
                    </Button>
                    <Button variant='ghost' size='sm' asChild>
                      <Link href={`/projects/${project.id}/edit`}>
                        <Edit className='h-4 w-4' />
                      </Link>
                    </Button>
                    <Button variant='ghost' size='sm'>
                      <Trash2 className='h-4 w-4' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className='bg-gradient-to-r from-green-400 to-blue-500 text-white'>
        <CardContent className='p-6'>
          <h2 className='text-2xl font-bold mb-2'>Project Insights</h2>
          <p className='mb-4'>
            You have {projects.length} active projects across{' '}
            {new Set(projects.map((p) => p.sector)).size} sectors.
          </p>
          <p className='mb-4'>
            Total emissions tracked:{' '}
            {projects
              .reduce((sum, p) => sum + p.totalEmissions, 0)
              .toLocaleString()}{' '}
            kg CO2e
          </p>
          <Button
            variant='secondary'
            className='bg-white text-green-600 hover:bg-green-100'
          >
            View Detailed Analytics
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
