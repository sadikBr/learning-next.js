'use client';

import { useState } from 'react';
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
import { PlusCircle, Briefcase, Building2, Calendar } from 'lucide-react';
import Container from '@/components/container';

export default function ProjectCreate() {
  const router = useRouter();
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [department, setDepartment] = useState('');
  const [clientName, setClientName] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to create the project
    console.log('Creating project:', {
      projectTitle,
      description,
      sector,
      startDate,
    });
    // After successful creation, redirect to the project details page
    router.push('/projects/1'); // Replace '1' with the actual project ID
  };

  return (
    <Container>
      <Card className='bg-transparent shadow-none border-none'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-green-700 dark:text-green-400 flex items-center'>
            <PlusCircle className='mr-2 h-6 w-6' />
            <h1 className='text-3xl font-bold text-green-800 dark:text-green-400 font-heading'>
              Create New Project
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div>
              <Label htmlFor='projectTitle' className='flex items-center'>
                <Briefcase className='mr-2 h-4 w-4' /> Project Name
              </Label>
              <Input
                id='projectTitle'
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder='Enter project title'
                className='mt-3'
                required
              />
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex-1'>
                <Label htmlFor='sector' className='flex items-center'>
                  <Building2 className='mr-2 h-4 w-4' /> Sector
                </Label>
                <Select value={sector} onValueChange={setSector}>
                  <SelectTrigger id='sector' className='mt-3'>
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
              <div className='flex-1'>
                <Label htmlFor='region' className='flex items-center'>
                  <Building2 className='mr-2 h-4 w-4' /> Region
                </Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger id='region' className='mt-3'>
                    <SelectValue placeholder='Select a region' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Morocco'>Morocco</SelectItem>
                    <SelectItem value='France'>France</SelectItem>
                    <SelectItem value='United States'>United States</SelectItem>
                    <SelectItem value='Palestine'>Palestine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='flex-1'>
                <Label htmlFor='department' className='flex items-center'>
                  <Briefcase className='mr-2 h-4 w-4' /> Department
                </Label>
                <Input
                  id='department'
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder='Enter project title'
                  className='mt-3'
                  required
                />
              </div>
              <div className='flex-1'>
                <Label htmlFor='clientName' className='flex items-center'>
                  <Briefcase className='mr-2 h-4 w-4' /> Client Name
                </Label>
                <Input
                  id='clientName'
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder='Enter project title'
                  className='mt-3'
                  required
                />
              </div>
              <div className='flex-1'>
                <Label htmlFor='budget' className='flex items-center'>
                  <Briefcase className='mr-2 h-4 w-4' /> Budget
                </Label>
                <Input
                  id='budget'
                  type='number'
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder='Enter project title'
                  className='mt-3'
                  required
                />
              </div>
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
                rows={8}
                className='mt-3'
              />
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex-1'>
                <Label htmlFor='startDate' className='flex items-center'>
                  <Calendar className='mr-2 h-4 w-4' /> End Date
                </Label>
                <Input
                  id='endDate'
                  type='date'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className='mt-3'
                  required
                />
              </div>
              <div className='flex-1'>
                <Label htmlFor='startDate' className='flex items-center'>
                  <Calendar className='mr-2 h-4 w-4' /> Start Date
                </Label>
                <Input
                  id='startDate'
                  type='date'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className='mt-3'
                  required
                />
              </div>
            </div>
            <Button
              type='submit'
              className='bg-green-600 hover:bg-green-700 text-white self-end mt-12'
            >
              Create Project
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
