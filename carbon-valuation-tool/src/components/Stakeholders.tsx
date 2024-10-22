/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFieldArray, Control, UseFormRegister } from 'react-hook-form';
import { FormData } from '@/zod_schemas/project_schema';
import { BinIcon, PlusIcon } from './Milestones';

interface StakeholdersProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: any;
}

const Stakeholders: React.FC<StakeholdersProps> = ({
  control,
  register,
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'stakeholder',
  });

  return (
    <div className='flex-1 self-start flex flex-col gap-1'>
      <label className='font-semibold uppercase text-light-primary dark:text-dark-text-primary flex items-center gap-2 mb-4'>
        Stakeholders{' '}
        <button type='button' onClick={() => append({ name: '' })}>
          <PlusIcon className='hover:scale-105' />
        </button>
      </label>
      {fields.map((field, index) => (
        <div className='w-full flex flex-col gap-1' key={field.id}>
          <div className='flex items-center gap-1'>
            <input
              className='h-10 w-full px-2 py-1 border border-light-primary dark:border-dark-text-primary dark:text-dark-text-secondary outline-none rounded-md bg-transparent'
              {...register(`stakeholder.${index}.name`)}
              placeholder='Stakeholder name'
            />
            <button type='button' onClick={() => remove(index)}>
              <BinIcon className='hover:scale-105' />
            </button>
          </div>
          {errors.stakeholder?.[index].name && (
            <p className='text-red-500 text-xs font-light'>
              {errors.stakeholder[index].name.message}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stakeholders;
