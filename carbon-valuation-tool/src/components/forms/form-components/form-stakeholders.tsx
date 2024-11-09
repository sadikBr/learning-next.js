import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserIcon, Plus, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormStakeholdersProps {
  name: string;
  label: string;
  className?: string;
}

export function FormStakeholders({
  name,
  label,
  className,
}: FormStakeholdersProps) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className={cn('space-y-4', className)}>
      <div className='flex justify-between'>
        <FormLabel className='flex items-center'>
          <UserIcon className='mr-2 h-4 w-4' /> {label}
        </FormLabel>
        <Button
          type='button'
          variant='outline'
          size='sm'
          onClick={() => append({ name: '' })}
        >
          <Plus className='mr-2 h-4 w-4' /> Add {label}
        </Button>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className='flex gap-2'>
          <FormField
            control={control}
            name={`${name}.${index}.name`}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input placeholder={`${label} name`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className='group'
            type='button'
            variant='ghost'
            size='sm'
            onClick={() => remove(index)}
          >
            <Trash className='h-4 w-4 group-hover:text-red-500 transition' />
          </Button>
        </div>
      ))}
    </div>
  );
}
