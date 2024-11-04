import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from 'recharts';
import {
  Edit,
  PlusCircle,
  Download,
  Share2,
  Briefcase,
  Calendar,
  Building2,
  AlertTriangle,
} from 'lucide-react';
import Container from '@/components/container';

export default function ProjectDetails() {
  // Mock data - replace with actual data fetching
  const project = {
    id: 1,
    name: 'Project A',
    description:
      'This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking This is a sample project for carbon emission tracking.',
    sector: 'Energy',
    startDate: '2023-01-01',
    totalEmissions: 1500,
    lastUpdated: '2023-05-15',
    calculations: [
      { id: 1, date: '2023-05-01', activity: 'Electricity', emissions: 500 },
      { id: 2, date: '2023-05-05', activity: 'Transportation', emissions: 700 },
      { id: 3, date: '2023-05-10', activity: 'Waste', emissions: 300 },
    ],
  };

  // const chartData = project.calculations.map((calc) => ({
  //   name: calc.activity,
  //   emissions: calc.emissions,
  // }));

  // const emissionsTrend = [
  //   { month: 'Jan', emissions: 400 },
  //   { month: 'Feb', emissions: 300 },
  //   { month: 'Mar', emissions: 500 },
  //   { month: 'Apr', emissions: 450 },
  //   { month: 'May', emissions: 350 },
  // ];

  return (
    <Container>
      <div className='space-y-6'>
        <div>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-3xl font-bold text-green-800 dark:text-green-400 font-heading'>
              {project.name}
            </h1>
            <div className='flex items-center self-start'>
              <Button
                className='bg-gray-900 hover:bg-gray-950 text-white hover:text-white'
                variant='outline'
                size='sm'
                asChild
              >
                <Link href={`/projects/${project.id}/edit`}>
                  <Edit className='mr-2 h-4 w-4' /> Edit
                </Link>
              </Button>
              <Button
                className='bg-gray-900 hover:bg-gray-950 text-white hover:text-white'
                variant='outline'
                size='sm'
              >
                <Download className='mr-2 h-4 w-4' /> Export
              </Button>
              <Button
                className='bg-gray-900 hover:bg-gray-950 text-white hover:text-white'
                variant='outline'
                size='sm'
              >
                <Share2 className='mr-2 h-4 w-4' /> Share
              </Button>
            </div>
          </div>
          <p className='text-gray-600 dark:text-gray-400'>
            {project.description}
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          <Card className='bg-gradient-to-br from-green-400 to-blue-500 text-white'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Briefcase className='mr-2 h-5 w-5' /> Total Emissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-4xl font-bold'>
                {project.totalEmissions} kg CO2e
              </p>
              <p className='text-sm opacity-80'>
                Last updated: {project.lastUpdated}
              </p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-purple-400 to-pink-500 text-white'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Calendar className='mr-2 h-5 w-5' /> Project Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-4xl font-bold'>{project.startDate}</p>
              <p className='text-sm opacity-80'>Tracking since</p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-yellow-400 to-orange-500 text-white'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Building2 className='mr-2 h-5 w-5' /> Sector
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
              <CardTitle className='text-green-700 dark:text-green-400'>
                Emissions by Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* <ResponsiveContainer width='100%' height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey='emissions' fill='#059669' />
                </BarChart>
              </ResponsiveContainer> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-green-700 dark:text-green-400'>
                Emissions Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* <ResponsiveContainer width='100%' height={300}>
                <LineChart data={emissionsTrend}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='month' />
                  <YAxis />
                  <Tooltip />
                  <Line type='monotone' dataKey='emissions' stroke='#059669' />
                </LineChart>
              </ResponsiveContainer> */}
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle className='text-green-700 dark:text-green-400'>
              Calculation History
            </CardTitle>
            <Button size='sm'>
              <PlusCircle className='mr-2 h-4 w-4' /> New Calculation
            </Button>
          </CardHeader>
          <CardContent>
            <ul className='space-y-4'>
              {project.calculations.map((calc) => (
                <li
                  key={calc.id}
                  className='flex justify-between items-center border-b pb-2'
                >
                  <div>
                    <p className='font-semibold'>{calc.activity}</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {calc.date}
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <span className='mr-4'>{calc.emissions} kg CO2e</span>
                    <Button variant='ghost' size='sm'>
                      View Details
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className='bg-yellow-50 dark:bg-yellow-900 border-yellow-500 border-2'>
          <CardHeader>
            <CardTitle className='text-yellow-700 dark:text-yellow-400 flex items-center'>
              <AlertTriangle className='mr-2 h-6 w-6' /> Emission Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-yellow-800 dark:text-yellow-200'>
              Your project&apos;s emissions have increased by 15% compared to
              last month. Consider implementing additional reduction strategies.
            </p>
            <Button
              variant='outline'
              className='mt-4 text-yellow-700 dark:text-yellow-300 border-yellow-500'
            >
              View Reduction Tips
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
