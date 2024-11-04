/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Region, Sector } from '@/types';

interface FormSelectProps {
  id: string;
  register: UseFormRegister<any>;
  values: Region[] | Sector[];
  defaultText: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  register,
  values,
  defaultText,
}) => {
  return (
    <select
      className='flex-1 px-2 py-1 border border-light-primary dark:border-dark-text-primary dark:text-dark-text-secondary outline-none rounded-md bg-transparent'
      id={id}
      {...register(id)}
    >
      <option
        className='dark:bg-dark-background-primary'
        value=''
        disabled
        selected
      >
        {defaultText}
      </option>
      {values.map((value, index) => (
        <option
          key={index}
          value={value.name}
          className='dark:bg-dark-background-primary'
        >
          {value.name}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
