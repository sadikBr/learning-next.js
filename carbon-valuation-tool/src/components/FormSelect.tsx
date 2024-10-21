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
    <select className='flex-1 px-2 py-1' id={id} {...register(id)}>
      <option value='' disabled selected>
        {defaultText}
      </option>
      {values.map((value, index) => (
        <option key={index} value={value.name}>
          {value.name}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
