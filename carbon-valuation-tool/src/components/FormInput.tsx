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

export default function FormInput({
  id,
  type,
  register,
}: {
  id: ID;
  type: string;
  register: Register;
}) {
  return (
    <input
      id={id}
      type={type}
      min={type === 'number' ? 100 : undefined}
      {...(type === 'date'
        ? { ...register(id, { valueAsDate: true }) }
        : type === 'number'
        ? { ...register(id, { valueAsNumber: true }) }
        : { ...register(id) })}
    />
  );
}
