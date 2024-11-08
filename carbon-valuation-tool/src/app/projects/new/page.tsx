'use client';

import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Building2, Calendar, PlusCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  // TODO: Schema to be defined later
});

export default function ProjectCreate() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

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
          <Form {...form}>
            <form className='flex flex-col gap-6'>
              <div>
                <Label htmlFor='projectTitle' className='flex items-center'>
                  <Briefcase className='mr-2 h-4 w-4' /> Project Title
                </Label>
                <Input
                  id='projectTitle'
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
                  <Select>
                    <SelectTrigger id='sector' className='mt-3'>
                      <SelectValue placeholder='Select a sector' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='energy'>Energy</SelectItem>
                      <SelectItem value='manufacturing'>
                        Manufacturing
                      </SelectItem>
                      <SelectItem value='transport'>Transport</SelectItem>
                      <SelectItem value='agriculture'>Agriculture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex-1'>
                  <Label htmlFor='region' className='flex items-center'>
                    <Building2 className='mr-2 h-4 w-4' /> Region
                  </Label>
                  <Select>
                    <SelectTrigger id='region' className='mt-3'>
                      <SelectValue placeholder='Select a region' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Morocco'>Morocco</SelectItem>
                      <SelectItem value='France'>France</SelectItem>
                      <SelectItem value='United States'>
                        United States
                      </SelectItem>
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
                  <Input id='endDate' type='date' className='mt-3' required />
                </div>
                <div className='flex-1'>
                  <Label htmlFor='startDate' className='flex items-center'>
                    <Calendar className='mr-2 h-4 w-4' /> Start Date
                  </Label>
                  <Input id='startDate' type='date' className='mt-3' required />
                </div>
              </div>
              <Button
                type='submit'
                className='bg-green-600 hover:bg-green-700 text-white self-end mt-12'
              >
                Create Project
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
}
