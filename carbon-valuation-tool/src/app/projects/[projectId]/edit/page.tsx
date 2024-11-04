'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Save, Briefcase, Building2, Calendar, ToggleLeft } from 'lucide-react';
import Container from '@/components/container';

export default function ProjectEdit() {
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState('');
  const [startDate, setStartDate] = useState('');
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Here you would typically fetch the project details
    // For now, we'll use mock data
    setProjectName('Existing Project');
    setDescription('This is an existing project description.');
    setSector('energy');
    setStartDate('2023-01-01');
    setIsActive(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to update the project
    console.log('Updating project:', {
      projectName,
      description,
      sector,
      startDate,
      isActive,
    });
    // After successful update, redirect to the project details page
    router.push('/projects/1'); // Replace '1' with the actual project ID
  };

  return (
    <Container>
      <Card className='bg-transparent shadow-none border-none'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-green-700 dark:text-green-400 flex items-center'>
            <Briefcase className='mr-2 h-6 w-6' />
            <h1 className='text-3xl font-bold text-green-800 dark:text-green-400 font-heading'>
              Update Project Details
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div>
              <Label htmlFor='projectName' className='flex items-center'>
                <Briefcase className='mr-2 h-4 w-4' /> Project Name
              </Label>
              <Input
                id='projectName'
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder='Enter project name'
                className='mt-1'
                required
              />
            </div>
            <div>
              <Label htmlFor='description' className='flex items-center'>
                <Building2 className='mr-2 h-4 w-4' /> Description
              </Label>
              <Textarea
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Enter project description'
                rows={4}
                className='mt-1'
              />
            </div>
            <div>
              <Label htmlFor='sector' className='flex items-center'>
                <Building2 className='mr-2 h-4 w-4' /> Sector
              </Label>
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger id='sector' className='mt-1'>
                  <SelectValue placeholder='Select a sector' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='energy'>Energy</SelectItem>
                  <SelectItem value='manufacturing'>Manufacturing</SelectItem>
                  <SelectItem value='transport'>Transport</SelectItem>
                  <SelectItem value='agriculture'>Agriculture</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor='startDate' className='flex items-center'>
                <Calendar className='mr-2 h-4 w-4' /> Start Date
              </Label>
              <Input
                id='startDate'
                type='date'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className='mt-1'
                required
              />
            </div>
            <div className='flex items-center space-x-2'>
              <Switch
                id='isActive'
                checked={isActive}
                onCheckedChange={setIsActive}
              />
              <Label htmlFor='isActive' className='flex items-center'>
                <ToggleLeft className='mr-2 h-4 w-4' /> Project Active
              </Label>
            </div>
            <Button
              type='submit'
              className='self-end bg-green-600 hover:bg-green-700 text-white mt-12'
            >
              <Save className='mr-2 h-5 w-5' /> Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
