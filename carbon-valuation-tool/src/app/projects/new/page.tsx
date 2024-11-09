import Container from '@/components/container';
import CreateProjectForm from '@/components/forms/create-project-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import getRegionsAndSectorsNames from '@/server/emissions/getRegionsAndSectorsNames';
import { PlusCircle } from 'lucide-react';

export default async function ProjectCreate() {
  const [regions, sectors] = await getRegionsAndSectorsNames();

  return (
    <Container>
      <Card className='bg-transparent shadow-none border-none w-full'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-green-700 dark:text-green-400 flex items-center'>
            <PlusCircle className='mr-2 h-6 w-6' />
            <h1 className='text-3xl font-bold text-green-800 dark:text-green-400 font-heading'>
              Create New Project
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CreateProjectForm regions={regions} sectors={sectors} />
        </CardContent>
      </Card>
    </Container>
  );
}
