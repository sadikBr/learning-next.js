/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormData } from '@/app/projects/new/page';
import { UseFormRegister } from 'react-hook-form';

type Register = UseFormRegister<FormData>;
type ID =
  | 'title'
  | 'description'
  | 'department'
  | 'region'
  | 'sector'
  | 'clientName'
  | 'startDate'
  | 'endDate'
  | 'budget';

export default function FormSelect({
  id,
  defaultText,
  register,
  values,
}: {
  id: ID;
  defaultText: string;
  register: Register;
  values: any[];
}) {
  return (
    <select id={id} {...register(id)}>
      <option value=''>{defaultText}</option>
      {values.length !== 0 &&
        values.map((value) => (
          <option key={value.id} value={value.name}>
            {value.name}
          </option>
        ))}
    </select>
  );
}
