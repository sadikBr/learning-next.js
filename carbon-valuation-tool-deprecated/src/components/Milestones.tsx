/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFieldArray, Control, UseFormRegister } from 'react-hook-form';
import { FormData } from '@/zod_schemas/project_schema';
import { TrashIcon, PlusCircleIcon } from 'lucide-react';

interface MilestonesProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: any;
}

const Milestones: React.FC<MilestonesProps> = ({
  control,
  register,
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'milestone',
  });

  return (
    <div className='flex-1 self-start flex flex-col gap-1'>
      <label className='font-semibold uppercase text-light-primary dark:text-dark-text-primary flex items-center gap-2 mb-4'>
        Milestones{' '}
        <button
          type='button'
          onClick={() => append({ name: '', completed: false })}
        >
          <PlusCircleIcon className='hover:scale-105' />
        </button>
      </label>
      {fields.map((field, index) => (
        <div className='w-full flex flex-col gap-1' key={field.id}>
          <div className='flex item-center gap-1'>
            <input
              className='flex-1 px-2 py-1 border border-light-primary dark:border-dark-text-primary dark:text-dark-text-secondary outline-none rounded-md bg-transparent'
              {...register(`milestone.${index}.name`)}
              placeholder='Milestone name'
            />
            <input
              className='w-10 h-10 dark:accent-dark-background-secondary'
              type='checkbox'
              {...register(`milestone.${index}.completed`)}
            />
            <button type='button' onClick={() => remove(index)}>
              <TrashIcon color='red' size={36} className='hover:scale-105' />
            </button>
          </div>
          {errors.milestone?.[index]?.name && (
            <p className='text-red-500 text-xs font-light'>
              {errors.milestone[index].name.message}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Milestones;
