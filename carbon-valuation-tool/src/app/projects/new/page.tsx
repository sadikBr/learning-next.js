'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputLabel from '@/components/InputLabel';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
// import { useRouter } from 'next/navigation';
import { createNewProject } from '@/server-actions/projects';
import { getAllRegions } from '@/server-actions/regions';
import { useEffect, useState } from 'react';
import { getAllSectors } from '@/server-actions/sectors';

const schema = z
  .object({
    title: z.string().min(1, { message: 'Project title is required' }),
    description: z
      .string()
      .min(1, { message: 'Project description is required' }),
    department: z
      .string()
      .min(1, { message: 'Project department is required' }),
    region: z
      .string()
      .min(1, { message: 'The region is required information' }),
    sector: z
      .string()
      .min(1, { message: 'The sector is a required information' }),
    clientName: z.string().min(1, { message: 'Please fill the client name' }),
    budget: z
      .number({ required_error: 'Please set a budget for your project' })
      .min(2000, {
        message:
          'You can not have a project with budget less than 2000 dollars',
      })
      .default(0),
    startDate: z
      .date({ required_error: 'Please select a start date' })
      .min(new Date(), {
        message: "You can't create a project with start date in the past",
      }),
    endDate: z.date().nullable().default(null),
  })
  .refine((data) => data?.endDate && data.endDate > data.startDate, {
    message: 'End date must be after start date',
    path: ['endDate'], // This is optional but useful for nested objects
  });

export type FormData = z.infer<typeof schema>;

type Region = {
  code: string;
  id: string;
  name: string;
};

type Sector = {
  id: string;
  name: string;
  scopeId: string;
};

export default function NewProjectPage() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);

  useEffect(() => {
    async function getRegionsAndSectors() {
      const regions = await getAllRegions();
      const sectors = await getAllSectors();

      setRegions(regions);
      setSectors(sectors);
    }

    getRegionsAndSectors();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  // const router = useRouter();

  return (
    <div className='container'>
      <form onSubmit={handleSubmit((d) => createNewProject(d))}>
        <InputLabel
          value='Title'
          htmlFor='title'
          errorMessage={errors.title?.message && errors.title?.message}
        >
          <FormInput id='title' type='text' register={register} />
        </InputLabel>
        <InputLabel
          value='Department'
          htmlFor='department'
          errorMessage={
            errors.department?.message && errors.department?.message
          }
        >
          <FormInput id='department' type='text' register={register} />
        </InputLabel>
        <InputLabel
          value='Region'
          htmlFor='region'
          errorMessage={errors.region?.message && errors.region?.message}
        >
          <FormSelect
            id='region'
            defaultText='Select the region'
            register={register}
            values={regions}
          />
        </InputLabel>
        <InputLabel
          value='Sector'
          htmlFor='sector'
          errorMessage={errors.sector?.message && errors.sector?.message}
        >
          <FormSelect
            id='sector'
            defaultText='Select the sector of Activity'
            register={register}
            values={sectors}
          />
        </InputLabel>
        <InputLabel
          value='Client Name'
          htmlFor='clientName'
          errorMessage={
            errors.clientName?.message && errors.clientName?.message
          }
        >
          <FormInput id='clientName' type='text' register={register} />
        </InputLabel>
        <InputLabel
          value='Start Date'
          htmlFor='startDate'
          errorMessage={errors.startDate?.message && errors.startDate?.message}
        >
          <FormInput id='startDate' type='date' register={register} />
        </InputLabel>
        <InputLabel
          value='End Date'
          htmlFor='endDate'
          errorMessage={errors.endDate?.message && errors.endDate?.message}
        >
          <FormInput id='endDate' type='date' register={register} />
        </InputLabel>
        <InputLabel
          value='Budget'
          htmlFor='budget'
          errorMessage={errors.budget?.message && errors.budget?.message}
        >
          <FormInput id='budget' type='number' register={register} />
        </InputLabel>
        <InputLabel
          value='Description'
          htmlFor='description'
          errorMessage={
            errors.description?.message && errors.description?.message
          }
        >
          <FormInput id='description' type='text' register={register} />
        </InputLabel>
        <input type='submit' value='Create' />
      </form>
    </div>
  );
}
