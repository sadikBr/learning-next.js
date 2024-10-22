/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFieldArray, Control, UseFormRegister } from 'react-hook-form';
import { FormData } from '@/zod_schemas/project_schema';

interface MilestonesProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: any;
}

export const BinIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      className={className}
      fill='none'
      viewBox='0 0 430 430'
    >
      <g
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='18'
        strokeWidth='12'
      >
        <path
          stroke='red'
          d='M171.4 77.7C174.5 55.9 193.3 39 216 39c21.2 0 43.7 17.6 43.7 41.8M98.4 89.7c0 4.9.1 14.4.1 21.7l-.2 251.9c0 14.9 12.1 27 27 27h181c14.9 0 27-12.1 26.9-27l-.5-250.2c0-9.2 0-17.5-.1-22.6'
        />
        <path
          stroke='red'
          d='M157.3 156.8v155.9m58.6-155.9v155.9m58.5-155.9v155.9M76 83.6l278.8.8'
        />
      </g>
    </svg>
  );
};

export const PlusIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      className={`${className}`}
      fill='none'
      viewBox='0 0 430 430'
    >
      <g strokeWidth='12'>
        <path
          stroke='rgb(18 50 116)'
          strokeLinecap='round'
          d='M215 136v158m79-79H136'
        />
        <circle cx='215' cy='215' r='150.5' stroke='rgb(18 50 116)' />
      </g>
    </svg>
  );
};

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
          <PlusIcon className='hover:scale-105' />
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
              <BinIcon className='hover:scale-105' />
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
