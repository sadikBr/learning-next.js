import * as z from 'zod';

export const projectSchema = z
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
      .number({ invalid_type_error: 'Please set a budget for your project' })
      .min(2000, {
        message:
          'You can not have a project with budget less than 2000 dollars',
      })
      .default(0),
    startDate: z
      .date({ invalid_type_error: 'Please select a start date' })
      .min(new Date(), {
        message: "You can't create a project with start date in the past",
      }),
    endDate: z.date().nullable().default(null),
    milestone: z
      .array(
        z.object({
          name: z.string().min(1, { message: 'Milestone name is required' }),
          completed: z.boolean().default(false),
        })
      )
      .default([]),
    stakeholder: z
      .array(
        z.object({
          name: z.string().min(1, { message: 'Stakeholder name is required' }),
        })
      )
      .default([]),
  })
  .refine((data) => data?.endDate && data.endDate > data.startDate, {
    message: 'End date must be after start date',
    path: ['endDate'],
  });

export type FormData = z.infer<typeof projectSchema>;
