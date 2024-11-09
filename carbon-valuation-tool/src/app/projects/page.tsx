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
import {
  PlusCircle,
  Eye,
  Edit,
  Trash2,
  DollarSign,
  Calendar,
  MapPin,
} from 'lucide-react';
import Container from '@/components/container';
import { getAllProjectsForAUser } from '@/server/projects/projects';
import { formatDate, formatNumber } from '@/lib/formatters';

export default async function ProjectsList() {
  const { error, message, data: projects } = await getAllProjectsForAUser();

  if (error) throw new Error(message);

  if (!projects) {
    return <Container>{message}</Container>;
  }

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
                  <SelectItem value='title'>Title</SelectItem>
                  <SelectItem value='budget'>Budget</SelectItem>
                  <SelectItem value='startDate'>Start Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[250px]'>Project Title</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead className='text-right'>Budget</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className='font-medium'>{project.title}</TableCell>
                  <TableCell>{project.sector}</TableCell>
                  <TableCell>
                    <div className='flex items-center'>
                      <MapPin className='h-4 w-4 mr-1 text-green-800' />
                      {project.region}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center'>
                      <Calendar className='h-4 w-4 mr-1 text-green-800' />
                      {formatDate(new Date(project.startDate))}
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>
                    <div className='flex items-center justify-end'>
                      <DollarSign className='h-4 w-4 mr-1 text-green-800' />
                      {formatNumber(Number(project.budget.replace('$', '')))}
                    </div>
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
                    <Button className='group' variant='ghost' size='sm'>
                      <Trash2 className='h-4 w-4 group-hover:text-red-500 transition' />
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
            Total budget managed:{' '}
            {formatNumber(
              projects.reduce(
                (sum, project) =>
                  sum + parseInt(project.budget.replace(/[^0-9]/g, '')),
                0
              )
            )}
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
