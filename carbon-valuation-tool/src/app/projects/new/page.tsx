'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  title: z.string().min(1, { message: 'Project title is required' }),
  description: z
    .string()
    .min(1, { message: 'Project description is required' }),
  department: z.string().min(1, { message: 'Project department is required' }),
  region: z.string().min(1, { message: 'The region is required information' }),
  sector: z
    .string()
    .min(1, { message: 'The sector is a required information' }),
  clientName: z.string().min(1, { message: 'Please fill the client name' }),
  startDate: z
    .date({ required_error: 'Please select a start date' })
    .min(new Date(), {
      message: "You can't create a project with start date in the past",
    }),
  endDate: z.date(),
});

export default function NewProjectPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div className='container'>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <div>
          <input type='text' {...register('title')} />
          <p>{errors.title?.message && errors.title?.message}</p>
        </div>
        <input type='submit' value='Create' />
      </form>
    </div>
  );
}
