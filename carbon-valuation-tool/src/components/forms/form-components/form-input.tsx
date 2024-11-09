import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LucideIcon } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: LucideIcon;
}

export function FormInput({
  name,
  label,
  icon: Icon,
  ...props
}: FormInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={props.className}>
          <FormLabel className='flex items-center'>
            {Icon && <Icon className='mr-2 h-4 w-4' />}
            {label}
          </FormLabel>
          <FormControl>
            {props.type === 'number' ? (
              <Input
                {...field}
                {...props}
                onChange={(event) => field.onChange(+event.target.value)}
              />
            ) : (
              <Input {...field} {...props} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
