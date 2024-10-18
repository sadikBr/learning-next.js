/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from 'react-hook-form';

type FormTextareaProps = {
  id: string;
  register: UseFormRegister<any>;
};

export const FormTextarea: React.FC<FormTextareaProps> = ({ id, register }) => (
  <textarea className='px-2 py-1' id={id} rows={10} {...register(id)} />
);
