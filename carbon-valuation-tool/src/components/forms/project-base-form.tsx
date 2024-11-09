'use client';

import projectSchema, { FormData } from '@/zod-schemas/project';
import { zodResolver } from '@hookform/resolvers/zod';
import { Briefcase } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { FormDatePicker } from './form-components/form-date-picker';
import { FormInput } from './form-components/form-input';
import { FormMilestones } from './form-components/form-milestones';
import { FormSelect } from './form-components/form-select';
import { FormStakeholders } from './form-components/form-stakeholders';
import { FormTextarea } from './form-components/form-textarea';

interface BaseFormProps {
  defaultValues: FormData;
  handleSubmit: (data: FormData) => void;
  regions: string[];
  sectors: string[];
  submitButtonValue: string;
}

export default function ProjectBaseForm({
  defaultValues,
  handleSubmit,
  regions,
  sectors,
  submitButtonValue,
}: BaseFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='flex flex-col gap-6'
      >
        <FormInput
          name='title'
          label='Project Title'
          placeholder='Project Title'
          icon={Briefcase}
        />
        <div className='flex gap-4'>
          <FormSelect
            name='region'
            label='Region'
            options={regions}
            icon={Briefcase}
          />
          <FormSelect
            name='sector'
            label='Sector'
            options={sectors}
            icon={Briefcase}
          />
        </div>
        <div className='flex gap-4'>
          <FormInput
            name='department'
            label='Department'
            placeholder='Department'
            icon={Briefcase}
            className='flex-1'
          />
          <FormInput
            name='clientName'
            label='Client Name'
            placeholder='Client Name'
            icon={Briefcase}
            className='flex-1'
          />
          <FormInput
            type='number'
            name='budget'
            label='Budget'
            placeholder='Budget'
            icon={Briefcase}
            className='flex-1'
          />
        </div>
        <FormTextarea
          name='description'
          label='Description'
          placeholder='Project Description'
          icon={Briefcase}
          rows={8}
          className='resize-none'
        />
        <div className='flex gap-4'>
          <FormDatePicker
            name='startDate'
            label='Start Date'
            icon={Briefcase}
            className='w-full'
          />
          <FormDatePicker
            name='endDate'
            label='End Date'
            icon={Briefcase}
            className='w-full'
          />
        </div>
        <div className='flex gap-4'>
          <FormMilestones
            name='milestone'
            label='Milestones'
            className='flex-1'
          />
          <FormStakeholders
            name='stakeholder'
            label='Stakeholders'
            className='flex-1'
          />
        </div>
        <Button
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white self-end mt-12'
        >
          {submitButtonValue}
        </Button>
      </form>
    </Form>
  );
}
