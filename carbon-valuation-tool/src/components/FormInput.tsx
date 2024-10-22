/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  id: string;
  type: string;
  register: UseFormRegister<any>;
}

const FormInput: React.FC<FormInputProps> = ({ id, type, register }) => {
  return (
    <input
      className='flex-1 px-2 py-1 border border-light-primary dark:border-dark-text-primary dark:text-dark-text-secondary outline-none rounded-md bg-transparent'
      id={id}
      type={type}
      {...(type === 'date'
        ? { ...register(id, { valueAsDate: true }) }
        : type === 'number'
        ? { ...register(id, { valueAsNumber: true }) }
        : { ...register(id) })}
    />
  );
};

export default FormInput;
