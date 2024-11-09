import { z } from 'zod';

const stakeholderSchema = z.object({
  name: z.string().min(1, { message: 'Stakeholder name is required' }),
});

const milestoneSchema = z.object({
  name: z.string().min(1, { message: 'Milestone name is required' }),
  completed: z.boolean().default(false),
});

const projectSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(20, { message: 'Title must be at least 20 characters' }),
  description: z
    .string()
    .min(1, { message: 'Project description is required' }),
  department: z
    .string({ required_error: 'Department is required' })
    .min(5, { message: 'Department must be at least 5 characters' }),
  region: z.string().min(1, { message: 'Region is required' }),
  sector: z.string().min(1, { message: 'Sector is required' }),
  clientName: z
    .string({ required_error: 'Client Name is required' })
    .min(1, { message: 'Project client name is required' }),
  startDate: z.date({ required_error: 'Start Date is required' }),
  endDate: z.date().optional(),
  budget: z
    .number({ required_error: 'Budget is required' })
    .min(5000, { message: 'Budget must be at least 5000$' }),
  stakeholder: z
    .array(stakeholderSchema)
    .nonempty('At least one stakeholder is required'),
  milestone: z
    .array(milestoneSchema)
    .nonempty('At least one milestone is required'),
});

export const projectDefaultValues: FormData = {
  title: '', // Ensures at least 20 characters
  description: '',
  department: '', // At least 5 characters
  region: '',
  sector: '',
  clientName: '',
  startDate: new Date(),
  endDate: undefined, // Optional field
  budget: 0, // Minimum required budget
  stakeholder: [{ name: '' }],
  milestone: [{ name: '', completed: false }],
};

export type FormData = z.infer<typeof projectSchema>;

export default projectSchema;
